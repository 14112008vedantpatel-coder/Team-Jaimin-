import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Settings,
  Sparkles,
  User,
  Building2,
  Briefcase,
  GitMerge,
  Users2,
  MessageSquareQuote,
  DollarSign,
  FileCheck2,
  Image,
  Calendar,
  HelpCircle,
  Inbox,
  FolderOpen,
  Shield,
  Download,
  LogOut,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export type AdminTab =
  | 'overview'
  | 'settings'
  | 'hero'
  | 'about'
  | 'company'
  | 'opportunity'
  | 'how-it-works'
  | 'team-members'
  | 'testimonials'
  | 'earning-proofs'
  | 'documents'
  | 'training'
  | 'events'
  | 'faqs'
  | 'enquiries'
  | 'media'
  | 'security'
  | 'backup';

interface AdminDashboardLayoutProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  children: React.ReactNode;
}

export const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  activeTab,
  onTabChange,
  children,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navModules: Array<{ id: AdminTab; label: string; icon: React.ReactNode; badge?: string }> = [
    { id: 'overview', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'enquiries', label: 'Enquiries / Leads CRM', icon: <Inbox className="w-4 h-4" />, badge: 'Leads' },
    { id: 'earning-proofs', label: 'Earning Proofs (Approval)', icon: <DollarSign className="w-4 h-4" />, badge: 'Review' },
    { id: 'testimonials', label: 'Testimonials & Reviews', icon: <MessageSquareQuote className="w-4 h-4" /> },
    { id: 'documents', label: 'Company Documents', icon: <FileCheck2 className="w-4 h-4" /> },
    { id: 'hero', label: 'Hero & Feature Cards', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'about', label: 'About Leader Profile', icon: <User className="w-4 h-4" /> },
    { id: 'company', label: 'Company Profile', icon: <Building2 className="w-4 h-4" /> },
    { id: 'opportunity', label: 'Opportunity Pillars', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'how-it-works', label: 'How It Works Steps', icon: <GitMerge className="w-4 h-4" /> },
    { id: 'team-members', label: 'Team Associate Profiles', icon: <Users2 className="w-4 h-4" /> },
    { id: 'training', label: 'Training Gallery', icon: <Image className="w-4 h-4" /> },
    { id: 'events', label: 'Events & Webinars', icon: <Calendar className="w-4 h-4" /> },
    { id: 'faqs', label: 'FAQs & Categories', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'media', label: 'Media Library & Uploads', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'settings', label: 'Website Settings & SEO', icon: <Settings className="w-4 h-4" /> },
    { id: 'security', label: 'Security & Audit Logs', icon: <Shield className="w-4 h-4" /> },
    { id: 'backup', label: 'Backup & JSON Export', icon: <Download className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col lg:flex-row text-[#171717]">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-[#10100D] text-white p-4 flex items-center justify-between sticky top-0 z-40 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-bold text-sm font-editorial">
            TJ
          </div>
          <span className="font-editorial text-base font-bold text-white">Admin Portal</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-white bg-white/10 rounded-xl"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#10100D] text-white flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 overflow-y-auto">
          {/* Brand header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#DDF77B] text-[#10100D] flex items-center justify-center font-editorial font-bold text-lg shadow-sm">
                TJ
              </div>
              <div>
                <span className="font-editorial text-base font-bold text-white block">
                  Team Jamin CMS
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Live Database Connected
                </span>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="space-y-1">
            {navModules.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#DDF77B] text-[#10100D] shadow-sm'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={isActive ? 'text-[#10100D]' : 'text-neutral-400'}>
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#10100D] text-[#DDF77B]'
                          : 'bg-white/10 text-neutral-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="truncate">
              <span className="text-neutral-400 text-[10px] block">Signed in as:</span>
              <strong className="text-white truncate block">{user?.email || 'admin@teamjamin.com'}</strong>
            </div>
            <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
              Super Admin
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-[11px] font-semibold text-white transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-[11px] font-semibold transition-colors"
            >
              <LogOut className="w-3 h-3" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Top Breadcrumb Bar */}
        <div className="hidden lg:flex items-center justify-between pb-6 mb-8 border-b border-[#EAE8E2]">
          <div className="flex items-center gap-2 text-xs text-[#696969]">
            <span>Admin</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-[#10100D] capitalize">
              {activeTab.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#EAE8E2] text-xs font-semibold text-[#171717] hover:bg-[#FAF9F6] transition-colors shadow-2xs"
            >
              <span>Open Public Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#696969]" />
            </a>
          </div>
        </div>

        {/* Child Module View */}
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>

    </div>
  );
};
