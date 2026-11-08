import React, { createContext, useContext, useState, useEffect } from 'react';
import { PublicSiteData } from '../types';
import { getPublicData } from '../api/client';
import { defaultSiteData } from '../data/defaultSiteData';

interface SiteContextType {
  siteData: PublicSiteData;
  loading: boolean;
  error: string | null;
  refreshSiteData: () => Promise<void>;
  getWhatsAppUrl: (templateKey?: string, customText?: string) => string;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<PublicSiteData>(defaultSiteData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSiteData = async () => {
    try {
      const res = await getPublicData();
      if (res.success && res.data) {
        setSiteData(res.data);
        setError(null);
      }
    } catch {
      // In static deployment (e.g. Vercel), fall back to bundled defaultSiteData
    }
  };

  useEffect(() => {
    fetchSiteData();
  }, []);

  const getWhatsAppUrl = (templateKey: string = 'general', customText?: string): string => {
    const rawNumber = siteData?.site_settings?.contact?.whatsapp_number || '+916355422503';
    const cleanNumber = rawNumber.replace(/\D/g, '');

    const templates = siteData?.site_settings?.contact?.whatsapp_templates as any;
    const message = customText || (templates && templates[templateKey]) || 'Hello JAIMIN! I visited your website and would like to learn more about joining TEAM JAIMIN.';

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
