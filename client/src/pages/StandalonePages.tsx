import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { AboutMeSection } from '../components/AboutMeSection';
import { CompanyProfileSection } from '../components/CompanyProfileSection';
import { OpportunitySection } from '../components/OpportunitySection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EarningProofsSection } from '../components/EarningProofsSection';
import { CompanyDocumentsSection } from '../components/CompanyDocumentsSection';
import { TrainingGallerySection } from '../components/TrainingGallerySection';
import { HowToJoinSection } from '../components/HowToJoinSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { WhyLearn } from '../components/WhyLearn';
import { EventsSection } from '../components/EventsSection';
import { LeaderMessageSection } from '../components/LeaderMessageSection';
import { TransparencySection } from '../components/TransparencySection';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white">
    <Header />
    <div className="pt-24">{children}</div>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export const AboutPage: React.FC = () => (
  <PageWrapper>
    <AboutMeSection />
    <LeaderMessageSection />
    <WhyLearn />
  </PageWrapper>
);

export const CompanyPage: React.FC = () => (
  <PageWrapper>
    <CompanyProfileSection />
    <TransparencySection />
    <CompanyDocumentsSection />
  </PageWrapper>
);

export const OpportunityPage: React.FC = () => (
  <PageWrapper>
    <OpportunitySection />
    <WhyLearn />
    <HowToJoinSection />
  </PageWrapper>
);

export const HowItWorksPage: React.FC = () => (
  <PageWrapper>
    <HowItWorksSection />
    <HowToJoinSection />
  </PageWrapper>
);

export const TeamPage: React.FC = () => (
  <PageWrapper>
    <TestimonialsSection />
  </PageWrapper>
);

export const TeamResultsPage: React.FC = () => (
  <PageWrapper>
    <EarningProofsSection />
    <TestimonialsSection />
  </PageWrapper>
);

export const CompanyProofPage: React.FC = () => (
  <PageWrapper>
    <CompanyDocumentsSection />
    <CompanyProfileSection />
  </PageWrapper>
);

export const TrainingPage: React.FC = () => (
  <PageWrapper>
    <TrainingGallerySection />
    <EventsSection />
  </PageWrapper>
);

export const HowToJoinPage: React.FC = () => (
  <PageWrapper>
    <HowToJoinSection />
    <HowItWorksSection />
  </PageWrapper>
);

export const FaqsPage: React.FC = () => (
  <PageWrapper>
    <FaqSection />
    <ContactSection />
  </PageWrapper>
);

export const ContactPage: React.FC = () => (
  <PageWrapper>
    <ContactSection />
  </PageWrapper>
);

export const NotFoundPage: React.FC = () => (
  <PageWrapper>
    <div className="py-24 text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 rounded-3xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-bold text-2xl mx-auto mb-4 font-editorial">
        404
      </div>
      <h1 className="font-editorial text-2xl font-bold text-[#10100D] mb-2">Page Not Found</h1>
      <p className="text-xs text-[#696969] mb-6">
        The requested page does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#10100D] text-white text-xs font-bold hover:bg-[#10100D]/90"
      >
        Back to Homepage
      </a>
    </div>
  </PageWrapper>
);
