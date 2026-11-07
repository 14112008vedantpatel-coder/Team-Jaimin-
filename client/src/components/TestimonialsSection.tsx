import React, { useState } from 'react';
import { PlayCircle, Star, Quote, Sparkles, MessageCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Testimonial } from '../types';
import { VideoPlayerModal } from './VideoPlayerModal';

export const TestimonialsSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const testimonials = siteData?.testimonials || [];
  const teamMembers = siteData?.team_members || [];

  const [activeVideoModal, setActiveVideoModal] = useState<Testimonial | null>(null);

  const featured = testimonials.find(t => t.is_featured) || testimonials[0];
  const secondaries = testimonials.filter(t => t.id !== featured?.id);

  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Authentic Member Journeys
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Real People. Real Experiences.
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Hear directly from students, working professionals, and homemakers who applied our step-by-step digital frameworks in their daily lives.
          </p>
        </div>

        {/* Featured Video Testimonial Card */}
        {featured && (
          <div className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 mb-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Video Thumbnail & Play Trigger */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => setActiveVideoModal(featured)}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-black cursor-pointer group shadow-md"
                >
                  <img
                    src={featured.thumbnail_url || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'}
                    alt={featured.name}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#DDF77B] text-[#10100D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 fill-[#10100D]" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                      Video Experience • 3:45 mins
                    </span>
                    <span className="font-mono bg-[#DDF77B] text-[#10100D] font-bold px-2 py-0.5 rounded">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Quote Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(featured.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <div className="relative pl-6 italic text-[#171717] text-base sm:text-lg leading-relaxed font-editorial">
                  <Quote className="w-5 h-5 text-[#DDF77B] absolute left-0 top-0 fill-[#DDF77B] -scale-x-100" />
                  "{featured.content}"
                </div>

                <div className="pt-2 border-t border-[#EAE8E2]">
                  <h3 className="font-editorial text-lg font-bold text-[#10100D]">{featured.name}</h3>
                  <p className="text-xs text-[#696969]">{featured.role} • {featured.city}</p>
                </div>

                <button
                  onClick={() => setActiveVideoModal(featured)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#10100D] text-white hover:bg-[#10100D]/90 transition-colors"
                >
                  <PlayCircle className="w-4 h-4 text-[#DDF77B]" />
                  <span>Watch Video Story</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {secondaries.map((t, idx) => (
            <div
              key={t.id || idx}
              className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 hover:border-[#DDF77B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {t.type === 'video' ? (
                    <button
                      onClick={() => setActiveVideoModal(t)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6747C7] hover:underline"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Watch</span>
                    </button>
                  ) : (
                    <span className="text-[10px] font-semibold text-[#696969] bg-white px-2 py-0.5 rounded border border-[#EAE8E2]">
                      Written Feedback
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#171717] italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE8E2] flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-sm font-bold text-[#10100D]">{t.name}</h4>
                  <p className="text-[11px] text-[#696969]">{t.role} • {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Team Associate Spotlight */}
        <div className="border-t border-[#EAE8E2] pt-14">
          <div className="text-center mb-8">
            <h3 className="font-editorial text-2xl font-bold text-[#10100D]">
              Community Associate Profiles
            </h3>
            <p className="text-xs text-[#696969] mt-1">
              Active associates building their secondary income alongside day jobs and education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id || idx}
                className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-5 text-center flex flex-col items-center justify-between hover:border-[#DDF77B] transition-colors"
              >
                <div>
                  <img
                    src={member.avatar_url}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover mb-4 border border-[#EAE8E2] shadow-xs"
                  />
                  <h4 className="font-editorial text-base font-bold text-[#10100D]">{member.name}</h4>
                  <p className="text-[11px] font-medium text-[#6747C7] mb-1">{member.role}</p>
                  <p className="text-[11px] text-[#696969] mb-3">{member.city}</p>
                  <p className="text-xs text-[#171717] italic line-clamp-3">
                    "{member.quote}"
                  </p>
                </div>

                <div className="w-full pt-3 mt-4 border-t border-[#EAE8E2] text-[10px] font-semibold text-[#696969]">
                  {member.period}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <VideoPlayerModal
          testimonial={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
        />
      )}
    </section>
  );
};
