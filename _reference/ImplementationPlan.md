\# Bird & Yang Professional Services Website

\## Overview

Build a premium, multi-page professional services website for \*\*Bird &
Yang\*\* --- an integrated Legal, Accounting, and Consulting firm based
in Auckland, New Zealand. The site will be English-first (Chinese
version planned for future), covering 53 distinct page views organized
into a clean, hierarchical navigation structure.

\## Brand Identity

\| Element \| Value \|

\|\-\-\-\-\-\-\-\--\|\-\-\-\-\-\--\|

\| \*\*Primary Blue\*\* \| \`rgb(1, 48, 138)\` / \`#01308A\` \|

\| \*\*Primary Gold\*\* \| \`rgb(197, 133, 30)\` / \`#C5851E\` \|

\| \*\*Font\*\* \| Verdana (system font, no external loading needed) \|

\| \*\*Logo (White BG)\*\* \| \`Logo1_English_White Background.png\` \|

\| \*\*Logo (Blue BG)\*\* \| \`Logo2_English_BlueBackground.png\` \|

\## Technology Stack

\- \*\*Vite\*\* --- Fast build tool with hot module replacement for
development

\- \*\*Vanilla HTML/CSS/JS\*\* --- No framework, maximum control and
performance

\- \*\*CSS Custom Properties\*\* --- Design system tokens for brand
consistency

\- \*\*Client-side routing\*\* --- Hash-based routing for SPA behavior
(all 53 pages in one app)

\- \*\*Responsive design\*\* --- Mobile-first approach

\## Site Architecture

The 53 pages map to this hierarchy:

\`\`\`

HOME (01)

├── LEGAL (02)

│ ├── Immigration (03)

│ │ └── Business & Investor Visas (04) \[Featured sub-page\]

│ ├── Property & Development (05)

│ ├── Business Law (06)

│ ├── Estate Planning, Trusts & Wills (07)

│ ├── Family & Employment (08)

│ ├── Litigation & Dispute Resolution (09)

│ ├── China Desk / Cross-Border (10)

│ └── Team Members: Marshall Bird (11), Aimee Yang (12), Julia Huang
(13),

│ Cici Du (14), Rockie Wei (15), Ming Lu (16)

├── ACCOUNTING (17)

│ ├── Annual/Monthly Accounts (18)

│ ├── Taxation (19)

│ ├── Budget & Forecast (20)

│ ├── Cash Flow Management (21)

│ ├── Business Plans (22)

│ ├── Asset Management (23)

│ ├── Trust Accounting (24)

│ └── Team Members: Heather Chao (25), Ming Lu (26), Ally Liao (27)

├── CONSULTING (28)

│ ├── Insurance Home (29)

│ │ ├── Car Insurance (30)

│ │ ├── House Insurance (31)

│ │ └── Life, Health & Business (32)

│ ├── HR Consulting Home (33)

│ │ ├── Compliance (34)

│ │ ├── People Management (35)

│ │ ├── Workplace Culture & Risk (36)

│ │ ├── Recruitment & Retention (37)

│ │ └── Bilingual HR (38)

│ ├── Immigration Consulting Home (39)

│ │ ├── Pathway Support (40)

│ │ ├── Application Preparation (41)

│ │ ├── Relationship & Employment Evidence (42)

│ │ └── Timeline & Process Management (43)

│ └── Team Members: Aimee Yang (44), Julia Huang (45), Rockie Wei (46)

├── WHY BIRD & YANG (47)

│ ├── Our Foundation (48)

│ └── How Legal, Accounting & Consulting Work Together (49)

├── CONTACT US (50, 51, 52)

└── BOOK A CONSULTATION (53)

\`\`\`

\## Design System

Drawing from the reference designs, the website will feature:

1\. \*\*Dark navy hero banners\*\* with subtle starfield/network
animation (matching the global connectivity theme in the logos)

2\. \*\*Gold accent lines and dots\*\* as decorative separators
(matching the logo\'s gold dot motif)

3\. \*\*White content sections\*\* with clean typography and generous
whitespace

4\. \*\*Service cards\*\* with blue icon badges and hover animations

5\. \*\*Team member circular portraits\*\* --- all uniform size (200px
diameter circles) with \`object-fit: cover\` and \`object-position:
center\` for consistent proportions

6\. \*\*Expandable/accordion items\*\* for service detail lists (click
to expand detailed descriptions)

7\. \*\*Sticky header navigation\*\* with transparent-to-solid
transition on scroll

8\. \*\*Footer\*\* with blue background, gold accents, and
navigation/contact info

9\. \*\*\"Book a Consultation\" CTA buttons\*\* in gold with hover
effects throughout

\## Team Member Photo Mapping

\| \# \| Photo File \| Name \| Division(s) \|

\|\-\--\|\-\-\-\-\-\-\-\-\-\--\|\-\-\-\-\--\|\-\-\-\-\-\-\-\-\-\-\-\--\|

\| 01 \| TeamMember01_11 \| Marshall Bird \| Legal \|

\| 02 \| TeamMember02_12 \| Aimee Yang \| Legal, Consulting \|

\| 03 \| TeamMember03_13 \| Julia Huang \| Legal, Consulting \|

\| 04 \| TeamMember04_14 \| Cici Du \| Legal \|

\| 05 \| TeamMember05_15 \| Rockie Wei \| Legal, Consulting \|

\| 06 \| TeamMember06_16 \| Ming Lu \| Legal, Accounting \|

\| 07 \| TeamMember07_25 \| Heather Chao \| Accounting \|

\| 08 \| TeamMember08_26 \| Ming Lu \| Accounting (same person as 06) \|

\| 09 \| TeamMember09_27 \| Ally Liao \| Accounting \|

\| 10 \| TeamMember10_44 \| Aimee Yang \| Consulting (same as 02) \|

\| 11 \| TeamMember11_45 \| Julia Huang \| Consulting (same as 03) \|

\| 12 \| TeamMember12_46 \| Rockie Wei \| Consulting (same as 05) \|

\> \[!NOTE\]

\> Duplicated team members (Aimee Yang, Julia Huang, Rockie Wei, Ming
Lu) appear in multiple divisions. Each division\'s team section will use
the photo designated for that division context.

\## Proposed Changes

\### Phase 1: Project Setup & Design System

\#### \[NEW\] Project initialization with Vite

\`\`\`

C:\\Users\\allyl\\Documents\\AI_workspace\\BirdYang-Website\\

├── index.html

├── vite.config.js

├── package.json

├── public/

│ ├── images/

│ │ ├── logos/ (Logo PNGs copied from input)

│ │ └── team/ (Team member PNGs copied from input)

│ └── favicon.ico

├── src/

│ ├── main.js (Entry point, router, app initialization)

│ ├── styles/

│ │ ├── index.css (Design system: tokens, base, utilities)

│ │ ├── layout.css (Header, footer, navigation, grid)

│ │ ├── components.css (Cards, buttons, forms, accordions)

│ │ └── pages.css (Page-specific styles)

│ ├── router.js (Hash-based SPA router)

│ ├── components/

│ │ ├── header.js (Sticky nav with scroll behavior)

│ │ ├── footer.js (Global footer)

│ │ ├── hero.js (Hero banner component)

│ │ ├── service-card.js (Reusable service card)

│ │ ├── team-card.js (Circular team member card)

│ │ ├── accordion.js (Expandable service items)

│ │ ├── contact-form.js (Contact & consultation forms)

│ │ └── cta-button.js (Call-to-action button)

│ ├── pages/

│ │ ├── home.js (01)

│ │ ├── legal/

│ │ │ ├── legal-home.js (02)

│ │ │ ├── immigration.js (03)

│ │ │ ├── business-investor.js (04)

│ │ │ ├── property.js (05)

│ │ │ ├── business-law.js (06)

│ │ │ ├── estate-planning.js (07)

│ │ │ ├── family-employment.js (08)

│ │ │ ├── litigation.js (09)

│ │ │ ├── china-desk.js (10)

│ │ │ └── team/ (11-16)

│ │ ├── accounting/

│ │ │ ├── accounting-home.js (17)

│ │ │ ├── annual-accounts.js (18)

│ │ │ ├── taxation.js (19)

│ │ │ ├── budget-forecast.js (20)

│ │ │ ├── cash-flow.js (21)

│ │ │ ├── business-plans.js (22)

│ │ │ ├── asset-management.js (23)

│ │ │ ├── trust-accounting.js (24)

│ │ │ └── team/ (25-27)

│ │ ├── consulting/

│ │ │ ├── consulting-home.js (28)

│ │ │ ├── insurance-home.js (29)

│ │ │ ├── car-insurance.js (30)

│ │ │ ├── house-insurance.js (31)

│ │ │ ├── life-health.js (32)

│ │ │ ├── hr-home.js (33)

│ │ │ ├── hr-compliance.js (34)

│ │ │ ├── hr-people.js (35)

│ │ │ ├── hr-workplace.js (36)

│ │ │ ├── hr-recruitment.js (37)

│ │ │ ├── hr-bilingual.js (38)

│ │ │ ├── immigration-consulting-home.js (39)

│ │ │ ├── pathway-support.js (40)

│ │ │ ├── application-prep.js (41)

│ │ │ ├── relationship-employment.js (42)

│ │ │ ├── timeline-process.js (43)

│ │ │ └── team/ (44-46)

│ │ ├── why-bird-yang/

│ │ │ ├── why-home.js (47)

│ │ │ ├── our-foundation.js (48)

│ │ │ └── how-it-works.js (49)

│ │ ├── contact.js (50, 51, 52)

│ │ └── book-consultation.js (53)

│ └── data/

│ ├── team-data.js (All team member info in structured data)

│ ├── legal-data.js (Legal services content)

│ ├── accounting-data.js (Accounting content)

│ └── consulting-data.js (Consulting content)

\`\`\`

\-\--

\### Phase 2: Core Components (header, footer, hero, routing)

Build all shared layout components:

\- \*\*Header\*\*: Sticky navigation with \`BIRD & YANG\` logo, nav
links (HOME \| LEGAL \| ACCOUNTING \| CONSULTING \| WHY B&Y \| CONTACT),
EN language toggle (placeholder for Chinese), and search icon

\- \*\*Footer\*\*: Navy blue background with logo, navigation, contact
info, and address

\- \*\*Hero Banner\*\*: Full-width dark navy banner with subtle animated
network/starfield background and gold accent separator

\- \*\*Router\*\*: Hash-based SPA routing supporting all 53 pages

\-\--

\### Phase 3: Home Page (01)

\- Hero with \"Integrated in Expertise, Together for Growth\" tagline

\- Company intro text section

\- \"Our Expertise\" --- 3 service cards (Legal, Accounting, Consulting)
with icons and hover effects

\- \"Why Bird & Yang\" --- 3 numbered value propositions with gold
accent numbers

\- Footer

\-\--

\### Phase 4: Legal Section (02--16)

\- \*\*Legal Home (02)\*\*: Hero, about text, 7 expertise cards with
icons, 6 team member circles

\- \*\*Service Detail Pages (03--10)\*\*: Each with breadcrumb hero,
back button, main intro, accordion items for sub-services, \"Why B&Y\"
sidebar, \"Book a Consultation\" CTA

\- \*\*Business & Investor Visas (04)\*\*: Featured sub-page of
Immigration with extended content sections

\- \*\*Team Profile Pages (11--16)\*\*: Individual profile with large
photo, bio, expertise grid, highlights sidebar, contact info

\-\--

\### Phase 5: Accounting Section (17--27)

\- \*\*Accounting Home (17)\*\*: Similar layout to Legal Home with 7
service cards + 3 team members

\- \*\*Service Detail Pages (18--24)\*\*: Same pattern as legal service
pages

\- \*\*Team Profiles (25--27)\*\*: Same team profile template

\-\--

\### Phase 6: Consulting Section (28--46)

\- \*\*Consulting Home (28)\*\*: Hero, about, 3 sub-divisions
(Insurance, HR, Immigration) with hexagonal card style, 3 team members

\- \*\*Insurance Sub-section (29--32)\*\*: Insurance home + 3 service
detail pages

\- \*\*HR Sub-section (33--38)\*\*: HR home + 5 service detail pages

\- \*\*Immigration Consulting Sub-section (39--43)\*\*: Immigration
consulting home + 4 service detail pages

\- \*\*Team Profiles (44--46)\*\*: Reusing team profile template

\-\--

\### Phase 7: Why Bird & Yang (47--49)

\- \*\*Why B&Y Home (47)\*\*: Strengths, 3 core values, Our Foundation
preview, How It Works steps, CTA

\- \*\*Our Foundation (48)\*\*: Founding story, timeline, what this
means for clients

\- \*\*How It Works (49)\*\*: 3-column comparison across disciplines
(Law, Accounting, Insurance, HR, Immigration)

\-\--

\### Phase 8: Contact & Booking (50--53)

\- \*\*Contact Us (50--52)\*\*: 3 division contact cards, office info,
opening hours, Terms/Client Care/AML document tabs (placeholder for
actual documents per page 51 note), contact form with division dropdown,
Book a Consultation sidebar

\- \*\*Book a Consultation (53)\*\*: Full consultation request form
(name, email, phone, service area, consultation type, date/time,
language preference, message, disclaimer checkbox), consultation details
sidebar, office info cards

\-\--

\## Page 51 (Terms/Engagement Documents)

\> \[!IMPORTANT\]

\> Per your instructions, page 51 contains links to engagement files
(Terms of Engagement, Client Care Information, AML Public Statement)
organized by service area. For this first draft, \*\*we will create the
UI with placeholder download areas\*\* --- the actual document files can
be linked in a future revision.

\-\--

\## Open Questions

\> \[!IMPORTANT\]

\> \*\*Hero background imagery\*\*: The reference designs show a dark
navy background with a subtle global network/starfield pattern. I plan
to create this effect using CSS animations (subtle floating
particles/connections) rather than static images. Is this approach
acceptable, or would you prefer static background images?

\> \[!NOTE\]

\> \*\*Service icons\*\*: The reference designs show custom icons for
each service area (scales of justice for Legal, calculator for
Accounting, shield for Insurance, etc.). I will create these using SVG
icons to match the reference designs. No external icon library needed.

\> \[!NOTE\]

\> \*\*Form submissions\*\*: The contact form and consultation booking
form will be front-end only for this draft. The forms will show a
success message on submission but won\'t actually send emails. Backend
integration can be added later.

\## Verification Plan

\### Automated Tests

\- Run \`npm run build\` to verify the project builds successfully

\- Run \`npm run dev\` to launch the development server

\- Manual browser testing across all 53 page routes

\### Manual Verification

\- Visual comparison of each page against reference design images

\- Check all navigation links and routing

\- Verify team member photos display correctly in uniform circular
frames

\- Test accordion expand/collapse on service pages

\- Test responsive behavior on different viewport sizes

\- Verify brand colors and Verdana font are applied consistently
