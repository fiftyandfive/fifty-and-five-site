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
    // TODO(Lucas): paste Blaze Pizza Clutch quote
    quote:
      'Paste the verbatim Blaze Pizza review text from clutch.co/profile/fifty-five here.',
    author: 'Reviewer Name',
    title: 'Title, Blaze Pizza',
    company: 'Blaze Pizza',
    rating: 5,
  },
  {
    quote:
      'Fifty & Five has helped us grow our Instagram & Facebook presence. They are professional, creative, and such a pleasure to work with. The professional photos and videos that they capture are beautiful and captivating. We are grateful to have them as part of our team.',
    author: 'Co-Owner',
    title: 'Barsha Life — LA Restaurant & Wine Bar',
    company: 'Barsha',
    rating: 5,
  },
];

export const CLUTCH_PROFILE_URL = 'https://clutch.co/profile/fifty-five';
