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
 * Verified Clutch reviews. Ordered for narrative punch:
 * 1. Blaze Pizza leads with the hard stat (400% engagement).
 * 2. Barsha grounds it with craft + character.
 * 3. StreetStrider adds the "easy to work with" relational proof.
 * 4. Luxury Cosmetics closes with the one-line verdict.
 * Source: https://clutch.co/profile/fifty-five
 */
export const TESTIMONIALS: Testimonial[] = [
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
  {
    quote:
      'Professional, organized, creative, smart \u2014 and consistently positive energy, which really matters when working with an agency. Thankful to have found this team.',
    author: 'CMO',
    title: 'StreetStrider',
    company: 'StreetStrider',
    rating: 5,
  },
  {
    quote: 'The team is exceptional \u2014 they overdeliver every time.',
    author: 'Owner',
    title: 'Luxury Cosmetics & Skincare Company',
    company: 'Luxury Cosmetics',
    rating: 5,
  },
];

export const CLUTCH_PROFILE_URL = 'https://clutch.co/profile/fifty-five';
