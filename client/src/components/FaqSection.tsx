import React, { useState } from 'react';
import {
  Scale,
  Shield,
  Clock,
  Smartphone,
  Wallet,
  ChevronDown,
  ChevronRight,
  Info,
  HelpCircle,
} from 'lucide-react';

interface FaqItemData {
  id: string;
  category: string;
  question: string;
  answer: string;
  iconBg: string;
  icon: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const faqData: FaqItemData[] = [
    // Category 1: ABOUT THE WORK
    {
      id: 'q1',
      category: 'ABOUT THE WORK',
      question: 'Is this work legal & registered?',
      answer:
        'Yes. It is run under TEAM JAIMIN digital business and learning platform, registered with the Ministry of Corporate Affairs, compliant with the Consumer Protection (Direct Selling) Rules, 2021.',
      iconBg: 'bg-purple-100 text-purple-700 border border-purple-200',
      icon: <Scale className="w-4 h-4 text-purple-700" />,
    },
    {
      id: 'q2',
      category: 'ABOUT THE WORK',
      question: 'Are there any joining fees or hidden charges?',
      answer:
        'No. There is zero joining fee and zero compulsory product purchase with TEAM JAIMIN. You earn commissions strictly based on verified customer transactions, fully compliant with Indian Direct Selling regulations.',
      iconBg: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      icon: <Shield className="w-4 h-4 text-emerald-700" />,
    },

    // Category 2: GETTING STARTED
    {
      id: 'q3',
      category: 'GETTING STARTED',
      question: 'How much time do I need daily?',
      answer:
        '1 to 2 hours daily is sufficient. Most of our students and working professionals work during evening hours or weekends at their own schedule.',
      iconBg: 'bg-blue-100 text-blue-700 border border-blue-200',
      icon: <Clock className="w-4 h-4 text-blue-700" />,
    },
    {
      id: 'q4',
      category: 'GETTING STARTED',
      question: 'Do I need a laptop or prior marketing experience?',
      answer:
        'No. A basic smartphone with an internet connection is all you need. TEAM JAIMIN provides step-by-step training from scratch from day one.',
      iconBg: 'bg-cyan-100 text-cyan-700 border border-cyan-200',
      icon: <Smartphone className="w-4 h-4 text-cyan-700" />,
    },

    // Category 3: MONEY
    {
      id: 'q5',
      category: 'MONEY',
      question: 'How do I receive my earnings & payouts?',
      answer:
        'Earnings are transferred directly to your verified bank account weekly every Tuesday via NEFT/IMPS with statutory TDS deductions and official invoice slips.',
      iconBg: 'bg-amber-100 text-amber-700 border border-amber-200',
      icon: <Wallet className="w-4 h-4 text-amber-700" />,
    },
  ];

  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ q1: true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = ['ABOUT THE WORK', 'GETTING STARTED', 'MONEY'];

  return (
    <section id="questions" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, intro & desktop disclaimer card */}
          <div className="lg:col-span-5 text-left space-y-4 lg:space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarifications & Transparency</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
              Find transparent, honest answers regarding daily schedule requirements, payouts, legal compliance, and training support.
            </p>

            {/* Disclaimer Card */}
            <div className="hidden lg:flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-xs">
              <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-900">Earnings Disclaimer:</strong> Results shown on this website are from real individual team members. Income depends strictly on your personal effort, consultative skills and time invested.
              </p>
            </div>
          </div>

          {/* Right Column: Grouped Questions Accordion */}
          <div className="lg:col-span-7 space-y-6">
            {categories.map((cat) => {
              const items = faqData.filter((f) => f.category === cat);
              return (
                <div key={cat} className="space-y-2 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block px-1">
                    {cat}
                  </span>

                  <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-200">
                    {items.map((item) => {
                      const isOpen = !!openIds[item.id];
                      return (
                        <div key={item.id} className="transition-colors">
                          <button
                            onClick={() => toggle(item.id)}
                            className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left hover:bg-white transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${item.iconBg}`}
                              >
                                {item.icon}
                              </div>
                              <span className="text-sm font-bold text-slate-900 leading-snug">
                                {item.question}
                              </span>
                            </div>

                            <div className="text-slate-400 shrink-0">
                              {isOpen ? (
                                <ChevronDown className="w-5 h-5 text-slate-900" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-slate-400" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 pl-16 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fade-in bg-white">
                              <p>{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Mobile Only Bottom Disclaimer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex lg:hidden items-start gap-3 text-xs text-slate-500 leading-relaxed text-left">
              <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-900">Earnings Disclaimer:</strong> Results are from individual team members. Income depends on your effort, skills and time.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
