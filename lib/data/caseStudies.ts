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
      'Multi-year social partnership across the Kendall-Jackson portfolio \u2014 lifestyle aspiration balanced with wine education.',
    challenge:
      'Maintain relevance and engagement for one of the most established wine brands in the United States across platforms that have evolved dramatically since the brand first established its social presence. Honor the Kendall-Jackson heritage while keeping the feed from feeling like a wine club newsletter.',
    approach:
      'Built a content strategy that balanced lifestyle aspiration with wine education \u2014 food pairings, vineyard storytelling, varietal education, and seasonal tentpoles (harvest, holiday, ros\u00e9 season). Managed community engagement across every platform with a unified voice that spoke with authority but never with condescension. Adapted to platform shifts (Reels, TikTok, Pinterest\u2019s resurgence) without chasing trends that didn\u2019t fit the brand.',
    outcome:
      'A sustained multi-year retainer \u2014 the kind of partnership that only happens when results consistently exceed expectations. One of the longest-running social relationships in the wine industry at the boutique agency level. The brand\u2019s social presence now reads as the baseline against which competitor wine brands benchmark.',
    featured: true,
    size: 'wide',
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
      'A decade of consistent brand storytelling for an Italian wine portfolio in the U.S. market \u2014 one of the longest continuous engagements in the agency\u2019s history.',
    challenge:
      'Build a meaningful English-language social presence for an Italian wine portfolio in a U.S. market already crowded with domestic and imported competition. Cultivate a community that understood the Trentino-Alto Adige story without turning every post into a wine-school lecture.',
    approach:
      'A decade of consistent brand storytelling, community cultivation, and platform evolution. Built the brand\u2019s entire English-language social presence from the ground up. Adapted strategy through every major social media shift across the engagement \u2014 the switch from organic reach to paid, the rise of video, the Reels era, shoppable content, and the fragmentation across platforms.',
    outcome:
      'A decade-long retainer speaks for itself. You don\u2019t keep a wine brand as a client for nearly ten years unless the social presence is doing real commercial work \u2014 a case study in what consistency looks like when a brand stops reinventing its social strategy every two years.',
    featured: true,
    size: 'standard',
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
      'Managed the social presence during Blaze\u2019s rise to one of the fastest-growing restaurant chains in U.S. history. The playbook built here \u2014 scalable content systems for multi-location brands \u2014 now informs every QSR and franchise engagement we take on.',
    featured: true,
    size: 'standard',
  },
  {
    slug: 'enterprise-holdings',
    client: 'Enterprise Holdings',
    industry: 'Auto / Transportation',
    verticalLabel: 'Auto',
    verticalColor: 'tech',
    services: ['Social media management across 6 brands', 'Cross-market coordination'],
    duration: 'Multi-year',
    durationBadge: '6 Brands, 2 Markets',
    platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
    tagline:
      'Managed distinct social identities for 6 brands under one corporate umbrella \u2014 Enterprise, National, Alamo \u2014 across US and LATAM markets.',
    challenge:
      'Run social for six distinct brands under one corporate umbrella \u2014 Enterprise, National, Alamo and related entities \u2014 across U.S. and LATAM markets. Each brand had its own audience, tone, and competitive set. None of them could afford to sound like a generic rental-car chain.',
    approach:
      'Built separate content strategies for each brand while maintaining corporate alignment on standards, compliance, and campaign alignment. Coordinated localization and community management across markets. Managed the complexity of multi-brand, multi-market execution with a small team \u2014 the kind of operation that usually requires a 20-person agency pod.',
    outcome:
      'Demonstrated the ability to manage enterprise-scale complexity \u2014 six brands, multiple markets, distinct voices \u2014 without the overhead of a large agency team. The Enterprise engagement remains the single strongest proof point that this model scales beyond boutique work.',
    featured: true,
    size: 'standard',
  },
  {
    slug: 'centennial-real-estate',
    client: 'Centennial Real Estate',
    industry: 'Retail / Real Estate',
    verticalLabel: 'Retail',
    verticalColor: 'retail',
    services: ['Social media management for 9 properties', 'Local content systems'],
    duration: 'Multi-year',
    durationBadge: '9 Properties',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Distinct social identities for 9 shopping centers simultaneously \u2014 each with a unique tenant mix, demographic, and local personality.',
    challenge:
      'Create distinct social identities for nine separate shopping centers, each with unique tenant mixes, demographics, and local personalities. The generic "mall marketing" playbook wasn\u2019t going to work \u2014 a center in Texas doesn\u2019t speak the same way as a center in Southern California.',
    approach:
      'Developed individualized content strategies for each property while building scalable workflows that made nine-account management feasible with a small team. Each property\u2019s social presence reflected its specific tenants, events, and community \u2014 while benefiting from centralized reporting and standards.',
    outcome:
      'Proved the multi-location playbook at scale \u2014 nine properties, each with its own voice, managed efficiently through systems-first execution. A template for every subsequent multi-property client engagement.',
  },
  {
    slug: 'resorts-world',
    client: 'Resorts World',
    industry: 'Hospitality',
    verticalLabel: 'Hospitality',
    verticalColor: 'hospitality',
    services: ['Social media management', 'Content creation', 'Community management'],
    duration: 'Multi-year',
    durationBadge: 'Multi-Property',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Luxury resort social for two very different properties \u2014 Bimini in the Bahamas and the Catskills in upstate New York.',
    challenge:
      'Build social presence for luxury resort properties across multiple locations with radically different characters \u2014 a tropical island paradise in the Bahamas and a mountain retreat in upstate New York. Make each feel like a place worth traveling for.',
    approach:
      'Crafted aspirational lifestyle content that showcased each property\u2019s unique character \u2014 turquoise water and over-water villas for Bimini, fireplaces and foliage for the Catskills. Managed community with the understanding that resort DMs are often sales conversations worth thousands of dollars.',
    outcome:
      'Built engaged communities around two very different resort experiences under one brand umbrella. Proof that hospitality social scales across property types when the strategy respects the specificity of the place.',
  },
  {
    slug: 'orange-theory',
    client: 'Orange Theory',
    industry: 'Fitness & Wellness',
    verticalLabel: 'Fitness',
    verticalColor: 'fitness',
    services: ['Social media management', 'Content strategy'],
    duration: 'Multi-year',
    durationBadge: 'Multi-Year',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Content frameworks for a transformation-focused fitness brand \u2014 built around member stories and the science-backed methodology.',
    challenge:
      'Create compelling social content for a transformation-focused fitness brand at the moment when boutique fitness was becoming the dominant category in the industry. Every competitor was fighting for the same transformation story.',
    approach:
      'Developed content frameworks centered on member transformation stories and the science-backed heart-rate methodology that differentiates Orange Theory from the boutique fitness crowd. Built templates that franchise owners could execute locally without watering down the national brand.',
    outcome:
      'Built the playbook that now informs every fitness and wellness client engagement the agency takes on. A blueprint for how transformation-based brands translate on-platform.',
    featured: true,
    size: 'standard',
  },
  {
    slug: 'netgear-arlo',
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
      'Arlo launched as a standalone company (NYSE: ARLO). We were part of the team that built its early social presence during the most critical growth window \u2014 a credential that still informs how we approach product launches for consumer tech clients.',
  },
  {
    slug: 'tupperware',
    client: 'Tupperware Global',
    industry: 'Retail / Consumer Goods',
    verticalLabel: 'Retail',
    verticalColor: 'retail',
    services: ['Social media management', 'Community growth'],
    duration: 'Multi-year',
    durationBadge: 'Global Brand',
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Modernized the social presence of a 75-year-old consumer brand for contemporary audiences \u2014 without breaking what the community already loved.',
    challenge:
      'Modernize the social presence of a legacy consumer brand for contemporary audiences. Bridge 75 years of brand equity with social-first storytelling for a generation that grew up on Instagram instead of Tupperware parties.',
    approach:
      'Refreshed content strategy to bridge Tupperware\u2019s heritage with modern social-first storytelling. Balanced nostalgia with relevance \u2014 respecting what the legacy community loved while giving new audiences a reason to follow.',
    outcome:
      'Grew Instagram following significantly while maintaining the brand\u2019s established identity and community trust. Proof that legacy brands don\u2019t need to be rebuilt from scratch \u2014 they need to be reframed.',
  },
  {
    slug: 'axe-unilever',
    client: 'Axe / Unilever',
    industry: 'CPG / Personal Care',
    verticalLabel: 'CPG',
    verticalColor: 'entertainment',
    services: ['Experiential marketing', 'Social media', 'Product launch'],
    duration: '2010 campaign',
    durationBadge: '2010 Campaign',
    platforms: ['Twitter', 'Facebook', 'Experiential'],
    tagline:
      'Twitter takeover + experiential pop-ups + barber-shop brand activations \u2014 one of the earliest integrated social + experiential campaigns for a major CPG brand.',
    challenge:
      'Launch a new Axe hair product line with cultural impact at a moment when "experiential marketing" wasn\u2019t yet an industry buzzword and social platforms were still figuring out what brands were allowed to do.',
    approach:
      'Executed a Twitter takeover, produced pop-up experiential events, and converted bars into branded barber-shop experiences. Culturally-embedded marketing before the category even had a name for itself.',
    outcome:
      'One of the earliest examples of integrated social + experiential campaigns for a major CPG brand. Unilever-level execution \u2014 and a credential that predates most of the agencies currently pitching the same playbook.',
  },
  {
    slug: 'polynesian-cultural-center',
    client: 'Polynesian Cultural Center',
    industry: 'Hospitality / Tourism',
    verticalLabel: 'Hospitality',
    verticalColor: 'hospitality',
    services: ['Social media management', 'Content strategy'],
    duration: 'Multi-year',
    durationBadge: "Hawaii's #1 Paid Attraction",
    platforms: ['Instagram', 'Facebook'],
    tagline:
      'Cultural storytelling that drove visitation for Hawaii\u2019s #1 paid attraction \u2014 without flattening the mission into a tourism brochure.',
    challenge:
      'Drive awareness and visitation for Hawaii\u2019s #1 paid attraction. Balance the Center\u2019s cultural mission with the commercial reality that it\u2019s also a tourism business competing for visitor dollars.',
    approach:
      'Cultural storytelling that honored the Center\u2019s mission while driving tourism engagement. Featured the performers, the artisans, and the stories \u2014 not just the luau photos. A nuanced approach most agencies miss entirely when briefed on a cultural-tourism account.',
    outcome:
      'Built a social program that balanced cultural respect with tourism marketing \u2014 a nuance most agencies miss. The model for every subsequent cultural-heritage tourism client we\u2019ve taken on.',
  },
  {
    slug: 'microsoft',
    client: 'Microsoft (Partners in Learning)',
    industry: 'Technology / Education',
    verticalLabel: 'Tech',
    verticalColor: 'tech',
    services: ['Social media', 'Content strategy'],
    duration: 'Multi-year',
    durationBadge: 'Global Initiative',
    platforms: ['Twitter', 'Facebook'],
    tagline:
      'Community building around Microsoft\u2019s global education initiative \u2014 translating enterprise edtech into content educators actually shared.',
    challenge:
      'Build community around Microsoft\u2019s education initiative. Translate the company\u2019s enterprise-scale education technology into content accessible and engaging for individual classroom educators \u2014 an audience notoriously skeptical of corporate marketing.',
    approach:
      'Translated Microsoft\u2019s education technology offerings into accessible, engaging social content for educators. Showcased real teachers, real classroom stories, and real outcomes \u2014 not product pitches dressed up as inspiration.',
    outcome:
      'Microsoft. The name speaks for itself. A credential that, on its own, ends most "have you worked with enterprise clients?" conversations.',
  },
  {
    slug: 'selectquote-insurance',
    client: 'SelectQuote Insurance',
    industry: 'Financial Services / Insurance',
    verticalLabel: 'Finance',
    verticalColor: 'tech',
    services: ['Social media management'],
    duration: 'Multi-year',
    durationBadge: 'Multi-Year',
    platforms: ['Facebook', 'Twitter', 'LinkedIn'],
    tagline:
      'Humanized an insurance brand in a category notorious for being un-human \u2014 and kept the relationship long enough to prove it wasn\u2019t a fluke.',
    challenge:
      'Humanize an insurance brand on social media \u2014 one of the hardest verticals in the category. Make the content relatable without trivializing the product (which is, ultimately, a financial instrument people actually need).',
    approach:
      'Built a content strategy that made insurance relatable without trivializing the product. Combined educational content, trust-building storytelling, and platform-native formats that earned attention in a feed where most insurance ads get scrolled past.',
    outcome:
      'Multi-year relationship built on consistent performance in one of social media\u2019s most challenging verticals. Proof that the playbook works even where most agencies refuse to pitch.',
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
  restaurant: '#EA580C',
  fitness: '#EC4899',
  tech: '#6366F1',
  retail: '#F59E0B',
  entertainment: '#8B5CF6',
};
