import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck, ArrowUpRight, AlertCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { submitEnquiry } from '../api/client';

export const ContactSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const contact = siteData?.site_settings?.contact;
  const leader = siteData?.leader_profile;

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    mobile: '',
    city: '',
    email: '',
    area_of_interest: 'College Student - Flexible Part-Time',
    preferred_contact: 'WhatsApp',
    message: '',
    consent_given: true,
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    enquiry_id: string;
    message: string;
    whatsapp_redirect_url: string;
  } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.full_name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) {
      setFormError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!formData.city.trim()) {
      setFormError('Please provide your city.');
      return;
    }
    if (!formData.consent_given) {
      setFormError('Consent under the Digital Personal Data Protection Act, 2023 is required to contact you.');
      return;
    }

    try {
      setLoading(true);
      const res = await submitEnquiry(formData);
      if (res.success) {
        setSuccessResult({
          enquiry_id: res.enquiry_id,
          message: res.message,
          whatsapp_redirect_url: res.whatsapp_redirect_url,
        });
        setFormData({
          full_name: '',
          mobile: '',
          city: '',
          email: '',
          area_of_interest: 'College Student - Flexible Part-Time',
          preferred_contact: 'WhatsApp',
          message: '',
          consent_given: true,
        });
      }
    } catch (err: any) {
      setFormError(err.message || 'Error submitting enquiry. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-700" />
            Direct Communication
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Let's Talk on WhatsApp
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Have questions about the business opportunity, partner company, training schedules, or joining process? Connect with Jamin Patel directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct WhatsApp & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Quick Launch Hero Box */}
            <div className="bg-[#10100D] text-white rounded-3xl p-7 sm:p-8 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#DDF77B]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-bold">
                  <MessageSquare className="w-6 h-6 fill-[#10100D]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-emerald-400">Available on WhatsApp</span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-white">
                    {leader?.name || 'Jamin Patel'}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Skip lengthy emails. Get direct, transparent answers directly on your mobile within 15–30 minutes during working hours.
              </p>

              <div className="p-3 bg-white/10 rounded-2xl border border-white/10 mb-6 text-xs flex items-center justify-between">
                <span className="text-neutral-400">WhatsApp:</span>
                <span className="font-mono font-bold text-[#DDF77B]">
                  {contact?.display_phone || '+91 98765 43210'}
                </span>
              </div>

              <a
                href={getWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#DDF77B] text-[#10100D] font-bold text-xs sm:text-sm hover:bg-[#CFF46B] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-[#10100D]" />
                <span>Message Jamin on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Contact Details & Availability */}
            <div className="bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 sm:p-7 space-y-4">
              <h4 className="font-editorial text-base font-bold text-[#10100D]">
                Office & Hours Information
              </h4>

              <div className="space-y-3 text-xs text-[#696969]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#10100D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#10100D] block">Consultation Hours:</strong>
                    {contact?.hours || 'Monday – Saturday: 10:00 AM – 8:00 PM IST'}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#10100D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#10100D] block">Email Inquiries:</strong>
                    <a href={`mailto:${contact?.email || 'hello@teamjamin.com'}`} className="hover:underline">
                      {contact?.email || 'hello@teamjamin.com'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#10100D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#10100D] block">Headquarters:</strong>
                    {contact?.address || 'Titanium Business Park, Prahlad Nagar, Ahmedabad, Gujarat 380015'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Complete DPDP Compliant Lead Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#EAE8E2] rounded-3xl p-6 sm:p-10 shadow-xs">
            
            {successResult ? (
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#10100D] mb-1">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#6747C7]">
                    Reference ID: {successResult.enquiry_id}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#696969] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your request in our system. You can also start a direct conversation with Jamin right now using your unique reference.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={successResult.whatsapp_redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#DDF77B] text-[#10100D] font-bold text-xs sm:text-sm hover:bg-[#CFF46B] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#10100D]" />
                    <span>Open Pre-filled WhatsApp Chat</span>
                  </a>

                  <button
                    onClick={() => setSuccessResult(null)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white border border-[#EAE8E2] text-xs font-semibold text-[#171717] hover:bg-[#FAF9F6] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6747C7] block mb-1">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#10100D]">
                    Schedule a Free 1-on-1 Business Orientation
                  </h3>
                  <p className="text-xs text-[#696969] mt-1">
                    Fill out this quick form. Your data is handled in strict compliance with the DPDP Act 2023.
                  </p>
                </div>

                {formError && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="e.g. Manish Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Mobile Number (WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. 98234 56789"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Current City <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Ahmedabad, Pune, Jaipur"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="manish@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Your Primary Background / Goal
                    </label>
                    <select
                      value={formData.area_of_interest}
                      onChange={(e) => setFormData({ ...formData, area_of_interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    >
                      <option value="College Student - Flexible Part-Time">College Student - Flexible Part-Time</option>
                      <option value="Working Professional - Secondary Income">Working Professional - Secondary Income</option>
                      <option value="Homemaker - Flexible Independent Career">Homemaker - Flexible Independent Career</option>
                      <option value="Fresher - Exploring Digital Skills">Fresher - Exploring Digital Skills</option>
                      <option value="General Business Opportunity Inquiry">General Business Opportunity Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Preferred Contact Channel
                    </label>
                    <select
                      value={formData.preferred_contact}
                      onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Phone Call">Direct Phone Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Specific Questions or Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your schedule or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
                  />
                </div>

                {/* DPDP Act 2023 Consent Checkbox (PRD Section 7.3 & 13.2) */}
                <div className="p-3.5 bg-white rounded-2xl border border-[#EAE8E2] space-y-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent_given}
                      onChange={(e) => setFormData({ ...formData, consent_given: e.target.checked })}
                      className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-[11px] text-[#696969] leading-relaxed">
                      I provide consent under the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> for Team Jamin to contact me via WhatsApp or phone regarding informational direct selling mentorship. My contact data will never be sold or shared with third parties.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-[#10100D] text-white font-bold text-xs sm:text-sm hover:bg-[#10100D]/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-[#DDF77B]" />
                  <span>{loading ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
