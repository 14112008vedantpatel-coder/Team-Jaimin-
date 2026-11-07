import React, { useState } from 'react';
import { ShieldCheck, FileText, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { CompanyDocument } from '../types';
import { DocumentViewerModal } from './DocumentViewerModal';

export const CompanyDocumentsSection: React.FC = () => {
  const { siteData } = useSite();
  const documents = siteData?.company_documents || [];
  const [selectedDoc, setSelectedDoc] = useState<CompanyDocument | null>(null);

  return (
    <section id="company-proof" className="py-20 lg:py-28 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal & Regulatory Due Diligence
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Company Proof & Transparency
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Inspect verified corporate registrations, GST filings, and micro-enterprise certificates. You can click any certificate to inspect the document and cross-verify on official government portals.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={doc.id || idx}
              className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 hover:border-[#DDF77B] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Preview */}
                <div
                  onClick={() => setSelectedDoc(doc)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-[#EAE8E2] mb-5 cursor-pointer shadow-xs"
                >
                  <img
                    src={doc.file_url}
                    alt={doc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-[#10100D] text-xs font-bold shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      View Document
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold text-[#6747C7] uppercase tracking-wider">
                    {doc.category}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#10100D] mt-0.5 leading-snug">
                    {doc.title}
                  </h3>
                </div>

                <div className="space-y-1 text-xs text-[#696969] mb-4">
                  <p className="font-mono text-[#10100D] font-medium text-[11px]">
                    {doc.document_number}
                  </p>
                  <p className="text-[11px] leading-tight text-[#696969]">
                    Authority: {doc.issuing_authority}
                  </p>
                </div>
              </div>

              {/* Document Card Footer */}
              <div className="pt-4 border-t border-[#EAE8E2] space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#696969]">
                  <span>Issued: {doc.issue_date}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {doc.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-white border border-[#EAE8E2] text-[11px] font-semibold text-[#171717] hover:bg-[#FAF9F6] transition-colors"
                  >
                    Inspect
                  </button>
                  {doc.verification_url && (
                    <a
                      href={doc.verification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xl bg-white border border-[#EAE8E2] text-[#696969] hover:text-[#10100D] hover:border-[#10100D] transition-colors"
                      title="Verify on government portal"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Due Diligence Notice */}
        <div className="mt-12 p-5 bg-[#FAF9F6] rounded-2xl border border-[#EAE8E2] text-center text-xs text-[#696969] max-w-3xl mx-auto">
          <p>
            <strong>Statutory Notice:</strong> Corporate registration and Udyam MSME status establish legal business existence under Indian law and do not constitute a blanket endorsement or guarantee of commercial success by any government ministry.
          </p>
        </div>

      </div>

      {/* Document Viewer Modal */}
      {selectedDoc && (
        <DocumentViewerModal
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </section>
  );
};
