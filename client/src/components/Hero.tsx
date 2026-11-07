import React from 'react';
import { MessageSquare, ArrowDown, Users, Compass, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5 text-[#6747C7]" />,
  Compass: <Compass className="w-5 h-5 text-[#38C9E8]" />,
  Clock: <Clock className="w-5 h-5 text-emerald-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
};

export const Hero: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();

  const hero = siteData?.hero;
  const leader = siteData?.leader_profile;

  const defaultCards = [
    { id: '1', title: 'Active Mentees', value: '850+', description: 'Students & professionals guided', icon: 'Users' },
    { id: '2', title: 'Beginner Friendly', value: 'Zero Friction', description: 'Practical modules for freshers', icon: 'Compass' },
    { id: '3', title: 'Flexible Timing', value: '1-2 Hrs/Day', description: 'Fits college & job schedules', icon: 'Clock' },
    { id: '4', title: 'Live Team Support', value: 'Daily Masterminds', description: 'Direct leader guidance & reviews', icon: 'Sparkles' },
  ];

  const cards = hero?.feature_cards && hero.feature_cards.length > 0 ? hero.feature_cards : defaultCards;

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#DDF77B]/25 via-[#6747C7]/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card Container */}
        <div className="bg-white border border-[#EAE8E2] rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Leader & Mentor Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-semibold text-[#10100D]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{hero?.badge || 'Certified Business Mentor & Community Leader'}</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10100D] leading-[1.15]">
                {hero?.headline || 'Start Your Learning & Business Journey With Team Jamin'}
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-[#696969] leading-relaxed max-w-2xl">
                {hero?.subheadline ||
                  'I help students, working professionals and individuals explore structured learning opportunities with practical guidance, training and team support.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#DDF77B] text-[#10100D] hover:bg-[#CFF46B] transition-all shadow-sm hover:shadow-md border border-[#10100D]/10 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-[#10100D]" />
                  <span>{hero?.cta_primary_text || 'Message Me on WhatsApp'}</span>
                </a>

                <a
                  href="#team-results"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold bg-[#FAF9F6] text-[#171717] hover:bg-[#EAE8E2] transition-colors border border-[#EAE8E2]"
                >
                  <span>{hero?.cta_secondary_text || 'Explore Team Results'}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#EAE8E2]/60 flex flex-wrap items-center gap-4 text-xs text-[#696969]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero Registration Fee</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Consumer Protection Compliant</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Weekly Bank Settlements</span>
                </div>
              </div>
            </div>

            {/* Right Visual Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#DDF77B] via-[#EE83CB]/20 to-[#6747C7]/20 opacity-70 blur-xs" />
                
                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#EAE8E2] shadow-lg">
                  <img
                    src={leader?.portrait_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'}
                    alt={leader?.name || 'Jamin Patel'}
                    className="w-full h-[380px] sm:h-[420px] object-cover object-top"
                  />

                  {/* Leader Info Overlay Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/90 backdrop-blur-md rounded-2xl border border-[#EAE8E2] shadow-sm flex items-center justify-between">
                    <div>
                      <h2 className="font-editorial text-base font-bold text-[#10100D]">
                        {leader?.name || 'Jamin Patel'}
                      </h2>
                      <p className="text-[11px] font-medium text-[#696969]">
                        {leader?.designation || 'Team Leader & Direct Selling Mentor'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#10100D] block">{leader?.experience_years || '6+'} Years</span>
                      <span className="text-[10px] text-[#696969]">Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Bento Cards Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {cards.map((card, idx) => (
            <div
              key={card.id || idx}
              className="bento-card p-5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#696969]">
                  {card.title}
                </span>
                <div className="p-2 bg-[#FAF9F6] rounded-xl border border-[#EAE8E2]">
                  {iconMap[card.icon] || <Sparkles className="w-4 h-4 text-emerald-600" />}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-editorial text-[#10100D] mb-1">
                  {card.value}
                </div>
                <p className="text-xs text-[#696969] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
