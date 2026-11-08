import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, MoreVertical, ShieldCheck, Sparkles } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { VideoPlayerModal } from './VideoPlayerModal';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const { siteData } = useSite();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<Testimonial | null>(null);

  const featuredVideo: Testimonial = {
    id: 'feat_1',
    name: 'Priya Sharma (Student)',
    role: 'College Student',
    city: 'Jaipur, Rajasthan',
    type: 'video',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    content: 'Student review after joining TEAM JAIMIN. Started during college and earning weekly payouts with complete guidance.',
    rating: 5,
    is_featured: true,
    is_published: true,
    order_index: 1,
  };

  const secondaryVideos = [
    {
      id: 'sec_1',
      title: "Student's Review",
      caption: 'College 2nd Year Student',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
      badge: 'Student Review 🎓',
    },
    {
      id: 'sec_2',
      title: 'Police Officer Experience',
      caption: 'Police: Also Good Experience',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      badge: 'Police Officer 👮‍♂️',
    },
    {
      id: 'sec_3',
      title: 'Power of TEAM JAIMIN',
      caption: 'Working Professional',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      badge: 'Power of Team ❤️',
    },
  ];

  return (
    <section id="team-feedback" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8 lg:mb-10 text-left lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>Real Community Stories</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Team Feedback
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 mt-1 font-medium">
              Authentic video reviews recorded by members after joining TEAM JAIMIN.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Authentic Member Reviews</span>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Main Column: Featured Video Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-black shadow-xl border border-slate-300 aspect-[9/13] w-full max-w-md group">
              <img
                src={featuredVideo.thumbnail_url}
                alt="Student feedback video"
                className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Floating Badges */}
              <div className="absolute top-1/2 -translate-y-8 left-5 right-5 space-y-2 pointer-events-none">
                <div className="inline-block px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 font-bold text-xs shadow-md">
                  Team Growth 🏆
                </div>
                <br />
                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md border border-white/20">
                  Student's review ❤️
                </div>
              </div>

              {/* Verification Watermark */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Member Payouts</span>
              </div>

              {/* Click to open full video */}
              <div
                onClick={() => setActiveVideoModal(featuredVideo)}
                className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>

              {/* Controls Bar at Bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 text-white">
                <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 hover:text-emerald-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    <span className="text-slate-300">0:00 / 0:30</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Volume2 className="w-3.5 h-3.5" />
                    <Maximize className="w-3.5 h-3.5" />
                    <MoreVertical className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-emerald-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Column: Gallery & Quote card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Desktop Editorial Quote Card */}
            <div className="hidden lg:block bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <span>Featured Review</span>
                <span className="text-amber-500">★★★★★</span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed italic">
                "{featuredVideo.content}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
                <div>
                  <strong className="text-slate-900 block">{featuredVideo.name}</strong>
                  <span className="text-slate-500">{featuredVideo.city}</span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(featuredVideo)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Secondary 3-Card Portrait Gallery */}
            <div>
              <span className="hidden lg:block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-left">
                More Member Videos
              </span>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {secondaryVideos.map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() =>
                      setActiveVideoModal({
                        id: sec.id,
                        name: sec.title,
                        role: sec.caption,
                        city: 'India',
                        type: 'video',
                        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                        content: sec.caption,
                        rating: 5,
                        is_featured: false,
                        is_published: true,
                        order_index: 2,
                      })
                    }
                    className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer group shadow-xs hover:border-slate-400 transition-all"
                  >
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

                    <div className="absolute top-2 left-2 right-2">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/80 text-white backdrop-blur-sm truncate block">
                        {sec.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="text-[10px] font-medium leading-tight truncate">
                        {sec.caption}
                      </p>
                      <div className="w-full h-0.5 bg-white/40 rounded-full mt-1.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <VideoPlayerModal
          testimonial={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
        />
      )}
    </section>
  );
};
