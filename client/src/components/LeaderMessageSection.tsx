import React from 'react';
import { Quote, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const LeaderMessageSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const leader = siteData?.leader_profile;

  return (
    <section className="py-20 lg:py-24 bg-[#10100D] text-white overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#DDF77B]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/10">
            <img
              src={leader?.portrait_url || '/jaimin-portrait.jpg'}
              alt={leader?.name || 'JAIMIN PATEL'}
              className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-[#DDF77B] shadow-lg bg-white"
            />
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#DDF77B] block mb-1">
                Personal Word From The Founder
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                "Direct selling is not about convincing everyone; it is about finding individuals ready for disciplined growth."
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans-body">
            <p>
              When I began this journey, I had endless questions: Is this legal? Will people respect my work? Can a student realistically earn alongside exams?
            </p>
            <p>
              The difference between people who struggle and those who succeed lies in <strong>systems and ethics</strong>. When you represent certified products that people genuinely need, and explain the compensation structure with 100% honesty, you earn both dignified income and immense personal respect.
            </p>
            <p className="font-medium text-white">
              My promise to every mentee joining TEAM JAIMIN is complete transparency: no false claims, no overnight lottery promises, but relentless, daily guidance until you achieve competence.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-editorial text-base font-bold text-[#DDF77B]">{leader?.name || 'JAIMIN PATEL'}</div>
              <p className="text-[11px] text-neutral-400">Direct Selling Mentor & Founder, TEAM JAIMIN</p>
            </div>

            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#DDF77B] text-[#10100D] font-bold text-xs sm:text-sm hover:bg-[#CFF46B] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-[#10100D]" />
              <span>Connect Personally With JAIMIN</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
