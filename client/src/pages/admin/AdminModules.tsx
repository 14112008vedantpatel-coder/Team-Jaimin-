import React, { useState, useEffect } from 'react';
import {
  Save,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  AlertCircle,
  Upload,
  Eye,
  ExternalLink,
  MessageSquare,
  Download,
  FileSpreadsheet,
  Lock,
  RefreshCw,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import {
  getAdminSettings,
  updateAdminSettings,
  getAdminHero,
  updateAdminHero,
  getAdminAbout,
  updateAdminAbout,
  getAdminCompany,
  updateAdminCompany,
  getAdminOpportunities,
  createAdminOpportunity,
  updateAdminOpportunity,
  deleteAdminOpportunity,
  getAdminHowItWorks,
  updateAdminHowItWorks,
  getAdminTeamMembers,
  createAdminTeamMember,
  updateAdminTeamMember,
  deleteAdminTeamMember,
  getAdminTestimonials,
  createAdminTestimonial,
  updateAdminTestimonial,
  deleteAdminTestimonial,
  getAdminEarningProofs,
  createAdminEarningProof,
  updateAdminEarningProof,
  deleteAdminEarningProof,
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
  getAdminEnquiries,
  updateAdminEnquiryStatus,
  addAdminEnquiryNote,
  deleteAdminEnquiry,
  getAdminMedia,
  uploadAdminMedia,
  deleteAdminMedia,
  getAdminAuditLogs,
} from '../../api/client';
import { useSite } from '../../context/SiteContext';

// Helper for save feedback
const SaveToast: React.FC<{ message: string | null }> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-[#10100D] text-[#DDF77B] text-xs font-bold shadow-xl border border-white/10 flex items-center gap-2 animate-fade-in">
      <CheckCircle2 className="w-4 h-4 text-[#DDF77B]" />
      <span>{message}</span>
    </div>
  );
};

