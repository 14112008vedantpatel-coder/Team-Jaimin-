import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { AuthProvider } from './context/AuthContext';

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
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

export function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
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

            {/* Legal Supporting Pages (PRD 3.2) */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/earnings-disclaimer" element={<EarningsDisclaimerPage />} />

            {/* Admin Dashboard Routes (PRD 6) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboardPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SiteProvider>
  );
}

export default App;
