const fs = require('fs');
const path = require('path');

const docs = [
  {
    id: 'doc_udyam',
    title: 'Govt. of India Udyam Registration Certificate',
    document_number: 'UDYAM-GJ-01-0681992',
    issuing_authority: 'Ministry of Micro, Small and Medium Enterprises, Govt. of India',
    category: 'Govt. MSME Registration',
    issue_date: '11 September 2026',
    expiry_date: 'Perpetual',
    file_url: '/company-proofs/proof-udyam-cert.jpg',
    verification_url: 'https://udyamregistration.gov.in',
    is_public: true,
    status: 'Active / Verified'
  },
  {
    id: 'doc_chatgpt_1',
    title: 'ChatGPT AI Platform & Trust Verification',
    document_number: 'Legal & Trusted EdTech Skill Platform',
    issuing_authority: 'OpenAI ChatGPT Autonomous Entity Audit',
    category: 'Independent AI Verification',
    issue_date: '2026 Audit',
    expiry_date: 'Active',
    file_url: '/company-proofs/proof-chatgpt-1.jpg',
    verification_url: 'https://chatgpt.com',
    is_public: true,
    status: 'AI Verified'
  },
  {
    id: 'doc_chatgpt_2',
    title: 'ChatGPT System & CRM Growth Review',
    document_number: 'Automated CRM & Training Architecture',
    issuing_authority: 'OpenAI ChatGPT System Architecture Review',
    category: 'Technology & Training Audit',
    issue_date: '2026 Audit',
    expiry_date: 'Active',
    file_url: '/company-proofs/proof-chatgpt-2.jpg',
    verification_url: 'https://chatgpt.com',
    is_public: true,
    status: 'AI Verified ✅'
  },
  {
    id: 'doc_gemini',
    title: 'Google Gemini MCA & Legal Registration Audit',
    document_number: 'Officially Registered with Govt. of India (MCA)',
    issuing_authority: 'Google Gemini Official Knowledge Registry',
    category: 'MCA & Regulatory Verification',
    issue_date: '2026 Audit',
    expiry_date: 'Active',
    file_url: '/company-proofs/proof-gemini.jpg',
    verification_url: 'https://gemini.google.com',
    is_public: true,
    status: 'Legitimate & Compliant'
  }
];

// Update database.json
const dbPath = path.join(__dirname, '..', 'server', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
db.company_documents = docs;
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully written 4 proofs to database.json');
