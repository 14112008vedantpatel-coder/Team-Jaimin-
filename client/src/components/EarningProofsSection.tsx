import React, { useState } from 'react';
import { ShieldAlert, Eye, CheckCircle2, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { EarningProof } from '../types';
import { EarningProofModal } from './EarningProofModal';

export const EarningProofsSection: React.FC = () => {
  const { siteData } = useSite();
  const proofs = siteData?.earning_proofs || [];

  const [activeFilter, setActiveFilter] = useState<'all' | 'daily' | 'weekly' | 'monthly'>('all');
  const [selectedProof, setSelectedProof] = useState<EarningProof | null>(null);

  const filtered = proofs.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.period === activeFilter;
  });

  return (
    <section id="team-results" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Bank Settlements
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Team Earning Proofs
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Explore documented earning examples shared by participating team members with personal identification details safely redacted for privacy.
          </p>
        </div>

        {/* Mandatory Statutory Earnings Disclosure Banner (PRD Section 4.8 & 13.1) */}
        <div className="max-w-4xl mx-auto mb-10 p-5 bg-amber-50 border border-amber-200/90 rounded-3xl flex items-start gap-4 text-xs sm:text-sm text-amber-950 shadow-xs">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold text-amber-900 block">
              Mandatory Statutory Income Disclosure:
            </strong>
            <p className="leading-relaxed text-xs">
              {siteData?.site_settings?.disclaimers?.earnings ||
                'Earnings shown are individual examples and do not represent guaranteed or typical results. Actual income varies based on individual activity, skills, eligibility, business performance and other applicable factors. These examples should not be interpreted as a promise of future income.'}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'daily', label: 'Daily Examples' },
            { id: 'weekly', label: 'Weekly Examples' },
            { id: 'monthly', label: 'Monthly Examples' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#10100D] text-[#DDF77B] shadow-xs'
                  : 'bg-white text-[#171717] border border-[#EAE8E2] hover:bg-[#FAF9F6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Proofs Grid / Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#EAE8E2] max-w-md mx-auto">
            <p className="text-xs text-[#696969]">No records found for the selected filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((proof, idx) => (
              <div
                key={proof.id || idx}
                onClick={() => setSelectedProof(proof)}
                className="bg-white border border-[#EAE8E2] rounded-3xl p-5 hover:border-[#DDF77B] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Evidence Thumbnail Preview */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FAF9F6] border border-[#EAE8E2] mb-4">
                    <img
                      src={proof.proof_image_url}
                      alt={proof.member_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#10100D] text-xs font-bold shadow-md">
                        <Eye className="w-3.5 h-3.5" />
                        Inspect Proof
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#10100D]/80 text-[#DDF77B] backdrop-blur-xs">
                        {proof.period}
                      </span>
                    </div>
                  </div>

                  {/* Amount & Period */}
                  <div className="mb-2">
                    <div className="text-2xl font-editorial font-bold text-[#10100D]">
                      {proof.amount}
                    </div>
                    <span className="text-[11px] font-semibold text-[#6747C7]">
                      {proof.category}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-[#10100D] mb-1">
                    {proof.member_name}
                  </div>
                  <p className="text-[11px] text-[#696969] mb-2">{proof.date}</p>
                </div>

                {/* Card Footer Redaction Badge */}
                <div className="pt-3 border-t border-[#EAE8E2] flex items-center justify-between text-[11px] text-[#696969]">
                  <span className="truncate max-w-[170px] font-mono text-[10px]">
                    {proof.redacted_info}
                  </span>
                  <span className="font-semibold text-emerald-700">Verified</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      {selectedProof && (
        <EarningProofModal
          proof={selectedProof}
          onClose={() => setSelectedProof(null)}
        />
      )}
    </section>
  );
};
