import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WhyLearn } from '../components/WhyLearn';
import { AboutMeSection } from '../components/AboutMeSection';
import { CompanyProfileSection } from '../components/CompanyProfileSection';
import { OpportunitySection } from '../components/OpportunitySection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EarningProofsSection } from '../components/EarningProofsSection';
import { CompanyDocumentsSection } from '../components/CompanyDocumentsSection';
import { TrainingGallerySection } from '../components/TrainingGallerySection';
import { EventsSection } from '../components/EventsSection';
import { LeaderMessageSection } from '../components/LeaderMessageSection';
import { HowToJoinSection } from '../components/HowToJoinSection';
import { TransparencySection } from '../components/TransparencySection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#171717] selection:bg-[#DDF77B] selection:text-[#10100D]">
      <Header />
      <main>
        <Hero />
        <WhyLearn />
        <AboutMeSection />
        <CompanyProfileSection />
        <OpportunitySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <EarningProofsSection />
        <CompanyDocumentsSection />
        <TrainingGallerySection />
        <EventsSection />
        <LeaderMessageSection />
        <HowToJoinSection />
        <TransparencySection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
