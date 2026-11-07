import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const HowToJoinSection: React.FC = () => {
  const { getWhatsAppUrl } = useSite();

  const steps = [
    {
      num: '01',
      title: 'Message Me on WhatsApp',
      desc: 'Send an initial inquiry to initiate an informal conversation and introduce your current profession/study background.'
    },
    {
      num: '02',
      title: 'Watch the Orientation Breakdown',
      desc: 'Review the detailed 20-minute video explaining the company, product lines, and performance-based commission calculation.'
    },
    {
      num: '03',
      title: 'Review Official Compliance & KYC',
      desc: 'Verify corporate incorporation and complete the free distributor registration on the partner portal (strictly ₹0 fee).'
    },
    {
      num: '04',
      title: 'Begin 7-Day Bootcamp Training',
      desc: 'Access the private resource portal, script playbooks, and attend daily 8:30 PM live mentoring calls with Jamin.'
    },
    {
      num: '05',
      title: 'Start Sharing & Tracking Payouts',
      desc: 'Recommend products to consumers using digital tools and receive scheduled Tuesday bank payouts via NEFT.'
    }
  ];

  return (
    <section id="how-to-join" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#10100D] uppercase tracking-wider mb-3">
            Getting Started
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            How to Get Started With Team Jamin
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Joining our mentorship community is structured, pressure-free, and legally compliant. There are no mandatory purchases or membership charges.
          </p>
        </div>

        {/* 5 Step Card Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE8E2] rounded-3xl p-6 relative hover:border-[#DDF77B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-editorial font-bold text-base mb-4">
                  {s.num}
                </div>
                <h4 className="font-editorial text-base font-bold text-[#10100D] mb-2 leading-snug">
                  {s.title}
                </h4>
                <p className="text-xs text-[#696969] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAE8E2] text-[10px] text-[#696969] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Cost Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="bg-[#10100D] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-editorial text-2xl font-bold text-white">
              Discuss the Joining Process Directly
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              We never take money or collect card numbers on this website. All consultations occur directly through official WhatsApp communication.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('general', 'Hello Jamin! I want to discuss the 5-step joining process and understand the orientation details.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#DDF77B] text-[#10100D] font-bold text-xs sm:text-sm hover:bg-[#CFF46B] transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-[#10100D]" />
            <span>Discuss the Joining Process</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
