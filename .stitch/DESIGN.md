---
name: Bird & Yang
colors:
  surface: '#f8f5f0'
  surface-dim: '#ede8e0'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f5f0'
  surface-container: '#ede8e0'
  surface-container-high: '#e4dfd6'
  surface-container-highest: '#d9d4cb'
  on-surface: '#01308a'
  on-surface-variant: '#5a5a6e'
  inverse-surface: '#01308a'
  inverse-on-surface: '#ffffff'
  outline: '#c5851e'
  outline-variant: '#e4cc9c'
  surface-tint: '#01308a'
  primary: '#01308a'
  on-primary: '#ffffff'
  primary-container: '#070e1a'
  on-primary-container: '#c5851e'
  inverse-primary: '#c5851e'
  secondary: '#c5851e'
  on-secondary: '#ffffff'
  secondary-container: '#f5e6c8'
  on-secondary-container: '#7a5312'
  tertiary: '#070e1a'
  on-tertiary: '#ffffff'
  tertiary-container: '#0c1829'
  on-tertiary-container: '#c5851e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e0ff'
  primary-fixed-dim: '#a3b8e8'
  on-primary-fixed: '#01308a'
  on-primary-fixed-variant: '#023ba5'
  secondary-fixed: '#f5e6c8'
  secondary-fixed-dim: '#e4cc9c'
  on-secondary-fixed: '#7a5312'
  on-secondary-fixed-variant: '#c5851e'
  tertiary-fixed: '#1c3054'
  tertiary-fixed-dim: '#142238'
  on-tertiary-fixed: '#ffffff'
  on-tertiary-fixed-variant: '#c5851e'
  background: '#f8f5f0'
  on-background: '#1a1a2e'
  surface-variant: '#ede8e0'
typography:
  display-lg:
    fontFamily: Verdana
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: 0.08em
  headline-md:
    fontFamily: Verdana
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0.04em
  body-base:
    fontFamily: Verdana
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: '0'
  body-bold:
    fontFamily: Verdana
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: '0'
  label-caps:
    fontFamily: Verdana
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.2em
  stat-lg:
    fontFamily: Verdana
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.06em
rounded:
  sm: 2px
  DEFAULT: 2px
  md: 4px
  lg: 8px
  xl: 50%
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 80px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

Bird & Yang projects the gravitas of a **premium professional services firm** — the kind that handles the most important decisions in clients' lives: immigration, legal structure, tax, and financial clarity. The visual identity marries deep institutional authority (the anchoring Commercial Blue) with warm prosperity and optimism (the Commercial Gold), communicating that expertise and approachability coexist under one roof.

The design language is **Celestial Corporate** — a dark hero canvas evokes a night sky with subtle constellation patterns and orbital geometry, symbolizing interconnected expertise across Legal, Accounting, and Consulting. Below the hero, warm cream surfaces provide breathing room for editorial-style content, maintaining the sense of a firm that is both worldly and grounded. Every design choice reinforces the brand promise: *Integrated in Expertise, Together for Growth*.

## Colors

The palette is anchored by **Commercial Blue** (`#01308a` / RGB 1,48,138), a deep saturated navy that dominates the hero, navigation, footer, and all authority-bearing surfaces. It is a proprietary blue — darker and more saturated than generic navies — conveying institutional depth.

**Commercial Gold** (`#c5851e` / RGB 197,133,30) serves as the sole accent: CTA borders, active indicators, decorative dividers, icon outlines in the hero, and the thin connecting line in the "Why B&Y" process flow. Gold is used sparingly — it draws the eye precisely because the blue dominates.

The body canvas alternates between **Warm Cream** (`#f8f5f0`) and **Pure White** (`#ffffff`) for content sections, maintaining warmth and preventing the stark clinical feeling of a pure white background. Text sits in **Charcoal** (`#1a1a2e`) for body copy and **Muted Indigo** (`#5a5a6e`) for secondary descriptions.

## Typography

**Verdana** is the sole typeface across all materials — both English and functional text. It was selected for its exceptional screen legibility at all sizes, wide letterforms that prevent ambiguity in legal/financial contexts, and professional neutrality that reads across cultures.

Display headings (hero title, section titles) use bold weight with generous letter-spacing (0.06–0.08em), creating an airy, prestigious cadence. Section labels use all-caps Verdana at 11px with extreme letter-spacing (0.2em) for subtle hierarchy. Body copy is set at 15px with 1.75 line-height for generous, readable paragraphs — appropriate for clients reading about complex legal and financial services.

Chinese text (taglines, footer copy) uses a complementary serif such as Noto Serif SC or system serif, maintaining cultural resonance alongside the English primary face.

## Layout & Spacing

The design uses a **constrained center layout** with generous horizontal padding (8% on desktop, scaling to 5% on mobile). Content areas max out at 900px for body text and 1200px for grid sections, ensuring comfortable reading lengths.

