import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';

// Pages
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  CompanyPage,
  OpportunityPage,
  HowItWorksPage,
  TeamPage,
  TeamResultsPage,
  CompanyProofPage,
  TrainingPage,
  HowToJoinPage,
  FaqsPage,
  ContactPage,
  NotFoundPage,
} from './pages/StandalonePages';
import {
  PrivacyPolicyPage,
  TermsPage,
  EarningsDisclaimerPage,
} from './pages/LegalPages';

export function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Main & Standalone Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/opportunity" element={<OpportunityPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-results" element={<TeamResultsPage />} />
          <Route path="/company-proof" element={<CompanyProofPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/how-to-join" element={<HowToJoinPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal Supporting Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/earnings-disclaimer" element={<EarningsDisclaimerPage />} />

          {/* Admin routes redirect to home - no admin panel */}
          <Route path="/admin/*" element={<Navigate to="/" replace />} />
          <Route path="/admin" element={<Navigate to="/" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  );
}

export default App;
