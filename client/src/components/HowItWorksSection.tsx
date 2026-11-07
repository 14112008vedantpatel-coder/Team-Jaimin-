import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const HowItWorksSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const steps = siteData?.how_it_works || [];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#10100D] uppercase tracking-wider mb-3">
            Onboarding Roadmap
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            How It Works — Step by Step
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            A transparent, self-paced onboarding process with zero upfront financial commitments. Everything is laid out so you can make an informed, confident decision.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.id || idx}
              className="bg-white border border-[#EAE8E2] rounded-3xl p-7 relative hover:border-[#DDF77B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#10100D] text-[#DDF77B] flex items-center justify-center font-editorial font-bold text-lg shadow-xs">
                    {step.step_number || `0${idx + 1}`}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[#696969]">
                    {step.timeframe || `Phase ${idx + 1}`}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6747C7] block">
                    {step.badge || 'Milestone'}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-[#10100D] mt-0.5">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#696969] leading-relaxed mt-2.5">
                  {step.description}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="pt-5 mt-5 border-t border-[#EAE8E2] flex items-center justify-between text-xs text-[#696969]">
                <span className="flex items-center gap-1.5 font-medium text-[#10100D]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Structured Phase
                </span>
                <span className="text-[11px]">Step {idx + 1} of {steps.length}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-12 bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#10100D]">
              Ready to begin Step 01?
            </h4>
            <p className="text-xs sm:text-sm text-[#696969] mt-1">
              Connect directly with Jamin on WhatsApp to receive the initial 15-minute video orientation.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#DDF77B] text-[#10100D] font-bold text-xs sm:text-sm hover:bg-[#CFF46B] transition-all shadow-xs"
          >
            <span>Start Step 01 on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
