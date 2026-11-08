export interface SiteSettings {
  brand_name: string;
  monogram: string;
  tagline: string;
  logo_url: string;
  favicon_url: string;
  theme: {
    primary_dark: string;
    primary_lime: string;
    secondary_lime: string;
    accent_purple: string;
    accent_pink: string;
    accent_cyan: string;
    main_bg: string;
    card_bg: string;
    main_text: string;
    secondary_text: string;
    border_color: string;
  };
  contact: {
    whatsapp_number: string;
    whatsapp_country_code: string;
    display_phone: string;
    email: string;
    address: string;
    hours: string;
    social: {
      instagram: string;
      youtube: string;
      linkedin: string;
      telegram: string;
    };
    whatsapp_templates: {
      hero: string;
      opportunity: string;
      testimonials: string;
      company: string;
      general: string;
    };
  };
  seo: {
    meta_title: string;
    meta_description: string;
    og_image: string;
    canonical_url: string;
    indexing: boolean;
  };
  disclaimers: {
    earnings: string;
    statutory: string;
  };
}

export interface HeroSection {
  badge: string;
  headline: string;
  subheadline: string;
  cta_primary_text: string;
  cta_secondary_text: string;
  media_url?: string;
  feature_cards: Array<{
    id: string;
    title: string;
    value: string;
    description: string;
    icon: string;
  }>;
}

export interface LeaderProfile {
  name: string;
  designation: string;
  portrait_url: string;
  experience_years: string;
  mentored_count: string;
  sessions_conducted: string;
  satisfaction_rate: string;
  bio_paragraphs: string[];
  personal_mission: string;
}

export interface CompanyProfile {
  company_name: string;
  brand_name: string;
  corporate_website: string;
  cin: string;
  gstin: string;
  udyam_reg: string;
  incorporation_date: string;
  registered_office: string;
  category: string;
  operating_model: string;
  why_work_statement: string;
  compliance_badge: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
  order_index: number;
}

export interface ProcessStep {
  id: string;
  step_number: string;
  title: string;
  description: string;
  timeframe: string;
  badge: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar_url: string;
  quote: string;
  period: string;
  order_index: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  type: 'video' | 'text';
  video_url?: string;
  thumbnail_url?: string;
  content: string;
  rating: number;
  is_featured: boolean;
  is_published: boolean;
  order_index: number;
}

export interface EarningProof {
  id: string;
  member_name: string;
  amount: string;
  period: 'daily' | 'weekly' | 'monthly';
  date: string;
  category: string;
  proof_image_url: string;
  redacted_info: string;
  status: 'Draft' | 'Pending Review' | 'Approved for Publication' | 'Rejected' | 'Archived';
  notes?: string;
}

export interface CompanyDocument {
  id: string;
  title: string;
  document_number: string;
  issuing_authority: string;
  category: string;
  issue_date: string;
  expiry_date: string;
  file_url: string;
  verification_url: string;
  is_public: boolean;
  status: string;
}

export interface TrainingMedia {
  id: string;
  title: string;
  media_type: 'image' | 'video';
  category: string;
  file_url: string;
  date: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  date_time: string;
  platform: string;
  description: string;
  speaker: string;
  status: string;
  registration_whatsapp_text: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  order_index: number;
  is_published: boolean;
}

export interface EnquiryNote {
  id: string;
  enquiry_id: string;
  author: string;
  note: string;
  created_at: string;
}

export interface EnquiryLead {
  id: string;
  enquiry_id: string;
  full_name: string;
  mobile: string;
  city: string;
  email?: string;
  area_of_interest: string;
  preferred_contact: string;
  message?: string;
  consent_given: boolean;
  consent_timestamp?: string;
  status: 'New' | 'Contacted' | 'Follow-up Required' | 'Interested' | 'Not Interested' | 'Converted' | 'Closed';
  created_at: string;
  notes?: EnquiryNote[];
}

export interface MediaItem {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  file_size: number;
  url: string;
  alt_text: string;
  created_at: string;
}

export interface AuditLog {
  id: string;
  user_email: string;
  action: string;
  entity: string;
  details: string;
  timestamp: string;
}

export interface PublicSiteData {
  site_settings: SiteSettings;
  hero: HeroSection;
  leader_profile: LeaderProfile;
  company_profile: CompanyProfile;
  business_opportunities: OpportunityItem[];
  how_it_works: ProcessStep[];
  team_members: TeamMember[];
  testimonials: Testimonial[];
  earning_proofs: EarningProof[];
  company_documents: CompanyDocument[];
  training_media: TrainingMedia[];
  events: EventItem[];
  faqs: FAQItem[];
  faq_categories: string[];
}
