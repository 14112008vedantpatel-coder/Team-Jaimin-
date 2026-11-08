const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'server', 'data', 'database.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const site_settings = dbData.site_settings || {};
const hero = dbData.hero || {};
const leader_profile = dbData.leader_profile || {};
const company_profile = dbData.company_profile || {};
const business_opportunities = dbData.business_opportunities || [];
const how_it_works = dbData.how_it_works || [];
const team_members = dbData.team_members || [];

const rawTestimonials = dbData.testimonials || [];
const testimonials = rawTestimonials.filter(t => t.is_published !== false);

const rawProofs = dbData.earning_proofs || [];
const earning_proofs = rawProofs.filter(p => p.status === 'Approved for Publication');

const rawDocs = dbData.company_documents || [];
const company_documents = rawDocs.filter(d => d.is_public !== false);

const training_media = dbData.training_media || [];
const rawEvents = dbData.events || [];
const events = rawEvents.filter(e => e.status !== 'Past');

const rawFaqs = dbData.faqs || [];
const faqs = rawFaqs.filter(f => f.is_published !== false);
const faq_categories = dbData.faq_categories || [];

const publicData = {
  site_settings,
  hero,
  leader_profile,
  company_profile,
  business_opportunities,
  how_it_works,
  team_members,
  testimonials,
  earning_proofs,
  company_documents,
  training_media,
  events,
  faqs,
  faq_categories
};

const outputPath = path.join(__dirname, '..', 'client', 'src', 'data', 'defaultSiteData.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
const fileContent = `import { PublicSiteData } from '../types';

export const defaultSiteData: PublicSiteData = ${JSON.stringify(publicData, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully wrote defaultSiteData.ts to:', outputPath);
