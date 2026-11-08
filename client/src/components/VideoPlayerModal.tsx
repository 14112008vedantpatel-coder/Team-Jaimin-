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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-900">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-700 border border-emerald-200">
              <PlayCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <h3 className="font-editorial text-lg font-bold text-slate-900">{testimonial.name}</h3>
              <p className="text-xs text-slate-500">
                {testimonial.role} • {testimonial.city}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
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
        <div className="p-6 bg-white space-y-3 text-left">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>

          <div className="relative pl-6 italic text-slate-800 text-sm leading-relaxed">
            <Quote className="w-4 h-4 text-slate-300 absolute left-0 top-0 transform -scale-x-100 fill-slate-200" />
            "{testimonial.content}"
          </div>

          <p className="text-[11px] text-slate-500">
            Genuine participant review shared with consent. Individual experiences vary based on effort and skills.
          </p>
        </div>
      </div>
    </div>
  );
};
