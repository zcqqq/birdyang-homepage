/* ═══════════════════════════════════════════
   SHARED TEAM PROFILE COMPONENT
   Single source of truth for all team member data and profile rendering.
   Usage: <script src="/components/team-profile.js"></script>
   Then call: renderTeamProfile(id) in your page's router.
   ═══════════════════════════════════════════ */

var TEAM_PROFILES = {
  // English team profiles defined below...
};

var TEAM_PROFILES_ZH = {
  'marshall-bird': {
    name: 'Marshall Bird',
    role: '合伙人 / 大律师',
    photo: 'assets/team/marshall-bird.png',
    bio: 'Marshall Bird 是德扬合伙人，在移民、商业、房地产法及投资领域拥有丰富经验，专业背景横跨美国与新西兰。他为个人、企业家和企业客户提供战略性、务实的法律建议，帮助客户应对复杂问题，并为长期发展建立稳健基础。',
    expertise: ['移民', '商业法', '房地产', '投资', '创新商业融资', '创业'],
    summary: 'Marshall 拥有美国密歇根大学法学硕士学位和新西兰奥克兰大学法学学士学位。他在移民、商业、房地产法和投资领域拥有美国和新西兰的丰富经验。Marshall 曾在加利福尼亚州比佛利山庄担任律师，就商业收购、创业和移民事务提供建议。他的文章曾发表于 Variety 和 The Hollywood Reporter。Marshall 创立了新西兰律师事务所，并在融资、创业、媒体制作和出版领域拥有丰富的实践经验。',
    highlights: [
      { title: '美国与新西兰法律洞察', desc: '在两个市场拥有深厚的跨境经验。' },
      { title: '商业与移民经验', desc: '为创业、投资与签证事务提供务实指导。' },
      { title: '创始人视角', desc: '在创业、金融和媒体领域拥有丰富的实际运营经验。' }
    ],
    contact: {
      qualifications: ['法学硕士 — 美国密歇根大学', '法学学士 — 新西兰奥克兰大学'],
      phone: '+64 9 369 5989',
      email: 'marshall@marshallbird.com'
    }
  },
  'aimee-yang': {
    name: 'Aimee Yang',
    role: '合伙人 / 大律师',
    photo: 'assets/team/aimee-yang.png',
    bio: 'Aimee Yang 是德扬的合伙人，主管商业与房地产法律服务。她就商业结构、公司法、房地产开发、租赁和广泛的商业事务提供建议，提供务实、商业化的解决方案，帮助客户实现目标。',
    expertise: ['公司与商业法', '房地产', '融资', '移民', '商业诉讼', '海外投资'],
    summary: 'Aimee 拥有新西兰奥克兰大学商业学士和法学学士学位，以及中国南京财经大学管理学学士学位。她主管商业与房地产法律服务，就商业结构、公司法、房地产开发、租赁和商业事务提供建议。Aimee 此前曾在香港一家领先的国际律师事务所的公司与金融团队工作，就公开发售和并购提供建议。她是企业和私人客户的值得信赖的顾问，专注于房地产、海外投资、诉讼、居留和商业/投资签证。Aimee 精通普通话和粤语，支持跨文化沟通。',
    highlights: [
      { title: '商业与房地产领导力', desc: '在日常事务及复杂交易中拥有广泛经验。' },
      { title: '跨境金融经验', desc: '具有香港公司与金融法律工作背景。' },
      { title: '多语言客户服务', desc: '精通普通话和粤语，支持跨文化沟通。' }
    ],
    contact: {
      qualifications: ['商业学士、法学学士 — 新西兰奥克兰大学', '管理学学士 — 中国南京财经大学'],
      phone: '+64 9 590 0944',
      email: 'aimee@birdyang.co.nz'
    }
  },
  'julia-huang': {
    name: 'Julia Huang',
    role: '大律师 / 高级律师',
    photo: 'assets/team/julia-huang.png',
    bio: 'Julia Huang 是一名新西兰大律师和高级律师，拥有跨境法律背景，执业范围涵盖公司与商业法、房地产法、移民法、家庭法及雇佣法。她精通英语和普通话，以全球视野和以客户为中心的方法提供务实、战略性的法律解决方案。',
    expertise: ['公司与商业法', '房地产', '移民', '家庭法', '雇佣法'],
    summary: 'Julia 拥有伦敦政治经济学院（LSE）法学硕士学位和奥克兰理工大学法学学士学位，并曾在北京大学学习。她曾在中国从事商业法律工作，之后成为新西兰持牌移民顾问并创立移民咨询业务。随后她在新西兰完成第二个法学学士学位，并成为新西兰大律师和律师。她现执业范围涵盖公司与商业法、房地产法、移民法、家庭法及雇佣法。Julia 精通英语和普通话，为客户事务带来扎实的跨境视角。',
    highlights: [
      { title: '国际法律教育', desc: '拥有北京大学、奥克兰理工大学和伦敦政治经济学院的学术背景。' },
      { title: '跨境法律经验', desc: '在中国和新西兰均拥有专业经验。' },
      { title: '以客户为中心的多面手', desc: '在商业与个人法律事务方面拥有广泛执业范围。' }
    ],
    contact: {
      qualifications: ['法学硕士 — 伦敦政治经济学院（LSE）', '法学学士 — 奥克兰理工大学；北京大学'],
      phone: '+64 21 1059 862',
      email: 'julia@birdyang.co.nz'
    }
  },
  'cici-du': {
    name: 'Cici Du',
    role: '注册法律行政官',
    photo: 'assets/team/cici-du.png',
    bio: 'Cici Du 是德扬的注册法律行政官，在法律行业拥有超过8年经验。她为客户提供多领域法律事务支持，重点涉及房地产交割、房地产交易、开发项目、家庭法及商业事务相关事项。Cici 熟悉相关事务流程，能够在律师及团队协作下，协助相关事项稳妥推进。',
    expertise: ['产权转让', '房地产交易', '开发项目', '商业事务', '家庭法'],
    summary: 'Cici 拥有超过8年的法律行业经验，为多领域法律事务提供支持，重点包括房地产交割、家庭法及商业事务。她在房地产交易方面具有丰富经验，曾参与大型开发项目，也协助处理个人住宅及商业物业交割事项，包括买卖协议审阅、复杂交割安排、与贷款机构及相关方沟通等工作。除房地产事务外，Cici 亦具备家庭法相关经验，包括协助处理关系财产事项，并在较为敏感的法律程序中提供专业支持。她同时为商业交易及相关文件准备提供实务协助。',
    highlights: [
      { title: '8年以上经验', desc: '在房地产交割、家庭法及商业事务支持方面拥有多年法律行业经验。' },
      { title: '关键节点跟进', desc: '熟悉房地产交易及交割流程。' },
      { title: '多方沟通协调', desc: '能够协助客户、律师、贷款机构及相关方保持配合，推动事项完成。' }
    ],
    contact: {
      qualifications: ['电子电气工程硕士 — 英国纽卡斯尔大学', '信息技术与信息技术管理硕士 — 澳大利亚悉尼大学', '法律行政官课程 — 新西兰开放理工学院'],
      phone: '+64 21 114 2806',
      email: 'cici@birdyang.co.nz'
    }
  },
  'rockie-wei': {
    name: 'Rockie Wei',
    role: '法律行政官 / 保险顾问',
    photo: 'assets/team/rockie-wei.png',
    bio: 'Rockie Wei 是德扬的法律行政官和保险顾问，拥有扎实的商业背景和以客户为先的服务理念。他在房地产交易、贷款相关事务和保险解决方案方面提供务实支持，帮助个人和企业以更清晰、更安心的方式处理相关需求。',
    expertise: ['房地产交易', '贷款相关事务', '客户服务', '汽车保险', '房屋保险'],
    summary: 'Rockie 拥有国际贸易和商业学士学位。加入德扬前，他曾在新西兰经营企业，通过领导力、运营管理和以客户为中心的方法推动团队与业务发展。自2023年加入德扬以来，Rockie 将商业洞察和细致服务带入保险业务，并持有汽车和房屋保险相关资格。',
    highlights: [
      { title: '企业主视角', desc: '以实际经营经验理解客户需求并提供务实方案。' },
      { title: '房地产与贷款支持', desc: '在房地产交易和贷款相关事务方面提供可靠协助。' },
      { title: '汽车与房屋保险资格', desc: '持有相关保险资格，提供专业保险支持。' }
    ],
    contact: {
      qualifications: ['国际贸易和商业学士'],
      phone: '+64 9 590 0948',
      email: 'rockie@birdyang.co.nz'
    }
  },
  'ming-lu': {
    name: 'Ming Lu',
    role: '信托与财务经理（中国注册会计师）',
    photo: 'assets/team/ming-lu.png',
    bio: 'Ming Lu 是德扬的信托与财务经理，在会计、审计、财务和企业管理方面拥有深厚背景。',
    expertise: ['会计与审计支持', '财务咨询', '企业融资', '尽职调查', '投资与经济管理'],
    summary: 'Ming Lu 拥有投资经济管理学士学位，是中国注册会计师，并持有证券、基金和期货资格。她曾在大连环宇联合会计师事务所工作多年，从助理成长为合伙人，参与审计、评估、财务咨询、运营指导和审查工作，并担任大连市科技局财务审查专家及辽宁省注册会计师协会兼职检查员。其后，她在长江证券股份有限公司从事企业融资工作。扎实的会计、财务和企业管理背景，使她能够以专业洞察和严谨判断支持客户事务。',
    highlights: [
      { title: '深厚会计背景', desc: '在审计和财务咨询方面拥有多年经验。' },
      { title: '监管审查经验', desc: '参与公共及专业审查工作。' },
      { title: '企业融资洞察', desc: '具备投资尽职调查与融资服务经验。' }
    ],
    contact: {
      qualifications: ['投资经济管理学士', '中国注册会计师； 证券、基金、期货资格'],
      phone: '+64 9 590 0943',
      email: 'ming@birdyang.co.nz'
    }
  },
  'heather-chao': {
    name: 'Heather Chao',
    role: '特许会计师（CA）',
    photo: 'assets/team/heather-chao.png',
    bio: 'Heather Chao 是特许会计师，在会计和商业咨询方面拥有超过20年的经验。她与中小企业和成长型企业合作，提供推动绩效、提高效率和支持可持续增长的务实财务解决方案。',
    expertise: ['中小企业会计', '现金流管理', 'IRD谈判', '制度与流程', 'MYOB、Xero及ERP系统'],
    summary: 'Heather 持有特许会计师资格，在广泛的行业拥有超过20年的经验。她提供端到端的会计和咨询服务，帮助客户提高财务清晰度、加强控制并做出自信决策。Heather 与企业主和管理团队紧密合作，简化流程、实施正确的系统，并通过务实、以商业为重点的建议支持业务增长。',
    highlights: [
      { title: '20年以上经验', desc: '在广泛的行业和企业类型方面拥有深厚专业知识。' },
      { title: '成长与变革顾问', desc: '帮助企业扩展、适应和改善财务绩效。' },
      { title: '系统专家', desc: '在MYOB、Xero和ERP系统实施方面提供务实支持。' }
    ],
    contact: {
      qualifications: ['特许会计师（CA）'],
      phone: '+64 21 284 3737',
      email: 'heather@birdyang.co.nz'
    }
  },
  'ally-liao': {
    name: 'Ally Liao',
    role: 'MBA，特许会计师候选人（CA Candidate）',
    photo: 'assets/team/ally-liao.png',
    bio: 'Ally Liao 为德扬的会计与商业咨询业务提供支持。她结合扎实的会计知识、商业分析能力及项目执行经验，协助客户从数字、系统、商业与风险角度理解问题，并推动相关事务稳妥落地。',
    expertise: ['会计与行政支持', 'GST与IRD合规', '财务数据整理与分析', '商业咨询支持', 'Xero与MYOB', '商业流程与系统视角', '跨境商业视角'],
    summary: 'Ally 在新西兰梅西大学完成 MPA（CA）学位，并已完成 CA 课程考试要求。她同时持有复旦大学 MBA 学位及厦门大学广告学学士学位。</p><p>在加入德扬之前，Ally 在中国拥有私募股权投资、商业项目评估、广告策划及创业经验，曾创立并运营一家上海餐饮品牌逾十年。相关经历使她能够从财务数据、商业模式、运营系统与风险管理等多个角度理解企业问题。</p><p>在德扬，Ally 参与会计合规、财务分析、业务流程及公司架构等相关工作。她注重将财务信息与更广泛的商业判断相结合，协助客户更清晰地理解经营状况、识别风险与机会，并以更有依据的方式作出决策。',
    highlights: [
      { title: '会计与合规基础', desc: '具备扎实的会计知识，能够支持 GST、IRD 合规及日常账务相关事务。' },
      { title: '商业判断与执行经验', desc: '拥有私募股权、项目评估及长期创业运营经验，理解数字背后的商业逻辑。' },
      { title: '系统与风险视角', desc: '能够结合数据、流程、系统与风险因素，协助客户看清问题并稳妥推进下一步。' }
    ],
    contact: {
      qualifications: ['MPA（CA）— 梅西大学', 'MBA — 复旦大学', '广告学学士 — 厦门大学', '基金从业资格（中国）'],
      phone: '+64 21 183 8625',
      email: 'ally@birdyang.co.nz'
    }
  }
};

