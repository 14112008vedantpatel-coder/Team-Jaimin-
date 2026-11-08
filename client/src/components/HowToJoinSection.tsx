import React from 'react';
import { MessageSquare, ArrowRight, Route } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const HowToJoinSection: React.FC = () => {
  const { getWhatsAppUrl } = useSite();

  const steps = [
    {
      num: '1',
      title: 'Message me on WhatsApp',
      desc: 'Send a quick message with your name and city. Founder JAIMIN replies personally.',
      isHighlight: false,
    },
    {
      num: '2',
      title: 'Short 1-on-1 Orientation Call',
      desc: 'We walk you through how digital affiliate commerce works, potential earnings, and routine.',
      isHighlight: false,
    },
    {
      num: '3',
      title: 'Free Member Registration',
      desc: 'Zero joining fees. Complete official direct distributor onboarding under Indian regulations.',
      isHighlight: false,
    },
    {
      num: '4',
      title: 'Live Mentorship & Daily Training',
      desc: 'Gain instant access to masterclasses, step-by-step systems, and daily live Zoom calls.',
      isHighlight: false,
    },
    {
      num: '5',
      title: 'Complete Simple Daily Tasks & Earn',
      desc: 'Follow the proven system, execute daily actions, and receive direct weekly bank payouts.',
      isHighlight: true,
    },
  ];

  return (
    <section id="how-to-join" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, description & Desktop Action */}
          <div className="lg:col-span-5 text-left space-y-4 lg:space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <Route className="w-3.5 h-3.5 text-slate-700" />
              <span>Step-By-Step Onboarding</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              How to Join
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              A transparent, 5-step roadmap to start your digital mentorship with TEAM JAIMIN. Zero registration charges, zero inventory hoarding, and complete hands-on daily support.
            </p>

            {/* Desktop Quick Action Card */}
            <div className="hidden lg:block p-6 bg-slate-50 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/jaimin-portrait.jpg"
                  alt="JAIMIN"
                  className="w-12 h-12 rounded-2xl object-cover object-top border border-slate-300 shadow-xs bg-white"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Ready to Start Step 1?</h4>
                  <p className="text-[11px] text-emerald-700 font-semibold">Personal guidance with JAIMIN PATEL</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send JAIMIN a quick WhatsApp message with your name and city to schedule your short orientation call.
              </p>
              <a
                href={getWhatsAppUrl('hero', 'Hello JAIMIN! I want to join TEAM JAIMIN. My name is...')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: 5 Step Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex items-start gap-4 text-left hover:border-slate-300 hover:bg-white transition-all"
              >
                {/* Circular Number Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs ${
                    step.isHighlight
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#0F172A] text-white'
                  }`}
                >
                  {step.num}
                </div>

                {/* Text Details */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile Only Start Button */}
            <div className="mt-8 lg:hidden">
              <a
                href={getWhatsAppUrl('hero', 'Hello JAIMIN! I want to join TEAM JAIMIN. My name is...')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#0F172A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Start Step 1 on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
