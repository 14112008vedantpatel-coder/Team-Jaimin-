import React from 'react';
import { MessageSquare, ArrowDown, Users, Compass, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { useSite } from '../context/SiteContext';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5 text-emerald-600" />,
  Compass: <Compass className="w-5 h-5 text-blue-600" />,
  Clock: <Clock className="w-5 h-5 text-amber-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-600" />,
};

export const Hero: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const leader = siteData?.leader_profile;

  const defaultCards = [
    { id: '1', title: 'Active Mentees', value: '850+', description: 'Guided across India', icon: 'Users' },
    { id: '2', title: 'Beginner Friendly', value: 'Zero Experience', description: 'Step-by-step training', icon: 'Compass' },
    { id: '3', title: 'Flexible Timing', value: '1-2 Hrs/Day', description: 'Fits college & job routine', icon: 'Clock' },
    { id: '4', title: 'Live Mentorship', value: 'Daily Calls', description: 'Personal guidance', icon: 'Sparkles' },
  ];

  return (
    <section id="overview" className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-[#F8FAFC]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main High-Contrast Intro Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0B0F19] text-white border border-slate-800 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-5 lg:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Direct Business Mentor</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
                Start Your Learning & Business Journey With{' '}
                <span className="text-emerald-400 font-extrabold uppercase block sm:inline">
                  TEAM JAIMIN
                </span>
              </h1>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl">
                Master high-income digital business skills, build an independent secondary income stream, and get daily personal guidance directly from founder Jaimin Patel.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Message on WhatsApp</span>
                </a>

                <a
                  href="#team-results"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                >
                  <span>See Live Proofs</span>
                  <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Trust metrics */}
              <div className="flex items-center gap-4 pt-1 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Govt MSME Registered</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-600" />
                <span>Zero Compulsory Fees</span>
                <div className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="text-emerald-400 font-medium">Weekly Direct Payouts</span>
              </div>
            </div>

            {/* Right Visual Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-xl group">
                  <div className="relative">
                    <img
                      src={leader?.portrait_url || '/jaimin-portrait.jpg'}
                      alt="JAIMIN"
                      className="w-full h-[320px] sm:h-[370px] object-cover object-top"
                    />
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online for Mentorship</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 text-center border-t border-slate-800">
                    <div className="font-editorial font-bold text-sm sm:text-base text-white uppercase tracking-wide">
                      {leader?.name || 'JAIMIN PATEL'}
                    </div>
                    <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Founder & Mentor, TEAM JAIMIN</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Bento Cards (Light Contrast against background) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-4">
          {defaultCards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs text-left hover:border-slate-300 hover:shadow-sm transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{card.title}</span>
                {iconMap[card.icon]}
              </div>
              <div className="font-editorial font-bold text-base sm:text-xl text-slate-900">
                {card.value}
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
