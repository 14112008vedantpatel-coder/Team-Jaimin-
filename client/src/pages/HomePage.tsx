import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EarningProofsSection } from '../components/EarningProofsSection';
import { HowToJoinSection } from '../components/HowToJoinSection';
import { LiveTrainingSection } from '../components/LiveTrainingSection';
import { CompanyDocumentsSection } from '../components/CompanyDocumentsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white">
      <Header />
      <main>
        {/* 1. Hero Overview (Light background with Dark Centerpiece Card) */}
        <Hero />

        {/* 2. Team Feedback Videos (Crisp Light Background) */}
        <TestimonialsSection />

        {/* 3. Team Earning Proofs Carousel (High-Contrast Dark Section) */}
        <EarningProofsSection />

        {/* 4. How to Join 5-Step Roadmap (Crisp Light Section) */}
        <HowToJoinSection />

        {/* 5. Live Training Masterclasses (High-Contrast Dark Section) */}
        <LiveTrainingSection />

        {/* 6. Company Proof & Transparency (Crisp Light Section) */}
        <CompanyDocumentsSection />

        {/* 7. Questions / FAQ Accordion (Clean Light Section) */}
        <FaqSection />

        {/* 8. Talk to me on WhatsApp Final Conversion (High-Contrast Dark Section) */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
