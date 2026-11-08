import React, { useState } from 'react';
import { Video, Users, Sparkles, CheckCircle2, MessageSquare, ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const LiveTrainingSection: React.FC = () => {
  const { getWhatsAppUrl } = useSite();

  const slides = [
    {
      id: 'slide_1',
      title: 'Status Marketing Masterclass',
      highlight: "Today's Meeting Done ✅ • 50+ Learners 🥳",
      tag: 'Live Team Training Clip',
      image: '/live-training.jpg',
      badgeTitle: "Today's Meeting Done ✅",
      badgeSubtitle: 'Status Marketing Masterclass',
      attendees: '50+ Learners Online',
      time: 'Daily Evening Masterclass',
      isDirectPhoto: true,
    },
    {
      id: 'slide_2',
      title: 'TEAM JAIMIN Daily Power Call',
      highlight: 'With 50+ Learners 🥳 • Screen Sharing Live',
      tag: 'Interactive Zoom Session',
      image: '/live-training.jpg',
      badgeTitle: 'TEAM JAIMIN Meeting Done ❤️',
      badgeSubtitle: 'With 50+ Learners 🥳',
      attendees: '84 Active Learners',
      time: '8:00 PM IST Daily',
      isDirectPhoto: false,
    },
    {
      id: 'slide_3',
      title: 'Live Objection Handling & Pitch Breakdown',
      highlight: 'Step-by-step guidance for every new member',
      tag: 'New Member Onboarding',
      image: '/live-training.jpg',
      badgeTitle: 'Live Mentorship Done ✅',
      badgeSubtitle: 'Practical Closing Scripts',
      attendees: '60+ Active Mentees',
      time: 'Live Breakout Q&A',
      isDirectPhoto: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[currentIndex];

  return (
    <section id="live-training" className="py-16 lg:py-24 bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Copy & Desktop Switcher Controls */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 lg:space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-purple-400 uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>Daily Interactive Mentorship</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Live Training
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Clips from our team sessions. Every new member joins these after enrolling.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans-body">
              <p>
                Real business isn't learned through outdated pre-recorded courses. At <strong className="text-white">TEAM JAIMIN</strong>, you get daily live masterclasses where you watch live screen sharing, real customer objection handling, and actionable digital marketing systems.
              </p>
              <p className="font-semibold text-emerald-400">
                Whether you are a college student with zero prior sales experience or a working professional building a second income, JAIMIN mentors you step-by-step every single evening.
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Daily 8:00 PM IST Zoom Calls</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50+ to 85+ Active Learners</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Status Marketing Strategies</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>1-on-1 Live Q&A Guidance</span>
              </div>
            </div>

            {/* Desktop Flip Controls */}
            <div className="hidden lg:flex items-center gap-3 pt-2">
              <button
                onClick={prevSlide}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Session</span>
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Next Session</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-slate-400 ml-2">
                Session {currentIndex + 1} of {slides.length}
              </span>
            </div>

            {/* Direct CTA */}
            <div className="pt-1">
              <a
                href={getWhatsAppUrl('hero', "Hello JAIMIN! I want to attend tonight's live team training session. How can I join?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Ask for Tonight's Meeting Link</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Smartphone Frame Flip Carousel */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] mx-auto mb-4">
              
              {/* Navigation Flip Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous training session"
                className="absolute left-[-16px] sm:left-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-slate-200 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next training session"
                className="absolute right-[-16px] sm:right-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-slate-200 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Smartphone Frame Container */}
              <div className="rounded-[2.5rem] p-3 bg-slate-900 shadow-2xl border-2 border-slate-700 relative">
                
                {/* Screen Inner */}
                <div className="rounded-[2rem] bg-slate-950 overflow-hidden min-h-[460px] flex flex-col justify-between relative shadow-inner border border-slate-800">
                  
                  {current.isDirectPhoto ? (
                    <div className="relative w-full h-[460px] bg-slate-950">
                      <img
                        src="/live-training.jpg"
                        alt="Live training session photo"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-md border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>LIVE SESSION CLIP</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-[460px] bg-slate-900 flex flex-col justify-between p-5 text-white">
                      
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-[10px] text-slate-400">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {current.time}
                          </span>
                          <span className="text-white font-semibold">{current.attendees}</span>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden bg-slate-800 border-2 border-purple-500/50 p-1 shadow-lg aspect-square max-w-[220px] mx-auto mb-4">
                          <img
                            src="/jaimin-portrait.jpg"
                            alt="JAIMIN PATEL Live"
                            className="w-full h-full object-cover object-top rounded-xl"
                          />
                          <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg text-center">
                            <span className="text-xs font-bold text-white block">JAIMIN PATEL</span>
                            <span className="text-[10px] text-emerald-400 font-semibold">Founder & Host</span>
                          </div>
                        </div>

                        <div className="text-center mb-3">
                          <span className="text-[10px] uppercase tracking-wider text-purple-400 font-bold block">
                            {current.tag}
                          </span>
                          <h4 className="font-bold text-sm text-white mt-0.5">{current.title}</h4>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-center pb-6">
                        <div className="inline-block px-3 py-1 rounded-md bg-purple-600 text-white font-bold text-[11px] shadow-sm">
                          {current.badgeTitle}
                        </div>
                        <br />
                        <div className="inline-block px-3 py-1 rounded-md bg-white text-slate-900 font-bold text-[11px] shadow-sm">
                          {current.badgeSubtitle}
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute -bottom-4 left-6 right-6 p-2.5 bg-white rounded-2xl shadow-xl text-center border border-slate-200">
                  <div className="font-bold text-xs text-slate-900">{current.title}</div>
                  <div className="text-xs font-bold text-emerald-600">{current.highlight}</div>
                </div>

              </div>

            </div>

            {/* Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-purple-400'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed max-w-sm text-center">
              Flip through live clips from our daily team webinars & practical screen shares.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
