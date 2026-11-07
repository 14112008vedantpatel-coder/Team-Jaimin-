import React, { useState } from 'react';
import { Calendar, Tag, Eye, X, Video } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { TrainingMedia } from '../types';

export const TrainingGallerySection: React.FC = () => {
  const { siteData } = useSite();
  const mediaItems = siteData?.training_media || [];
  const [activeMedia, setActiveMedia] = useState<TrainingMedia | null>(null);

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7] uppercase tracking-wider mb-3">
            Ecosystem in Action
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Live Training & Team Gatherings
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            From daily interactive webinars to regional breakthrough workshops and annual conventions—experience the vibrant learning culture of Team Jamin.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {mediaItems.map((item, idx) => {
            // Asymmetric col spanning: alternate between 7 and 5 cols
            const isWide = idx % 3 === 0;
            const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={item.id || idx}
                onClick={() => setActiveMedia(item)}
                className={`${colSpanClass} bg-white rounded-3xl border border-[#EAE8E2] overflow-hidden shadow-xs hover:border-[#DDF77B] hover:shadow-lg transition-all cursor-pointer group flex flex-col`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={item.file_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-[#10100D] backdrop-blur-xs shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-medium flex items-center gap-1 opacity-90 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </p>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#696969] leading-relaxed mb-4">
                    {item.caption}
                  </p>

                  <div className="pt-3 border-t border-[#EAE8E2] flex items-center justify-between text-xs font-semibold text-[#10100D]">
                    <span className="group-hover:text-[#6747C7] transition-colors flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      Enlarge Photo
                    </span>
                    <span className="text-[11px] text-[#696969] font-normal">Team Jamin Archives</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAE8E2]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE8E2] bg-[#FAF9F6]">
              <div>
                <h4 className="font-editorial text-lg font-bold text-[#10100D]">{activeMedia.title}</h4>
                <p className="text-xs text-[#696969]">{activeMedia.category} • {activeMedia.date}</p>
              </div>
              <button
                onClick={() => setActiveMedia(null)}
                className="p-2 text-[#696969] hover:text-[#10100D] rounded-full hover:bg-[#EAE8E2] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-black/5 flex items-center justify-center">
              <img
                src={activeMedia.file_url}
                alt={activeMedia.title}
                className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-md"
              />
            </div>

            <div className="p-6 bg-white border-t border-[#EAE8E2]">
              <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">{activeMedia.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
