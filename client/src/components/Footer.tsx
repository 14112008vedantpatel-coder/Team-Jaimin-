import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Send, Lock } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { siteData } = useSite();
  const contact = siteData?.site_settings?.contact;
  const brandName = siteData?.site_settings?.brand_name || 'Team Jamin';
  const monogram = siteData?.site_settings?.monogram || 'TJ';

  return (
    <footer className="bg-[#10100D] text-white pt-16 pb-12 border-t border-[#EAE8E2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
                {monogram}
              </div>
              <div>
                <span className="font-editorial text-xl font-bold text-white tracking-tight">
                  {brandName}
                </span>
                <p className="text-[11px] text-neutral-400">Digital Direct Selling Mentorship</p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              An independent community of ethical direct distributors committed to transparent commerce, digital upskilling, and compliant team building under Indian Direct Selling Rules.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {contact?.social?.instagram && (
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-[#EE83CB] hover:border-[#EE83CB] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {contact?.social?.youtube && (
                <a
                  href={contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
              {contact?.social?.linkedin && (
                <a
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-blue-400 hover:border-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {contact?.social?.telegram && (
                <a
                  href={contact.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-sky-400 hover:border-sky-400 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="/#about" className="hover:text-[#DDF77B] transition-colors">About Jamin Patel</a></li>
              <li><a href="/#opportunity" className="hover:text-[#DDF77B] transition-colors">Business Opportunity</a></li>
              <li><a href="/#how-it-works" className="hover:text-[#DDF77B] transition-colors">How It Works</a></li>
              <li><a href="/#team-results" className="hover:text-[#DDF77B] transition-colors">Verified Earning Proofs</a></li>
              <li><a href="/#company-proof" className="hover:text-[#DDF77B] transition-colors">Company Proof & Transparency</a></li>
              <li><a href="/#faqs" className="hover:text-[#DDF77B] transition-colors">Frequently Asked Questions</a></li>
              <li><a href="/#contact" className="hover:text-[#DDF77B] transition-colors">Contact / WhatsApp</a></li>
            </ul>
          </div>

          {/* Compliance & Legal Pages */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#DDF77B] transition-colors">
                  Privacy Policy (DPDP Act, 2023)
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#DDF77B] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/earnings-disclaimer" className="hover:text-[#DDF77B] transition-colors">
                  Earnings & Income Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-[#DDF77B] transition-colors">
                  Corporate Distributorship Disclosure
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors text-[11px]"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Admin Dashboard Portal</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Statutory Disclaimers Bar */}
        <div className="pt-8 space-y-4 text-[11px] text-neutral-400 leading-relaxed">
          <p>
            <strong className="text-neutral-200">Independent Distributor Notice:</strong> This website is maintained by Jamin Patel as an independent direct seller/distributor of our corporate manufacturing partner. It is not an official corporate website of the manufacturer. All product images, logos, and trademarks belong to their respective registered owners.
          </p>

          <p>
            <strong className="text-neutral-200">Statutory Income Disclaimer:</strong> Information on this website is provided for general informational purposes only. Individual experiences and earning examples do not guarantee similar outcomes. Income is strictly performance-based depending on product sales volume and adherence to direct selling guidelines. There are no joining fees, guaranteed incomes, or employment contracts offered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-neutral-500">
            <div>
              © {new Date().getFullYear()} {brandName}. All Rights Reserved. Compliant with Consumer Protection Direct Selling Rules 2021 & 2023.
            </div>
            <div className="flex items-center gap-1 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trust-First Architecture</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
