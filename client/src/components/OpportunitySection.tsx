import React from 'react';
import { GraduationCap, Workflow, Headset, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#6747C7]" />,
  Workflow: <Workflow className="w-6 h-6 text-[#38C9E8]" />,
  Headset: <Headset className="w-6 h-6 text-amber-500" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
};

export const OpportunitySection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const opportunities = siteData?.business_opportunities || [];

  return (
    <section id="opportunity" className="py-20 lg:py-28 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7] uppercase tracking-wider mb-3">
            What We Do
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            The Business Opportunity Ecosystem
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            A structured framework designed to teach you consumer psychology, high-leverage digital communication, and transparent direct commerce—all backed by our community ecosystem.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {opportunities.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-7 sm:p-9 hover:border-[#DDF77B] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE8E2] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <GraduationCap className="w-6 h-6 text-[#6747C7]" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#696969] bg-white px-2.5 py-1 rounded-full border border-[#EAE8E2]">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold text-[#6747C7] uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#10100D] mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#696969] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bullet Points */}
                {item.points && item.points.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-[#EAE8E2]">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#171717]">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 mt-6 border-t border-[#EAE8E2]/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#696969]">Hands-on Execution</span>
                <a
                  href={getWhatsAppUrl('opportunity')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#10100D] hover:text-[#6747C7] transition-colors"
                >
                  <span>Inquire Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Opportunity Ethics Disclosure */}
        <div className="mt-10 p-5 bg-white border border-[#EAE8E2] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#696969]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>
              <strong>Zero Inventory Burden:</strong> No distributor is required or encouraged to purchase inventory beyond personal consumption. Products are dispatched directly to end consumers.
            </span>
          </div>
          <a
            href={getWhatsAppUrl('opportunity')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-[#DDF77B] text-[#10100D] font-bold hover:bg-[#CFF46B] transition-colors"
          >
            Ask Questions
          </a>
        </div>

      </div>
    </section>
  );
};
