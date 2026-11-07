import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const FaqSection: React.FC = () => {
  const { siteData, getWhatsAppUrl } = useSite();
  const faqs = siteData?.faqs || [];
  const categories = siteData?.faq_categories || [
    'About the Work',
    'Getting Started',
    'Money & Earnings',
    'Company & Trust',
    'Support & Training',
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = faqs.filter(f => {
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE8E2] text-[11px] font-bold text-[#6747C7] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Direct Answers
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10100D] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#696969] leading-relaxed">
            Everything you need to know about the opportunity, legal compliance, time requirements, and earnings structure.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-[#696969] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by keyword (e.g. legal, joining fee, time, TDS)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#EAE8E2] text-xs sm:text-sm text-[#10100D] focus:outline-hidden focus:border-[#DDF77B] focus:ring-2 focus:ring-[#DDF77B]/20 transition-all shadow-xs"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#10100D] text-[#DDF77B]'
                : 'bg-white text-[#171717] border border-[#EAE8E2] hover:bg-[#FAF9F6]'
            }`}
          >
            All Questions ({faqs.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#10100D] text-[#DDF77B]'
                  : 'bg-white text-[#171717] border border-[#EAE8E2] hover:bg-[#FAF9F6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#EAE8E2] p-6">
            <p className="text-sm text-[#696969] mb-3">No matching questions found.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-bold text-[#6747C7] hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id || idx}
                  className="bg-white border border-[#EAE8E2] rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors"
                  >
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#10100D]">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-[#FAF9F6] border border-[#EAE8E2] shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 text-[#10100D] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#696969] leading-relaxed border-t border-[#EAE8E2]/60 animate-fade-in">
                      <p className="mb-2">{faq.answer}</p>
                      <span className="inline-block text-[10px] font-bold text-[#6747C7] uppercase tracking-wider bg-[#FAF9F6] px-2 py-0.5 rounded">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-white border border-[#EAE8E2] rounded-3xl p-6 sm:p-8">
          <h4 className="font-editorial text-lg font-bold text-[#10100D] mb-1">
            Have a specific question not covered here?
          </h4>
          <p className="text-xs text-[#696969] mb-4">
            Feel free to send a direct message on WhatsApp. No questions are off-limits.
          </p>
          <a
            href={getWhatsAppUrl('general', 'Hello Jamin! I have a specific question that was not listed in the FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DDF77B] text-[#10100D] font-bold text-xs hover:bg-[#CFF46B] transition-colors border border-[#10100D]/10"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-[#10100D]" />
            <span>Ask Jamin on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
