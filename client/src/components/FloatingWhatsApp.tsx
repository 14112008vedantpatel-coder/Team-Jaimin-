import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const FloatingWhatsApp: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const [isOpen, setIsOpen] = useState(false);

  const leaderName = siteData?.leader_profile?.name || 'Jamin Patel';

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
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-[#EAE8E2] p-5 animate-fade-in overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE8E2] mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={siteData?.leader_profile?.portrait_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'}
                  alt={leaderName}
                  className="w-9 h-9 rounded-full object-cover border border-[#EAE8E2]"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-editorial text-sm font-bold text-[#10100D]">{leaderName}</h4>
                <p className="text-[10px] text-emerald-600 font-semibold">Replies in ~15 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#696969] hover:text-[#10100D] rounded-full hover:bg-[#FAF9F6]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#696969] leading-relaxed mb-3">
            Hi! What would you like to explore today? Tap a topic below to chat directly:
          </p>

          <div className="space-y-1.5">
            {quickTopics.map((topic, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(topic.key)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2 rounded-xl bg-[#FAF9F6] hover:bg-[#DDF77B]/40 text-xs font-semibold text-[#171717] border border-[#EAE8E2] flex items-center justify-between transition-colors"
              >
                <span>{topic.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#696969]" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-[#EAE8E2] flex items-center justify-center gap-1 text-[10px] text-[#696969]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Spam • Direct WhatsApp Consultation</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#DDF77B] text-[#10100D] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all border-2 border-[#10100D] relative group"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-7 h-7 fill-[#10100D]" />
        )}
      </button>
    </div>
  );
};
