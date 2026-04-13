export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  // Optional: link to the specific review on Clutch
  clutchUrl?: string;
};

/**
 * Verified Clutch reviews. PASTE the real quote text, reviewer name,
 * and title into each entry — Clutch blocks automated scraping, so
 * these have to come from a logged-in profile view.
 * Source: https://clutch.co/profile/fifty-five
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    // TODO(Lucas): paste StreetStrider Clutch quote
    quote:
      'Paste the verbatim StreetStrider review text from clutch.co/profile/fifty-five here. Keep it short — one or two sentences read strongest at large type.',
    author: 'Reviewer Name',
    title: 'Title, StreetStrider',
    company: 'StreetStrider',
    rating: 5,
  },
  {
    quote:
      'They grew our engagement 400%. It doesn\u2019t feel like I\u2019m partnered with a large company \u2014 we have a real relationship, and we always have access to them.',
    author: 'Director of Digital Growth',
    title: 'Blaze Pizza',
    company: 'Blaze Pizza',
    rating: 5,
  },
  {
    quote:
      'They\u2019ve grown our Instagram and Facebook presence \u2014 professional, creative, and a real pleasure to work with. The photos and videos they capture are beautiful and captivating.',
    author: 'Co-Owner',
    title: 'Barsha Life — LA Restaurant & Wine Bar',
    company: 'Barsha',
    rating: 5,
  },
];

export const CLUTCH_PROFILE_URL = 'https://clutch.co/profile/fifty-five';
