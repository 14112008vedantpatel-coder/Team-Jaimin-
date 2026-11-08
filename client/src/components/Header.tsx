import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '/#overview' },
    { label: 'Team Feedback', href: '/#team-feedback' },
    { label: 'Earning Proofs', href: '/#team-results' },
    { label: 'How to Join', href: '/#how-to-join' },
    { label: 'Live Training', href: '/#live-training' },
    { label: 'Questions', href: '/#questions' },
    { label: 'Company Proof', href: '/#company-proof' },
    { label: 'WhatsApp', href: '/#whatsapp' },
  ];

  const brandName = siteData?.site_settings?.brand_name || 'TEAM JAIMIN';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <BrandLogo size="md" className="group-hover:scale-105 transition-transform" />
            <div className="flex items-center gap-2">
              <span className="font-editorial text-lg font-bold text-slate-900 tracking-tight uppercase">
                {brandName}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                OFFICIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0F172A] hover:bg-slate-800 text-white transition-all shadow-sm hover:scale-102"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0F172A] text-white rounded-full shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 bg-slate-100 rounded-xl border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Bar */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-[#0F172A] text-white shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
