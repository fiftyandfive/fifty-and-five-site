export type VerticalSlug =
  | 'wine-spirits'
  | 'hospitality'
  | 'restaurant'
  | 'fitness'
  | 'tech';

export type VerticalColorKey =
  | 'wine'
  | 'hospitality'
  | 'restaurant'
  | 'fitness'
  | 'tech'
  | 'retail'
  | 'entertainment';

export type Vertical = {
  slug: VerticalSlug;
  name: string;
  colorKey: VerticalColorKey;
  headline: string;
  subhead: string;
  clients: string[];
  expertise: string[];
  featuredCaseStudies: string[];
  shortLabel: string;
};

export const VERTICALS: Vertical[] = [
  {
    slug: 'wine-spirits',
    name: 'Wine & Spirits',
    shortLabel: 'Wine & Spirits',
    colorKey: 'wine',
    headline: 'Social Media for Wine & Spirits Brands',
    subhead:
      '15+ wine and spirits brands managed since 2011. 9-year retainer with Mezzacorona. Multi-year partnership with Kendall-Jackson. This isn\u2019t a vertical we dabble in \u2014 it\u2019s one we\u2019ve lived in.',
    clients: [
      'Kendall-Jackson',
      'Mezzacorona',
      'Penfolds',
      'Beringer',
      'Zardetto Prosecco',
      'Clean Slate Riesling',
      'Crafty Bartender',
      'Cliffhanger',
    ],
    expertise: [
      'Wine social media has rules. Compliance nuance around what you can and can\u2019t say. Age-gating on every platform. Seasonal rhythms dictated by harvest, the holidays, ros\u00e9 season, and shelf-reset cycles. We\u2019ve been building against those constraints for over a decade.',
      'The best wine content lives in the middle ground between education and aspiration. Most agencies treat wine like any other consumer brand. It isn\u2019t. Wine brings baggage \u2014 intimidation, pretension, the fear of getting it wrong \u2014 and the social presence either compounds that or dissolves it. We\u2019ve been dissolving it since 2011.',
      'Nine years with Mezzacorona. Multi-year with Kendall-Jackson. These aren\u2019t vanity partnerships. They\u2019re the kind of relationships you only keep by reliably moving bottles off the shelf, season after season, vintage after vintage.',
    ],
    featuredCaseStudies: ['kendall-jackson', 'mezzacorona'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    shortLabel: 'Hospitality',
    colorKey: 'hospitality',
    headline: 'Social Media for Hospitality & Tourism',
    subhead:
      'Hospitality, travel, and tourism across the US, Caribbean, and Asia-Pacific \u2014 luxury resorts, cultural attractions, national tourism boards, and travel brands.',
    clients: [
      'Enterprise Rent-A-Car',
      'Hong Kong Tourism Board',
      'Resorts World Bimini',
      'Resorts World Catskills',
      'Polynesian Cultural Center',
      'Korea Tourism Board',
      'Macau Tourism Office',
      'Palihouse / Pali Society',
    ],
    expertise: [
      'Hospitality social is aspirational by nature \u2014 but aspiration without authenticity falls flat. The platforms are flooded with resort shots that all blend together. The properties that stand out are the ones whose content feels like a specific place, not a stock image.',
      'We\u2019ve managed properties from the Bahamas to Hawaii to upstate New York, each with distinct audiences and cultural contexts. The content strategy for a Polynesian cultural attraction is not the content strategy for an all-inclusive island resort \u2014 even if both live under the same "tourism" umbrella.',
      'Luxury tourism is also a category where community management matters more than most. People are booking thousands of dollars at a time based on DMs and comments. Every reply is a sales opportunity \u2014 or an objection waiting to be handled.',
    ],
    featuredCaseStudies: ['resorts-world', 'polynesian-cultural-center'],
  },
  {
    slug: 'restaurant',
    name: 'Restaurant & Food',
    shortLabel: 'Restaurant',
    colorKey: 'restaurant',
    headline: 'Social Media for Restaurants & Food Brands',
    subhead:
      'From QSR chains scaling nationally to independent top-100 restaurants \u2014 social media that drives covers and conversions, not just likes.',
    clients: [
      'Blaze Pizza',
      "Shakey's Pizza",
      "Wolfgang's Steakhouse",
      "Roscoe's House of Chicken & Waffles",
      'MidiCi Pizza',
      'Fresh & Co',
      'Barsha',
      'Melora Manuka Honey',
    ],
    expertise: [
      'Restaurant social is where craft meets commerce. The feed has to look delicious. The stories have to feel human. The ads have to move traffic. And the community management has to catch complaints before they become one-star reviews.',
      'We\u2019ve run national programs for fast-growth QSR brands (Blaze Pizza at scale) and built individualized presence for iconic independents (Wolfgang\u2019s, Roscoe\u2019s). Same playbook, different dials.',
      'Multi-location brands are their own puzzle \u2014 brand consistency vs. local flavor. We\u2019ve built the content systems that let hundreds of locations feel on-brand without flattening every neighborhood\u2019s personality.',
    ],
    featuredCaseStudies: ['blaze-pizza'],
  },
  {
    slug: 'fitness',
    name: 'Fitness & Wellness',
    shortLabel: 'Fitness',
    colorKey: 'fitness',
    headline: 'Social Media for Fitness & Wellness Brands',
    subhead:
      'From Orange Theory to boutique studios \u2014 social strategies that drive memberships, not just followers.',
    clients: [
      'Orange Theory',
      'Rainbow Light',
      'Blessed Herbs',
      'BASI Pilates',
      'Laser Lab',
      'BODYBar SoDo',
      'CKO Kickboxing',
      'StreetStrider',
    ],
    expertise: [
      'Fitness social media is about transformation \u2014 not just the workout, but the identity shift. Members join because they want to become someone. The content has to reflect that aspiration without feeling fake.',
      'We\u2019ve built content frameworks for franchise models and independent studios alike. The franchise playbook requires scalable templates that local owners can execute. The boutique studio playbook requires the opposite \u2014 intimate, owner-led, local-flavor storytelling.',
      'We understand the fitness membership funnel: awareness \u2192 trial class \u2192 conversion \u2192 retention. Most agencies optimize only the top of that funnel. We optimize the whole thing, because retention is where the margin lives.',
    ],
    featuredCaseStudies: ['orange-theory'],
  },
  {
    slug: 'tech',
    name: 'Tech & Consumer',
    shortLabel: 'Tech',
    colorKey: 'tech',
    headline: 'Social Media for Tech & Consumer Brands',
    subhead:
      'Enterprise tech, consumer electronics, and global brands. From Microsoft to NETGEAR/Arlo to SAP.',
    clients: [
      'Microsoft',
      'SAP',
      'NETGEAR / Arlo',
      'Warner Bros.',
      'Discovery Channel',
      'Axe',
      'Golf Now',
      'Tupperware',
    ],
    expertise: [
      'Tech social needs translators \u2014 people who can take an engineering team\u2019s roadmap and turn it into content a non-technical audience actually cares about. Not blog posts reformatted for Instagram. Platform-native storytelling that earns attention in a hostile feed.',
      'We\u2019ve supported product launches (Arlo from NETGEAR sub-brand to NYSE-listed standalone), global education initiatives (Microsoft Partners in Learning), and enterprise brand work for SAP. The throughline: clarity over cleverness.',
      'Tech brands also tend to over-produce. We build toward the minimum viable polish \u2014 enough to look credible, not so much that the content loses the human texture social media demands.',
    ],
    featuredCaseStudies: ['microsoft', 'netgear-arlo'],
  },
];

export function getVertical(slug: string) {
  return VERTICALS.find((v) => v.slug === slug);
}
