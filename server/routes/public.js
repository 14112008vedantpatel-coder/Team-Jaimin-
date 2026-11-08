const express = require('express');
const router = express.Router();
const { db } = require('../db');

// GET /api/public/data - Get all published site content
router.get('/data', (req, res) => {
  try {
    const site_settings = db.get('site_settings') || {};
    const hero = db.get('hero') || {};
    const leader_profile = db.get('leader_profile') || {};
    const company_profile = db.get('company_profile') || {};
    const business_opportunities = db.get('business_opportunities') || [];
    const how_it_works = db.get('how_it_works') || [];
    const team_members = db.get('team_members') || [];

    // Filter published only
    const rawTestimonials = db.get('testimonials') || [];
    const testimonials = rawTestimonials.filter(t => t.is_published !== false);

    // Filter approved earning proofs only (PRD Section 4.8 & 13.1)
    const rawProofs = db.get('earning_proofs') || [];
    const earning_proofs = rawProofs.filter(p => p.status === 'Approved for Publication');

    // Filter public documents only (PRD Section 4.9)
    const rawDocs = db.get('company_documents') || [];
    const company_documents = rawDocs.filter(d => d.is_public !== false);

    const training_media = db.get('training_media') || [];
    const rawEvents = db.get('events') || [];
    const events = rawEvents.filter(e => e.status !== 'Past');

    const rawFaqs = db.get('faqs') || [];
    const faqs = rawFaqs.filter(f => f.is_published !== false);
    const faq_categories = db.get('faq_categories') || [];

    res.json({
      success: true,
      data: {
        site_settings,
        hero,
        leader_profile,
        company_profile,
        business_opportunities,
        how_it_works,
        team_members,
        testimonials,
        earning_proofs,
        company_documents,
        training_media,
        events,
        faqs,
        faq_categories
      }
    });
  } catch (err) {
    console.error('Error fetching public site data:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve website data.' });
  }
});

// POST /api/public/enquiry - Visitor submits lead enquiry
router.post('/enquiry', (req, res) => {
  try {
    const {
      full_name,
      mobile,
      city,
      email,
      area_of_interest,
      preferred_contact,
      message,
      consent_given
    } = req.body;

    if (!full_name || !full_name.trim()) {
      return res.status(400).json({ error: 'Please enter your full name.' });
    }
    if (!mobile || !mobile.trim() || mobile.replace(/\D/g, '').length < 10) {
      return res.status(400).json({ error: 'Please provide a valid 10-digit mobile number.' });
    }
    if (!city || !city.trim()) {
      return res.status(400).json({ error: 'Please enter your current city.' });
    }
    if (!consent_given) {
      return res.status(400).json({ error: 'Consent to contact under the Digital Personal Data Protection Act (DPDP), 2023 is required.' });
    }

    const cleanMobile = mobile.trim();
    const cleanEmail = email ? email.trim() : '';
    const cleanInterest = area_of_interest || 'General Business Orientation';
    const cleanContactMethod = preferred_contact || 'WhatsApp';
    const cleanMessage = message ? message.trim() : '';

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const enquiryId = `ENQ-${new Date().getFullYear()}-${randomNum}`;

    const newEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      enquiry_id: enquiryId,
      full_name: full_name.trim(),
      mobile: cleanMobile,
      city: city.trim(),
      email: cleanEmail,
      area_of_interest: cleanInterest,
      preferred_contact: cleanContactMethod,
      message: cleanMessage,
      consent_given: true,
      consent_timestamp: new Date().toISOString(),
      status: 'New',
      created_at: new Date().toISOString()
    };

    const enquiries = db.get('enquiries') || [];
    enquiries.unshift(newEnquiry);
    db.set('enquiries', enquiries);

    // Construct WhatsApp clickthrough link with pre-filled message
    const siteSettings = db.get('site_settings') || {};
    const rawPhone = (siteSettings.contact && siteSettings.contact.whatsapp_number) || '916355422503';
    const waNumber = rawPhone.replace(/\D/g, '');

    const waText = encodeURIComponent(
      `Hello Jamin! My name is ${full_name.trim()} from ${city.trim()}.\n` +
      `I have submitted an inquiry (Ref: ${enquiryId}).\n` +
      `Interest: ${cleanInterest}\n` +
      `Message: ${cleanMessage ? cleanMessage : 'I want to learn about the direct selling opportunity & mentorship.'}`
    );

    const whatsapp_redirect_url = `https://wa.me/${waNumber}?text=${waText}`;

    db.addLog('visitor', 'ENQUIRY_SUBMITTED', 'enquiries', `New lead received from ${full_name.trim()} (${city.trim()}) [${enquiryId}]`);

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been received successfully! A representative will connect with you shortly.',
      enquiry_id: enquiryId,
      whatsapp_redirect_url
    });
  } catch (err) {
    console.error('Error submitting enquiry:', err);
    res.status(500).json({ error: 'Server error processing enquiry. Please try again.' });
  }
});

module.exports = router;
