import React, { createContext, useContext, useState, useEffect } from 'react';
import { PublicSiteData } from '../types';
import { getPublicData } from '../api/client';

interface SiteContextType {
  siteData: PublicSiteData | null;
  loading: boolean;
  error: string | null;
  refreshSiteData: () => Promise<void>;
  getWhatsAppUrl: (templateKey?: string, customText?: string) => string;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<PublicSiteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSiteData = async () => {
    try {
      setLoading(true);
      const res = await getPublicData();
      if (res.success && res.data) {
        setSiteData(res.data);
        setError(null);
      } else {
        setError('Failed to load site information.');
      }
    } catch (err: any) {
      console.error('Failed to load site data:', err);
      setError(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteData();
  }, []);

  const getWhatsAppUrl = (templateKey: string = 'general', customText?: string): string => {
    if (!siteData) return '#';
    const rawNumber = siteData.site_settings.contact.whatsapp_number || '+919876543210';
    const cleanNumber = rawNumber.replace(/\D/g, '');

    const templates = siteData.site_settings.contact.whatsapp_templates as any;
    const message = customText || (templates && templates[templateKey]) || 'Hello Jamin! I visited your website and would like more details.';

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <SiteContext.Provider
      value={{
        siteData,
        loading,
        error,
        refreshSiteData: fetchSiteData,
        getWhatsAppUrl,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
