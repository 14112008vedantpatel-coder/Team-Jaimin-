import React from 'react';
import { ShieldCheck, Check, X, AlertTriangle } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Statutory Consumer Disclosures
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Transparency & Truth In Business
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            We adhere strictly to the Consumer Protection (Direct Selling) Rules, 2021 and the 2023 amendment notified by the Ministry of Consumer Affairs, Food & Public Distribution.
          </p>
        </div>

        {/* What This Is vs What This Is Not Bento Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* What This Opportunity IS */}
          <div className="bg-[#FAF9F6] border border-emerald-200 rounded-3xl p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#10100D]">What This Opportunity IS</h3>
                <p className="text-xs text-emerald-700 font-medium">Legitimate direct commerce distribution</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#171717]">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>An independent distributor partnership with zero registration charges.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Product sales-based commissions from genuine consumer demand.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>TDS deducted on all earnings with official quarterly Form 16A certificates.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>30-day consumer return policy and buyback guarantee on inventory.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Practical digital education in negotiation, sales psychology, and leadership.</span>
              </div>
            </div>
          </div>

          {/* What This Opportunity IS NOT */}
          <div className="bg-[#FAF9F6] border border-rose-200 rounded-3xl p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#10100D]">What This Opportunity IS NOT</h3>
                <p className="text-xs text-rose-700 font-medium">Strictly prohibited business practices</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#171717]">
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>NOT an investment scheme, Ponzi scheme, or money-circulation pyramid.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>NOT fixed salaried employment or a government job.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>NO guaranteed returns, get-rich-quick claims, or passive lottery payouts.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>NO mandatory stock purchase, package loading, or hidden fees.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>NO compensation paid solely for recruitment without actual product sales.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Note */}
        <div className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 text-xs text-[#696969] leading-relaxed flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#10100D] font-semibold block mb-0.5">Indian Direct Selling Compliance Notice:</strong>
            Under Rule 5(1) of the Consumer Protection (Direct Selling) Rules, 2021, every direct seller must provide genuine identification, disclose the legal name of the entity, refrain from making false representations, and never solicit money for registration. TEAM JAIMIN adheres completely to these statutory requirements.
          </div>
        </div>

      </div>
    </section>
  );
};
