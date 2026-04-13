export type VerticalSlug =
  | 'wine-spirits'
  | 'hospitality'
  | 'restaurant'
  | 'fitness'
  | 'tech'
  | 'retail-cpg'
  | 'healthcare'
  | 'real-estate'
  | 'automotive'
  | 'entertainment';

export type VerticalColorKey =
  | 'wine'
  | 'hospitality'
  | 'restaurant'
  | 'fitness'
  | 'tech'
  | 'retail'
  | 'entertainment'
  | 'healthcare'
  | 'realestate'
  | 'automotive';

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
  /**
   * Optional hero image path relative to /public (e.g. '/images/verticals/wine-spirits.jpg').
   * When unset, the vertical page uses the gradient-only hero.
   */
  heroImage?: string;
};

export const VERTICALS: Vertical[] = [
  {
    slug: 'wine-spirits',
    name: 'Wine & Spirits',
    shortLabel: 'Wine & Spirits',
    colorKey: 'wine',
    headline: 'Social Media for Wine & Spirits Brands',
    subhead:
      '15+ wine and spirits brands managed since 2011. Decade-long retainer with Mezzacorona. Multi-year partnership with Kendall-Jackson. This isn\u2019t a vertical we dabble in \u2014 it\u2019s one we\u2019ve lived in.',
    clients: [
      'Kendall-Jackson',
      'Mezzacorona',
      'Penfolds',
      'Beringer',
      'Sutter Home',
      'Zardetto Prosecco',
      'Clean Slate Riesling',
      'Don Papa Rum',
    ],
    expertise: [
      'Wine social media has rules. Compliance nuance around what you can and can\u2019t say. Age-gating on every platform. Seasonal rhythms dictated by harvest, the holidays, ros\u00e9 season, and shelf-reset cycles. We\u2019ve been building against those constraints for over a decade.',
      'The best wine content lives in the middle ground between education and aspiration. Most agencies treat wine like any other consumer brand. It isn\u2019t. Wine brings baggage \u2014 intimidation, pretension, the fear of getting it wrong \u2014 and the social presence either compounds that or dissolves it. We\u2019ve been dissolving it since 2011.',
      'Ten years with Mezzacorona. Multi-year with Kendall-Jackson. These aren\u2019t vanity partnerships. They\u2019re the kind of relationships you only keep by reliably moving bottles off the shelf, season after season, vintage after vintage.',
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
      'Luxury resorts, cultural attractions, and national tourism boards across the US, Caribbean, and Asia-Pacific.',
    clients: [
      'Hong Kong Tourism Board',
      'Resorts World Bimini',
      'Resorts World Catskills',
      'Polynesian Cultural Center',
      'Korea Tourism Board',
      'Macau Tourism Office',
      'Newport Beach Tourism',
      'Pali Hotels',
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
      "Lenny and Larry's",
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
      'From national franchises to boutique studios and premium endurance brands \u2014 social strategies that drive memberships, not just followers.',
    clients: [
      'Orangetheory Fitness',
      'Chris & Heidi Powell',
      'Cervelo',
      'Title Boxing Club',
      'BASI Pilates',
      'BODYBar SoDo',
      'CKO Kickboxing',
      'StreetStrider',
    ],
    expertise: [
      'Fitness social media is about transformation \u2014 not just the workout, but the identity shift. Members join because they want to become someone. The content has to reflect that aspiration without feeling fake.',
      'We\u2019ve built content frameworks for franchise models and independent studios alike. The franchise playbook requires scalable templates that local owners can execute. The boutique studio playbook requires the opposite \u2014 intimate, owner-led, local-flavor storytelling.',
      'We understand the fitness membership funnel: awareness \u2192 trial class \u2192 conversion \u2192 retention. Most agencies optimize only the top of that funnel. We optimize the whole thing, because retention is where the margin lives.',
    ],
    featuredCaseStudies: [],
  },
  {
    slug: 'tech',
    name: 'Tech & SaaS',
    shortLabel: 'Tech',
    colorKey: 'tech',
    headline: 'Social Media for Tech & SaaS Brands',
    subhead:
      'Enterprise software, consumer electronics, smart home, and security software \u2014 from Microsoft to NETGEAR/Arlo to Avast.',
    clients: [
      'Microsoft',
      'SAP',
      'NETGEAR / Arlo',
      'Linksys',
      'Avast Anti-Virus',
      'Webroot Anti-Virus',
      'Chamberlain',
      'SkyBell',
    ],
    expertise: [
      'Tech social needs translators \u2014 people who can take an engineering team\u2019s roadmap and turn it into content a non-technical audience actually cares about. Not blog posts reformatted for Instagram. Platform-native storytelling that earns attention in a hostile feed.',
      'We\u2019ve supported product launches (Arlo from NETGEAR sub-brand to NYSE-listed standalone), global education initiatives (Microsoft Partners in Learning), and security software positioning for Avast and Webroot. The throughline: clarity over cleverness.',
      'Smart home is its own category \u2014 half hardware sale, half post-install community management. We ran that playbook for Chamberlain and SkyBell while the category was still forming. The result: content that answers the questions a new owner is about to ask.',
    ],
    featuredCaseStudies: ['microsoft', 'netgear-arlo'],
  },
  {
    slug: 'retail-cpg',
    name: 'Retail & CPG',
    shortLabel: 'Retail & CPG',
    colorKey: 'retail',
    headline: 'Social Media for Retail & CPG Brands',
    subhead:
      'From iconic retail brands to DTC challengers \u2014 social strategies that move product, not just impressions.',
    clients: [
      'Tupperware',
      'Axe (Unilever)',
      'Toys R Us',
      'Pelican Products',
      'Rainbow Light',
      'Happy Egg Co.',
      'Saint Jane Beauty',
      'Hammit',
    ],
    expertise: [
      'Retail and CPG social lives or dies on shelf awareness. The platforms aren\u2019t the end goal \u2014 the store aisle is. We build content that drives the moment of recognition at point of purchase, not just the double-tap in the feed.',
      'We\u2019ve managed social for a Unilever masterbrand (Axe) and a direct-to-consumer beauty line (Saint Jane) in the same week. Different levers, same discipline: content that earns attention in a hostile feed and translates into conversion.',
      'Retail has a built-in seasonal rhythm \u2014 back to school, holiday, New Year, summer. We build calendars against those windows and reserve the creative firepower for the moments that actually move inventory.',
    ],
    featuredCaseStudies: ['tupperware', 'axe-unilever'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    shortLabel: 'Healthcare',
    colorKey: 'healthcare',
    headline: 'Social Media for Healthcare Brands',
    subhead:
      'Hospitals, behavioral health systems, and healthcare brands \u2014 social content built for a category where trust is the product.',
    clients: [
      'Molina Healthcare',
      'Cottage Health System',
      "Cottage Children's Hospital",
      'Valley Presbyterian Hospital',
      'Doctors Medical Center',
      'Strategic Behavioral Health',
      'Clearview Behavioral Health',
      'Willow Creek Behavioral Health',
    ],
    expertise: [
      'Healthcare social is the most regulated category we work in. Every post runs through compliance. HIPAA considerations shape community management. The line between patient story and patient privacy is one we don\u2019t cross \u2014 and the content is better for the discipline.',
      'Behavioral health is a world of its own. Audiences are often in crisis or supporting a loved one who is. The tone has to be clinical enough to read as credible and human enough to actually help. Most agencies get one side or the other. We get both.',
      'Hospital systems compete on reputation as much as capability. Every post is a reputation-management moment \u2014 either reinforcing trust or eroding it. We treat social as earned media, not as paid distribution.',
    ],
    featuredCaseStudies: [],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    shortLabel: 'Real Estate',
    colorKey: 'realestate',
    headline: 'Social Media for Real Estate & Retail Properties',
    subhead:
      'Regional malls, lifestyle centers, and marquee property brands \u2014 social that drives foot traffic and lease-up velocity, not just vanity engagement.',
    clients: [
      'Centennial Corporate',
      'The Irvine Company',
      'Fox Valley Mall',
      'Hawthorn Mall',
      'MainPlace Mall',
      'Connecticut Post Mall',
      'Vancouver Mall',
      'WestsideRentals (Apartments.com)',
    ],
    expertise: [
      'Real estate social sits at the intersection of retail and local. A mall\u2019s feed has to sell the tenants \u2014 the brands inside \u2014 not the building. Every location has a different local audience, a different set of anchor tenants, and a different set of seasonal drivers.',
      'We\u2019ve built social programs for regional malls across the US under the Centennial umbrella \u2014 shared templates, local execution, measurable foot-traffic lift against the events calendar.',
      'The best real estate social blurs the line between property and platform. A mall becomes a content destination, not just a place to shop. We built that playbook for Centennial before it became the industry standard.',
    ],
    featuredCaseStudies: ['centennial-real-estate'],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    shortLabel: 'Automotive',
    colorKey: 'automotive',
    headline: 'Social Media for Automotive & Transportation Brands',
    subhead:
      'Rental giants, dealer networks, and transportation brands \u2014 social strategies built for a category where every impression has a measurable downstream.',
    clients: [
      'Enterprise Rent-A-Car',
      'National Car Rental',
      'Alamo Rent a Car',
      'AutoNation',
      'LAcarGUY',
      'Club Sportiva',
      'LeMans Karting',
      'UTI Worldwide',
    ],
    expertise: [
      'Automotive social is a direct-response category dressed up as brand. Every impression has a measurable downstream rental, lease, or test drive. We built multi-market programs for Enterprise Holdings across the US, Latin America, and the Caribbean \u2014 same parent brand, three distinct audiences, three sets of regulatory contexts.',
      'Dealer networks are their own puzzle \u2014 a national brand voice vs. hundreds of local franchisees with their own inventory, promotions, and local flavor. We built the template system that let AutoNation\u2019s dealers feel local without drifting from the national brand.',
      'Luxury automotive (Club Sportiva) requires a different hand. The audience isn\u2019t buying a car \u2014 they\u2019re buying access to a fleet. The social has to feel like a members-only lifestyle magazine, not a dealer ad.',
    ],
    featuredCaseStudies: ['enterprise-holdings'],
  },
  {
    slug: 'entertainment',
    name: 'Entertainment & Media',
    shortLabel: 'Entertainment',
    colorKey: 'entertainment',
    headline: 'Social Media for Entertainment & Media Brands',
    subhead:
      'Cable networks, live-sports venues, game franchises, and entertainment properties \u2014 social content built to drive tune-in, tickets, and watch time.',
    clients: [
      'Discovery Channel',
      'American Airlines Center',
      'Warner Bros.',
      'Game Show Network',
      'GolfNow',
      'Solar Bears Orlando',
      'Andretti Indoor Karting',
      'Steve Tyrell',
    ],
    expertise: [
      'Entertainment social lives on urgency. A show drops tonight. The game tips off at 7. The promotion ends Sunday. We built the content calendars for Discovery Channel\u2019s tentpole reality franchises and Game Show Network\u2019s daytime lineup \u2014 fast-turn, platform-native, always matched to the programming window.',
      'Live-event venues (American Airlines Center, Solar Bears, Andretti) have a different cadence. Every event is its own micro-campaign \u2014 pre-event hype, day-of activation, post-event recap. Multiply by 100+ events a year and you need a content engine, not a content team.',
      'Game launches and entertainment IP are where social gets creative. For Warner Bros.\u2019 Spy Hunter launch, the social was the campaign, not a channel supporting the campaign. We treat entertainment social that way every time \u2014 content that earns the attention a paid buy has to rent.',
    ],
    featuredCaseStudies: [],
  },
];

export function getVertical(slug: string) {
  return VERTICALS.find((v) => v.slug === slug);
}
