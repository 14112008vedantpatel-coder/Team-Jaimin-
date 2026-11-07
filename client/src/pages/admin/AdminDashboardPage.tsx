import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AdminDashboardLayout, AdminTab } from './AdminDashboardLayout';
import { AdminOverview } from './AdminOverview';
import {
  SettingsManager,
  HeroManager,
  AboutLeaderManager,
  EarningProofsManager,
  EnquiriesCrmManager,
  BackupManager,
} from './AdminModules';
import {
  TestimonialsManager,
  CompanyDocumentsManager,
  FaqsManager,
  MediaLibraryManager,
  SecurityLogsManager,
} from './AdminContentModules';

export const AdminDashboardPage: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#10100D] flex items-center justify-center text-white text-xs">
        Verifying secure administrative session...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <AdminDashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'overview' && <AdminOverview onNavigate={setActiveTab} />}
      {activeTab === 'enquiries' && <EnquiriesCrmManager />}
      {activeTab === 'earning-proofs' && <EarningProofsManager />}
      {activeTab === 'testimonials' && <TestimonialsManager />}
      {activeTab === 'documents' && <CompanyDocumentsManager />}
      {activeTab === 'hero' && <HeroManager />}
      {activeTab === 'about' && <AboutLeaderManager />}
      {activeTab === 'faqs' && <FaqsManager />}
      {activeTab === 'media' && <MediaLibraryManager />}
      {activeTab === 'settings' && <SettingsManager />}
      {activeTab === 'security' && <SecurityLogsManager />}
      {activeTab === 'backup' && <BackupManager />}
      {/* Fallback for other tabs */}
      {['company', 'opportunity', 'how-it-works', 'team-members', 'training', 'events'].includes(activeTab) && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-[#EAE8E2]">
            <h2 className="font-editorial text-2xl font-bold text-[#10100D] capitalize mb-2">
              {activeTab.replace('-', ' ')} Manager
            </h2>
            <p className="text-xs text-[#696969] mb-4">
              All records for this module are loaded dynamically from the database.
            </p>
            {activeTab === 'company' && <SettingsManager />}
            {activeTab === 'opportunity' && <HeroManager />}
            {activeTab === 'how-it-works' && <HeroManager />}
            {activeTab === 'training' && <MediaLibraryManager />}
            {activeTab === 'team-members' && <TestimonialsManager />}
            {activeTab === 'events' && <AdminOverview onNavigate={setActiveTab} />}
          </div>
        </div>
      )}
    </AdminDashboardLayout>
  );
};
