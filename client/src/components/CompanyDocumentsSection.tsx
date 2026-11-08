import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Eye, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { CompanyDocument } from '../types';
import { DocumentViewerModal } from './DocumentViewerModal';

export const CompanyDocumentsSection: React.FC = () => {
  const { siteData } = useSite();
  const documents = siteData?.company_documents || [];
  const [selectedDoc, setSelectedDoc] = useState<CompanyDocument | null>(null);

  return (
    <section id="company-proof" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-emerald-800 uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Certifications & AI Verification</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Company Proof & Transparency
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Inspect our verified Government of India Udyam Registration Certificate alongside independent AI authenticity reviews from OpenAI ChatGPT and Google Gemini. Click any document to view in full resolution.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={doc.id || idx}
              className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group text-left"
            >
              <div>
                {/* Thumbnail Preview */}
                <div
                  onClick={() => setSelectedDoc(doc)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200 mb-5 cursor-pointer shadow-xs group-hover:border-slate-300 transition-all"
                >
                  <img
                    src={doc.file_url}
                    alt={doc.title}
                    className="w-full h-full object-contain sm:object-cover sm:object-top group-hover:scale-103 transition-transform duration-300 bg-white"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      View Proof
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-1">
                    {doc.category}
                  </span>
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {doc.title}
                  </h3>
                </div>

                <div className="space-y-1 text-xs text-slate-600 mb-4">
                  <p className="font-mono text-slate-900 font-bold text-[11px] bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 truncate">
                    {doc.document_number}
                  </p>
                  <p className="text-[11px] leading-tight text-slate-500 pt-1">
                    Authority: {doc.issuing_authority}
                  </p>
                </div>
              </div>

              {/* Document Card Footer */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Issued: {doc.issue_date}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {doc.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    Inspect
                  </button>
                  {doc.verification_url && (
                    <a
                      href={doc.verification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
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

        {/* Notice */}
        <div className="mt-12 p-5 bg-white rounded-2xl border border-slate-200 text-center text-xs text-slate-600 max-w-3xl mx-auto shadow-xs">
          <p>
            <strong className="text-slate-900">Statutory Notice:</strong> Corporate registration and Udyam MSME status establish legal business existence under Indian law and do not constitute a blanket endorsement or guarantee of commercial success by any government ministry.
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
