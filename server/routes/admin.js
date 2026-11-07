const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { db, UPLOADS_DIR } = require('../db');
const { authenticateToken } = require('../middleware/auth');
const upload = require('../middleware/upload');

// Require authentication for all admin routes
router.use(authenticateToken);

// 1. DASHBOARD OVERVIEW (Real database counts - PRD 6.2)
router.get('/overview', (req, res) => {
  const testimonials = db.get('testimonials') || [];
  const proofs = db.get('earning_proofs') || [];
  const documents = db.get('company_documents') || [];
  const training = db.get('training_media') || [];
  const faqs = db.get('faqs') || [];
  const enquiries = db.get('enquiries') || [];
  const logs = db.get('audit_logs') || [];

  const counts = {
    total_enquiries: enquiries.length,
    new_enquiries: enquiries.filter(e => e.status === 'New').length,
    published_testimonials: testimonials.filter(t => t.is_published !== false).length,
    total_testimonials: testimonials.length,
    approved_proofs: proofs.filter(p => p.status === 'Approved for Publication').length,
    pending_proofs: proofs.filter(p => p.status === 'Pending Review' || p.status === 'Draft').length,
    total_proofs: proofs.length,
    company_documents: documents.length,
    training_media: training.length,
    faqs_count: faqs.length
  };

  const recent_enquiries = enquiries.slice(0, 6);
  const recent_logs = logs.slice(0, 8);

  res.json({
    success: true,
    data: {
      counts,
      recent_enquiries,
      recent_logs
    }
  });
});

// 2. WEBSITE SETTINGS (PRD 6.6)
router.get('/settings', (req, res) => {
  res.json({ success: true, data: db.get('site_settings') || {} });
});

router.put('/settings', (req, res) => {
  const updatedSettings = req.body;
  db.set('site_settings', updatedSettings);
  db.addLog(req.user.email, 'UPDATE_SETTINGS', 'site_settings', 'Updated global brand & contact settings');
  res.json({ success: true, message: 'Website settings updated successfully.', data: updatedSettings });
});

// 3. HERO SECTION (PRD 4.2)
router.get('/hero', (req, res) => {
  res.json({ success: true, data: db.get('hero') || {} });
});

router.put('/hero', (req, res) => {
  const updatedHero = req.body;
  db.set('hero', updatedHero);
  db.addLog(req.user.email, 'UPDATE_HERO', 'hero', 'Updated hero section content & feature cards');
  res.json({ success: true, message: 'Hero section updated successfully.', data: updatedHero });
});

// 4. ABOUT ME PROFILE (PRD 4.3)
router.get('/about', (req, res) => {
  res.json({ success: true, data: db.get('leader_profile') || {} });
});

router.put('/about', (req, res) => {
  const updatedAbout = req.body;
  db.set('leader_profile', updatedAbout);
  db.addLog(req.user.email, 'UPDATE_ABOUT', 'leader_profile', 'Updated leader profile & stats');
  res.json({ success: true, message: 'Leader profile updated successfully.', data: updatedAbout });
});

// 5. COMPANY PROFILE (PRD 4.4)
router.get('/company', (req, res) => {
  res.json({ success: true, data: db.get('company_profile') || {} });
});

router.put('/company', (req, res) => {
  const updatedCompany = req.body;
  db.set('company_profile', updatedCompany);
  db.addLog(req.user.email, 'UPDATE_COMPANY', 'company_profile', 'Updated company profile and verification data');
  res.json({ success: true, message: 'Company profile updated successfully.', data: updatedCompany });
});

// 6. BUSINESS OPPORTUNITY PILLARS (PRD 4.5)
router.get('/opportunities', (req, res) => {
  res.json({ success: true, data: db.get('business_opportunities') || [] });
});

