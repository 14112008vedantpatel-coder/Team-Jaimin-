import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { submitEnquiry } from '../api/client';

export const ContactSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const contact = siteData?.site_settings?.contact;
  const phoneNumber = contact?.display_phone || '+91 63554 22503';

  const [showInquiryForm, setShowInquiryForm] = useState(false);
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
      setFormError('Please enter your city.');
      return;
    }
    if (!formData.consent_given) {
      setFormError('Consent under the DPDP Act is required.');
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
      }
    } catch (err: any) {
      setFormError(err.message || 'Error sending request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="whatsapp" className="py-20 lg:py-28 bg-[#0B0F19] text-white border-t border-slate-800">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct WhatsApp Connection */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Jaimin Personal Avatar Badge */}
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <img
                  src="/jaimin-portrait.jpg"
                  alt="JAIMIN"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-emerald-400 shadow-xl bg-slate-900"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Direct Founder & Mentor
                </span>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-white">JAIMIN PATEL</h3>
                <p className="text-[11px] text-slate-300 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active & Replying on WhatsApp
                </p>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              Talk to me on
              <br />
              <span className="text-emerald-400">WhatsApp</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans-body max-w-md">
              Want to learn how our digital business model works, see recent payouts, or get started? Message founder JAIMIN directly.
            </p>

            {/* Big Display Phone Number */}
            <div>
              <a
                href={getWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white hover:text-emerald-400 transition-colors block tracking-tight"
              >
                {phoneNumber}
              </a>
            </div>

            {/* Big WhatsApp CTA Button */}
            <div className="space-y-4 max-w-md">
              <a
                href={getWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-lg active:scale-98 hover:scale-102"
              >
                <MessageSquare className="w-5 h-5 fill-white text-white" />
                <span>Message JAIMIN on WhatsApp</span>
              </a>

              {/* Inquiry form toggle on mobile */}
              <div className="text-center pt-2 lg:hidden">
                <button
                  onClick={() => setShowInquiryForm(!showInquiryForm)}
                  className="text-xs text-slate-400 hover:text-white underline transition-colors"
                >
                  {showInquiryForm ? 'Hide Callback Form' : 'Or fill a quick inquiry callback form'}
                </button>
              </div>
            </div>

            <div className="my-8 border-t border-slate-800 max-w-md" />

            <div className="space-y-1 text-xs text-slate-400 leading-relaxed font-sans-body max-w-md">
              <p className="text-slate-300 font-semibold">© 2026 JAIMIN, POWER OF TEAM JAIMIN</p>
              <p className="text-slate-500">
                I share the exact proven learning and affiliate earning opportunities that I personally mentor and execute.
              </p>
            </div>

          </div>

          {/* Right Column: Callback Request Card */}
          <div className={`lg:col-span-6 ${showInquiryForm ? 'block' : 'hidden lg:block'}`}>
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-200 shadow-xl text-left">
              {successResult ? (
                <div className="text-center space-y-4 py-8">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-xl text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-300">
                    Your reference ID is{' '}
                    <span className="font-mono text-emerald-400 font-bold">{successResult.enquiry_id}</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    We will review your details and contact you via WhatsApp shortly.
                  </p>
                  <a
                    href={successResult.whatsapp_redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Direct Orientation
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-white">
                      Request a 1-on-1 Consultation
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      Leave your details and founder JAIMIN will contact you directly to discuss the business plan.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block mb-1 text-slate-300 font-medium">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 text-xs transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-slate-300 font-medium">WhatsApp Mobile</label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. 9823456789"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-slate-300 font-medium">Your City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Ahmedabad, Mumbai, Delhi, Surat"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 text-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-slate-300 font-medium">Area of Interest</label>
                    <select
                      value={formData.area_of_interest}
                      onChange={(e) => setFormData({ ...formData, area_of_interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-hidden focus:border-emerald-500 text-xs"
                    >
                      <option value="College Student - Flexible Part-Time">College Student - Flexible Part-Time</option>
                      <option value="Working Professional - Secondary Income">Working Professional - Secondary Income</option>
                      <option value="Homemaker - Home-Based Business">Homemaker - Home-Based Business</option>
                      <option value="Full-Time Digital Entrepreneurship">Full-Time Digital Entrepreneurship</option>
                    </select>
                  </div>

                  <label className="flex items-start gap-2 pt-1 text-[11px] text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent_given}
                      onChange={(e) => setFormData({ ...formData, consent_given: e.target.checked })}
                      className="mt-0.5 rounded accent-emerald-500"
                    />
                    <span>
                      I provide consent under DPDP Act 2023 to receive WhatsApp communication regarding TEAM JAIMIN.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    {loading ? 'Submitting Request...' : 'Submit Consultation Request'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
