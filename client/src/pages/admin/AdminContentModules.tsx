import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  Edit2,
  Save,
  CheckCircle,
  Eye,
  ExternalLink,
  Upload,
  FolderOpen,
  Key,
  Shield,
  FileCheck2,
  Video,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import {
  getAdminTestimonials,
  createAdminTestimonial,
  updateAdminTestimonial,
  deleteAdminTestimonial,
  getAdminDocuments,
  createAdminDocument,
  updateAdminDocument,
  deleteAdminDocument,
  getAdminTrainingMedia,
  createAdminTrainingMedia,
  deleteAdminTrainingMedia,
  getAdminEvents,
  createAdminEvent,
  updateAdminEvent,
  deleteAdminEvent,
  getAdminFaqs,
  createAdminFaq,
  updateAdminFaq,
  deleteAdminFaq,
  getAdminOpportunities,
  createAdminOpportunity,
  updateAdminOpportunity,
  deleteAdminOpportunity,
  getAdminCompany,
  updateAdminCompany,
  getAdminTeamMembers,
  createAdminTeamMember,
  updateAdminTeamMember,
  deleteAdminTeamMember,
  getAdminMedia,
  uploadAdminMedia,
  deleteAdminMedia,
  getAdminAuditLogs,
} from '../../api/client';
import { useSite } from '../../context/SiteContext';

const Toast: React.FC<{ msg: string | null }> = ({ msg }) => {
  if (!msg) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-xl bg-[#10100D] text-[#DDF77B] text-xs font-bold shadow-lg border border-white/10 flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 text-[#DDF77B]" />
      <span>{msg}</span>
    </div>
  );
};

