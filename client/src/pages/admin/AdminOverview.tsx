import React, { useState, useEffect } from 'react';
import {
  Inbox,
  DollarSign,
  MessageSquareQuote,
  FileCheck2,
  Image,
  HelpCircle,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { getAdminOverview } from '../../api/client';
import { AdminTab } from './AdminDashboardLayout';

interface AdminOverviewProps {
  onNavigate: (tab: AdminTab) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ onNavigate }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchOverview = async () => {
    try {
      setLoading(true);
      const res = await getAdminOverview();
      if (res.success) {
        setData(res.data);
      }
    } catch (err) {
      console.error('Error fetching admin overview:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  if (loading && !data) {
    return (
      <div className="py-20 text-center text-xs text-[#696969] flex items-center justify-center gap-2">
        <RefreshCw className="w-4 h-4 animate-spin text-[#6747C7]" />
        <span>Loading live database analytics...</span>
      </div>
    );
  }

  const counts = data?.counts || {};
  const recentEnquiries = data?.recent_enquiries || [];
  const recentLogs = data?.recent_logs || [];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6747C7] block mb-1">
            Real-Time System Overview
          </span>
          <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#10100D]">
            Welcome Back, Jamin
          </h1>
          <p className="text-xs text-[#696969] mt-1">
            All content, earning approvals, and lead inquiries are synchronized with the live database.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchOverview}
            className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-semibold text-[#171717] hover:bg-[#EAE8E2] transition-colors flex items-center gap-1.5"
            title="Refresh database numbers"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Sync</span>
          </button>

          <button
            onClick={() => onNavigate('enquiries')}
            className="px-4 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] text-xs font-bold hover:bg-[#CFF46B] transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Inbox className="w-3.5 h-3.5 fill-[#10100D]" />
            <span>View Leads ({counts.new_enquiries || 0} New)</span>
          </button>
        </div>
      </div>

      {/* Real Database Count Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Enquiries */}
        <div
          onClick={() => onNavigate('enquiries')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">Leads</span>
            <div className="p-1.5 bg-blue-50 text-blue-700 rounded-lg">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.total_enquiries || 0}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
            {counts.new_enquiries || 0} Unread
          </span>
        </div>

        {/* Earning Proofs */}
        <div
          onClick={() => onNavigate('earning-proofs')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">Proofs</span>
            <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.approved_proofs || 0}
          </div>
          <span className="text-[11px] text-amber-700 font-semibold block mt-0.5">
            {counts.pending_proofs || 0} Pending Review
          </span>
        </div>

        {/* Testimonials */}
        <div
          onClick={() => onNavigate('testimonials')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">Reviews</span>
            <div className="p-1.5 bg-purple-50 text-[#6747C7] rounded-lg">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.published_testimonials || 0}
          </div>
          <span className="text-[11px] text-[#696969] block mt-0.5">
            {counts.total_testimonials || 0} Total
          </span>
        </div>

        {/* Documents */}
        <div
          onClick={() => onNavigate('documents')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">Docs</span>
            <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg">
              <FileCheck2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.company_documents || 0}
          </div>
          <span className="text-[11px] text-[#696969] block mt-0.5">Corporate & Legal</span>
        </div>

        {/* Media */}
        <div
          onClick={() => onNavigate('training')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">Gallery</span>
            <div className="p-1.5 bg-amber-50 text-amber-700 rounded-lg">
              <Image className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.training_media || 0}
          </div>
          <span className="text-[11px] text-[#696969] block mt-0.5">Events & Webinars</span>
        </div>

        {/* FAQs */}
        <div
          onClick={() => onNavigate('faqs')}
          className="bento-card p-4.5 cursor-pointer bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#696969]">FAQs</span>
            <div className="p-1.5 bg-sky-50 text-sky-700 rounded-lg">
              <HelpCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-editorial font-bold text-[#10100D]">
            {counts.faqs_count || 0}
          </div>
          <span className="text-[11px] text-[#696969] block mt-0.5">Categorized</span>
        </div>
      </div>

      {/* Two Column Layout: Recent Leads & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Enquiries (Leads) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE8E2] p-6 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#10100D]">Recent Visitor Enquiries</h3>
              <p className="text-xs text-[#696969]">Qualified leads captured through website forms.</p>
            </div>
            <button
              onClick={() => onNavigate('enquiries')}
              className="text-xs font-semibold text-[#6747C7] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {recentEnquiries.length === 0 ? (
            <p className="text-xs text-[#696969] py-8 text-center">No leads recorded yet.</p>
          ) : (
            <div className="space-y-3">
              {recentEnquiries.map((lead: any) => (
                <div
                  key={lead.id}
                  onClick={() => onNavigate('enquiries')}
                  className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] hover:border-[#DDF77B] transition-colors cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#10100D]">{lead.full_name}</span>
                      <span className="text-[10px] font-mono text-[#696969]">({lead.city})</span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        lead.status === 'New'
                          ? 'bg-blue-100 text-blue-800'
                          : lead.status === 'Contacted'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {lead.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#696969] truncate mt-0.5">
                      {lead.area_of_interest} • <span className="font-mono">{lead.mobile}</span>
                    </p>
                  </div>
                  <span className="text-[10px] text-[#696969] shrink-0 font-mono">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Management Shortcuts & Audit Log */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Shortcuts */}
          <div className="bg-white rounded-3xl border border-[#EAE8E2] p-6 shadow-xs">
            <h3 className="font-editorial text-base font-bold text-[#10100D] mb-4">
              Quick Content Actions
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => onNavigate('earning-proofs')}
                className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] text-left hover:border-[#DDF77B] transition-colors"
              >
                <DollarSign className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="text-xs font-bold text-[#10100D] block">Approve Proof</span>
                <span className="text-[10px] text-[#696969]">Review bank slip</span>
              </button>

              <button
                onClick={() => onNavigate('testimonials')}
                className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] text-left hover:border-[#DDF77B] transition-colors"
              >
                <MessageSquareQuote className="w-4 h-4 text-[#6747C7] mb-1" />
                <span className="text-xs font-bold text-[#10100D] block">Add Testimonial</span>
                <span className="text-[10px] text-[#696969]">Video or written</span>
              </button>

              <button
                onClick={() => onNavigate('settings')}
                className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] text-left hover:border-[#DDF77B] transition-colors"
              >
                <Inbox className="w-4 h-4 text-blue-600 mb-1" />
                <span className="text-xs font-bold text-[#10100D] block">WhatsApp Number</span>
                <span className="text-[10px] text-[#696969]">Change CTA phone</span>
              </button>

              <button
                onClick={() => onNavigate('backup')}
                className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] text-left hover:border-[#DDF77B] transition-colors"
              >
                <Clock className="w-4 h-4 text-amber-600 mb-1" />
                <span className="text-xs font-bold text-[#10100D] block">Export Backup</span>
                <span className="text-[10px] text-[#696969]">JSON & CSV export</span>
              </button>
            </div>
          </div>

          {/* Recent Audit Trail */}
          <div className="bg-white rounded-3xl border border-[#EAE8E2] p-6 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-editorial text-base font-bold text-[#10100D]">Recent Activity Trail</h3>
              <button
                onClick={() => onNavigate('security')}
                className="text-[11px] text-[#6747C7] font-semibold hover:underline"
              >
                All Logs
              </button>
            </div>
            <div className="space-y-2">
              {recentLogs.slice(0, 4).map((log: any) => (
                <div key={log.id} className="text-xs text-[#696969] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                  <div className="truncate">
                    <span className="text-[#10100D] font-semibold">{log.action}: </span>
                    <span>{log.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