// 1. SETTINGS & SEO MANAGER
export const SettingsManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    getAdminSettings().then((res) => {
      if (res.success) setSettings(res.data);
      setLoading(false);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateAdminSettings(settings);
    await refreshSiteData();
    setToast('Website settings saved successfully!');
    setTimeout(() => setToast(null), 3000);
  };

  if (loading || !settings) return <div className="p-8 text-xs text-[#696969]">Loading settings...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <SaveToast message={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Website Settings & WhatsApp</h2>
          <p className="text-xs text-[#696969]">Configure global brand details, WhatsApp CTAs, and metadata.</p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90 shadow-sm"
        >
          <Save className="w-4 h-4 text-[#DDF77B]" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand */}
        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <h3 className="text-sm font-bold text-[#10100D]">Brand Identity</h3>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Brand / Team Name</label>
            <input
              type="text"
              value={settings.brand_name || ''}
              onChange={(e) => setSettings({ ...settings, brand_name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Monogram Badge</label>
            <input
              type="text"
              value={settings.monogram || 'TJ'}
              onChange={(e) => setSettings({ ...settings, monogram: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Brand Tagline</label>
            <input
              type="text"
              value={settings.tagline || ''}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
        </div>

        {/* WhatsApp & Contact */}
        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <h3 className="text-sm font-bold text-[#10100D]">WhatsApp & Contact</h3>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">
              WhatsApp Number (with country code)
            </label>
            <input
              type="text"
              value={settings.contact?.whatsapp_number || ''}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  contact: { ...settings.contact, whatsapp_number: e.target.value },
                })
              }
              placeholder="+919876543210"
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Display Phone</label>
            <input
              type="text"
              value={settings.contact?.display_phone || ''}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  contact: { ...settings.contact, display_phone: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Email</label>
            <input
              type="email"
              value={settings.contact?.email || ''}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  contact: { ...settings.contact, email: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
        </div>
      </div>

      {/* SEO Settings */}
      <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
        <h3 className="text-sm font-bold text-[#10100D]">SEO & OpenGraph Metadata</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Meta Title</label>
            <input
              type="text"
              value={settings.seo?.meta_title || ''}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  seo: { ...settings.seo, meta_title: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Canonical URL</label>
            <input
              type="text"
              value={settings.seo?.canonical_url || ''}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  seo: { ...settings.seo, canonical_url: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#171717] mb-1">Meta Description</label>
          <textarea
            rows={2}
            value={settings.seo?.meta_description || ''}
            onChange={(e) =>
              setSettings({
                ...settings,
                seo: { ...settings.seo, meta_description: e.target.value },
              })
            }
            className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
          />
        </div>
      </div>
    </form>
  );
};

// 2. HERO MANAGER
export const HeroManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [hero, setHero] = useState<any>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    getAdminHero().then((res) => {
      if (res.success) setHero(res.data);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateAdminHero(hero);
    await refreshSiteData();
    setToast('Hero section saved!');
    setTimeout(() => setToast(null), 3000);
  };

  if (!hero) return <div className="p-8 text-xs text-[#696969]">Loading hero content...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <SaveToast message={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Hero Section Content</h2>
          <p className="text-xs text-[#696969]">Customize the hero card headline, supporting copy, and 4 feature cards.</p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90 shadow-sm"
        >
          <Save className="w-4 h-4 text-[#DDF77B]" />
          <span>Save Hero</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#171717] mb-1">Badge Copy</label>
          <input
            type="text"
            value={hero.badge || ''}
            onChange={(e) => setHero({ ...hero, badge: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#171717] mb-1">Main Editorial Headline</label>
          <input
            type="text"
            value={hero.headline || ''}
            onChange={(e) => setHero({ ...hero, headline: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-editorial font-bold"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#171717] mb-1">Subheadline / Supporting Copy</label>
          <textarea
            rows={3}
            value={hero.subheadline || ''}
            onChange={(e) => setHero({ ...hero, subheadline: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Primary CTA Button</label>
            <input
              type="text"
              value={hero.cta_primary_text || ''}
              onChange={(e) => setHero({ ...hero, cta_primary_text: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Secondary CTA Button</label>
            <input
              type="text"
              value={hero.cta_secondary_text || ''}
              onChange={(e) => setHero({ ...hero, cta_secondary_text: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
        </div>
      </div>

      {/* 4 Feature Bento Cards */}
      <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
        <h3 className="text-sm font-bold text-[#10100D]">4 Feature Bento Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(hero.feature_cards || []).map((card: any, idx: number) => (
            <div key={card.id || idx} className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] space-y-2">
              <span className="text-[10px] font-bold text-[#6747C7] uppercase">Card {idx + 1}</span>
              <input
                type="text"
                value={card.title}
                onChange={(e) => {
                  const updated = [...hero.feature_cards];
                  updated[idx].title = e.target.value;
                  setHero({ ...hero, feature_cards: updated });
                }}
                placeholder="Card Title"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#EAE8E2] text-xs font-bold"
              />
              <input
                type="text"
                value={card.value}
                onChange={(e) => {
                  const updated = [...hero.feature_cards];
                  updated[idx].value = e.target.value;
                  setHero({ ...hero, feature_cards: updated });
                }}
                placeholder="Value (e.g. 850+)"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#EAE8E2] text-xs font-editorial"
              />
              <input
                type="text"
                value={card.description}
                onChange={(e) => {
                  const updated = [...hero.feature_cards];
                  updated[idx].description = e.target.value;
                  setHero({ ...hero, feature_cards: updated });
                }}
                placeholder="Short Description"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#EAE8E2] text-xs text-[#696969]"
              />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

// 3. ABOUT LEADER MANAGER
export const AboutLeaderManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [about, setAbout] = useState<any>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    getAdminAbout().then((res) => {
      if (res.success) setAbout(res.data);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateAdminAbout(about);
    await refreshSiteData();
    setToast('Leader profile updated successfully!');
    setTimeout(() => setToast(null), 3000);
  };

  if (!about) return <div className="p-8 text-xs text-[#696969]">Loading about profile...</div>;

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <SaveToast message={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">About Leader Profile</h2>
          <p className="text-xs text-[#696969]">Manage personal biography, portrait URL, and verified statistics.</p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90 shadow-sm"
        >
          <Save className="w-4 h-4 text-[#DDF77B]" />
          <span>Save Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <h3 className="text-sm font-bold text-[#10100D]">Personal Info</h3>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Full Name</label>
            <input
              type="text"
              value={about.name || ''}
              onChange={(e) => setAbout({ ...about, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Designation</label>
            <input
              type="text"
              value={about.designation || ''}
              onChange={(e) => setAbout({ ...about, designation: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Portrait Image URL</label>
            <input
              type="text"
              value={about.portrait_url || ''}
              onChange={(e) => setAbout({ ...about, portrait_url: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">Personal Mission Statement</label>
            <textarea
              rows={2}
              value={about.personal_mission || ''}
              onChange={(e) => setAbout({ ...about, personal_mission: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <h3 className="text-sm font-bold text-[#10100D]">Verified Statistics</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#171717] mb-1">Years Experience</label>
              <input
                type="text"
                value={about.experience_years || ''}
                onChange={(e) => setAbout({ ...about, experience_years: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#171717] mb-1">Mentees Count</label>
              <input
                type="text"
                value={about.mentored_count || ''}
                onChange={(e) => setAbout({ ...about, mentored_count: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#171717] mb-1">Sessions Count</label>
              <input
                type="text"
                value={about.sessions_conducted || ''}
                onChange={(e) => setAbout({ ...about, sessions_conducted: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#171717] mb-1">Satisfaction Rate</label>
              <input
                type="text"
                value={about.satisfaction_rate || ''}
                onChange={(e) => setAbout({ ...about, satisfaction_rate: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

// 4. EARNING PROOFS MANAGER (CRITICAL: Draft / Approval Workflow - PRD 4.8)
export const EarningProofsManager: React.FC = () => {
  const { refreshSiteData } = useSite();
  const [proofs, setProofs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProof, setEditingProof] = useState<any | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const fetchProofs = async () => {
    const res = await getAdminEarningProofs();
    if (res.success) setProofs(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProofs();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    await updateAdminEarningProof(id, { status });
    await fetchProofs();
    await refreshSiteData();
    setToast(`Status updated to "${status}"`);
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this earning proof record?')) {
      await deleteAdminEarningProof(id);
      await fetchProofs();
      await refreshSiteData();
      setToast('Proof record removed.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleSaveProof = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProof.id.startsWith('new_')) {
      await createAdminEarningProof(editingProof);
    } else {
      await updateAdminEarningProof(editingProof.id, editingProof);
    }
    setEditingProof(null);
    await fetchProofs();
    await refreshSiteData();
    setToast('Earning proof saved successfully.');
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-6">
      <SaveToast message={toast} />
      <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">
            Earning Proofs & Approval Workflow
          </h2>
          <p className="text-xs text-[#696969]">
            Manage member earning records. <strong>Only records with status "Approved for Publication" appear on the public website.</strong>
          </p>
        </div>
        <button
          onClick={() =>
            setEditingProof({
              id: `new_${Date.now()}`,
              member_name: '',
              amount: '₹',
              period: 'monthly',
              date: 'Recent',
              category: 'Commission Settlement',
              proof_image_url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
              redacted_info: 'Bank Ref: XXXXXX • PII Redacted',
              status: 'Draft',
              notes: '',
            })
          }
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B] shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Earning Proof</span>
        </button>
      </div>

      {/* Proofs Table */}
      <div className="bg-white rounded-3xl border border-[#EAE8E2] overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF9F6] border-b border-[#EAE8E2] text-[10px] font-bold text-[#696969] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Evidence</th>
              <th className="px-6 py-4">Member / Period</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status & Approval</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE8E2]">
            {proofs.map((p) => (
              <tr key={p.id} className="hover:bg-[#FAF9F6]/60 transition-colors">
                <td className="px-6 py-4">
                  <img
                    src={p.proof_image_url}
                    alt={p.member_name}
                    className="w-12 h-10 object-cover rounded-lg border border-[#EAE8E2]"
                  />
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-[#10100D] block">{p.member_name}</span>
                  <span className="text-[11px] text-[#696969]">{p.category} ({p.period})</span>
                </td>
                <td className="px-6 py-4 font-editorial font-bold text-base text-[#10100D]">
                  {p.amount}
                </td>
                <td className="px-6 py-4">
                  <select
                    value={p.status}
                    onChange={(e) => handleStatusChange(p.id, e.target.value)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                      p.status === 'Approved for Publication'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : p.status === 'Pending Review'
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : p.status === 'Rejected'
                        ? 'bg-rose-50 text-rose-800 border-rose-300'
                        : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                    }`}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Pending Review">Pending Review</option>
                    <option value="Approved for Publication">Approved for Publication</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Archived">Archived</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingProof(p)}
                      className="p-1.5 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-[#171717] hover:bg-white"
                      title="Edit"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingProof && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <form
            onSubmit={handleSaveProof}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAE8E2] shadow-2xl space-y-4"
          >
            <h3 className="font-editorial text-xl font-bold text-[#10100D]">
              {editingProof.id.startsWith('new_') ? 'Add Earning Evidence' : 'Edit Earning Proof'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Member Pseudonym</label>
                <input
                  type="text"
                  required
                  value={editingProof.member_name}
                  onChange={(e) => setEditingProof({ ...editingProof, member_name: e.target.value })}
                  placeholder="e.g. Vikram S. (Student)"
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Amount</label>
                <input
                  type="text"
                  required
                  value={editingProof.amount}
                  onChange={(e) => setEditingProof({ ...editingProof, amount: e.target.value })}
                  placeholder="₹34,850"
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">Period Filter</label>
                <select
                  value={editingProof.period}
                  onChange={(e) => setEditingProof({ ...editingProof, period: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
                >
                  <option value="daily">Daily Example</option>
                  <option value="weekly">Weekly Example</option>
                  <option value="monthly">Monthly Example</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Approval Status</label>
                <select
                  value={editingProof.status}
                  onChange={(e) => setEditingProof({ ...editingProof, status: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold"
                >
                  <option value="Draft">Draft</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Approved for Publication">Approved for Publication</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Evidence Image URL</label>
              <input
                type="text"
                required
                value={editingProof.proof_image_url}
                onChange={(e) => setEditingProof({ ...editingProof, proof_image_url: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Redacted Bank Note</label>
              <input
                type="text"
                value={editingProof.redacted_info}
                onChange={(e) => setEditingProof({ ...editingProof, redacted_info: e.target.value })}
                placeholder="Bank Ref: ICICI/XXXXX • PII Redacted"
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#EAE8E2]">
              <button
                type="button"
                onClick={() => setEditingProof(null)}
                className="px-4 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90"
              >
                Save Record
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// 5. ENQUIRIES & LEADS CRM (PRD 7.2)
export const EnquiriesCrmManager: React.FC = () => {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeLead, setActiveLead] = useState<any | null>(null);
  const [newNote, setNewNote] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    const res = await getAdminEnquiries(statusFilter);
    if (res.success) setEnquiries(res.data);
  };

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter]);

  const handleStatusUpdate = async (id: string, status: string) => {
    await updateAdminEnquiryStatus(id, status);
    await fetchEnquiries();
    setToast(`Lead status updated to ${status}`);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim() || !activeLead) return;
    await addAdminEnquiryNote(activeLead.enquiry_id, newNote);
    setNewNote('');
    await fetchEnquiries();
    setToast('Internal note saved!');
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this enquiry record?')) {
      await deleteAdminEnquiry(id);
      await fetchEnquiries();
      setToast('Enquiry removed.');
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <SaveToast message={toast} />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE8E2]">
        <div>
          <h2 className="font-editorial text-2xl font-bold text-[#10100D]">
            Lead Generation & Enquiry CRM
          </h2>
          <p className="text-xs text-[#696969]">
            Track visitor inquiries, assign follow-up statuses, record call notes, and export CSV.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Export CSV Button (PRD 7.2) */}
          <a
            href="/api/admin/enquiries/export/csv"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs font-semibold text-[#171717] hover:bg-[#FAF9F6] shadow-2xs"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export CSV</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
        {['All', 'New', 'Contacted', 'Follow-up Required', 'Interested', 'Not Interested', 'Converted', 'Closed'].map(
          (status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                statusFilter === status
                  ? 'bg-[#10100D] text-[#DDF77B]'
                  : 'bg-white text-[#171717] border border-[#EAE8E2]'
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-3xl border border-[#EAE8E2] overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF9F6] border-b border-[#EAE8E2] text-[10px] font-bold text-[#696969] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Ref ID / Name</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Interest Area</th>
              <th className="px-6 py-4">Lead Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE8E2]">
            {enquiries.map((e) => (
              <tr key={e.id} className="hover:bg-[#FAF9F6]/60 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-mono text-[10px] text-[#6747C7] font-bold block">{e.enquiry_id}</span>
                  <strong className="text-xs text-[#10100D]">{e.full_name}</strong>
                  <span className="text-[11px] text-[#696969] block">{e.city}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-[#10100D]">{e.mobile}</span>
                  </div>
                  {e.email && <span className="text-[11px] text-[#696969] block">{e.email}</span>}
                  <span className="text-[10px] text-[#696969]">Prefers: {e.preferred_contact}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-[#10100D] block">{e.area_of_interest}</span>
                  {e.message && (
                    <p className="text-[11px] text-[#696969] italic truncate max-w-xs mt-0.5">
                      "{e.message}"
                    </p>
                  )}
                </td>
                <td className="px-6 py-4">
                  <select
                    value={e.status}
                    onChange={(evt) => handleStatusUpdate(e.id, evt.target.value)}
                    className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-[#FAF9F6] border border-[#EAE8E2]"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Follow-up Required">Follow-up Required</option>
                    <option value="Interested">Interested</option>
                    <option value="Not Interested">Not Interested</option>
                    <option value="Converted">Converted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={`https://wa.me/${e.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(
                        `Hello ${e.full_name}! This is Jamin Patel regarding your inquiry (${e.enquiry_id}). How may I assist you today?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#DDF77B] text-[#10100D] hover:bg-[#CFF46B]"
                      title="Direct WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-[#10100D]" />
                    </a>
                    <button
                      onClick={() => setActiveLead(e)}
                      className="p-1.5 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-[#171717] hover:bg-white"
                      title="Notes"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(e.id)}
                      className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Internal Notes Modal */}
      {activeLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#EAE8E2] shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE8E2]">
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#10100D]">
                  Follow-up Notes for {activeLead.full_name}
                </h3>
                <span className="font-mono text-xs text-[#6747C7]">{activeLead.enquiry_id}</span>
              </div>
              <button onClick={() => setActiveLead(null)} className="text-[#696969] hover:text-[#10100D]">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddNote} className="space-y-3">
              <textarea
                rows={3}
                required
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Log call discussion, next follow-up date, or customer queries..."
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90"
              >
                Add Follow-up Note
              </button>
            </form>

            <div className="space-y-2 max-h-48 overflow-y-auto pt-2 border-t border-[#EAE8E2]">
              <span className="text-[10px] font-bold uppercase text-[#696969] block">History:</span>
              {(activeLead.notes || []).length === 0 ? (
                <p className="text-xs text-[#696969]">No notes logged yet.</p>
              ) : (
                activeLead.notes.map((n: any) => (
                  <div key={n.id} className="p-3 bg-[#FAF9F6] rounded-xl border border-[#EAE8E2] text-xs space-y-1">
                    <p className="text-[#10100D]">{n.note}</p>
                    <span className="text-[10px] text-[#696969] block">
                      By {n.author} • {new Date(n.created_at).toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 6. BACKUP & EXPORT (PRD 6.3)
export const BackupManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-[#EAE8E2]">
        <h2 className="font-editorial text-2xl font-bold text-[#10100D]">Backup & Data Export</h2>
        <p className="text-xs text-[#696969]">
          Download structured backups of all website content, proofs, documents, and lead registries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-lg font-bold text-[#10100D]">Full Database JSON Backup</h3>
            <p className="text-xs text-[#696969] mt-1">
              Download complete structured JSON snapshot containing all site settings, hero data, testimonials, earning proofs, company certificates, and audit logs.
            </p>
          </div>
          <a
            href="/api/admin/backup/export"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90 shadow-sm"
          >
            <Download className="w-4 h-4 text-[#DDF77B]" />
            <span>Download Full JSON Backup</span>
          </a>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2] space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-lg font-bold text-[#10100D]">Lead Enquiries CSV Export</h3>
            <p className="text-xs text-[#696969] mt-1">
              Export all qualified visitor inquiries, phone numbers, contact preferences, and timestamps formatted for Excel, Google Sheets, or CRM import.
            </p>
          </div>
          <a
            href="/api/admin/enquiries/export/csv"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B] shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Download Leads CSV</span>
          </a>
        </div>
      </div>
    </div>
  );
};
