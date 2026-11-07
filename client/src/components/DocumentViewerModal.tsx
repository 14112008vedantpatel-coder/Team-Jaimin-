import React from 'react';
import { X, ExternalLink, ShieldCheck, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { CompanyDocument } from '../types';

interface DocumentViewerModalProps {
  document: CompanyDocument | null;
  onClose: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({ document, onClose }) => {
  const [zoom, setZoom] = React.useState<number>(1);
  const [rotation, setRotation] = React.useState<number>(0);

  if (!document) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#EAE8E2]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#DDF77B]/40 rounded-xl text-[#10100D]">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#10100D]">{document.title}</h3>
              <p className="text-xs text-[#696969]">
                {document.issuing_authority} • <span className="font-medium text-[#10100D]">{document.document_number}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {document.verification_url && (
              <a
                href={document.verification_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF9F6] hover:bg-[#EAE8E2] text-[#171717] border border-[#EAE8E2] transition-colors"
              >
                <span>Verify on Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#696969] hover:text-[#10100D] hover:bg-[#EAE8E2] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Viewer */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-[#10100D]/5 flex items-center justify-center min-h-[350px]">
          <div
            className="transition-transform duration-200 ease-out origin-center max-w-full"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
          >
            <img
              src={document.file_url}
              alt={document.title}
              className="max-h-[60vh] w-auto rounded-lg shadow-lg object-contain bg-white border border-[#EAE8E2]"
            />
          </div>

          {/* Floating Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-[#EAE8E2]">
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-[#171717] hover:bg-[#FAF9F6] rounded-full transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold px-2 text-[#696969]">{Math.round(zoom * 100)}%</span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-[#171717] hover:bg-[#FAF9F6] rounded-full transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-[#EAE8E2] mx-1" />
            <button
              onClick={handleRotate}
              className="p-1.5 text-[#171717] hover:bg-[#FAF9F6] rounded-full transition-colors"
              title="Rotate"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-white border-t border-[#EAE8E2] text-xs text-[#696969] flex flex-wrap items-center justify-between gap-3">
          <div>
            <span>Issued: <strong className="text-[#171717]">{document.issue_date}</strong></span>
            <span className="mx-2">•</span>
            <span>Validity: <strong className="text-[#171717]">{document.expiry_date}</strong></span>
          </div>
          <p className="text-[11px] text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-200">
            Official public filing record. Presented for transparency and verification purposes.
          </p>
        </div>
      </div>
    </div>
  );
};
