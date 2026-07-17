/* ═══════════════════════════════════════════
   SHARED TEAM PROFILE COMPONENT
   Single source of truth for all team member data and profile rendering.
   Usage: <script src="/components/team-profile.js"></script>
   Then call: renderTeamProfile(id) in your page's router.
   ═══════════════════════════════════════════ */

var TEAM_PROFILES = {
  'marshall-bird': {
    name: 'Marshall Bird',
    role: 'Partner',
    photo: 'assets/team/marshall-bird.png',
    bio: 'Marshall Bird is a partner at Bird & Yang with extensive experience in immigration, business, real estate law, and investment across the USA and New Zealand. He provides strategic, practical advice to individuals, entrepreneurs, and businesses to help them navigate complex legal challenges and achieve lasting success.',
    expertise: ['Immigration', 'Business Law', 'Real Estate', 'Investment', 'Creative Business Financing', 'Business Startups'],
    summary: 'Marshall holds an LLM from the University of Michigan, USA, and an LLB from the University of Auckland, New Zealand. He has extensive experience in immigration, business, real estate law, and investment in both the USA and New Zealand. Marshall practiced as an attorney in Beverly Hills, California, advising on business buy-outs, startups, and immigration matters. His articles have appeared in Variety and The Hollywood Reporter. He founded the New Zealand Law firm and brings strong real-world experience in financing, startups, media production, and publishing.',
    highlights: [
      { title: 'US & NZ legal insight', desc: 'Deep cross-border experience in two markets.' },
      { title: 'Business & immigration experience', desc: 'Practical guidance across ventures and visas.' },
      { title: "Founder's perspective", desc: 'Real-world experience in startups, finance, and media.' }
    ],
    contact: {
      qualifications: ['LLM — University of Michigan, USA', 'LLB — University of Auckland, New Zealand'],
      phone: '+64 9 369 5989',
      email: 'marshall@marshallbird.com'
    }
  },
  'aimee-yang': {
    name: 'Aimee Yang',
    role: 'Partner',
    photo: 'assets/team/aimee-yang.png',
    bio: "Aimee Yang is a partner at Bird & Yang and leads the firm's commercial and property law practice. She advises on business structure, company law, property development, leasing, and a wide range of commercial matters, providing practical, commercial solutions to help clients achieve their goals.",
    expertise: ['Corporate & Commercial Law', 'Property', 'Financing', 'Immigration', 'Commercial Litigation', 'Overseas Investment'],
    summary: "Aimee holds a BCOM, LLB from the University of Auckland, New Zealand, and a BMGT from Nanjing University of Economics and Finance, China. She leads the commercial and property law practice and advises on business structure, company law, property development, leasing, and commercial matters. Aimee previously worked in corporate & finance teams at a leading international law firm in Hong Kong, where she advised on public offerings and mergers and acquisitions. She is a trusted adviser to corporate and private clients with a focus on property, overseas investment, litigation, residence and business/investment visas. Aimee is fluent in Mandarin and Cantonese.",
    highlights: [
      { title: 'Commercial & property leadership', desc: 'Broad experience across day-to-day matters and complex transactions.' },
      { title: 'Cross-border finance experience', desc: 'Background in Hong Kong corporate & finance work.' },
      { title: 'Multilingual client service', desc: 'Fluent in Mandarin and Cantonese.' }
    ],
    contact: {
      qualifications: ['BCOM, LLB — University of Auckland, New Zealand', 'BMGT — Nanjing University of Economics and Finance, China'],
      phone: '+64 9 590 0944',
      email: 'aimee@birdyang.co.nz'
    }
  },
  'julia-huang': {
    name: 'Julia Huang',
    role: 'Barrister & Senior Solicitor',
    photo: 'assets/team/julia-huang.png',
    bio: 'Julia Huang is a Barrister and Senior Solicitor with a cross-border legal background and a versatile practice spanning corporate and commercial law, property law, immigration law, family law, and employment law. Fluent in English and Mandarin, she brings a global perspective and a client-focused approach to delivering practical, strategic solutions.',
    expertise: ['Corporate & Commercial Law', 'Property', 'Immigration', 'Family Law', 'Employment Law'],
    summary: "Julia holds an LLM from the London School of Economics and Political Science (LSE) and an LLB from Auckland University of Technology, as well as academic study at Peking University. She practised as a commercial lawyer in China for several years before becoming a Licensed Immigration Adviser in New Zealand and establishing her own immigration advisory firm. She later completed a second Bachelor of Laws in New Zealand and qualified as a New Zealand Barrister and Solicitor. She now practises across corporate and commercial law, property law, immigration law, family law, and employment law. Julia is fluent in English and Mandarin and brings a strong cross-border perspective to her practice.",
    highlights: [
      { title: 'International legal education', desc: 'Academic foundation from Peking University, AUT, and LSE.' },
      { title: 'Cross-border legal experience', desc: 'Professional experience in both China and New Zealand.' },
      { title: 'Client-focused versatility', desc: 'Wide-ranging practice across business and personal legal matters.' }
    ],
    contact: {
      qualifications: ['LLM — London School of Economics and Political Science (LSE)', 'LLB — Auckland University of Technology; Peking University'],
      phone: '+64 21 1059 862',
      email: 'julia@birdyang.co.nz'
    }
  },
  'cici-du': {
    name: 'Cici Du',
    role: 'Registered Legal Executive',
    photo: 'assets/team/cici-du.png',
    bio: "Cici Du is a Registered Legal Executive at Bird & Yang with over 8 years of experience in the legal industry. She provides support across a range of legal matters, with a focus on conveyancing, property transactions, development projects, family law and commercial matters. Cici is familiar with relevant processes and works with lawyers and the wider team to help matters progress steadily and appropriately.",
    expertise: ['Conveyancing', 'Property Transactions', 'Development Projects', 'Commercial Matters', 'Family Law'],
    summary: "Cici has over 8 years of experience in the legal industry, supporting a broad range of matters with a focus on conveyancing, family law and commercial matters. She has substantial experience in property transactions, including large-scale development projects as well as residential and commercial conveyancing. Her work includes reviewing agreements for sale and purchase, assisting with complex settlement arrangements, and liaising with lenders and relevant parties. In addition to property matters, Cici has experience in family law, including support with relationship property matters and sensitive legal processes. She also provides practical assistance with commercial transactions and related documentation.",
    highlights: [
      { title: "Over 8 Years' Experience", desc: 'Experienced in supporting conveyancing, family law and commercial matters within the legal industry.' },
      { title: 'Key Milestone Follow-up', desc: 'Familiar with property transaction and conveyancing processes.' },
      { title: 'Coordination with Multiple Parties', desc: 'Able to assist clients, lawyers, lenders and relevant parties to stay aligned and help matters move towards completion.' }
    ],
    contact: {
      qualifications: ['Master of Electronic and Electrical Engineering — Newcastle University, United Kingdom', 'Master of IT and IT Management — The University of Sydney, Australia', 'Legal Executive Course — Open Polytechnic of New Zealand'],
      phone: '+64 21 114 2806',
      email: 'cici@birdyang.co.nz'
    }
  },
  'rockie-wei': {
    name: 'Rockie Wei',
    role: 'Legal Executive & Insurance Adviser',
    photo: 'assets/team/rockie-wei.png',
    bio: 'Rockie Wei is a Legal Executive and Insurance Adviser at Bird & Yang with a strong business background and a client-first mindset. He provides practical support in real estate transactions, loan-related matters, and insurance solutions, helping individuals and businesses navigate their needs with care, clarity, and commitment.',
    expertise: ['Real Estate Transactions', 'Loan-related Matters', 'Client Service', 'Car Insurance', 'House Insurance'],
    summary: "Rockie holds a Bachelor in International Trading and Business. He was a business owner in New Zealand, where he grew his team and revenue through strong leadership, operational focus, and a customer-centric approach. He joined Bird & Yang in 2023 to bring his commercial insight and client-first mindset to the insurance practice. Rockie holds qualifications in car and house insurance.",
    highlights: [
      { title: 'Business owner perspective', desc: 'Draws on his experience as a business owner to understand client needs and deliver practical solutions.' },
      { title: 'Property & loan support', desc: 'Provides reliable support in real estate transactions and loan-related matters.' },
      { title: 'Qualified in car & house insurance', desc: 'Holds qualifications in car and house insurance to offer professional insurance advice.' }
    ],
    contact: {
      qualifications: ['Bachelor in International Trading and Business'],
      phone: '+64 9 590 0948',
      email: 'rockie@birdyang.co.nz'
    }
  },
  'ming-lu': {
    name: 'Ming Lu',
    role: 'Trust and Financial Manager (CPA China)',
    photo: 'assets/team/ming-lu.png',
    bio: 'Ming Lu is the Trust and Financial Manager at Bird & Yang. With a strong background in accounting, audit, finance, and corporate management, she brings a careful, structured, and analytical approach to complex client matters. Her experience enables her to assist with financial review, due diligence, trust-related administration, corporate finance coordination, and the preparation of reliable financial information to support legal, accounting, and advisory services.',
    expertise: ['Accounting & Audit Support', 'Financial Consulting', 'Corporate Finance', 'Due Diligence', 'Investment & Economic Management'],
    summary: "Ming Lu holds a Bachelor in Investment and Economic Management and is a Chartered Accountant in China, with Securities, Funds, and Futures qualifications. She has many years of experience at Dalian Huanyu United Accounting Firm, where she progressed from assistant to partner. She has carried out audits, appraisal work, financial consulting, operational guidance, and reviews, and served as a financial review expert for Dalian Municipal Science and Technology Bureau and a part-time inspector for the Liaoning Provincial Institute of Chartered Accountants. She later worked at Changjiang Securities Co., Ltd. in corporate finance. Her strong accounting, finance, and corporate management background enables her to support clients with insight and precision.",
    highlights: [
      { title: 'Extensive accounting background', desc: 'Many years in audit and financial consulting.' },
      { title: 'Regulatory review experience', desc: 'Involvement with public and professional review work.' },
      { title: 'Corporate finance insight', desc: 'Experience in investment due diligence and finance services.' }
    ],
    contact: {
      qualifications: ['Bachelor in Investment and Economic Management', 'Chartered Accountant in China; Securities, Funds, Futures qualifications'],
      phone: '+64 9 590 0943',
      email: 'ming@birdyang.co.nz'
    }
  },
  'heather-chao': {
    name: 'Heather Chao',
    role: 'Chartered Accountant (CA)',
    photo: 'assets/team/heather-chao.png',
    bio: 'Heather Chao is a Chartered Accountant with over 20 years of experience in accounting and business advisory. She partners with SMEs and growing businesses to provide practical financial solutions that drive performance, improve efficiency, and support sustainable growth. Heather is known for her clear advice, strong attention to detail, and commitment to building long-term client relationships.',
    expertise: ['SME Accounting', 'Cashflow Management', 'IRD Negotiations', 'Systems & Procedures', 'MYOB, Xero & ERP Systems'],
    summary: 'Heather holds a Chartered Accountant qualification and brings over 20 years of experience across a wide range of industries. She provides end-to-end accounting and advisory services, helping clients improve financial clarity, strengthen control, and make confident decisions. Heather works closely with business owners and management teams to streamline processes, implement the right systems, and support business growth through practical, commercially focused advice.',
    highlights: [
      { title: '20+ years of experience', desc: 'Deep expertise across a wide range of industries and business types.' },
      { title: 'Growth & change advisor', desc: 'Helping businesses scale, adapt, and improve financial performance.' },
      { title: 'Systems expert', desc: 'Practical support with MYOB, Xero, and ERP system implementation.' }
    ],
    contact: {
      qualifications: ['Chartered Accountant (CA)'],
      phone: '+64 21 284 3737',
      email: 'heather@birdyang.co.nz'
    }
  },
  'ally-liao': {
    name: 'Ally Liao',
    role: 'MBA, CA Candidate',
    photo: 'assets/team/ally-liao.png',
    bio: "Ally Liao supports Bird & Yang's accounting and business advisory practice with a strong combination of accounting knowledge, commercial insight, and execution capability. Her background in private equity investment, entrepreneurship, project management, advertising planning, and strategic analysis enables her to understand client matters from both a financial and business perspective.",
    expertise: ['Accounting Administration', 'GST & IRD Compliance', 'Business Advisory Support', 'Xero & MYOB', 'Cross-border Business Perspective'],
    summary: "Ally completed the MPA(CA) within an accelerated period at Massey University and holds an MBA from Fudan University. She has prior experience in private equity investment, commercial projects, advertising planning, and entrepreneurship in China, including founding a Shanghai-based catering brand that has operated for over 10 years. At Bird & Yang, Ally supports accounting and advisory-related work with an analytical, organized, and commercially aware approach. Her background allows her to connect financial information with wider business considerations, helping clients better understand their position, improve decision-making, and move forward with confidence.",
    highlights: [
      { title: 'Accounting discipline', desc: 'Strong foundation in accounting administration and compliance.' },
      { title: 'Commercial judgment', desc: 'Background in private equity and entrepreneurship.' },
      { title: 'Strategic perspective', desc: 'MBA-level strategic analysis and business advisory capability.' }
    ],
    contact: {
      qualifications: ['MPA(CA) — Massey University', 'MBA — Fudan University', 'Bachelor\'s Degree in Advertising – Xiamen University, China', 'Funds qualification'],
      phone: '+64 9 590 0944',
      email: 'ally@birdyang.co.nz'
    }
  }
};

