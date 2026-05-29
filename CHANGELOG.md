# Changelog — Hero Redesign & Visual System Upgrade

## 2026-05-29

### Hero Redesign (TypewriterHero)
- Replaced slow typewriter (~5s) with fast terminal beat (~2s): 14ms char delay, 130ms line pause
- New layout: 2-column grid — terminal + payoff left, photo collage right
- "Exactly." payoff in paper-white (#F5F2EC) with crimson period — full contrast on dark bg
- Brand line: "We do the storytelling. You run the business." (paper-dim second half)
- CTAs always visible: `hasHydrated` pattern renders CTAs/payoff on SSR and no-JS; animation takes over after hydration
- Primary CTA: solid crimson (#C41E3A) with white text, MagneticButton component
- Secondary CTA: ghost outline variant
- Micro stats: "222+ brands · 18 years social-first · senior team since 2008"
- Photo collage: 2 hero images (Kendall-Jackson Breckenridge, LeBron × Blaze) with badges and placeholder fallbacks
- Crimson radial glow accent (top-right, 680px)

### Brand Marquee (new component)
- 17 real client brands: Warner Bros., Microsoft, SAP, Hasbro, Bain & Company, Discovery Channel, Enterprise, Toys R Us, Resorts World, Penfolds, Kendall-Jackson, Unilever, AutoNation, The Irvine Company, Wolfgang's Steakhouse, Blaze Pizza, Barsha
- 48s scroll animation with edge fade masks
- Header: "222+ brands · 18 years · five continents"
- `prefers-reduced-motion: reduce` → animation paused

### Selected Work Grid (new component)
- 6 real campaign tiles in 3-column responsive grid (1→2→3 cols)
- Gradient caption overlays with mono uppercase labels
- Links to case study pages by slug
- Dashed-border placeholder fallback when images not yet placed
- Hover scale transition on tiles

### Design System Tokens
- Fonts: Fraunces (display serif), Inter (body), IBM Plex Mono (terminal/labels)
- Colors: bg #0A0A0C, paper #F5F2EC, paper-dim #B7B3AB, crimson #C41E3A, terminal green #5BE38B, muted #76736D
- Glass borders: rgba(245,242,236, 0.12), blur 16px
- Container max-width: 1320px

### Accessibility (WCAG AA)
- MagneticButton: `focus-visible:ring-2` keyboard focus states
- Hero CTAs render without JS dependency (contrast bug fix)
- Marquee respects `prefers-reduced-motion`
- TypewriterHero respects `prefers-reduced-motion` (skips animation, shows all content immediately)
- All images have descriptive alt text

### Content Corrections
- "17 years" → "18 years" sitewide (founded 2008 = 18 years)
- Barsha image path: `.jpg` → `.png` to match source asset

### About Page
- New founder narrative: Northrop Grumman B-2 story, Southern Wine & Spirits origin
- Updated timeline: 2007–2026 with AI retrofit milestone
- Hero stats: 222+, 18, 3+

### SEO — Preserved
- All JSON-LD schemas intact (MarketingAgency, WebSite, LocalBusiness, Reviews, FAQPage, Article, BreadcrumbList)
- Meta tags, Open Graph, Twitter cards unchanged
- robots.txt with AI crawler allowlist preserved
- sitemap.xml with static + dynamic routes preserved
- Canonical URLs on all pages

### Imagery
- Local paths reference `public/images/work/<filename>` — no Dropbox hotlinks in markup
- Manifest at `public/images/work/_MANIFEST.md` with exact filenames and sizing guidance
- Placeholder tiles render until images are placed locally
