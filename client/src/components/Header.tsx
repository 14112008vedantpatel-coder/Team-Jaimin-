import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Header: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Opportunity', href: '/#opportunity' },
    { label: 'Team Results', href: '/#team-results' },
    { label: 'Company Proof', href: '/#company-proof' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'Contact', href: '/#contact' },
  ];

  const brandName = siteData?.site_settings?.brand_name || 'Team Jamin';
  const monogram = siteData?.site_settings?.monogram || 'TJ';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE8E2] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-[#10100D] text-[#DDF77B] flex items-center justify-center font-editorial font-bold text-lg shadow-sm transition-transform group-hover:scale-105 border border-[#10100D]/20">
              {monogram}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-editorial text-lg font-bold text-[#10100D] tracking-tight">
                  {brandName}
                </span>
                <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DDF77B]/40 text-[#10100D] border border-[#DDF77B]">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  Verified
                </span>
              </div>
              <p className="text-[11px] text-[#696969] -mt-0.5 font-medium">Digital Mentorship & Business</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#EAE8E2] shadow-xs">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#171717] hover:text-[#10100D] hover:bg-[#DDF77B]/40 rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#DDF77B] text-[#10100D] hover:bg-[#CFF46B] border border-[#10100D]/10 transition-all shadow-xs hover:shadow-sm transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-[#10100D]" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            <Link
              to="/admin"
              className="p-2 text-[#696969] hover:text-[#10100D] hover:bg-white rounded-full border border-transparent hover:border-[#EAE8E2] transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#DDF77B] text-[#10100D] rounded-full shadow-xs"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-[#10100D]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#10100D] bg-white rounded-full border border-[#EAE8E2]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F6] border-b border-[#EAE8E2] px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-[#171717] bg-white rounded-xl border border-[#EAE8E2] hover:bg-[#DDF77B]/30"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-[#DDF77B] text-[#10100D] border border-[#10100D]/10"
            >
              <MessageSquare className="w-4 h-4 fill-[#10100D]" />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-medium text-[#696969] hover:bg-white border border-transparent hover:border-[#EAE8E2]"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Management Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
