import React from 'react';
import { X, ShieldAlert, CheckCircle, FileText } from 'lucide-react';
import { EarningProof } from '../types';

interface EarningProofModalProps {
  proof: EarningProof | null;
  onClose: () => void;
}

export const EarningProofModal: React.FC<EarningProofModalProps> = ({ proof, onClose }) => {
  if (!proof) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#EAE8E2] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE8E2] bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF77B]/60 flex items-center justify-center text-[#10100D] font-bold">
              ₹
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-editorial text-lg font-bold text-[#10100D]">{proof.member_name}</h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  <CheckCircle className="w-3 h-3" />
                  Verified Payout
                </span>
              </div>
              <p className="text-xs text-[#696969]">
                {proof.category} • <strong className="text-[#10100D]">{proof.amount}</strong> ({proof.date})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#696969] hover:text-[#10100D] hover:bg-[#EAE8E2] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Evidence Preview */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Statutory Income Disclaimer Banner (PRD Section 4.8 & 13.1) */}
          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-amber-900 text-xs leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">Mandatory Statutory Disclosure:</strong>
              Earnings shown are individual examples and do not represent guaranteed or typical results. Actual income varies based on individual activity, customer base, business performance and adherence to direct selling guidelines. These examples should not be interpreted as a promise of future income.
            </div>
          </div>

          {/* Redacted Evidence Screenshot */}
          <div className="rounded-2xl border border-[#EAE8E2] overflow-hidden bg-[#FAF9F6] p-2 flex justify-center">
            <img
              src={proof.proof_image_url}
              alt={`Earning proof of ${proof.member_name}`}
              className="max-h-[350px] w-auto rounded-xl object-contain shadow-sm"
            />
          </div>

          {/* Redaction Notice & Details */}
          <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#EAE8E2] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#10100D] font-semibold">
              <FileText className="w-4 h-4 text-[#6747C7]" />
              <span>Redaction & Compliance Details:</span>
            </div>
            <p className="text-[#696969] font-mono bg-white p-2.5 rounded-lg border border-[#EAE8E2]">
              {proof.redacted_info}
            </p>
            <p className="text-[11px] text-[#696969]">
              In accordance with privacy standards and Indian IT security practices, confidential personal account numbers, IFSC digits, and transaction hashes have been safely redacted.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF9F6] border-t border-[#EAE8E2] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-[#10100D] text-white hover:bg-[#10100D]/90 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