TEAM_PROFILES = {
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
      phone: '+64 21 183 8625',
      email: 'ally@birdyang.co.nz'
    }
  }
};

function renderTeamGrid(memberIds, opts) {
  opts = opts || {};
  var isZh = opts.lang === 'zh';
  var data = isZh ? TEAM_PROFILES_ZH : TEAM_PROFILES;
  var cards = memberIds.map(function(id) {
    var p = data[id];
    if (!p) return '';
    var href = (opts.hashPrefix || '#team/') + id;
    return '<a class="team-card" href="' + href + '"><img src="' + (opts.imgBase || '') + p.photo + '" alt="' + p.name + '"><h4>' + p.name + '</h4><p>' + p.role + '</p></a>';
  }).join('');
  var label = isZh ? '关于我们' : 'OUR TEAM';
  var title = isZh ? '专业团队' : 'Meet the Team';
  return sectionHeader(label, title) + '<div class="team-grid">' + cards + '</div>';
}

function renderTeamProfileHTML(id, opts) {
  opts = opts || {};
  var isZh = opts.lang === 'zh';
  var data = isZh ? TEAM_PROFILES_ZH : TEAM_PROFILES;
  var profile = data[id];
  if (!profile) return null;

  var imgBase = opts.imgBase || '';
  var backHash = opts.backHash || '#home';
  var backText = opts.backText || (isZh ? '返回关于我们' : 'BACK TO OUR TEAM');
  var L = opts.labels || {};
  var labelEducation = L.education != null ? L.education : (isZh ? '教育背景' : 'EDUCATION BACKGROUND');
  var labelSummary = L.summary != null ? L.summary : (isZh ? '个人简介' : 'PROFILE SUMMARY');
  var labelExpertise = L.expertise != null ? L.expertise : (isZh ? '专业领域' : 'AREAS OF EXPERTISE');
  var labelHighlights = L.highlights != null ? L.highlights : (isZh ? '个人亮点' : 'PROFILE HIGHLIGHTS');
  var labelBook = L.book != null ? L.book : (isZh ? '预约咨询' : 'BOOK A CONSULTATION');

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
      '<p class="breadcrumb">' + (isZh ? '关于我们' : 'OUR TEAM') + '</p>' +
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
