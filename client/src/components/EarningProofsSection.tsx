import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { BrandLogo } from './BrandLogo';

export const EarningProofsSection: React.FC = () => {
  const { siteData } = useSite();

  const slides = [
    {
      id: 'slide_1',
      memberName: 'Yogendra Kumar',
      earningHighlight: '₹2,290 in one day',
      totalEarning: '₹2,290',
      availableBalance: '₹2,290',
      withdrawn: '₹0',
      role: 'Active Associate',
      date: 'Recent Payout',
    },
    {
      id: 'slide_2',
      memberName: 'Rohit Sharma',
      earningHighlight: '₹8,420 in one week',
      totalEarning: '₹8,420',
      availableBalance: '₹8,420',
      withdrawn: '₹8,420',
      role: 'Team Leader',
      date: 'Weekly Settlement',
    },
    {
      id: 'slide_3',
      memberName: 'Pooja Verma',
      earningHighlight: '₹34,850 in one month',
      totalEarning: '₹34,850',
      availableBalance: '₹34,850',
      withdrawn: '₹34,850',
      role: 'Senior Member',
      date: 'Monthly Payout',
    },
    {
      id: 'slide_4',
      memberName: 'Manish Patel',
      earningHighlight: '₹1,850 in one day',
      totalEarning: '₹1,850',
      availableBalance: '₹1,850',
      withdrawn: '₹0',
      role: 'Fresh Associate',
      date: 'Direct Retail',
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
    <section id="team-results" className="py-16 lg:py-24 bg-[#0B0F19] text-white border-y border-slate-800">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Trust Cards */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 lg:space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Real Bank Payout Proofs</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Team Earning Proofs
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-medium leading-relaxed">
              Real earnings verified from our team members (POWER OF TEAM JAIMIN).
            </p>

            {/* Desktop Trust Highlights */}
            <div className="hidden lg:grid grid-cols-1 gap-3.5 pt-2">
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-base shrink-0">
                  ₹
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Direct Weekly Bank Payouts</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Settlements transferred directly every Tuesday via NEFT/IMPS with official invoice receipts.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-start gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-base shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Statutory TDS Deducted</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    100% legally compliant under Section 194H of Income Tax Act with quarterly Form 16A certificates.
                  </p>
                </div>
              </div>
            </div>

            {/* Switcher Navigation Controls for Desktop */}
            <div className="hidden lg:flex items-center gap-3 pt-2">
              <button
                onClick={prevSlide}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Proof</span>
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Next Proof</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-slate-400 ml-2">
                Slide {currentIndex + 1} of {slides.length}
              </span>
            </div>

          </div>

          {/* Right Column: 3D Phone Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] mx-auto mb-4">
              
              {/* Navigation Arrows on Mockup */}
              <button
                onClick={prevSlide}
                aria-label="Previous proof"
                className="absolute left-[-16px] sm:left-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-slate-200 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next proof"
                className="absolute right-[-16px] sm:right-[-22px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-slate-200 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Smartphone Frame Container */}
              <div className="rounded-[2.5rem] p-3 bg-slate-900 shadow-2xl border-2 border-slate-700 relative">
                
                {/* Screen Inner (High-Contrast White Screen) */}
                <div className="rounded-[2rem] bg-white text-slate-900 p-5 text-left min-h-[440px] flex flex-col justify-between overflow-hidden shadow-inner border border-slate-100">
                  
                  {/* Phone Header - Brand Name TEAM JAIMIN in Capital */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                      <div className="flex items-center gap-2">
                        <BrandLogo size="xs" />
                        <span className="font-bold text-xs text-slate-900 tracking-wider uppercase">
                          TEAM JAIMIN
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">
                        👤
                      </div>
                    </div>

                    {/* Member Greetings */}
                    <div className="mb-4">
                      <span className="text-[11px] text-slate-500 block">Member Account</span>
                      <div className="font-bold text-sm text-slate-900">{current.memberName}</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">{current.role}</span>
                    </div>

                    {/* Card 1: Total Earning (Electric Blue) */}
                    <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-xs mb-2.5">
                      <span className="text-[10px] font-medium opacity-90 block">Total Earning</span>
                      <div className="text-xl font-bold font-mono tracking-tight">{current.totalEarning}</div>
                    </div>

                    {/* Card 2: Available Balance (Emerald) */}
                    <div className="p-3.5 rounded-2xl bg-emerald-600 text-white shadow-xs mb-2.5">
                      <span className="text-[10px] font-medium opacity-90 block">Available Balance</span>
                      <div className="text-xl font-bold font-mono tracking-tight">{current.availableBalance}</div>
                    </div>

                    {/* Card 3: Withdrawn (Warm Amber) */}
                    <div className="p-3.5 rounded-2xl bg-amber-600 text-white shadow-xs mb-4">
                      <span className="text-[10px] font-medium opacity-90 block">Withdrawn to Bank</span>
                      <div className="text-xl font-bold font-mono tracking-tight">{current.withdrawn}</div>
                    </div>
                  </div>

                  {/* Bottom Navigation Mock */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600 font-medium">
                    <div className="flex items-center justify-between py-1">
                      <span>📖 Learning Modules</span>
                      <span className="text-slate-400">›</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span>💰 Weekly Bank Statements</span>
                      <span className="text-emerald-600 font-semibold">Verified</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute -bottom-4 left-6 right-6 p-2.5 bg-white rounded-2xl shadow-xl text-center border border-slate-200">
                  <div className="font-bold text-xs text-slate-900">{current.memberName}</div>
                  <div className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
                    <span>⚡</span> {current.earningHighlight}
                  </div>
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
                      ? 'w-6 h-2 bg-emerald-400'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-[10px] text-slate-400 mt-4 leading-relaxed max-w-sm text-center">
              Earnings shown are verified member settlements. Results depend on individual effort and consistency.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
