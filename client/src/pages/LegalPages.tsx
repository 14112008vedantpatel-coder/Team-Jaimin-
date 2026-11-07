import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ShieldCheck, AlertCircle, FileText, Lock } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const PrivacyPolicyPage: React.FC = () => {
  const { siteData } = useSite();
  const contact = siteData?.site_settings?.contact;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#EAE8E2] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            DPDP Act, 2023 Compliant
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#10100D]">
            Privacy Policy & Data Notice
          </h1>
          <p className="text-xs text-[#696969]">Last Updated: November 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-[#171717] leading-relaxed border-t border-[#EAE8E2] pt-6">
            <h2 className="text-base font-bold text-[#10100D]">1. Purpose of Data Collection</h2>
            <p>
              Team Jamin collects personal information (such as full name, WhatsApp mobile number, city, and area of interest) solely to respond to user-initiated requests for informational orientation regarding independent direct selling. We do not engage in unauthorized automated telemarketing or cold calling.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">2. Consent Under Digital Personal Data Protection Act, 2023</h2>
            <p>
              By checking the consent box and submitting an enquiry form on this website, you explicitly grant consent for our team to contact you via WhatsApp, telephone, or email solely regarding the specified business mentorship opportunity. You retain the right to withdraw consent at any time by messaging "STOP" or "UNSUBSCRIBE" on WhatsApp.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">3. Data Sharing & Third Parties</h2>
            <p>
              We strictly NEVER sell, trade, rent, or lease your personal data to any external marketing agencies, advertising networks, or third-party lead brokers. Data is stored on secure, encrypted server infrastructure accessible only to authorized administrators.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">4. Grievance Redressal & Contact</h2>
            <p>
              If you have any questions regarding your data privacy, correction of details, or immediate data deletion, please contact our Data Representative at:
              <br />
              <strong>Email:</strong> {contact?.email || 'privacy@teamjamin.com'}
              <br />
              <strong>Address:</strong> {contact?.address || 'Titanium Business Park, Ahmedabad, Gujarat 380015'}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#EAE8E2] p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-bold text-[#6747C7]">
            <FileText className="w-4 h-4 text-[#6747C7]" />
            Direct Selling Code of Conduct
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#10100D]">
            Terms & Conditions of Participation
          </h1>
          <p className="text-xs text-[#696969]">Last Updated: November 2026</p>

          <div className="space-y-4 text-xs sm:text-sm text-[#171717] leading-relaxed border-t border-[#EAE8E2] pt-6">
            <h2 className="text-base font-bold text-[#10100D]">1. Independent Distributorship Status</h2>
            <p>
              Every participant joining the community acts solely as an independent direct distributor. Participation does not create an employer-employee relationship, franchise, partnership, or joint venture with Team Jamin or the corporate manufacturing partner.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">2. Zero Joining Fee & Voluntary Participation</h2>
            <p>
              In accordance with the Consumer Protection (Direct Selling) Rules, 2021, there is strictly ZERO fee required to register as an independent seller. No purchases of demo kits, books, or starter packages are mandatory.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">3. Prohibition of False Claims & Hype</h2>
            <p>
              All members are strictly prohibited from making false income promises, claiming guaranteed payouts, misrepresenting medical or health benefits of wellness formulations, or presenting recruitment alone as a source of revenue.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">4. Dispute Resolution & Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any legal dispute or claim arising from this mentorship program shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const EarningsDisclaimerPage: React.FC = () => {
  const { siteData } = useSite();

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-amber-200 p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Mandatory Statutory Disclosure
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#10100D]">
            Official Earnings & Income Disclaimer
          </h1>
          <p className="text-xs text-[#696969]">Effective Under Consumer Protection (Direct Selling) Rules, 2021 & 2023</p>

          <div className="space-y-4 text-xs sm:text-sm text-[#171717] leading-relaxed border-t border-[#EAE8E2] pt-6">
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs font-medium text-amber-950">
              "{siteData?.site_settings?.disclaimers?.earnings ||
                'Earnings shown are individual examples and do not represent guaranteed or typical results. Actual income varies based on individual activity, skills, eligibility, business performance and other applicable factors. These examples should not be interpreted as a promise of future income.'}"
            </div>

            <h2 className="text-base font-bold text-[#10100D]">1. Performance-Driven Compensation Model</h2>
            <p>
              Direct selling is a performance-based commercial activity. Income is derived exclusively from the margin on legitimate certified products distributed to end consumers and the collective volume generated by your team. No compensation is paid for mere recruitment of people.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">2. Factors Affecting Income</h2>
            <p>
              An individual associate's earning depends directly on their dedication, communication skills, market conditions, customer satisfaction, time invested, and adherence to proven ethical practices. Most beginners generate modest supplemental earnings before scaling.
            </p>

            <h2 className="text-base font-bold text-[#10100D]">3. Tax Deductions (TDS) & Legality</h2>
            <p>
              In full compliance with the Income Tax Act of India, Tax Deducted at Source (TDS) is deducted on all distributor payouts under Section 194H. Annual Form 16A certificates are issued to all associates.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
