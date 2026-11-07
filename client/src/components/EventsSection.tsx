import React from 'react';
import { Calendar, Video, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const EventsSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const events = siteData?.events || [];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            Live Schedules
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Upcoming Training & Orientations
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Reserve your seat for upcoming live Zoom webinars and masterclasses conducted directly by Jamin Patel and senior leaders.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((ev, idx) => (
            <div
              key={ev.id || idx}
              className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 sm:p-8 hover:border-[#DDF77B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7]">
                    <Video className="w-3.5 h-3.5" />
                    {ev.platform}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {ev.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#10100D] mb-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>{ev.date_time}</span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#10100D] mb-3 leading-snug">
                  {ev.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#696969] leading-relaxed mb-6">
                  {ev.description}
                </p>

                <div className="text-xs text-[#171717] font-medium mb-4">
                  Host: <span className="text-[#6747C7] font-bold">{ev.speaker}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#EAE8E2] flex items-center justify-between">
                <span className="text-[11px] text-[#696969]">Free Registration Pass</span>
                <a
                  href={getWhatsAppUrl('hero', ev.registration_whatsapp_text || `Hi Jamin! I want to attend the ${ev.title} webinar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#DDF77B] text-[#10100D] hover:bg-[#CFF46B] transition-colors border border-[#10100D]/10"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#10100D]" />
                  <span>Reserve Seat</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
