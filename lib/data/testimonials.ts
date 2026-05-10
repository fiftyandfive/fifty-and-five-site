export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatarSrc: string;
  linkedinUrl: string;
  clutchUrl: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'They grew our engagement 400%. It doesn’t feel like I’m partnered with a large company, we have a real relationship, and we always have access to them.',
    author: 'Jerry Shen',
    title: 'Director of Digital Growth, Blaze Pizza',
    company: 'Blaze Pizza',
    rating: 5,
    avatarSrc: '/images/testimonials/jerry-shen.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/jerry-shen-18b33567/',
    clutchUrl: 'https://clutch.co/go-to-review/53ab3856-8be0-447a-af60-829b9d354f0e/49452',
  },
  {
    quote:
      'They’ve grown our Instagram and Facebook presence — professional, creative, and a real pleasure to work with. The photos and videos they capture are beautiful and captivating.',
    author: 'Lenora Marouani',
    title: 'Co-Owner, Barsha · LA Restaurant & Wine Bar',
    company: 'Barsha',
    rating: 5,
    avatarSrc: '/images/testimonials/lenora-marouani.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/lenora-marouani-6b863a90/',
    clutchUrl: 'https://clutch.co/go-to-review/53ab3856-8be0-447a-af60-829b9d354f0e/200533',
  },
  {
    quote:
      'Professional, organized, creative, smart, and consistently positive energy, which really matters when working with an agency. Thankful to have found this team.',
    author: 'Matt Kemper',
    title: 'CMO, StreetStrider',
    company: 'StreetStrider',
    rating: 5,
    avatarSrc: '/images/testimonials/matt-kemper.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/matthew-kemper-levl/',
    clutchUrl: 'https://clutch.co/go-to-review/53ab3856-8be0-447a-af60-829b9d354f0e/14204',
  },
];

export const CLUTCH_PROFILE_URL = 'https://clutch.co/profile/fifty-five';
