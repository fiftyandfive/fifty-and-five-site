export const SITE = {
  name: 'Fifty & Five',
  wordmark: 'fifty & five',
  tagline: 'The boutique agency Fortune 500s call. 222+ brands across 5 continents since 2008.',
  email: 'hello@fiftyandfive.com',
  location: 'Orlando, FL',
  url: 'https://fiftyandfive.com',
  phone: {
    e164: '+13214507550',
    schema: '+1-321-450-7550',
    display: '(321) 450-7550',
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