// 1. TESTIMONIALS MANAGER
export const TestimonialsManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const load = async () => {
    const res = await getAdminTestimonials();
    if (res.success) setItems(res.data);
  };
  useEffect(() => { load(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing.id.startsWith('new_')) {
      await createAdminTestimonial(editing);
    } else {
      await updateAdminTestimonial(editing.id, editing);
    }
    setEditing(null);
    await load();
    await refreshSiteData();
    setToast('Testimonial saved!');
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this testimonial?')) {
      await deleteAdminTestimonial(id);
      await load();
      await refreshSiteData();
      setToast('Testimonial removed.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <Toast msg={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Testimonials & Video Reviews</h2>
          <p className="text-xs text-[#696969]">Manage text reviews and featured video feedback.</p>
        </div>
        <button
          onClick={() =>
            setEditing({
              id: `new_${Date.now()}`,
              name: '',
              role: 'Associate',
              city: '',
              type: 'video',
              video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              thumbnail_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
              content: '',
              rating: 5,
              is_featured: false,
              is_published: true,
            })
          }
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-5 border border-[#EAE8E2] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#EAE8E2]">
                  {t.type} review
                </span>
                {t.is_featured && (
                  <span className="text-[10px] font-bold bg-[#DDF77B] text-[#10100D] px-2 py-0.5 rounded">
                    Featured Hero
                  </span>
                )}
              </div>
              <h3 className="font-editorial text-base font-bold text-[#10100D]">{t.name}</h3>
              <p className="text-[11px] text-[#696969] mb-2">{t.role} • {t.city}</p>
              <p className="text-xs text-[#171717] italic line-clamp-3 mb-4">"{t.content}"</p>
            </div>
            <div className="pt-3 border-t border-[#EAE8E2] flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-700">
                {t.is_published ? 'Published' : 'Hidden'}
              </span>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setEditing(t)} className="p-1.5 bg-[#FAF9F6] border rounded-lg">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => handleDelete(t.id)} className="p-1.5 bg-rose-50 text-rose-600 rounded-lg">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAE8E2] shadow-2xl space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#10100D]">
              {editing.id.startsWith('new_') ? 'Add Testimonial' : 'Edit Testimonial'}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Role / Occupation</label>
                <input
                  type="text"
                  value={editing.role}
                  onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">City</label>
                <input
                  type="text"
                  value={editing.city}
                  onChange={(e) => setEditing({ ...editing, city: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Type</label>
                <select
                  value={editing.type}
                  onChange={(e) => setEditing({ ...editing, type: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                >
                  <option value="video">Video Testimonial</option>
                  <option value="text">Written Testimonial</option>
                </select>
              </div>
            </div>

            {editing.type === 'video' && (
              <div>
                <label className="block text-xs font-semibold mb-1">Video Embed URL</label>
                <input
                  type="text"
                  value={editing.video_url || ''}
                  onChange={(e) => setEditing({ ...editing, video_url: e.target.value })}
                  placeholder="https://www.youtube.com/embed/..."
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold mb-1">Thumbnail Image URL</label>
              <input
                type="text"
                value={editing.thumbnail_url || ''}
                onChange={(e) => setEditing({ ...editing, thumbnail_url: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Quote Content</label>
              <textarea
                rows={3}
                required
                value={editing.content}
                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <label className="flex items-center gap-2 text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={editing.is_featured}
                  onChange={(e) => setEditing({ ...editing, is_featured: e.target.checked })}
                />
                <span>Set as Featured Main Video</span>
              </label>
              <label className="flex items-center gap-2 text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={editing.is_published}
                  onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })}
                />
                <span>Published on Website</span>
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => setEditing(null)}
                className="px-4 py-2 rounded-xl bg-[#FAF9F6] border text-xs font-semibold"
              >
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-[#10100D] text-white text-xs font-bold">
                Save Testimonial
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// 2. COMPANY DOCUMENTS MANAGER (PRD 4.9)
export const CompanyDocumentsManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [docs, setDocs] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const load = async () => {
    const res = await getAdminDocuments();
    if (res.success) setDocs(res.data);
  };
  useEffect(() => { load(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing.id.startsWith('new_')) {
      await createAdminDocument(editing);
    } else {
      await updateAdminDocument(editing.id, editing);
    }
    setEditing(null);
    await load();
    await refreshSiteData();
    setToast('Document updated successfully!');
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this company document?')) {
      await deleteAdminDocument(id);
      await load();
      await refreshSiteData();
      setToast('Document removed.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <Toast msg={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Company Proof & Verification Documents</h2>
          <p className="text-xs text-[#696969]">Manage corporate registrations (CIN, GST, MSME, FSSAI) and official portal links.</p>
        </div>
        <button
          onClick={() =>
            setEditing({
              id: `new_${Date.now()}`,
              title: '',
              document_number: '',
              issuing_authority: '',
              category: 'Legal Registration',
              issue_date: 'Recent',
              expiry_date: 'Perpetual',
              file_url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
              verification_url: 'https://www.mca.gov.in',
              is_public: true,
              status: 'Active',
            })
          }
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Official Document</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((doc) => (
          <div key={doc.id} className="bg-white rounded-3xl p-5 border border-[#EAE8E2] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#6747C7] block mb-1">{doc.category}</span>
              <h3 className="font-editorial text-base font-bold text-[#10100D] mb-1">{doc.title}</h3>
              <p className="font-mono text-xs font-bold text-[#10100D] mb-1">{doc.document_number}</p>
              <p className="text-[11px] text-[#696969] mb-3">Issued by: {doc.issuing_authority}</p>
            </div>
            <div className="pt-3 border-t border-[#EAE8E2] flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-700">{doc.is_public ? 'Public' : 'Hidden'}</span>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setEditing(doc)} className="p-1.5 bg-[#FAF9F6] border rounded-lg">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => handleDelete(doc.id)} className="p-1.5 bg-rose-50 text-rose-600 rounded-lg">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAE8E2] shadow-2xl space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#10100D]">
              {editing.id.startsWith('new_') ? 'Add Company Document' : 'Edit Company Document'}
            </h3>

            <div>
              <label className="block text-xs font-semibold mb-1">Document Title</label>
              <input
                type="text"
                required
                value={editing.title}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Document / CIN Number</label>
                <input
                  type="text"
                  required
                  value={editing.document_number}
                  onChange={(e) => setEditing({ ...editing, document_number: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Issuing Authority</label>
                <input
                  type="text"
                  required
                  value={editing.issuing_authority}
                  onChange={(e) => setEditing({ ...editing, issuing_authority: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Document Preview Image URL</label>
              <input
                type="text"
                required
                value={editing.file_url}
                onChange={(e) => setEditing({ ...editing, file_url: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Govt. Portal Verification Link</label>
              <input
                type="text"
                value={editing.verification_url}
                onChange={(e) => setEditing({ ...editing, verification_url: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              />
            </div>

            <label className="flex items-center gap-2 text-xs font-semibold pt-2">
              <input
                type="checkbox"
                checked={editing.is_public}
                onChange={(e) => setEditing({ ...editing, is_public: e.target.checked })}
              />
              <span>Publicly Visible on Website</span>
            </label>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl bg-[#FAF9F6] border text-xs font-semibold">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-[#10100D] text-white text-xs font-bold">
                Save Document
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// 3. FAQS MANAGER (PRD 4.12)
export const FaqsManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [faqs, setFaqs] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const load = async () => {
    const res = await getAdminFaqs();
    if (res.success) {
      setFaqs(res.data.faqs);
      setCategories(res.data.categories);
    }
  };
  useEffect(() => { load(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing.id.startsWith('new_')) {
      await createAdminFaq(editing);
    } else {
      await updateAdminFaq(editing.id, editing);
    }
    setEditing(null);
    await load();
    await refreshSiteData();
    setToast('FAQ saved!');
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this question?')) {
      await deleteAdminFaq(id);
      await load();
      await refreshSiteData();
      setToast('FAQ deleted.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <Toast msg={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Frequently Asked Questions</h2>
          <p className="text-xs text-[#696969]">Add and edit categorized answers for visitors.</p>
        </div>
        <button
          onClick={() =>
            setEditing({
              id: `new_${Date.now()}`,
              category: categories[0] || 'About the Work',
              question: '',
              answer: '',
              is_published: true,
            })
          }
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B]"
        >
          <Plus className="w-4 h-4" />
          <span>Add New FAQ</span>
        </button>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-2xl p-5 border border-[#EAE8E2] flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#6747C7] uppercase block mb-1">
                {faq.category}
              </span>
              <h3 className="font-editorial text-base font-bold text-[#10100D] mb-1">{faq.question}</h3>
              <p className="text-xs text-[#696969] leading-relaxed">{faq.answer}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={() => setEditing(faq)} className="p-1.5 bg-[#FAF9F6] border rounded-lg">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(faq.id)} className="p-1.5 bg-rose-50 text-rose-600 rounded-lg">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAE8E2] shadow-2xl space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#10100D]">
              {editing.id.startsWith('new_') ? 'Add FAQ' : 'Edit FAQ'}
            </h3>

            <div>
              <label className="block text-xs font-semibold mb-1">Category</label>
              <select
                value={editing.category}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Question</label>
              <input
                type="text"
                required
                value={editing.question}
                onChange={(e) => setEditing({ ...editing, question: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Answer</label>
              <textarea
                rows={4}
                required
                value={editing.answer}
                onChange={(e) => setEditing({ ...editing, answer: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border text-xs leading-relaxed"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl bg-[#FAF9F6] border text-xs font-semibold">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-[#10100D] text-white text-xs font-bold">
                Save FAQ
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// 4. MEDIA LIBRARY MANAGER (PRD 6.5)
export const MediaLibraryManager: React.FC = () => {
  const [mediaList, setMediaList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [altText, setAltText] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const load = async () => {
    const res = await getAdminMedia();
    if (res.success) setMediaList(res.data);
  };
  useEffect(() => { load(); }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      setUploading(true);
      await uploadAdminMedia(files[0], altText || files[0].name);
      setAltText('');
      await load();
      setToast('Asset uploaded successfully!');
      setTimeout(() => setToast(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this media asset?')) {
      await deleteAdminMedia(id);
      await load();
      setToast('Media asset removed.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <Toast msg={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Media Library & Uploads</h2>
          <p className="text-xs text-[#696969]">Upload images, PDFs, and media assets for use on the website.</p>
        </div>

        <label className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B] cursor-pointer shadow-sm">
          <Upload className="w-4 h-4" />
          <span>{uploading ? 'Uploading...' : 'Upload File'}</span>
          <input
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
            accept=".jpg,.jpeg,.png,.webp,.pdf,.mp4"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mediaList.map((m) => (
          <div key={m.id} className="bg-white rounded-2xl p-3 border border-[#EAE8E2] group flex flex-col justify-between">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF9F6] border mb-2">
              <img src={m.url} alt={m.alt_text} className="w-full h-full object-cover" />
            </div>
            <div className="truncate">
              <span className="text-[11px] font-bold text-[#10100D] truncate block">{m.original_name}</span>
              <span className="text-[10px] text-[#696969] block">{(m.file_size / 1024).toFixed(0)} KB</span>
            </div>
            <div className="pt-2 mt-2 border-t flex items-center justify-between">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(m.url);
                  setToast('URL copied to clipboard!');
                  setTimeout(() => setToast(null), 2000);
                }}
                className="text-[10px] font-semibold text-[#6747C7] hover:underline"
              >
                Copy URL
              </button>
              <button onClick={() => handleDelete(m.id)} className="p-1 text-rose-600 hover:bg-rose-50 rounded">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. SECURITY & AUDIT LOGS MANAGER (PRD 10)
export const SecurityLogsManager: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    getAdminAuditLogs().then((res) => {
      if (res.success) setLogs(res.data);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#EAE8E2]">
        <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Admin Security & Audit Trail</h2>
        <p className="text-xs text-[#696969]">Immutable system logs tracking administrative edits, logins, and status updates.</p>
      </div>

      <div className="bg-white rounded-3xl border border-[#EAE8E2] overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF9F6] border-b text-[10px] font-bold text-[#696969] uppercase">
            <tr>
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Entity</th>
              <th className="px-6 py-4">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE8E2]">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-[#FAF9F6]/50">
                <td className="px-6 py-3 font-mono text-[10px] text-[#696969]">
                  {new Date(log.timestamp).toLocaleString()}
                </td>
                <td className="px-6 py-3 font-semibold text-[#10100D]">{log.user_email}</td>
                <td className="px-6 py-3">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {log.action}
                  </span>
                </td>
                <td className="px-6 py-3 text-[#696969]">{log.entity}</td>
                <td className="px-6 py-3 text-[#171717]">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
