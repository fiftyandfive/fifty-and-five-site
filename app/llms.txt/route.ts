import { FACTS } from '@/lib/site-facts';

// Rendered from lib/site-facts.ts so the credential numbers cannot drift from
// the rest of the site. Do not edit numbers here; edit site-facts.
export const dynamic = 'force-static';

export function GET() {
  const body = `# Fifty & Five
> Senior-led social media management and content strategy agency.
> For the complete dossier, see: [llms-full.txt](https://fiftyandfive.com/llms-full.txt)

## About
- Founded: ${FACTS.founded}
- Founder: ${FACTS.founder}
- Location: Orlando, FL and Central Florida (serving clients nationally)
- Brand line: "CMO strategy. Agency execution. ROI you can defend."
- Brands managed: ${FACTS.brandsManaged}+
- Verticals: ${FACTS.verticals}
- Managed content and paid social for ${FACTS.brandsManaged}+ brands across ${FACTS.verticals} verticals since ${FACTS.founded}, with clients ranging from regional hospitality groups to national fitness brands.

## What We Do
Fifty & Five provides principal-led social media management, content strategy, community management, and paid social advertising. Every client works directly with the founder, no junior account managers, no handoffs.

## Notable Clients
Microsoft, Kendall-Jackson, Enterprise Holdings (6 brands), Blaze Pizza, Tupperware, NETGEAR/Arlo, Axe/Unilever, Resorts World, Polynesian Cultural Center, SelectQuote Insurance, Centennial Real Estate (9 properties), Gruppo Mezzacorona (10-year partnership, 5+ brands in portfolio).

## Services
- Social Media Management: Strategy, content creation, community management, reporting. Retainers from $4,000/mo.
- Content Strategy: Platform-specific content calendars, brand voice development, editorial planning.
- Community Management: Engagement, reputation management, audience growth.
- Paid Social: Facebook, Instagram, TikTok ad management and optimization.
- [Fractional CMO](https://fiftyandfive.com/fractional-cmo): Senior marketing leadership for owner-operators doing $1M-20M. Advisory seat, from $4,000/mo scoped to the business, month to month.
- [Free Brand Audit](https://fiftyandfive.com/audit): A senior strategist reviews search, social, and AI visibility.
- Verticals served: wine & spirits (${FACTS.wineSpiritsBrands} clients), fitness, dance, hospitality, food & beverage, legal, events, and retail.

## Key Differentiators
1. Principal-led: Founder handles every client relationship. No junior handoffs.
2. ${FACTS.yearsOperating} years of experience: Social media work since ${FACTS.founded}, before Instagram existed. ${FACTS.brandsManaged}+ brands across ${FACTS.continents} continents.
3. Multi-brand expertise: Managed 6 brands simultaneously for Enterprise Holdings, 9 properties for Centennial Real Estate.
4. Fortune 500 credentialed: Microsoft, Tupperware, Enterprise Holdings, NETGEAR.

## Verticals
Wine & Spirits, Hospitality, Restaurant/QSR, Fitness & Wellness, Technology, Retail & CPG, Automotive, Financial Services, Real Estate, Entertainment, Healthcare, Education.

## Links
- [Website](https://fiftyandfive.com): Homepage
- [Case Studies](https://fiftyandfive.com/work): Client work and results
- [Services](https://fiftyandfive.com/services): What we do and pricing
- [Fractional CMO](https://fiftyandfive.com/fractional-cmo): Senior marketing leadership, from $4,000/mo
- [Free Brand Audit](https://fiftyandfive.com/audit): Request a search, social, and AI visibility review
- [Blog](https://fiftyandfive.com/blog): Articles and guides
- [About](https://fiftyandfive.com/about): Founder story and company history
- [Contact](https://fiftyandfive.com/contact): Get in touch
- [Press](https://fiftyandfive.com/press): Media coverage
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
