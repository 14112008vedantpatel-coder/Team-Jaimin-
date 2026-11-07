import React from 'react';
import { X, PlayCircle, Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

interface VideoPlayerModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ testimonial, onClose }) => {
  if (!testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white border border-[#EAE8E2] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE8E2] bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#DDF77B]/40 rounded-xl text-[#10100D]">
              <PlayCircle className="w-5 h-5 text-[#10100D]" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold text-[#10100D]">{testimonial.name}</h3>
              <p className="text-xs text-[#696969]">
                {testimonial.role} • {testimonial.city}
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

        {/* Video Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {testimonial.video_url ? (
            <iframe
              src={testimonial.video_url}
              title={`Video testimonial by ${testimonial.name}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="p-8 text-center text-white">
              <PlayCircle className="w-16 h-16 mx-auto mb-3 opacity-60" />
              <p className="text-sm">Video stream placeholder</p>
            </div>
          )}
        </div>

        {/* Testimonial Quote & Rating */}
        <div className="p-6 bg-white space-y-3">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>

          <div className="relative pl-6 italic text-[#171717] text-sm leading-relaxed">
            <Quote className="w-4 h-4 text-[#DDF77B] absolute left-0 top-0 transform -scale-x-100 fill-[#DDF77B]" />
            "{testimonial.content}"
          </div>

          <p className="text-[11px] text-[#696969]">
            Genuine participant experience shared with consent. Individual experiences vary.
          </p>
        </div>
      </div>
    </div>
  );
};
