import React from 'react';
import { BookOpen, Users2, ShieldCheck, Zap, LineChart, Award } from 'lucide-react';

export const WhyLearn: React.FC = () => {
  const pillars = [
    {
      icon: <BookOpen className="w-6 h-6 text-[#6747C7]" />,
      title: 'Structured Zero-To-One Curriculum',
      description: 'Step-by-step masterclasses covering communication, ethical consultative selling, social media outreach, and team building.'
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#38C9E8]" />,
      title: 'Daily Hands-On Mentorship',
      description: 'Daily evening live Zoom calls and breakout Q&A sessions. You never have to figure out strategies alone.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '100% Ethical & Legal Standards',
      description: 'Strict adherence to India Direct Selling Rules 2021/2023. No false promises, no exaggerated earnings, and zero joining fees.'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Plug-and-Play Digital Workflows',
      description: 'Ready-to-use conversation scripts, product guides, and digital funnel templates tested across 850+ team members.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#EE83CB]" />,
      title: 'Weekly Payout Transparency',
      description: 'Real-time sales tracking through the official distributor portal with direct bank NEFT credits every Tuesday.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#10100D]" />,
      title: 'Long-term Skill Accrual',
      description: 'Skills learned here—public speaking, negotiation, consumer psychology—empower your professional career forever.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F6] border-y border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7] uppercase tracking-wider mb-3">
            Core Philosophy
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#10100D] tracking-tight mb-4">
            Why Learn With Team Jamin?
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            We focus on genuine skills, verified product distribution, and sustainable independence—delivering practical business education instead of empty motivational talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-7 hover:border-[#DDF77B] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#EAE8E2] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#10100D] mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#696969] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
