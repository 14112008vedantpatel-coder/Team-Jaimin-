import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const FloatingWhatsApp: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const [isOpen, setIsOpen] = useState(false);

  const leaderName = siteData?.leader_profile?.name || 'JAIMIN PATEL';

  const quickTopics = [
    { label: 'General Business Overview', key: 'hero' },
    { label: 'Opportunity & Skills Taught', key: 'opportunity' },
    { label: 'Joining Process & Eligibility', key: 'general' },
    { label: 'Company Credentials & Due Diligence', key: 'company' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 animate-fade-in overflow-hidden text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={siteData?.leader_profile?.portrait_url || '/jaimin-portrait.jpg'}
                  alt={leaderName}
                  className="w-9 h-9 rounded-full object-cover object-top border border-slate-300 bg-slate-100"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-editorial text-sm font-bold text-slate-900 uppercase">{leaderName}</h4>
                <p className="text-[10px] text-emerald-700 font-semibold">Replies promptly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Hi! Ready to build your digital income with TEAM JAIMIN? Tap a topic below to chat directly:
          </p>

          <div className="space-y-1.5">
            {quickTopics.map((topic, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(topic.key)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 flex items-center justify-between transition-colors"
              >
                <span>{topic.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Spam • Direct Founder Mentorship</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-white relative group cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-white text-white" />
        )}
      </button>
    </div>
  );
};