function renderTeamGrid(memberIds, opts) {
  opts = opts || {};
  var cards = memberIds.map(function(id) {
    var p = TEAM_PROFILES[id];
    if (!p) return '';
    var href = (opts.hashPrefix || '#team/') + id;
    return '<a class="team-card" href="' + href + '"><img src="' + (opts.imgBase || '') + p.photo + '" alt="' + p.name + '"><h4>' + p.name + '</h4><p>' + p.role + '</p></a>';
  }).join('');
  return sectionHeader('OUR TEAM', 'Meet the Team') + '<div class="team-grid">' + cards + '</div>';
}

function renderTeamProfileHTML(id, opts) {
  opts = opts || {};
  var profile = TEAM_PROFILES[id];
  if (!profile) return null;

  var imgBase = opts.imgBase || '';
  var backHash = opts.backHash || '#home';
  var backText = opts.backText || 'BACK TO OUR TEAM';
  var L = opts.labels || {};
  var labelEducation = L.education != null ? L.education : 'EDUCATION BACKGROUND';
  var labelSummary = L.summary != null ? L.summary : 'PROFILE SUMMARY';
  var labelExpertise = L.expertise != null ? L.expertise : 'AREAS OF EXPERTISE';
  var labelHighlights = L.highlights != null ? L.highlights : 'PROFILE HIGHLIGHTS';
  var labelBook = L.book != null ? L.book : 'BOOK A CONSULTATION';

  var highlightsHTML = profile.highlights.map(function(h) {
    return '<div class="highlight"><h4><img src="' + imgBase + 'assets/icons/icon_star.png" style="width:16px;height:16px;vertical-align:middle;margin-right:6px">' + h.title + '</h4><p>' + h.desc + '</p></div>';
  }).join('');

  var expertiseHTML = profile.expertise.map(function(e) {
    return '<span>' + e + '</span>';
  }).join('');

  var qualificationsHTML = '';
  if (profile.contact.qualifications && profile.contact.qualifications.length) {
    qualificationsHTML = '<h3>' + labelEducation + '</h3><ul style="list-style:none;padding:0;font-size:.85rem;color:var(--charcoal);line-height:2">' +
      profile.contact.qualifications.map(function(q) { return '<li>' + q + '</li>'; }).join('') + '</ul>';
  }

  return '<div class="hero-banner team-hero" style="background:url(\'' + imgBase + 'assets/images/11_Team_memberPageV7.png\') center/cover no-repeat">' +
      '<p class="breadcrumb">OUR TEAM</p>' +
      '<h1>' + profile.name + '</h1>' +
      '<p class="hero-sub">' + profile.role + '</p>' +
    '</div>' +
    '<section><div class="container">' +
      '<a class="back-link" href="' + backHash + '">' + backText + '</a>' +
      '<div class="profile-top">' +
        '<div class="profile-photo-col">' +
          '<img class="profile-photo" src="' + imgBase + profile.photo + '" alt="' + profile.name + '" style="border-radius:8px;width:200px;height:auto;border:none">' +
        '</div>' +
        '<div>' +
          '<h2 class="profile-name">' + profile.name + '</h2>' +
          '<p class="profile-role">' + profile.role + '</p>' +
          '<p class="profile-bio">' + profile.bio + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="profile-summary-section" style="margin-top:32px;margin-bottom:32px">' +
        '<h3 style="font-size:.7rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:12px">' + labelSummary + '</h3>' +
        '<p style="font-size:.85rem;color:var(--charcoal);line-height:1.85">' + profile.summary + '</p>' +
      '</div>' +
      '<div class="profile-body">' +
        '<div class="profile-main">' +
          '<h3>' + labelExpertise + '</h3>' +
          '<div class="expertise-badges">' + expertiseHTML + '</div>' +
          qualificationsHTML +
        '</div>' +
        '<div class="profile-sidebar">' +
          '<h3>' + labelHighlights + '</h3>' +
          '<div class="profile-highlights">' + highlightsHTML + '</div>' +
          '<a href="contact.html#book" class="cta-btn primary" style="width:100%;display:block;text-align:center;margin-top:20px">' + labelBook + '</a>' +
          '<div class="profile-contact" style="margin-top:16px">' +
            '<p><a href="tel:' + profile.contact.phone.replace(/\s/g, '') + '">' + profile.contact.phone + '</a></p>' +
            '<p><a href="mailto:' + profile.contact.email + '">' + profile.contact.email + '</a></p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div></section>';
}
