import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, Key, ShieldCheck, ArrowRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminLogin: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('admin@teamjamin.com');
  const [password, setPassword] = useState('Admin@2026!');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#10100D] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#DDF77B]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-[#EAE8E2] z-10">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#696969] hover:text-[#10100D] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Public Website</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#10100D] text-[#DDF77B] flex items-center justify-center font-editorial font-bold text-xl mx-auto mb-3 shadow-sm">
            TJ
          </div>
          <h1 className="font-editorial text-2xl font-bold text-[#10100D]">
            Admin Control Center
          </h1>
          <p className="text-xs text-[#696969] mt-1">
            Sign in to manage website content, leads & approvals.
          </p>
        </div>

        {error && (
          <div className="p-3.5 mb-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#696969] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@teamjamin.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1.5">
              Password
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#696969] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs text-[#10100D] focus:outline-hidden focus:border-[#DDF77B]"
              />
            </div>
          </div>

          <div className="p-3 bg-[#FAF9F6] rounded-xl border border-[#EAE8E2] text-[11px] text-[#696969] space-y-0.5">
            <div className="font-semibold text-[#10100D]">Pre-seeded Admin Credentials:</div>
            <div>Email: <code className="font-mono text-[#10100D]">admin@teamjamin.com</code></div>
            <div>Password: <code className="font-mono text-[#10100D]">Admin@2026!</code></div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#10100D] text-white font-bold text-xs sm:text-sm hover:bg-[#10100D]/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
          >
            <Lock className="w-4 h-4 text-[#DDF77B]" />
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#EAE8E2] text-center text-[11px] text-[#696969] flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Encrypted Session • Rate-Limited Access</span>
        </div>

      </div>
    </div>
  );
};