router.post('/opportunities', (req, res) => {
  const items = db.get('business_opportunities') || [];
  const newItem = {
    id: `opp_${Date.now()}`,
    title: req.body.title || 'New Pillar',
    subtitle: req.body.subtitle || '',
    description: req.body.description || '',
    points: req.body.points || [],
    icon: req.body.icon || 'GraduationCap',
    order_index: items.length + 1
  };
  items.push(newItem);
  db.set('business_opportunities', items);
  db.addLog(req.user.email, 'CREATE_OPPORTUNITY', 'business_opportunities', `Added opportunity pillar: ${newItem.title}`);
  res.json({ success: true, data: newItem });
});

router.put('/opportunities/:id', (req, res) => {
  const items = db.get('business_opportunities') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Opportunity card not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('business_opportunities', items);
  db.addLog(req.user.email, 'UPDATE_OPPORTUNITY', 'business_opportunities', `Updated opportunity pillar ${req.params.id}`);
  res.json({ success: true, data: items[idx] });
});

router.delete('/opportunities/:id', (req, res) => {
  let items = db.get('business_opportunities') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('business_opportunities', items);
  db.addLog(req.user.email, 'DELETE_OPPORTUNITY', 'business_opportunities', `Deleted opportunity pillar ${req.params.id}`);
  res.json({ success: true, message: 'Opportunity card removed.' });
});

// 7. HOW IT WORKS (PRD 4.6)
router.get('/how-it-works', (req, res) => {
  res.json({ success: true, data: db.get('how_it_works') || [] });
});

router.put('/how-it-works', (req, res) => {
  const steps = req.body;
  db.set('how_it_works', steps);
  db.addLog(req.user.email, 'UPDATE_HOW_IT_WORKS', 'how_it_works', 'Updated process roadmap steps');
  res.json({ success: true, message: 'How It Works steps saved.', data: steps });
});

// 8. TEAM MEMBERS (PRD 4.7)
router.get('/team-members', (req, res) => {
  res.json({ success: true, data: db.get('team_members') || [] });
});

router.post('/team-members', (req, res) => {
  const items = db.get('team_members') || [];
  const newItem = {
    id: `tm_${Date.now()}`,
    name: req.body.name || 'Associate',
    role: req.body.role || 'Team Member',
    city: req.body.city || '',
    avatar_url: req.body.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: req.body.quote || '',
    period: req.body.period || 'Active Member',
    order_index: items.length + 1
  };
  items.push(newItem);
  db.set('team_members', items);
  db.addLog(req.user.email, 'CREATE_TEAM_MEMBER', 'team_members', `Added member profile ${newItem.name}`);
  res.json({ success: true, data: newItem });
});

