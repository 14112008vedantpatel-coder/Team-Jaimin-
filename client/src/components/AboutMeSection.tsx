import React from 'react';
import { Award, Users, Video, HeartHandshake, Send, ArrowUpRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export const AboutMeSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const leader = siteData?.leader_profile;
  const contact = siteData?.site_settings?.contact;

  const stats = [
    { label: 'Years Experience', value: leader?.experience_years || '6+', icon: <Award className="w-4 h-4 text-emerald-600" /> },
    { label: 'Active Mentees', value: leader?.mentored_count || '850+', icon: <Users className="w-4 h-4 text-[#6747C7]" /> },
    { label: 'Live Training Sessions', value: leader?.sessions_conducted || '420+', icon: <Video className="w-4 h-4 text-[#38C9E8]" /> },
    { label: 'Mentee Satisfaction', value: leader?.satisfaction_rate || '99.4%', icon: <HeartHandshake className="w-4 h-4 text-amber-500" /> },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait & Social Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE8E2] shadow-sm bg-[#FAF9F6] p-2">
              <img
                src={leader?.portrait_url || '/jaimin-portrait.jpg'}
                alt={leader?.name || 'JAIMIN PATEL'}
                className="w-full h-[440px] sm:h-[480px] object-cover object-top rounded-2xl bg-white"
              />

              {/* Mission Card Floating Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#EAE8E2] shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6747C7] block mb-1">
                  Personal Mission
                </span>
                <p className="text-xs text-[#171717] font-medium leading-relaxed italic">
                  "{leader?.personal_mission || 'To equip 5,000 ambitious individuals with high-leverage business literacy, transparent direct selling practices, and sustainable financial resilience by 2028.'}"
                </p>
              </div>
            </div>

            {/* Social Channels Link Bar */}
            <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#EAE8E2] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#171717]">Connect on Socials:</span>
              <div className="flex items-center gap-2">
                {contact?.social?.instagram && (
                  <a
                    href={contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#EAE8E2] text-[#171717] hover:text-[#EE83CB] hover:border-[#EE83CB] transition-colors"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {contact?.social?.youtube && (
                  <a
                    href={contact.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#EAE8E2] text-[#171717] hover:text-red-600 hover:border-red-600 transition-colors"
                    title="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                )}
                {contact?.social?.linkedin && (
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#EAE8E2] text-[#171717] hover:text-blue-600 hover:border-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {contact?.social?.telegram && (
                  <a
                    href={contact.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#EAE8E2] text-[#171717] hover:text-sky-500 hover:border-sky-500 transition-colors"
                    title="Telegram"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold text-[#10100D] uppercase tracking-wider">
              About The Mentor
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight">
              Hello, I'm {leader?.name || 'Jamin Patel'}
            </h2>
            <p className="text-sm font-semibold text-[#6747C7] -mt-2">
              {leader?.designation || 'Direct Selling Leader & Business Mentor'}
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#696969] leading-relaxed">
              {leader?.bio_paragraphs && leader.bio_paragraphs.length > 0 ? (
                leader.bio_paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                <>
                  <p>
                    Over the last 6 years, my focus has been simple: demystifying direct commerce and digital communication for people who want to generate ethical, secondary income streams without risking their life savings.
                  </p>
                  <p>
                    Having started from college with zero sales background, I experienced firsthand how traditional corporate paths often fail to teach real-world negotiation, digital reach, and leadership. Through disciplined execution and ethical mentorship, I built a community that values transparency above hype.
                  </p>
                  <p>
                    Today, TEAM JAIMIN is recognized for its structured curriculum, zero-fee entry philosophy, and strict adherence to the Consumer Protection (Direct Selling) Rules of India.
                  </p>
                </>
              )}
            </div>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-[#FAF9F6] p-4 rounded-2xl border border-[#EAE8E2]">
                  <div className="flex items-center gap-1.5 mb-2">
                    {s.icon}
                    <span className="text-[10px] font-bold text-[#696969] uppercase tracking-wider">{s.label}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-editorial text-[#10100D]">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={getWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-[#10100D] text-white hover:bg-[#10100D]/90 transition-all shadow-sm"
              >
                <span>Have a 1-on-1 Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#DDF77B]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
