import { FACTS, PHONE_E164 } from './site-facts';

export const SITE = {
  name: FACTS.name,
  wordmark: 'fifty & five',
  tagline: `The boutique agency Fortune 500s call. ${FACTS.brandsManaged}+ brands across ${FACTS.continents} continents since ${FACTS.founded}.`,
  email: FACTS.email,
  location: `${FACTS.address.addressLocality}, ${FACTS.address.addressRegion}`,
  url: FACTS.url,
  phone: {
    e164: PHONE_E164,
    schema: FACTS.phone,
    display: FACTS.phoneDisplay,
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/LucasV/',
    instagram: 'https://www.instagram.com/fiftyandfive/',
  },
  calendly: 'https://calendly.com/lucasv/30-minute-intro-call',
};

/**
 * Published Fractional CMO seat price. Single source for the two CMO landing
 * pages (visible price block + Service schema). Prose mentions in blog posts
 * and llms*.txt are plain text and must be grepped when this changes.
 */
export const PRICING = {
  fractionalCmo: {
    min: 4000,
    display: '$4,000',
    from: 'From $4,000/mo',
  },
};

export const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/ways-to-work', label: 'Ways to Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const FOOTER_VERTICALS = [
  { href: '/verticals/wine-spirits', label: 'Wine & Spirits' },
  { href: '/verticals/hospitality', label: 'Hospitality & Tourism' },
  { href: '/verticals/tourism', label: 'Tourism & Destinations' },
  { href: '/verticals/restaurant', label: 'Restaurant & Food' },
  { href: '/verticals/luxury', label: 'Luxury Brands' },
  { href: '/verticals/fitness-wellness', label: 'Fitness & Wellness' },
  { href: '/verticals/tech-saas', label: 'Tech & SaaS' },
  { href: '/verticals/retail-cpg', label: 'Retail & CPG' },
  { href: '/verticals/healthcare', label: 'Healthcare' },
  { href: '/verticals/real-estate', label: 'Real Estate' },
  { href: '/verticals/automotive', label: 'Automotive' },
  { href: '/verticals/entertainment', label: 'Entertainment' },
];
