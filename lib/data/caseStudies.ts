import type { VerticalColorKey } from './verticals';

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  verticalLabel: string;
  verticalColor: VerticalColorKey;
  services: string[];
  duration: string;
  durationBadge: string;
  platforms: string[];
  tagline: string;
  challenge: string;
  approach: string;
  outcome: string;
  featured?: boolean;
  size?: 'wide' | 'standard';
  /**
   * Optional hero image path relative to /public (e.g. '/images/case-studies/kendall-jackson.jpg').
   * When unset, falls back to the gradient PlaceholderImage.
   */
  heroImage?: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    avatarSrc: string;
    linkedinUrl: string;
  };
  metrics?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'kendall-jackson',
    client: 'Kendall-Jackson',
    industry: 'Wine & Spirits',
    verticalLabel: 'Wine & Spirits',
    verticalColor: 'wine',
    services: ['Social media management', 'Content strategy', 'Community management'],
    duration: 'Multi-year partnership (2020\u2013present)',
    durationBadge: 'Multi-Year Partnership',
    platforms: ['Instagram', 'Facebook', 'TikTok', 'Pinterest'],
    tagline:
      'Multi-year social partnership across the Kendall-Jackson portfolio, lifestyle aspiration balanced with wine education.',
    challenge:
      'Maintain relevance and engagement for one of the most established wine brands in the United States across platforms that have evolved dramatically since the brand first established its social presence. Honor the Kendall-Jackson heritage while keeping the feed from feeling like a wine club newsletter.',
    approach:
      'Built a content strategy that balanced lifestyle aspiration with wine education, food pairings, vineyard storytelling, varietal education, and seasonal tentpoles (harvest, holiday, ros\u00e9 season). Managed community engagement across every platform with a unified voice that spoke with authority but never with condescension. Adapted to platform shifts (Reels, TikTok, Pinterest\u2019s resurgence) without chasing trends that didn\u2019t fit the brand.',
    outcome:
      'A sustained multi-year retainer, the kind of partnership that only happens when results consistently exceed expectations. One of the longest-running social relationships in the wine industry at the boutique agency level. The brand\u2019s social presence now reads as the baseline against which competitor wine brands benchmark.',
    featured: true,
    size: 'wide',
    heroImage: '/images/case-studies/kendall-jackson.jpg',
    metrics: [
      'Multi-year retainer — one of the longest-running wine social partnerships at the boutique agency level',
      'Content strategy spanning Instagram, Facebook, TikTok, and Pinterest',
      'Unified voice across varietal education, food pairings, vineyard storytelling, and seasonal campaigns',
    ],
  },
  {
    slug: 'mezzacorona',
    client: 'Mezzacorona Portfolio',
    industry: 'Wine & Spirits',
    verticalLabel: 'Wine & Spirits',
    verticalColor: 'wine',
    services: ['Social media management', 'Content creation', 'Community growth'],
    duration: 'Decade-long retainer',
    durationBadge: 'Decade-Long Partnership',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'A decade of consistent brand storytelling for an Italian wine portfolio in the U.S. market, one of the longest continuous engagements in the agency\u2019s history.',
    challenge:
      'Build a meaningful English-language social presence for an Italian wine portfolio in a U.S. market already crowded with domestic and imported competition. Cultivate a community that understood the Trentino-Alto Adige story without turning every post into a wine-school lecture.',
    approach:
      'A decade of consistent brand storytelling, community cultivation, and platform evolution. Built the brand\u2019s entire English-language social presence from the ground up. Adapted strategy through every major social media shift across the engagement, the switch from organic reach to paid, the rise of video, the Reels era, shoppable content, and the fragmentation across platforms.',
    outcome:
      'A decade-long retainer speaks for itself. You don\u2019t keep a wine brand as a client for nearly ten years unless the social presence is doing real commercial work, a case study in what consistency looks like when a brand stops reinventing its social strategy every two years.',
    featured: true,
    size: 'standard',
    heroImage: '/images/case-studies/mezzacorona.jpg',
    metrics: [
      'Decade-long retainer — one of the longest continuous agency engagements in the wine category',
      'Built entire English-language social presence from the ground up for a U.S. market entry',
      'Adapted strategy through every major platform shift: organic-to-paid, Reels, TikTok, shoppable content',
    ],
  },
  {
    slug: 'blaze-pizza',
    client: 'Blaze Pizza',
    industry: 'Restaurant / QSR',
    verticalLabel: 'Restaurant',
    verticalColor: 'restaurant',
    services: ['National social media program', 'Content strategy', 'Community management'],
    duration: '2014\u20132021',
    durationBadge: '7-Year Program',
    platforms: ['Instagram', 'Facebook', 'Twitter'],
    tagline:
      'Built and ran the national social media program during Blaze\u2019s rise to one of the fastest-growing restaurant chains in U.S. history.',
    challenge:
      'Support the explosive national growth of a fast-casual pizza brand evolving from an emerging concept to a household name. Keep the social voice consistent across hundreds of locations without flattening the regional personalities that made the brand feel local.',
    approach:
      'Built and executed the national social media program during Blaze\u2019s hyper-growth phase. Created content frameworks that scaled across hundreds of locations while maintaining brand personality. Balanced national campaign beats (LTOs, celebrity partnerships, cultural moments) with local-market responsiveness. Managed community through viral moments and the occasional operational crisis with the same steady hand.',
    outcome:
      'Managed the social presence during Blaze\u2019s rise to one of the fastest-growing restaurant chains in U.S. history. The playbook built here, scalable content systems for multi-location brands, now informs every QSR and franchise engagement we take on.',
    featured: true,
    size: 'standard',
    heroImage: '/images/case-studies/blaze-pizza.jpg',
    testimonial: {
      quote: 'They grew our engagement 400%. It doesn’t feel like I’m partnered with a large company, we have a real relationship, and we always have access to them.',
      author: 'Jerry Shen',
      title: 'Director of Digital Growth, Blaze Pizza',
      avatarSrc: '/images/testimonials/jerry-shen.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/jerry-shen-18b33567/',
    },
    metrics: [
      '400% engagement growth across national social channels',
      '7-year retainer managing social through hyper-growth from emerging concept to household name',
      'Scalable content system across hundreds of franchise locations',
    ],
  },
  {
    slug: 'enterprise-holdings',
    heroImage: '/images/case-studies/enterprise-holdings.jpg',
    client: 'Enterprise Holdings',
    industry: 'Auto / Transportation',
    verticalLabel: 'Automotive',
    verticalColor: 'automotive',
    services: ['Social media management across 6 brands', 'Cross-market coordination'],
    duration: 'Multi-year',
    durationBadge: '6 Brands, 2 Markets',
    platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
    tagline:
      'Managed distinct social identities for 6 brands under one corporate umbrella, Enterprise, National, Alamo, across US and LATAM markets.',
    challenge:
      'Run social for six distinct brands under one corporate umbrella, Enterprise, National, Alamo and related entities, across U.S. and LATAM markets. Each brand had its own audience, tone, and competitive set. None of them could afford to sound like a generic rental-car chain.',
    approach:
      'Built separate content strategies for each brand while maintaining corporate alignment on standards, compliance, and campaign alignment. Coordinated localization and community management across markets. Managed the complexity of multi-brand, multi-market execution with a small team, the kind of operation that usually requires a 20-person agency pod.',
    outcome:
      'Demonstrated the ability to manage enterprise-scale complexity, six brands, multiple markets, distinct voices, without the overhead of a large agency team. The Enterprise engagement remains the single strongest proof point that this model scales beyond boutique work.',
    featured: true,
    size: 'standard',
    metrics: [
      '6 distinct brands managed simultaneously under one corporate umbrella',
      'Cross-market coordination across U.S. and LATAM',
      'Enterprise-scale execution with a boutique-size team — no 20-person agency pod',
    ],
  },
  {
    slug: 'centennial-real-estate',
    heroImage: '/images/case-studies/centennial-real-estate.jpg',
    client: 'Centennial Real Estate',
    industry: 'Retail / Real Estate',
    verticalLabel: 'Real Estate',
    verticalColor: 'realestate',
    services: ['Social media management for 9 properties', 'Local content systems'],
    duration: 'Multi-year',
    durationBadge: '9 Properties',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Distinct social identities for 9 shopping centers simultaneously, each with a unique tenant mix, demographic, and local personality.',
    challenge:
      'Create distinct social identities for nine separate shopping centers, each with unique tenant mixes, demographics, and local personalities. The generic "mall marketing" playbook wasn\u2019t going to work, a center in Texas doesn\u2019t speak the same way as a center in Southern California.',
    approach:
      'Developed individualized content strategies for each property while building scalable workflows that made nine-account management feasible with a small team. Each property\u2019s social presence reflected its specific tenants, events, and community, while benefiting from centralized reporting and standards.',
    outcome:
      'Proved the multi-location playbook at scale, nine properties, each with its own voice, managed efficiently through systems-first execution. A template for every subsequent multi-property client engagement.',
  },
  {
    slug: 'resorts-world',
    heroImage: '/images/case-studies/resorts-world.jpg',
    client: 'Resorts World',
    industry: 'Hospitality',
    verticalLabel: 'Hospitality',
    verticalColor: 'hospitality',
    services: ['Social media management', 'Content creation', 'Community management'],
    duration: 'Multi-year',
    durationBadge: 'Multi-Property',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Luxury resort social for two very different properties. Bimini in the Bahamas, plus the Catskills in upstate New York.',
    challenge:
      'Build social presence for luxury resort properties across multiple locations with radically different characters, a tropical island paradise in the Bahamas and a mountain retreat in upstate New York. Make each feel like a place worth traveling for.',
    approach:
      'Crafted aspirational lifestyle content that showcased each property\u2019s unique character, turquoise water and over-water villas for Bimini, fireplaces and foliage for the Catskills. Managed community with the understanding that resort DMs are often sales conversations worth thousands of dollars.',
    outcome:
      'Built engaged communities around two very different resort experiences under one brand umbrella. Proof that hospitality social scales across property types when the strategy respects the specificity of the place.',
  },
  {
    slug: 'netgear-arlo',
    heroImage: '/images/case-studies/netgear-arlo.jpg',
    client: 'NETGEAR / Arlo Cameras',
    industry: 'Tech / Consumer Electronics',
    verticalLabel: 'Tech',
    verticalColor: 'tech',
    services: ['Social media', 'Product launch support'],
    duration: 'Multi-year',
    durationBadge: 'Launch Partner',
    platforms: ['Instagram', 'Facebook', 'Twitter', 'YouTube'],
    tagline:
      'Social support through Arlo\u2019s evolution from a NETGEAR product line to an NYSE-listed standalone smart home brand.',
    challenge:
      'Support the launch and growth of Arlo as it evolved from a NETGEAR product line to a standalone smart home brand. Build social momentum during the critical window when the sub-brand was establishing an independent identity.',
    approach:
      'Built social momentum during Arlo\u2019s most critical growth phase, from sub-brand to independent company. Product launch support, community-building around a still-emerging smart home category, and positioning work that helped differentiate Arlo in an increasingly crowded field.',
    outcome:
      'Arlo launched as a standalone company (NYSE: ARLO). We were part of the team that built its early social presence during the most critical growth window, a credential that still informs how we approach product launches for consumer tech clients.',
  },
  {
    slug: 'tupperware',
    heroImage: '/images/case-studies/tupperware.jpg',
    client: 'Tupperware Global',
    industry: 'Retail / Consumer Goods',
    verticalLabel: 'Retail',
    verticalColor: 'retail',
    services: ['Social media management', 'Community growth'],
    duration: 'Multi-year',
    durationBadge: 'Global Brand',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Modernized the social presence of a 75-year-old consumer brand for contemporary audiences, without breaking what the community already loved.',
    challenge:
      'Modernize the social presence of a legacy consumer brand for contemporary audiences. Bridge 75 years of brand equity with social-first storytelling for a generation that grew up on Instagram instead of Tupperware parties.',
    approach:
      'Refreshed content strategy to bridge Tupperware\u2019s heritage with modern social-first storytelling. Balanced nostalgia with relevance, respecting what the legacy community loved while giving new audiences a reason to follow.',
    outcome:
      'Grew Instagram following significantly while maintaining the brand\u2019s established identity and community trust. Proof that legacy brands don\u2019t need to be rebuilt from scratch, they need to be reframed.',
  },
  {
    slug: 'axe-unilever',
    heroImage: '/images/case-studies/axe-unilever.jpg',
    client: 'Axe / Unilever',
    industry: 'CPG / Personal Care',
    verticalLabel: 'Retail & CPG',
    verticalColor: 'retail',
    services: ['Experiential marketing', 'Social media', 'Product launch'],
    duration: '2010 campaign',
    durationBadge: '2010 Campaign',
    platforms: ['Twitter', 'Facebook', 'Experiential'],
    tagline:
      'Twitter takeover + experiential pop-ups + barber-shop brand activations, one of the earliest integrated social + experiential campaigns for a major CPG brand.',
    challenge:
      'Launch a new Axe hair product line with cultural impact at a moment when "experiential marketing" wasn\u2019t yet an industry buzzword and social platforms were still figuring out what brands were allowed to do.',
    approach:
      'Executed a Twitter takeover, produced pop-up experiential events, and converted bars into branded barber-shop experiences. Culturally-embedded marketing before the category even had a name for itself.',
    outcome:
      'One of the earliest examples of integrated social + experiential campaigns for a major CPG brand. Unilever-level execution, and a credential that predates most of the agencies currently pitching the same playbook.',
  },
  {
    slug: 'polynesian-cultural-center',
    heroImage: '/images/case-studies/polynesian-cultural-center.jpg',
    client: 'Polynesian Cultural Center',
    industry: 'Hospitality / Tourism',
    verticalLabel: 'Hospitality',
    verticalColor: 'hospitality',
    services: ['Social media management', 'Content strategy'],
    duration: 'Multi-year',
    durationBadge: "Hawaii's #1 Paid Attraction",
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Cultural storytelling that drove visitation for Hawaii\u2019s #1 paid attraction, without flattening the mission into a tourism brochure.',
    challenge:
      'Drive awareness and visitation for Hawaii\u2019s #1 paid attraction. Balance the Center\u2019s cultural mission with the commercial reality that it\u2019s also a tourism business competing for visitor dollars.',
    approach:
      'Cultural storytelling that honored the Center\u2019s mission while driving tourism engagement. Featured the performers, the artisans, and the stories, not just the luau photos. A nuanced approach most agencies miss entirely when briefed on a cultural-tourism account.',
    outcome:
      'Built a social program that balanced cultural respect with tourism marketing, a nuance most agencies miss. The model for every subsequent cultural-heritage tourism client we\u2019ve taken on.',
  },
  {
    slug: 'microsoft',
    heroImage: '/images/case-studies/microsoft.jpg',
    client: 'Microsoft (Partners in Learning)',
    industry: 'Technology / Education',
    verticalLabel: 'Tech',
    verticalColor: 'tech',
    services: ['Social media', 'Content strategy'],
    duration: 'Multi-year',
    durationBadge: 'Global Initiative',
    platforms: ['Twitter', 'Facebook'],
    tagline:
      'Community building around Microsoft\u2019s global education initiative, translating enterprise edtech into content educators actually shared.',
    challenge:
      'Build community around Microsoft\u2019s education initiative. Translate the company\u2019s enterprise-scale education technology into content accessible and engaging for individual classroom educators, an audience notoriously skeptical of corporate marketing.',
    approach:
      'Translated Microsoft\u2019s education technology offerings into accessible, engaging social content for educators. Showcased real teachers, real classroom stories, and real outcomes, not product pitches dressed up as inspiration.',
    outcome:
      'Microsoft. The name speaks for itself. A credential that, on its own, ends most "have you worked with enterprise clients?" conversations.',
  },
  {
    slug: 'selectquote-insurance',
    heroImage: '/images/case-studies/selectquote-insurance.jpg',
    client: 'SelectQuote Insurance',
    industry: 'Financial Services / Insurance',
    verticalLabel: 'Finance',
    verticalColor: 'tech',
    services: ['Social media management'],
    duration: 'Multi-year',
    durationBadge: 'Multi-Year',
    platforms: ['Facebook', 'Twitter', 'LinkedIn'],
    tagline:
      'Humanized an insurance brand in a category notorious for being un-human, and kept the relationship long enough to prove it wasn\u2019t a fluke.',
    challenge:
      'Humanize an insurance brand on social media, one of the hardest verticals in the category. Make the content relatable without trivializing the product (which is, ultimately, a financial instrument people actually need).',
    approach:
      'Built a content strategy that made insurance relatable without trivializing the product. Combined educational content, trust-building storytelling, and platform-native formats that earned attention in a feed where most insurance ads get scrolled past.',
    outcome:
      'Multi-year relationship built on consistent performance in one of social media\u2019s most challenging verticals. Proof that the playbook works even where most agencies refuse to pitch.',
  },
  {
    slug: 'barsha',
    client: 'Barsha',
    industry: 'Restaurant / Wine Bar',
    verticalLabel: 'Hospitality',
    verticalColor: 'hospitality',
    services: ['Social media management', 'Content creation', 'Influencer seeding', 'PR amplification'],
    duration: 'Multi-year',
    durationBadge: 'LA Times Top 101',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Organic social and influencer seeding that helped land Barsha on the LA Times Top 101 Restaurants list two years running.',
    challenge:
      'Build visibility for an independent LA restaurant and wine bar in one of the most competitive dining markets in the country. No paid media budget. No PR agency. Just the food, the wine list, and whatever social could do.',
    approach:
      'Built an Instagram-first content strategy around Barsha’s Mediterranean-meets-California menu and curated natural wine program. Seeded content to food writers, local influencers, and neighborhood tastemakers organically—no pay-for-play, no gifted-meal programs. Every post was shot to make the scroll stop. Let the food and the room do the talking.',
    outcome:
      'Barsha landed on the LA Times Top 101 Restaurants list two years running. BuzzFeed, Thrillist, and NBC LA followed—all organic, no PR retainer. The kind of result that proves social media can drive real-world press when the content is good enough to share on its own.',
    testimonial: {
      quote: 'They’ve grown our Instagram and Facebook presence — professional, creative, and a real pleasure to work with. The photos and videos they capture are beautiful and captivating.',
      author: 'Lenora Marouani',
      title: 'Co-Owner, Barsha',
      avatarSrc: '/images/testimonials/lenora-marouani.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/lenora-marouani-6b863a90/',
    },
    metrics: [
      'LA Times Top 101 Restaurants — two years running',
      'Featured in BuzzFeed, Thrillist, and NBC LA — all organic, no PR retainer',
      'Zero paid media budget — all growth from organic social and influencer seeding',
    ],
  },
  {
    slug: 'streetstrider',
    client: 'StreetStrider',
    industry: 'Fitness / Consumer Product',
    verticalLabel: 'Fitness',
    verticalColor: 'fitness',
    services: ['Social media management', 'Influencer marketing', 'Content strategy', 'Community building'],
    duration: 'Multi-year',
    durationBadge: '100+ Creator Deals',
    platforms: ['Instagram', 'Facebook', 'YouTube', 'TikTok'],
    tagline:
      'Built an influencer engine from zero—Natalie Jill, Olympic medalists, and 100+ creator partnerships for an outdoor fitness brand.',
    challenge:
      'Launch and scale social for an outdoor fitness product with no existing influencer relationships, no creator pipeline, and a product category most people had never heard of. Build awareness from scratch in a market dominated by Peloton, Mirror, and gym culture.',
    approach:
      'Built a full influencer engine from the ground up. Identified, pitched, and closed 100+ creator partnerships across fitness, wellness, and outdoor lifestyle verticals. Landed Natalie Jill, Olympic medalists, and CrossFit athletes as organic ambassadors. Created a content system that turned every creator partnership into reusable social assets—workout clips, testimonials, unboxings—that fed the organic feed for months after each deal closed.',
    outcome:
      'Scaled from zero influencer relationships to 100+ active creator partnerships. Built a repeatable creator pipeline that became the brand’s primary acquisition channel. Proved that influencer marketing works for niche fitness products when you match the creator to the community, not just the follower count.',
    testimonial: {
      quote: 'Professional, organized, creative, smart, and consistently positive energy, which really matters when working with an agency. Thankful to have found this team.',
      author: 'Matt Kemper',
      title: 'CMO, StreetStrider',
      avatarSrc: '/images/testimonials/matt-kemper.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/matthew-kemper-levl/',
    },
    metrics: [
      '100+ creator partnerships built from zero — Natalie Jill, Olympic medalists, CrossFit athletes',
      'Influencer engine became the brand’s primary acquisition channel',
      'Repeatable creator pipeline spanning fitness, wellness, and outdoor lifestyle verticals',
    ],
  },
  {
    slug: 'central-florida-talent',
    client: 'Central Florida Talent',
    industry: 'Talent & Entertainment',
    verticalLabel: 'Entertainment',
    verticalColor: 'entertainment',
    services: ['Website design & build (Next.js)', 'SEO', 'Answer Engine Optimization (AEO)', 'Structured data & entity strategy'],
    duration: '2025–2026',
    durationBadge: 'Website + AEO Build',
    platforms: ['Next.js', 'Google', 'ChatGPT', 'Perplexity'],
    tagline:
      'Built a 30-year Orlando talent agency a modern website engineered to be found — and cited — by both search engines and AI.',
    challenge:
      'Central Florida Talent has been Orlando’s longest-operating SAG-AFTRA franchised agency since 1994 — three decades of placements, from Stranger Things to national Disney and Lay’s campaigns. But its digital presence didn’t reflect its standing. The bigger shift: casting directors, prospective talent, and now AI assistants are all first filters. When someone asks an AI “who’s a good talent agency in Florida,” the answer is built from structured, verifiable content a site explicitly provides. CFT needed a site as authoritative online — to both Google and the AI layer above it — as the agency is on set.',
    approach:
      'We rebuilt CFT on a modern, server-rendered Next.js foundation — fast, crawlable, clean — then engineered it for both traditional search and Answer Engine Optimization (AEO), the emerging layer where AI assistants decide which businesses to name. The work centered on making CFT answerable. We built a structured FAQ layer addressing the exact questions prospects and LLMs ask (“Does the agency charge upfront fees?”, “Is it SAG-AFTRA franchised?”, “How do I submit?”) and marked it up with FAQPage schema so machines read it as labeled Q&A. We published verifiable entity signals — SAG-AFTRA Agency ID 000347, FL license TA# 498, named credits — that build the machine-readable trust both Google’s E-E-A-T standards and AI models require before citing a source. And we layered in LocalBusiness/EmploymentAgency and WebSite schema for a complete structured-data stack.',
    outcome:
      'CFT’s site now carries a complete AEO foundation — verified live in the page source: three JSON-LD schema blocks including FAQPage, a structured answer layer, and published license and credential facts. It’s a website built not just to rank, but to be cited by the AI tools an increasing share of clients and talent now use to find representation. The playbook built here — modern framework + structured answer content + verifiable entity signals — is now how Fifty & Five approaches every local-authority and professional-services brand that needs to win both Google and the AI layer above it.',
    metrics: [
      'Full AEO schema stack live: EmploymentAgency (LocalBusiness), WebSite, and FAQPage structured data',
      'Structured FAQ layer answering the literal questions prospects and AI assistants ask',
      'Published entity signals for machine-readable trust: SAG-AFTRA Agency ID 000347, FL license TA# 498',
      '463 backlinks across 241 referring domains (Ahrefs)',
      'Modern Next.js build — fast, server-rendered, and fully crawlable',
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (i === -1) return CASE_STUDIES[0];
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}

export const VERTICAL_COLOR_HEX: Record<string, string> = {
  wine: '#9B2335',
  hospitality: '#0D9488',
  tourism: '#0E7490',
  restaurant: '#EA580C',
  luxury: '#A16207',
  fitness: '#EC4899',
  tech: '#C41E3A',
  retail: '#F59E0B',
  entertainment: '#E2334F',
  healthcare: '#0284C7',
  realestate: '#B45309',
  automotive: '#64748B',
};

export const VERTICAL_COLOR_DEEP_HEX: Record<string, string> = {
  wine: '#4A1A20',
  hospitality: '#064E47',
  tourism: '#064E5A',
  restaurant: '#6B2806',
  luxury: '#523204',
  fitness: '#6B2244',
  tech: '#2D2F73',
  retail: '#6B4006',
  entertainment: '#401F73',
  healthcare: '#023E5C',
  realestate: '#5C2C04',
  automotive: '#2D3540',
};
