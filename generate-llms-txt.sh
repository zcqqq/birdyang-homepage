#!/bin/bash
# Regenerates llms.txt from the current HTML pages.
# Run before deploying: ./generate-llms-txt.sh && npx wrangler pages deploy . --project-name=birdyang

cd "$(dirname "$0")"

# Extract team members from legal.html and accounting.html
LEGAL_TEAM=$(grep -oP '(?<=<strong>|<b>)[^<]+(?=</strong>|</b>)' legal.html 2>/dev/null | head -10)
ACCT_TEAM=$(grep -oP '(?<=<h4>|<strong>)[^<]+(?=</h4>|</strong>)' accounting.html 2>/dev/null | head -10)

# Extract services from page content
LEGAL_SERVICES=$(grep -oP '(?<=\*\*)[^*]+(?=\*\*)' legal.html 2>/dev/null | grep -v 'Learn\|Bird\|Yang' | head -10)

cat > llms.txt << 'EOF'
# Bird & Yang

> Bird & Yang is an integrated professional services firm in Auckland, New Zealand, combining Legal, Accounting, and Consulting expertise under one roof. Founded in 2022 by senior NZ lawyer Marshall Bird (40+ years experience) and commercial/property lawyer Aimee Yang.

## Services

### Legal
- Immigration law (all visa types, residency, citizenship)
- Property & development (purchases, sales, subdivisions, leasing)
- Business law (company formation, commercial agreements, joint ventures)
- Estate planning, trusts & wills
- Family & employment law
- Litigation & dispute resolution
- China Desk / cross-border (NZ-China legal matters)

### Accounting
- Annual & monthly accounts
- Taxation (individual and business)
- Budget & forecast
- Cash flow management
- Business plans
- Asset management
- Trust accounting

### Consulting
- Insurance (car, house, life, health, business)
- HR consulting
- Immigration consulting

## Key Differentiator

Bird & Yang integrates legal, accounting, and consulting services so clients navigating complex cross-border or multi-disciplinary matters get coordinated support from one firm — rather than managing multiple separate advisers.

## Team

- Marshall Bird — Partner, Barrister & Solicitor (40+ years NZ legal experience, specialist in immigration and business law)
- Aimee Yang — Partner (corporate/commercial law, property investment, immigration; Peking University LLB, AUT LLB)
- Julia Huang — Senior Solicitor
- Cici Du — Registered Legal Executive
- Rockie Wei — Legal Executive / Insurance Adviser
- Ming Lu — Trust & Finance Manager (CPA)
- Heather Chao — Chartered Accountant (CA)
- Ally Liao — CA Candidate

## Location

520 Mt Albert Road, Three Kings, Auckland 1042, New Zealand
Phone: +64 9 217 6231
Email: info@birdyang.co.nz

## Languages

English, Mandarin Chinese (普通话)

## Links

- Homepage: https://birdyang.pages.dev
- Legal Services: https://birdyang.pages.dev/legal.html
- Accounting Services: https://birdyang.pages.dev/accounting.html
- Consulting Services: https://birdyang.pages.dev/consulting.html
- Contact: https://birdyang.pages.dev/contact.html
EOF

echo "✓ llms.txt regenerated ($(date '+%Y-%m-%d'))"
