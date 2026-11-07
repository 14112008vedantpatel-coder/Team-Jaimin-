import React from 'react';
import { Building2, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle, FileCheck2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const CompanyProfileSection: React.FC = () => {
  const { siteData } = useSite();
  const company = siteData?.company_profile;

  return (
    <section id="company" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Corporate Partner Transparency
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            About Our Corporate Partner
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Team Jamin operates as an independent distribution team partnering exclusively with verified, legally compliant enterprises registered under the Ministry of Corporate Affairs, Government of India.
          </p>
        </div>

        {/* Legal Entity Card */}
        <div className="bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Statutory Independence Clarification Banner */}
          <div className="p-4 bg-amber-50/90 border border-amber-200/80 rounded-2xl flex items-start gap-3 mb-8 text-xs text-amber-900 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Important Transparency Distinction:</strong>
              This website is published by <strong>Team Jamin</strong> (an independent direct distributor community). It is NOT the official corporate portal of the manufacturing company. We clearly separate the independent distribution network from the corporate manufacturer in accordance with the Consumer Protection (Direct Selling) Rules, 2021 & 2023.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Entity Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#696969]">Partner Enterprise</span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#10100D] mt-1">
                  {company?.company_name || 'Vedic Roots Enterprise Private Limited'}
                </h3>
                <p className="text-xs font-semibold text-[#6747C7] mt-0.5">
                  Brand: {company?.brand_name || 'Vedic Roots Wellness'}
                </p>
              </div>

              {/* Corporate Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#EAE8E2]">
                  <span className="text-[10px] font-bold text-[#696969] uppercase tracking-wider block mb-1">
                    Corporate CIN (MCA)
                  </span>
                  <div className="font-mono text-xs font-bold text-[#10100D]">
                    {company?.cin || 'U51909GJ2021PTC123456'}
                  </div>
                </div>

                <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#EAE8E2]">
                  <span className="text-[10px] font-bold text-[#696969] uppercase tracking-wider block mb-1">
                    GSTIN Identification
                  </span>
                  <div className="font-mono text-xs font-bold text-[#10100D]">
                    {company?.gstin || '24AAACV1234F1Z5'}
                  </div>
                </div>

                <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#EAE8E2]">
                  <span className="text-[10px] font-bold text-[#696969] uppercase tracking-wider block mb-1">
                    MSME / Udyam Reg.
                  </span>
                  <div className="font-mono text-xs font-bold text-[#10100D]">
                    {company?.udyam_reg || 'UDYAM-GJ-01-0089241'}
                  </div>
                </div>

                <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-[#EAE8E2]">
                  <span className="text-[10px] font-bold text-[#696969] uppercase tracking-wider block mb-1">
                    Incorporation Date
                  </span>
                  <div className="text-xs font-bold text-[#10100D]">
                    {company?.incorporation_date || '14 May 2021'}
                  </div>
                </div>
              </div>

              {/* Office & Category */}
              <div className="space-y-3 text-xs text-[#696969]">
                <div>
                  <strong className="text-[#10100D] block mb-0.5">Registered Corporate Office:</strong>
                  {company?.registered_office || '402, Titanium Business Park, Corporate Road, Prahlad Nagar, Ahmedabad, Gujarat 380015'}
                </div>

                <div>
                  <strong className="text-[#10100D] block mb-0.5">Core Product Category:</strong>
                  {company?.category || 'Ayurvedic Wellness, Personal Care & Daily Nutrition Essentials'}
                </div>

                <div>
                  <strong className="text-[#10100D] block mb-0.5">Operating Model:</strong>
                  {company?.operating_model || 'Direct-to-Consumer (D2C) & Multi-Tier Direct Selling under DCA Guidelines'}
                </div>
              </div>

              {/* Verification Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {company?.corporate_website && (
                  <a
                    href={company.corporate_website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF9F6] hover:bg-[#EAE8E2] border border-[#EAE8E2] text-[#171717] transition-colors"
                  >
                    <span>Visit Corporate Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href="#company-proof"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF9F6] hover:bg-[#EAE8E2] border border-[#EAE8E2] text-[#171717] transition-colors"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Inspect Official Documents</span>
                </a>
              </div>
            </div>

            {/* Right Column: "Why I Work With This Company" Card */}
            <div className="lg:col-span-5 bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-[#EAE8E2] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#10100D] uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#6747C7]" />
                <span>Why I Work With This Company</span>
              </div>

              <div className="text-xs sm:text-sm text-[#171717] leading-relaxed italic bg-white p-5 rounded-2xl border border-[#EAE8E2] shadow-xs">
                "{company?.why_work_statement ||
                  'I chose to partner with Vedic Roots after evaluating 15+ organizations. Their manufacturing is GMP & ISO certified, their compensation plan rewards genuine customer consumption rather than speculative recruitment, and settlements are made punctually every Tuesday directly to bank accounts.'}"
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#696969]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero compulsory starter kit purchases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent 30-day consumer refund policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified ISO 9001 & GMP manufacturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All payouts credited after statutory TDS</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