Spacing follows a disciplined rhythm: sections breathe with 80px+ vertical padding, cards use 32px internal padding, and the overall feel is spacious rather than dense. The "Why B&Y" section uses a 3-column flex layout connected by a subtle gold line, while the Expertise grid uses a strict 3-column CSS grid with equal card sizing.

Touch targets (mobile) respect 48px minimums. The navigation collapses to a hamburger below 768px with full nav links hidden.

## Elevation & Depth

The hero section creates depth through **layered canvas effects** — a particle constellation animation (subtle gold dots with connecting lines) sits behind radial gradient overlays, producing a sense of cosmic depth without overwhelming the typography.

Cards use **hover elevation** rather than static shadows: flat at rest, lifting with `translateY(-8px)` and a 20px diffused shadow on hover. This keeps the interface clean while providing satisfying interactivity.

The navigation gains a frosted-glass effect on scroll: `backdrop-filter: blur(12px)` with reduced padding and a dark shadow, signaling the transition from hero context to scrolled state.

## Shapes

The shape language is deliberately **minimal and sharp** — border-radius is either 2px (cards, buttons) or 50% (circular icons, step numbers). This duality reinforces the firm's character: precision and human warmth.

Hero service icons use perfect circles (56px) with 1px gold borders. The "Why B&Y" step numbers are larger circles (72px) with a double-ring treatment (outer ring via `::after` pseudo-element). Expertise cards use just 2px radius — barely softened — maintaining the professional edge.

## Components

### Navigation

Fixed horizontal bar with logo left, links center-right, language toggle far-right separated by a vertical border. Links are uppercase, 0.8rem, with 500 weight and 0.12em letter-spacing. Hover state adds a gold underline (animated width from 0 to 100%). On scroll: background darkens with blur, padding compresses, shadow appears.

### Hero Service Icons

Circular 56px containers with 1px gold border at 40% opacity. SVG icons inside use gold-light stroke. On hover: border strengthens, background gains 10% gold fill, icon lifts 3px. Labels below in 0.65rem uppercase.

### Expertise Cards

Three-column grid. Each card: navy image header (200px) with centered circular icon, cream body with serif heading (1.35rem), muted description, and gold "Learn More →" link. On hover: card lifts 8px with deep shadow.

### Process Steps (Why B&Y)

Three numbered circles (1, 2, 3) connected by a horizontal gold gradient line. Circle: 72px, navy gradient fill, gold number text, outer gold ring. Below: heading + description centered. Responsive: stacks vertically on mobile with line hidden.

### CTA Section

Full-width navy gradient with radial gold glow. Centered heading (cream/white) + muted description + bordered gold button. Button: 1px gold border, transparent fill, uppercase gold text. On hover: fills gold, text inverts to navy, lifts 2px with gold shadow.

### Footer

Four-column grid on dark navy: Brand column (logo + tagline in English and Chinese), Navigation links, Contact with icon+text pairs, Address with map pin icon. Bottom bar with thin border separator, copyright left, tagline right.

## 6. Design System Notes for Stitch Generation

### Language to Use

"Premium professional services firm with celestial depth. Deep institutional navy with warm gold accents. Generous spacing, authoritative typography, circular iconography. Warm cream content sections. Editorial paragraph style. Bilingual English-Chinese."

### Color References

| Token | Hex | Role |
|:---|:---|:---|
| Commercial Blue | `#01308a` | Primary brand, hero, nav, footer, card headers |
| Commercial Gold | `#c5851e` | Accent, borders, icons, CTAs, decorative lines |
| Gold Light | `#e4cc9c` | Subtle gold for text, badge borders |
| Navy Deep | `#070e1a` | Deepest background, hero base |
| Navy Mid | `#142238` | Gradient midpoint |
| Warm Cream | `#f8f5f0` | Body section background |
| Pure White | `#ffffff` | Alternate section background |
| Charcoal | `#1a1a2e` | Primary text |
| Muted | `#5a5a6e` | Secondary/description text |

### Component Prompts

1. "Professional services hero section with deep navy background, subtle particle constellation animation, centered firm name in large bold Verdana with letter-spacing, italic gold tagline, Chinese subtitle below, three circular service icons at bottom"

2. "Three-column expertise card grid on white background — each card has a navy header with centered gold-bordered circular icon, cream body with serif heading, description text, and gold 'Learn More →' link. Cards lift on hover."

3. "Numbered process flow — three steps in a row connected by a gold gradient line, each with a large navy circle containing gold number, heading below, centered description text"

### Incremental Iteration

- Start with the hero: get the navy depth, constellation particles, and gold typography right first
- Add content sections one by one — the cream/white alternation creates rhythm
- Cards should feel minimal at rest, interactive on hover
- Gold should never dominate — it's a punctuation mark, not a paragraph
- Chinese text should feel integrated, not bolted on — same vertical rhythm, complementary serif
