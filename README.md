# Team Jamin — Personal Brand & Direct Selling Platform

A premium, modern, trust-first personal business website and lead-generation platform built in strict adherence to the **Product Requirements Document (PRD)**.

---

## 🌟 Executive Summary & Compliance Standards

- **Indian Regulatory Safeguards**: Fully compliant with the **Consumer Protection (Direct Selling) Rules, 2021** and the **2023 amendment**.
  - **Zero Joining Fees**: Mandatory disclosures confirming strictly ₹0 registration fee and zero compulsory product starter kits.
  - **Income Disclosures**: Prominent statutory income disclaimers on all earning proofs and website footers.
  - **Separation of Entities**: Clear distinction between the corporate manufacturer (*Vedic Roots Enterprise Pvt. Ltd.*) and the independent distribution community (*Team Jamin*).
  - **Data Privacy**: Complete **Digital Personal Data Protection (DPDP) Act, 2023** compliant enquiry flows with explicit consent checkboxes and unexposed lead records.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 8, TypeScript, Tailwind CSS v4, Lucide Icons |
| **Typography** | Playfair Display (Serif Headings), Plus Jakarta Sans / Manrope (Clean Sans-Serif Body) |
| **Routing** | React Router DOM v7 |
| **Backend** | Node.js, Express.js |
| **Database** | Normalized, transactional database engine (`server/data/database.json`) with atomic file writes and auto-seeding |
| **Authentication** | JSON Web Tokens (JWT) & `bcryptjs` password hashing |
| **Media Handling** | Multer upload processing with file-type validation & asset library |

---

## 🚀 Key Implemented Features

### 1. Public Visitor Platform
1. **Sticky Header & Mobile Navigation**:
   - Monogram logo (`TJ`), dynamic WhatsApp CTA, mobile hamburger drawer, active section navigation, and quick admin portal link.
2. **Hero & Introduction (PRD 4.2)**:
   - Leader portrait, verified mentor badge, editorial headline, WhatsApp consultation CTA, and 4 editable Bento cards (*Active Mentees, Beginner Friendly, Flexible Timing, Live Team Support*).
3. **Why Learn With Our Team? (PRD 5.1)**:
   - 6 core pillars explaining structured curriculum, zero hype, and practical digital business execution.
4. **About Me (/about) (PRD 4.3)**:
   - Editorial 2-column layout with leader portrait, personal mission statement, biography, verified statistics, and social channels.
5. **About Corporate Partner (/company) (PRD 4.4)**:
   - Verified MCA CIN, GSTIN, Udyam MSME, registered address, and "Why I Work With This Company" statement.
6. **Business Opportunity (/opportunity) (PRD 4.5)**:
   - 4 pillars (*Learn, Implement, Get Mentorship, Track Progress*) and zero-inventory direct shipping model.
7. **How It Works (/how-it-works) (PRD 4.6)**:
   - 6-step transparent roadmap with timeframes and milestones.
8. **Testimonials & Video Reviews (/team) (PRD 4.7)**:
   - Featured interactive video player modal, written member feedback, and associate spotlights.
9. **Team Earning Proofs (/team-results) (PRD 4.8)**:
   - Daily, weekly, and monthly filters; modal viewer with zoom and redacted account details; mandatory statutory earnings disclaimer.
10. **Company Documents & Proof (/company-proof) (PRD 4.9)**:
    - Incorporation certificate, GSTIN, MSME, and FSSAI licenses with zoomable modal viewer and links to official government portals (MCA, GSTN).
11. **Live Training & Gatherings (/training) (PRD 4.10)**:
    - Asymmetric editorial media gallery and lightbox modal for summits, webinars, and workshops.
12. **Live Events & Schedules (PRD 5.4)**:
    - Upcoming live Zoom webinar passes with instant WhatsApp reservation.
13. **Team Leader Personal Message (PRD 5.3)**:
    - Founder message emphasizing ethics, systems, and disciplined execution.
14. **How to Join (/how-to-join) (PRD 4.11)**:
    - 5-step transparent joining roadmap with informational consultation.
15. **Frequently Asked Questions (/faqs) (PRD 4.12)**:
    - Interactive accordion with instant keyword search and category filters.
16. **Lead Generation & WhatsApp Hub (/contact) (PRD 4.13 & 7)**:
    - "Let's Talk on WhatsApp" conversion hub with prefilled message templates.
    - DPDP-compliant enquiry form that saves to the database, assigns a unique lead ID (e.g. `ENQ-2026-XXXX`), and redirects to a prefilled WhatsApp chat.
17. **Floating WhatsApp Widget**:
    - Sticky bottom-right chat bubble with online pulse badge and quick topic launcher.
18. **Supporting Legal Pages (PRD 3.2)**:
    - `/privacy-policy` (DPDP Act, 2023)
    - `/terms` (Direct Selling Code of Conduct)
    - `/earnings-disclaimer` (Consumer Protection Rules)

---

### 2. Admin Dashboard (`/admin` and `/admin/login`)
- **Authentication (PRD 6.1)**: Dedicated login route with JWT sessions and bcrypt password hashing.
- **Real Database Overview (PRD 6.2)**: Live counts of enquiries, pending proofs, published reviews, and documents.
- **Lead Generation CRM (PRD 7.2)**:
  - Filter by statuses: *New, Contacted, Follow-up Required, Interested, Not Interested, Converted, Closed*.
  - Internal follow-up notes history.
  - Direct WhatsApp response button per lead.
  - **Export CSV** button for spreadsheet and CRM integration.
- **Earning Proofs Approval Workflow (PRD 4.8)**:
  - Workflow states: *Draft, Pending Review, Approved for Publication, Rejected, Archived*.
  - **Only approved records appear publicly.**
- **Content Management**:
  - Full CRUD for Website Settings, Hero Section, About Me, Company Profile, Opportunities, How It Works, Testimonials, Documents, FAQs, and Events.
- **Media Library (PRD 6.5)**:
  - Drag-and-drop / file upload via Multer, asset grid, URL copying, and file deletion.
- **Security & Audit Trail (PRD 10)**:
  - Administrative audit logs tracking actions, timestamps, and entities.
- **System Backup & Export (PRD 6.3)**:
  - One-click full database JSON export.

---

## 🔑 Default Admin Credentials

- **URL**: `http://localhost:5000/admin/login` (or `/admin`)
- **Email**: `admin@teamjamin.com`
- **Password**: `Admin@2026!`

---

## 💻 Local Execution Instructions

### Run Both Backend & Frontend in Development
```bash
# Start backend server
node server/index.js

# In another terminal, start Vite frontend
cd client
npm run dev
```

### Production Build & Launch
```bash
# Build the client production bundle
cd client
npm run build
cd ..

# Start the unified Node.js server (serves API + static frontend)
node server/index.js
```
The application will be live at `http://localhost:5000`.
