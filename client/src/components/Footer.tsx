import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Send } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const { siteData } = useSite();
  const contact = siteData?.site_settings?.contact;
  const brandName = siteData?.site_settings?.brand_name || 'TEAM JAIMIN';

  return (
    <footer className="bg-[#070A10] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <BrandLogo size="lg" />
              <div>
                <span className="font-editorial text-xl font-bold text-white tracking-tight uppercase">
                  {brandName}
                </span>
                <p className="text-[11px] text-emerald-400 font-semibold">Digital Commerce Mentorship</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent community of ethical direct distributors committed to transparent commerce, digital upskilling, and compliant team building under Indian Direct Selling Rules.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {contact?.social?.instagram && (
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
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
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-slate-700 transition-colors"
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
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 transition-colors"
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
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/#overview" className="hover:text-emerald-400 transition-colors">Overview</a></li>
              <li><a href="/#team-feedback" className="hover:text-emerald-400 transition-colors">Team Feedback</a></li>
              <li><a href="/#team-results" className="hover:text-emerald-400 transition-colors">Team Earning Proofs</a></li>
              <li><a href="/#how-to-join" className="hover:text-emerald-400 transition-colors">How to Join</a></li>
              <li><a href="/#live-training" className="hover:text-emerald-400 transition-colors">Live Training</a></li>
              <li><a href="/#questions" className="hover:text-emerald-400 transition-colors">Questions (FAQ)</a></li>
              <li><a href="/#company-proof" className="hover:text-emerald-400 transition-colors">Company Proof</a></li>
              <li><a href="/#whatsapp" className="hover:text-emerald-400 transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          {/* Compliance & Legal Pages */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy (DPDP Act, 2023)
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/earnings-disclaimer" className="hover:text-emerald-400 transition-colors">
                  Earnings & Income Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-emerald-400 transition-colors">
                  Corporate Distributorship Disclosure
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Statutory Disclaimers Bar */}
        <div className="pt-8 space-y-4 text-[11px] text-slate-400 leading-relaxed text-left">
          <p>
            <strong className="text-slate-200">Independent Distributor Notice:</strong> This website is maintained by Jamin Patel as an independent direct distributor. It is not an official corporate website of any single manufacturer. All product images, logos, and trademarks belong to their respective registered owners.
          </p>

          <p>
            <strong className="text-slate-200">Statutory Income Disclaimer:</strong> Information on this website is provided for general informational purposes only. Individual experiences and earning examples do not guarantee similar outcomes. Income is strictly performance-based depending on product sales volume and adherence to direct selling guidelines. There are no joining fees, guaranteed incomes, or employment contracts offered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-slate-500">
            <div>
              © {new Date().getFullYear()} {brandName}. All Rights Reserved. Compliant with Consumer Protection Direct Selling Rules 2021 & 2023.
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trust-First Architecture</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