router.put('/team-members/:id', (req, res) => {
  const items = db.get('team_members') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Team member not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('team_members', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/team-members/:id', (req, res) => {
  let items = db.get('team_members') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('team_members', items);
  res.json({ success: true, message: 'Team member removed.' });
});

// 9. TESTIMONIALS & VIDEO REVIEWS (PRD 4.7)
router.get('/testimonials', (req, res) => {
  res.json({ success: true, data: db.get('testimonials') || [] });
});

router.post('/testimonials', (req, res) => {
  const items = db.get('testimonials') || [];
  const newItem = {
    id: `test_${Date.now()}`,
    name: req.body.name || 'Member',
    role: req.body.role || 'Associate',
    city: req.body.city || '',
    type: req.body.type || 'text',
    video_url: req.body.video_url || '',
    thumbnail_url: req.body.thumbnail_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    content: req.body.content || '',
    rating: Number(req.body.rating) || 5,
    is_featured: Boolean(req.body.is_featured),
    is_published: req.body.is_published !== undefined ? Boolean(req.body.is_published) : true,
    order_index: items.length + 1
  };
  items.unshift(newItem);
  db.set('testimonials', items);
  db.addLog(req.user.email, 'CREATE_TESTIMONIAL', 'testimonials', `Added testimonial from ${newItem.name}`);
  res.json({ success: true, data: newItem });
});

router.put('/testimonials/:id', (req, res) => {
  const items = db.get('testimonials') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Testimonial not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('testimonials', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/testimonials/:id', (req, res) => {
  let items = db.get('testimonials') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('testimonials', items);
  res.json({ success: true, message: 'Testimonial deleted.' });
});

// 10. EARNING PROOFS (PRD 4.8 & Approval Workflow)
router.get('/earning-proofs', (req, res) => {
  res.json({ success: true, data: db.get('earning_proofs') || [] });
});

router.post('/earning-proofs', (req, res) => {
  const items = db.get('earning_proofs') || [];
  const newProof = {
    id: `proof_${Date.now()}`,
    member_name: req.body.member_name || 'Associate',
    amount: req.body.amount || '₹0',
    period: req.body.period || 'monthly',
    date: req.body.date || 'Recent',
    category: req.body.category || 'Commission Settlement',
    proof_image_url: req.body.proof_image_url || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    redacted_info: req.body.redacted_info || 'Bank Ref: XXXXXX • Redacted PII',
    status: req.body.status || 'Draft', // Draft, Pending Review, Approved for Publication, Rejected, Archived
    notes: req.body.notes || ''
  };
  items.unshift(newProof);
  db.set('earning_proofs', items);
  db.addLog(req.user.email, 'CREATE_EARNING_PROOF', 'earning_proofs', `Added earning record ${newProof.amount} (${newProof.status})`);
  res.json({ success: true, data: newProof });
});

router.put('/earning-proofs/:id', (req, res) => {
  const items = db.get('earning_proofs') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Earning proof not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('earning_proofs', items);
  db.addLog(req.user.email, 'UPDATE_EARNING_PROOF', 'earning_proofs', `Status set to ${items[idx].status} for ${req.params.id}`);
  res.json({ success: true, data: items[idx] });
});

router.delete('/earning-proofs/:id', (req, res) => {
  let items = db.get('earning_proofs') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('earning_proofs', items);
  res.json({ success: true, message: 'Earning proof deleted.' });
});

// 11. COMPANY DOCUMENTS (PRD 4.9)
router.get('/documents', (req, res) => {
  res.json({ success: true, data: db.get('company_documents') || [] });
});

router.post('/documents', (req, res) => {
  const items = db.get('company_documents') || [];
  const newDoc = {
    id: `doc_${Date.now()}`,
    title: req.body.title || 'Official Document',
    document_number: req.body.document_number || '',
    issuing_authority: req.body.issuing_authority || '',
    category: req.body.category || 'General',
    issue_date: req.body.issue_date || '',
    expiry_date: req.body.expiry_date || 'Perpetual',
    file_url: req.body.file_url || 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    verification_url: req.body.verification_url || '',
    is_public: req.body.is_public !== undefined ? Boolean(req.body.is_public) : true,
    status: req.body.status || 'Active'
  };
  items.unshift(newDoc);
  db.set('company_documents', items);
  db.addLog(req.user.email, 'CREATE_DOCUMENT', 'company_documents', `Added document: ${newDoc.title}`);
  res.json({ success: true, data: newDoc });
});

router.put('/documents/:id', (req, res) => {
  const items = db.get('company_documents') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Document not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('company_documents', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/documents/:id', (req, res) => {
  let items = db.get('company_documents') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('company_documents', items);
  res.json({ success: true, message: 'Document deleted.' });
});

// 12. TRAINING MEDIA (PRD 4.10)
router.get('/training-media', (req, res) => {
  res.json({ success: true, data: db.get('training_media') || [] });
});

router.post('/training-media', (req, res) => {
  const items = db.get('training_media') || [];
  const newItem = {
    id: `med_${Date.now()}`,
    title: req.body.title || 'Training Event',
    media_type: req.body.media_type || 'image',
    category: req.body.category || 'Workshop',
    file_url: req.body.file_url || '',
    date: req.body.date || 'Recent',
    caption: req.body.caption || ''
  };
  items.unshift(newItem);
  db.set('training_media', items);
  res.json({ success: true, data: newItem });
});

router.put('/training-media/:id', (req, res) => {
  const items = db.get('training_media') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Training media item not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('training_media', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/training-media/:id', (req, res) => {
  let items = db.get('training_media') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('training_media', items);
  res.json({ success: true, message: 'Training media item deleted.' });
});

// 13. EVENTS & LIVE TRAINING SCHEDULE (PRD 5.4)
router.get('/events', (req, res) => {
  res.json({ success: true, data: db.get('events') || [] });
});

router.post('/events', (req, res) => {
  const items = db.get('events') || [];
  const newEvent = {
    id: `ev_${Date.now()}`,
    title: req.body.title || 'Live Webinar',
    date_time: req.body.date_time || '',
    platform: req.body.platform || 'Zoom Interactive',
    description: req.body.description || '',
    speaker: req.body.speaker || 'Jamin Patel',
    status: req.body.status || 'Upcoming',
    registration_whatsapp_text: req.body.registration_whatsapp_text || ''
  };
  items.unshift(newEvent);
  db.set('events', items);
  res.json({ success: true, data: newEvent });
});

router.put('/events/:id', (req, res) => {
  const items = db.get('events') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Event not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('events', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/events/:id', (req, res) => {
  let items = db.get('events') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('events', items);
  res.json({ success: true, message: 'Event removed.' });
});

// 14. FAQS (PRD 4.12)
router.get('/faqs', (req, res) => {
  res.json({
    success: true,
    data: {
      faqs: db.get('faqs') || [],
      categories: db.get('faq_categories') || []
    }
  });
});

router.post('/faqs', (req, res) => {
  const items = db.get('faqs') || [];
  const newFaq = {
    id: `faq_${Date.now()}`,
    category: req.body.category || 'About the Work',
    question: req.body.question || 'New Question?',
    answer: req.body.answer || '',
    order_index: items.length + 1,
    is_published: req.body.is_published !== undefined ? Boolean(req.body.is_published) : true
  };
  items.push(newFaq);
  db.set('faqs', items);
  db.addLog(req.user.email, 'CREATE_FAQ', 'faqs', `Added FAQ: ${newFaq.question}`);
  res.json({ success: true, data: newFaq });
});

router.put('/faqs/:id', (req, res) => {
  const items = db.get('faqs') || [];
  const idx = items.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'FAQ not found.' });

  items[idx] = { ...items[idx], ...req.body };
  db.set('faqs', items);
  res.json({ success: true, data: items[idx] });
});

router.delete('/faqs/:id', (req, res) => {
  let items = db.get('faqs') || [];
  items = items.filter(i => i.id !== req.params.id);
  db.set('faqs', items);
  res.json({ success: true, message: 'FAQ deleted.' });
});

// 15. ENQUIRIES / LEADS (PRD 7.2)
router.get('/enquiries', (req, res) => {
  const enquiries = db.get('enquiries') || [];
  const notes = db.get('enquiry_notes') || [];
  const statusFilter = req.query.status;

  let filtered = enquiries;
  if (statusFilter && statusFilter !== 'All') {
    filtered = filtered.filter(e => e.status === statusFilter);
  }

  // Attach notes to each enquiry
  const enriched = filtered.map(e => ({
    ...e,
    notes: notes.filter(n => n.enquiry_id === e.enquiry_id)
  }));

  res.json({ success: true, data: enriched });
});

router.put('/enquiries/:id/status', (req, res) => {
  const { status } = req.body;
  const enquiries = db.get('enquiries') || [];
  const idx = enquiries.findIndex(e => e.id === req.params.id || e.enquiry_id === req.params.id);

  if (idx === -1) return res.status(404).json({ error: 'Enquiry lead not found.' });

  enquiries[idx].status = status;
  db.set('enquiries', enquiries);
  db.addLog(req.user.email, 'UPDATE_LEAD_STATUS', 'enquiries', `Lead ${enquiries[idx].enquiry_id} status updated to ${status}`);
  res.json({ success: true, data: enquiries[idx] });
});

router.post('/enquiries/:id/notes', (req, res) => {
  const { note } = req.body;
  if (!note || !note.trim()) return res.status(400).json({ error: 'Note text is required.' });

  const enquiries = db.get('enquiries') || [];
  const lead = enquiries.find(e => e.id === req.params.id || e.enquiry_id === req.params.id);
  if (!lead) return res.status(404).json({ error: 'Enquiry lead not found.' });

  const notes = db.get('enquiry_notes') || [];
  const newNote = {
    id: `note_${Date.now()}`,
    enquiry_id: lead.enquiry_id,
    author: req.user.name || req.user.email,
    note: note.trim(),
    created_at: new Date().toISOString()
  };
  notes.unshift(newNote);
  db.set('enquiry_notes', notes);
  res.json({ success: true, data: newNote });
});

router.delete('/enquiries/:id', (req, res) => {
  let enquiries = db.get('enquiries') || [];
  enquiries = enquiries.filter(e => e.id !== req.params.id && e.enquiry_id !== req.params.id);
  db.set('enquiries', enquiries);
  res.json({ success: true, message: 'Enquiry lead deleted.' });
});

// CSV Export for Leads (PRD 7.2)
router.get('/enquiries/export/csv', (req, res) => {
  const enquiries = db.get('enquiries') || [];

  const headers = ['Enquiry ID', 'Full Name', 'Mobile', 'City', 'Email', 'Area of Interest', 'Preferred Contact', 'Status', 'Date', 'Message'];
  const rows = enquiries.map(e => [
    `"${e.enquiry_id || ''}"`,
    `"${(e.full_name || '').replace(/"/g, '""')}"`,
    `"${(e.mobile || '').replace(/"/g, '""')}"`,
    `"${(e.city || '').replace(/"/g, '""')}"`,
    `"${(e.email || '').replace(/"/g, '""')}"`,
    `"${(e.area_of_interest || '').replace(/"/g, '""')}"`,
    `"${(e.preferred_contact || '').replace(/"/g, '""')}"`,
    `"${e.status || ''}"`,
    `"${e.created_at || ''}"`,
    `"${(e.message || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="team_jamin_leads_${Date.now()}.csv"`);
  res.send(csvContent);
});

// 16. MEDIA UPLOAD & LIBRARY (PRD 6.5)
router.get('/media', (req, res) => {
  res.json({ success: true, data: db.get('media') || [] });
});

router.post('/media/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded or file extension not permitted.' });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  const mediaList = db.get('media') || [];
  const newMedia = {
    id: `med_${Date.now()}`,
    filename: req.file.filename,
    original_name: req.file.originalname,
    mime_type: req.file.mimetype,
    file_size: req.file.size,
    url: fileUrl,
    alt_text: req.body.alt_text || req.file.originalname,
    created_at: new Date().toISOString()
  };

  mediaList.unshift(newMedia);
  db.set('media', mediaList);
  db.addLog(req.user.email, 'UPLOAD_MEDIA', 'media', `Uploaded file ${req.file.originalname} (${(req.file.size / 1024).toFixed(1)} KB)`);

  res.status(201).json({
    success: true,
    message: 'File uploaded successfully',
    data: newMedia
  });
});

router.delete('/media/:id', (req, res) => {
  let mediaList = db.get('media') || [];
  const item = mediaList.find(m => m.id === req.params.id);

  if (item && item.filename) {
    const filePath = path.join(UPLOADS_DIR, item.filename);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error('Error removing file:', e);
      }
    }
  }

  mediaList = mediaList.filter(m => m.id !== req.params.id);
  db.set('media', mediaList);
  res.json({ success: true, message: 'Media asset deleted.' });
});

// 17. BACKUP & EXPORT (PRD 6.3)
router.get('/backup/export', (req, res) => {
  const fullData = db.data;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', `attachment; filename="team_jamin_backup_${Date.now()}.json"`);
  res.send(JSON.stringify(fullData, null, 2));
});

// 18. AUDIT LOGS (PRD 10)
router.get('/audit-logs', (req, res) => {
  res.json({ success: true, data: db.get('audit_logs') || [] });
});

module.exports = router;
