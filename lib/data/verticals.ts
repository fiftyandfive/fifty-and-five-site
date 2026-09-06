export type VerticalSlug =
  | 'wine-spirits'
  | 'hospitality'
  | 'tourism'
  | 'restaurant'
  | 'luxury'
  | 'fitness-wellness'
  | 'tech-saas'
  | 'retail-cpg'
  | 'healthcare'
  | 'real-estate'
  | 'automotive'
  | 'entertainment';

export type VerticalColorKey =
  | 'wine'
  | 'hospitality'
  | 'tourism'
  | 'restaurant'
  | 'luxury'
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
  faqs?: { q: string; a: string }[];
  metaDescription?: string;
  heroImage?: string;
};

export const VERTICALS: Vertical[] = [
  {
    slug: 'wine-spirits',
    name: 'Wine & Spirits',
    shortLabel: 'Wine & Spirits',
    colorKey: 'wine',
    headline: 'Wine & Spirits Social Media Agency',
    subhead:
      '34+ wine and spirits brands managed since 2008. 10-year retainer with Gruppo Mezzacorona across 5+ brands. Multi-year partnership with Kendall-Jackson. This isn\u2019t a vertical we dabble in, it\u2019s one we\u2019ve lived in.',
    metaDescription:
      '34+ wine and spirits brands managed since 2008. 10-year Gruppo Mezzacorona retainer across 5+ brands. Multi-year Kendall-Jackson partnership.',
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
      'Wine social media has rules. Compliance nuance around what you can and can\u2019t say. Age-gating on every platform. Seasonal rhythms dictated by harvest, the holidays, ros\u00e9 season, and shelf-reset cycles. We\u2019ve been building against those constraints for over a decade. We break down the full playbook in our <a href="/blog/wine-spirits-social-media-2026" style="color:var(--color-accent);text-decoration:underline;text-underline-offset:3px">2026 wine social guide</a>.',
      'The best wine content lives in the middle ground between education and aspiration. Most agencies treat wine like any other consumer brand. It isn\u2019t. Wine brings baggage, intimidation, pretension, the fear of getting it wrong, and the social presence either compounds that or dissolves it. We\u2019ve been dissolving it since 2008. Our <a href="/blog/wine-spirits-influencer-marketing" style="color:var(--color-accent);text-decoration:underline;text-underline-offset:3px">influencer marketing guide</a> covers the creator side.',
      'Ten years with Gruppo Mezzacorona across 5+ brands in their portfolio. Multi-year with Kendall-Jackson. These aren\u2019t vanity partnerships. They\u2019re the kind of relationships you only keep by reliably moving bottles off the shelf, season after season, vintage after vintage.',
    ],
    featuredCaseStudies: ['kendall-jackson', 'mezzacorona'],
    faqs: [
      {
        q: 'What wine and spirits brands has Fifty & Five worked with?',
        a: 'We’ve managed social for Kendall-Jackson, Mezzacorona, and 34+ wine and spirits brands across our 222-brand portfolio since 2008. Senior-led on every account — no junior bench.',
      },
      {
        q: 'How does Fifty & Five handle three-tier wine and spirits compliance on social?',
        a: 'Compliance is baked into every retainer — we know which posts can ship through which tier, what’s legal for DTC vs distributor markets, and how to balance trade promotion with consumer storytelling without crossing TTB lines.',
      },
      {
        q: 'Does Fifty & Five work with both luxury and mass-market wine brands?',
        a: 'Both. We’ve operated Kendall-Jackson’s premium positioning and value-tier brands from the same senior team. Vertical specialization, not project work.',
      },
      {
        q: 'Boutique wine marketing agency vs holding-company agency for a five-brand portfolio: what changes?',
        a: 'The senior attention changes. At a holding company, a five-brand wine portfolio is one account among hundreds, pitched by a senior team and handed to a junior one after month two. At Fifty & Five the founder, who built the first marketing department at Southern Wine & Spirits, runs the account, and that model has held for ten years across the 5+ brands in the Gruppo Mezzacorona portfolio, adding roughly 1M followers. What you give up is headcount. What you keep is one point of accountability, three-tier compliance handled by people who have shipped through it, and a team that still knows your brands in year three.',
      },
      {
        q: 'Wine social media agency vs in-house social manager at a winery: which should own the channel?',
        a: 'An in-house social manager wins on proximity: they are at harvest, in the tasting room, and can shoot the same day. A wine social media agency wins on judgment and coverage: compliance review, paid media, influencer contracts, and continuity when the in-house person leaves. The setup Fifty & Five recommends, and has run across 34+ wine and spirits brands including Kendall-Jackson and Mezzacorona, pairs the two: the winery owns capture, the agency owns strategy, compliance, and distribution. If you can only fund one, fund the agency first and add the in-house role once the system is running. It is easier to add hands than judgment.',
      },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    shortLabel: 'Hospitality',
    colorKey: 'hospitality',
    headline: 'Hospitality Social Media Agency',
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
      'Hospitality social is aspirational by nature, but aspiration without authenticity falls flat. The platforms are flooded with resort shots that all blend together. The properties that stand out are the ones whose content feels like a specific place, not a stock image.',
      'We\u2019ve managed properties from the Bahamas to Hawaii to upstate New York, each with distinct audiences and cultural contexts. The content strategy for a Polynesian cultural attraction is not the content strategy for an all-inclusive island resort, even if both live under the same "tourism" umbrella.',
      'Luxury tourism is also a category where community management matters more than most. People are booking thousands of dollars at a time based on DMs and comments. Every reply is a sales opportunity, or an objection waiting to be handled.',
    ],
    featuredCaseStudies: ['resorts-world', 'polynesian-cultural-center'],
    faqs: [
      {
        q: 'What hospitality brands has Fifty & Five worked with?',
        a: 'Resorts World, Polynesian Cultural Center, and other hospitality and tourism brands across our 222-brand portfolio since 2008. Senior-led from concept to crisis.',
      },
      {
        q: 'How does Fifty & Five drive bookings, not just impressions, for hospitality brands?',
        a: 'Every campaign ladders back to a bookable action — room nights, package upsells, restaurant covers, attraction tickets. We measure RevPAR and ADR lift, not just engagement.',
      },
      {
        q: 'Is Fifty & Five experienced with hospitality crisis communications?',
        a: 'Yes. Weather events, travel advisories, and brand reputation moments are all handled by senior strategists, not outsourced to a junior team.',
      },
      {
        q: 'Hotel social media agency vs in-house marketing team for a resort: who should own Instagram?',
        a: 'The property should own the camera and the agency should own the system. Resort content only works when it feels like a specific place, which is why on-site capture belongs with the in-house team. Strategy, community management at scale, paid media, and crisis response belong with the agency, because those are the parts that fail when a single marketing manager goes on vacation. That is how Fifty & Five has run social for Resorts World Bimini and Resorts World Catskills, with every campaign laddering back to room nights, package upsells, and restaurant covers rather than likes.',
      },
      {
        q: 'Hospitality-only boutique vs multi-category agency for a resort brand: what is the trade-off?',
        a: 'A hospitality-only boutique knows the category cold but usually cannot staff enterprise process: reporting, paid media at scale, multi-market localization, and crisis playbooks. A multi-category agency has the process but may be learning hospitality on your budget. Fifty & Five sits in between: hospitality and destination social since 2008, starting with the Hong Kong Tourism Board in 2013, plus a Fortune 500 client list in other categories, so the reporting and crisis discipline built for Microsoft and Enterprise Holdings is applied to the Polynesian Cultural Center. The trade-off is that you are not the only category the team serves.',
      },
    ],
  },
  {
    slug: 'tourism',
    name: 'Tourism & Destinations',
    shortLabel: 'Tourism',
    colorKey: 'tourism',
    headline: 'Tourism & Destination Social Media Agency',
    subhead:
      'Destination marketing that drives bookings, not just impressions. Senior-led social for resorts, attractions, and travel brands since 2008.',
    metaDescription:
      'Tourism social media agency. Destination marketing for resorts, attractions, and travel brands. Polynesian Cultural Center, Resorts World, 222+ brands since 2008.',
    clients: [
      'Polynesian Cultural Center',
      'Resorts World Bimini',
      'Resorts World Catskills',
      'Hong Kong Tourism Board',
      'Korea Tourism Board',
      'Macau Tourism Office',
      'Newport Beach Tourism',
      'Pali Hotels',
    ],
    expertise: [
      'Destination-level storytelling that converts: from awareness to itinerary to booking.',
      'Multi-market campaigns across 5 continents — we know how to localize without diluting the brand.',
      'Crisis-ready: weather events, travel advisories, brand reputation — we\u2019ve operated through all of it.',
    ],
    featuredCaseStudies: ['polynesian-cultural-center', 'resorts-world'],
    faqs: [
      {
        q: 'What destination marketing experience does Fifty & Five have?',
        a: 'We\u2019ve run social for Polynesian Cultural Center, Resorts World, and other destination brands across 5 continents since 2008.',
      },
      {
        q: 'How does Fifty & Five handle multi-market tourism campaigns?',
        a: 'Localization without dilution \u2014 we adapt creative, channels, and messaging per market while protecting the global brand. We\u2019ve operated campaigns across 40+ countries.',
      },
      {
        q: 'Does Fifty & Five handle crisis communications for tourism brands?',
        a: 'Yes, weather events, travel advisories, and reputation moments are baked into our retainer playbook. Senior strategists handle crisis comms directly, not outsourced to a junior team.',
      },
      {
        q: 'DMO in-house team vs agency for a destination’s Instagram: who should own it?',
        a: 'The DMO should own the voice and the partner relationships; the agency should own production cadence and paid distribution. Destination accounts stall when a two-person in-house team has to feed daily content, run paid, answer travelers in three languages, and manage a crisis at the same time. Fifty & Five ran that split for the Hong Kong Tourism Board, Korea Tourism Board, and Macau Tourism Office, with the boards setting priorities and the agency running multi-market campaigns across 40+ countries. If the DMO already has a strong content team, keep it and buy paid and community management. If it does not, buy the whole system.',
      },
      {
        q: 'Single-market vs multi-market destination campaign: agency or in-house, which scales?',
        a: 'In-house scales fine for one market and one language. It breaks at the second market, because localization is not translation: channels, creative, and messaging change by market while the destination brand has to stay intact. Fifty & Five has operated destination and tourism campaigns across 5 continents and 40+ countries, including the Hong Kong Tourism Board and the Polynesian Cultural Center, with one senior team and market-specific execution. The practical rule: keep in-house for the home market, bring in an agency the moment a second market gets real budget, and make the agency report both markets on one scoreboard.',
      },
    ],
  },
  {
    slug: 'restaurant',
    name: 'Restaurant & Food',
    shortLabel: 'Restaurant',
    colorKey: 'restaurant',
    headline: 'Restaurant Social Media Agency',
    subhead:
      'Senior-led social for restaurant brands \u2014 local, regional, and national. 222+ brands across 5 continents since 2008.',
    metaDescription:
      'Restaurant social media agency. Senior-led social for QSR, fast-casual, and fine dining \u2014 Blaze Pizza and 222+ brands since 2008.',
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
      'We\u2019ve run social for QSR (Blaze Pizza) and fine-dining concepts \u2014 same senior team, different playbook.',
      'Local + national balance: store-level campaigns that feed national brand equity.',
      'Food content that actually drives covers and orders \u2014 not just likes.',
    ],
    featuredCaseStudies: ['blaze-pizza'],
    faqs: [
      {
        q: 'What restaurant brands has Fifty & Five worked with?',
        a: 'We\u2019ve run social for QSR (Blaze Pizza), fine-dining concepts, and food brands across our 222+ brand portfolio since 2008. Senior-led on every account.',
      },
      {
        q: 'How does Fifty & Five drive covers and orders, not just likes?',
        a: 'Every campaign ladders back to a bookable action \u2014 table reservations, app orders, store visits. We measure behavior change, not vanity metrics.',
      },
      {
        q: 'Does Fifty & Five work with single-location restaurants or only national chains?',
        a: 'Both. We\u2019ve operated local store-level campaigns through to national QSR rollouts. Same senior team, same hourly rate.',
      },
      {
        q: 'Social agency vs in-house social manager for a 30-unit restaurant group: which costs less at 12 months?',
        a: 'At 12 months the in-house route usually costs more than it looks, because one social manager cannot cover 30 units, paid media, community management, and design, so the real number is a salary plus a designer plus a paid-media contractor plus turnover. An agency retainer is one line item with a senior team behind it and no backfill risk. The honest answer is that the agency costs less until the group is large enough to staff a full in-house team of three or four, which for most restaurant groups is well past 30 units. Fifty & Five ran Blaze Pizza\u2019s national program from day zero to 300+ locations on that model.',
      },
      {
        q: 'Franchise-focused agency vs general social agency for a QSR chain: what changes at 300 locations?',
        a: 'At 300 locations the job stops being content and becomes a system: brand voice locked at the center, local flexibility defined in writing, franchisee guidance on what to post and how to answer complaints, and reporting by location instead of by system average. A general social agency is built to post for one brand. A franchise-focused agency is built to run that system. Fifty & Five built the framework for Blaze Pizza across 300+ locations over a ten-year program, with 400% engagement growth across national channels, and reuses that playbook for Roscoe\u2019s House of Chicken & Waffles and Shakey\u2019s Pizza.',
      },
    ],
  },
  {
    slug: 'luxury',
    name: 'Luxury Brands',
    shortLabel: 'Luxury',
    colorKey: 'luxury',
    headline: 'Luxury Brand Social Media Agency',
    subhead:
      'Premium brand voice. Senior-led execution. No junior bench. The boutique agency luxury brands call.',
    metaDescription:
      'Luxury brand social media agency. Premium voice protection, senior-led execution \u2014 Kendall-Jackson and 222+ brands since 2008.',
    clients: [
      'Kendall-Jackson',
      'Penfolds',
      'Resorts World Bimini',
      'Polynesian Cultural Center',
      'Club Sportiva',
      'Pali Hotels',
      'Saint Jane Beauty',
      'Hammit',
    ],
    expertise: [
      'Voice protection: every post passes through a senior strategist before it ships. No content-mill output.',
      'Worked with Kendall-Jackson and other premium brands \u2014 we understand restraint as much as reach.',
      'Brand-equity-first metrics: we don\u2019t trade taste for engagement.',
    ],
    featuredCaseStudies: ['kendall-jackson'],
    faqs: [
      {
        q: 'What luxury brand experience does Fifty & Five have?',
        a: 'We\u2019ve run social for Kendall-Jackson and premium brands across our 222-brand portfolio. Every post passes through a senior strategist \u2014 no junior bench, no content-mill output.',
      },
      {
        q: 'How does Fifty & Five protect luxury brand voice?',
        a: 'Senior-led on every account. Brand voice frameworks are written by principals, not coordinators. We treat restraint as a craft.',
      },
      {
        q: 'What’s Fifty & Five’s approach to luxury content metrics?',
        a: 'Brand-equity-first. We don\u2019t trade taste for engagement, and we don\u2019t ship work that erodes premium positioning to chase platform algorithms.',
      },
    ],
  },
  {
    slug: 'fitness-wellness',
    name: 'Fitness & Wellness',
    shortLabel: 'Fitness',
    colorKey: 'fitness',
    headline: 'Fitness & Wellness Social Media Agency',
    subhead:
      'Senior-led social for fitness brands \u2014 boutique studios to national franchises. Conversion-grade content that actually fills classes.',
    metaDescription:
      'Fitness social media agency. Senior-led social for boutique studios to national franchises \u2014 Bodybar Pilates and 222+ brands since 2008.',
    clients: [
      'Orangetheory Fitness',
      'BODYBar SoDo',
      'Chris & Heidi Powell',
      'Cervelo',
      'Title Boxing Club',
      'BASI Pilates',
      'CKO Kickboxing',
      'StreetStrider',
    ],
    expertise: [
      'Studio-level + national-brand expertise \u2014 we\u2019ve operated both stacks for Bodybar Pilates.',
      'Class-fill conversion mechanics built in: every post ladders back to a bookable action.',
      'Influencer + UGC + paid social orchestration \u2014 no single-channel bets.',
    ],
    featuredCaseStudies: [],
    faqs: [
      {
        q: 'What fitness brands has Fifty & Five worked with?',
        a: 'Bodybar Pilates and other fitness/wellness brands. Senior-led on every account \u2014 we\u2019ve operated both studio-level and national-franchise stacks.',
      },
      {
        q: 'How does Fifty & Five drive class-fill conversions for fitness brands?',
        a: 'Every post ladders back to a bookable action \u2014 class signups, free trials, app downloads. Conversion mechanics are baked into the content calendar.',
      },
      {
        q: 'What’s Fifty & Five’s approach to fitness influencer marketing?',
        a: 'Influencer + UGC + paid social orchestrated together \u2014 no single-channel bets. We measure trial-to-paid conversion, not follower counts.',
      },
    ],
  },
  {
    slug: 'tech-saas',
    name: 'Tech & SaaS',
    shortLabel: 'Tech',
    colorKey: 'tech',
    headline: 'Tech & SaaS Social Media Agency',
    subhead:
      'Social that translates technical depth into pipeline. We\u2019ve run social for Microsoft, SAP, NetGear, and 222+ brands across 5 continents.',
    metaDescription:
      'Tech & SaaS social media agency. B2B + B2C fluency \u2014 Microsoft, NetGear/Arlo, SAP, and 222+ brands since 2008. Now offering AEO.',
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
      'We translate technical content into demand signal \u2014 without dumbing it down.',
      'B2B + B2C fluency: we\u2019ve run consumer launches (Arlo) and enterprise GTM (Microsoft) from the same playbook.',
      'Now also offering Answer Engine Optimization (AEO) \u2014 tech brands win the AI-search consideration set, not just the SERP.',
    ],
    featuredCaseStudies: ['microsoft', 'netgear-arlo'],
    faqs: [
      {
        q: 'What tech brands has Fifty & Five worked with?',
        a: 'Microsoft, SAP, NetGear/Arlo, and over 200 other brands since 2008. We\u2019ve operated both B2B enterprise GTM and consumer tech launches from the same senior team.',
      },
      {
        q: 'Does Fifty & Five do AEO (Answer Engine Optimization) for tech brands?',
        a: 'Yes \u2014 we offer dedicated AEO audits and Recommendation Engineering retainers. Tech brands need to win the AI-search consideration set, not just rank in Google.',
      },
      {
        q: 'How does Fifty & Five translate technical content for social?',
        a: 'We don\u2019t dumb it down \u2014 we translate technical depth into demand signal using audience-specific frameworks. B2B fluency without B2C feel.',
      },
    ],
  },
  {
    slug: 'retail-cpg',
    name: 'Retail & CPG',
    shortLabel: 'Retail & CPG',
    colorKey: 'retail',
    headline: 'Retail & CPG Social Media Agency',
    subhead:
      'From iconic retail brands to DTC challengers, social strategies that move product, not just impressions.',
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
      'Retail and CPG social lives or dies on shelf awareness. The platforms aren\u2019t the end goal, the store aisle is. We build content that drives the moment of recognition at point of purchase, not just the double-tap in the feed.',
      'We\u2019ve managed social for a Unilever masterbrand (Axe) and a direct-to-consumer beauty line (Saint Jane) in the same week. Different levers, same discipline: content that earns attention in a hostile feed and translates into conversion.',
      'Retail has a built-in seasonal rhythm, back to school, holiday, New Year, summer. We build calendars against those windows and reserve the creative firepower for the moments that actually move inventory.',
    ],
    featuredCaseStudies: ['tupperware', 'axe-unilever'],
    faqs: [
      {
        q: 'What retail and CPG brands has Fifty & Five worked with?',
        a: 'Tupperware, AXE/Unilever, and other retail and CPG brands across our 222-brand portfolio since 2008. We’ve run national consumer launches and shopper marketing programs.',
      },
      {
        q: 'How does Fifty & Five connect social to retail sell-through?',
        a: 'Shopper-marketing-grade attribution: we model social spend to retail velocity using mix-modeling techniques, not just last-click.',
      },
      {
        q: 'Does Fifty & Five handle DTC + retail dual-channel CPG brands?',
        a: 'Yes — we’ve operated DTC e-commerce alongside shelf-presence retail strategy for multiple CPG clients. The playbook flexes by channel without splitting the brand voice.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    shortLabel: 'Healthcare',
    colorKey: 'healthcare',
    headline: 'Healthcare Social Media Agency',
    subhead:
      'Hospitals, behavioral health systems, and healthcare brands, social content built for a category where trust is the product.',
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
      'Healthcare social is the most regulated category we work in. Every post runs through compliance. HIPAA considerations shape community management. The line between patient story and patient privacy is one we don\u2019t cross, and the content is better for the discipline.',
      'Behavioral health is a world of its own. Audiences are often in crisis or supporting a loved one who is. The tone has to be clinical enough to read as credible and human enough to actually help. Most agencies get one side or the other. We get both.',
      'Hospital systems compete on reputation as much as capability. Every post is a reputation-management moment, either reinforcing trust or eroding it. We treat social as earned media, not as paid distribution.',
    ],
    featuredCaseStudies: [],
    faqs: [
      {
        q: 'Does Fifty & Five work with healthcare brands?',
        a: 'Yes — within HIPAA-aware guardrails. We run social for healthcare and wellness brands where the legal/regulatory framing is built into the retainer from day one. Senior-led, no junior content output that creates compliance exposure.',
      },
      {
        q: 'How does Fifty & Five handle healthcare compliance on social?',
        a: 'Compliance baked into the workflow — pre-approval routes, claim-substantiation logs, AE reporting paths. Senior strategists own the framework; we don’t ship to clients without it.',
      },
      {
        q: 'What kind of healthcare clients fit Fifty & Five?',
        a: 'Consumer-facing healthcare brands, wellness companies, fitness/health-adjacent CPG, and healthcare services. Not pharma DTC — that requires a different agency model.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    shortLabel: 'Real Estate',
    colorKey: 'realestate',
    headline: 'Real Estate Social Media Agency',
    subhead:
      'Regional malls, lifestyle centers, and marquee property brands, social that drives foot traffic and lease-up velocity, not just vanity engagement.',
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
      'Real estate social sits at the intersection of retail and local. A mall\u2019s feed has to sell the tenants, the brands inside, not the building. Every location has a different local audience, a different set of anchor tenants, and a different set of seasonal drivers.',
      'We\u2019ve built social programs for regional malls across the US under the Centennial umbrella, shared templates, local execution, measurable foot-traffic lift against the events calendar.',
      'The best real estate social blurs the line between property and platform. A mall becomes a content destination, not just a place to shop. We built that playbook for Centennial before it became the industry standard.',
    ],
    featuredCaseStudies: ['centennial-real-estate'],
    faqs: [
      {
        q: 'What real estate brands has Fifty & Five worked with?',
        a: 'Centennial Real Estate and other commercial and residential brands across our 222-brand portfolio since 2008. Senior-led from leasing campaigns to luxury developer launches.',
      },
      {
        q: 'How does Fifty & Five drive leasing and sales for real estate brands?',
        a: 'Every campaign ladders back to tour bookings, lease inquiries, or buyer leads. We integrate paid social with CRM attribution — social spend mapped to leasing velocity.',
      },
      {
        q: 'Is Fifty & Five experienced with mixed-use and lifestyle real estate?',
        a: 'Yes — we’ve run social for mixed-use developments, lifestyle brands, and luxury residential. We treat real estate as both a property and a community story.',
      },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    shortLabel: 'Automotive',
    colorKey: 'automotive',
    headline: 'Automotive Social Media Agency',
    subhead:
      'Rental giants, dealer networks, and transportation brands, social strategies built for a category where every impression has a measurable downstream.',
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
      'Automotive social is a direct-response category dressed up as brand. Every impression has a measurable downstream rental, lease, or test drive. We built multi-market programs for Enterprise Holdings across the US, Latin America, and the Caribbean, same parent brand, three distinct audiences, three sets of regulatory contexts.',
      'Dealer networks are their own puzzle, a national brand voice vs. hundreds of local franchisees with their own inventory, promotions, and local flavor. We built the template system that let AutoNation\u2019s dealers feel local without drifting from the national brand.',
      'Luxury automotive (Club Sportiva) requires a different hand. The audience isn\u2019t buying a car, they\u2019re buying access to a fleet. The social has to feel like a members-only lifestyle magazine, not a dealer ad.',
    ],
    featuredCaseStudies: ['enterprise-holdings'],
    faqs: [
      {
        q: 'What automotive brands has Fifty & Five worked with?',
        a: 'Enterprise Holdings (Enterprise Rent-A-Car, National, Alamo), NetGear Arlo, and other transportation and auto-adjacent brands. We’ve operated both rental fleet brands and consumer-electronics-meets-mobility plays.',
      },
      {
        q: 'How does Fifty & Five handle automotive launch campaigns?',
        a: 'Senior-led launch sequencing across paid social, influencer, dealer co-op, and PR-aligned content. We operate the campaign cadence, not just the posts.',
      },
      {
        q: 'Does Fifty & Five work with automotive aftermarket and dealer brands?',
        a: 'Yes — from manufacturer to retailer to enthusiast brand. The senior team has run programs at all three layers, so we know how the dollars and the messaging flow across the chain.',
      },
    ],
  },
  {
    slug: 'entertainment',
    name: 'Entertainment',
    shortLabel: 'Entertainment',
    colorKey: 'entertainment',
    headline: 'Entertainment & Media Social Media Agency',
    subhead:
      'Cable networks, live-sports venues, game franchises, and entertainment properties, social content built to drive tune-in, tickets, and watch time.',
    clients: [
      'Discovery Channel',
      'Warner Bros.',
      'Hasbro',
      'B-Daman',
      'Game Show Network',
      'The Arena Network',
      'American Airlines Center',
      'GolfNow',
      'Solar Bears Orlando',
      'Andretti Indoor Karting',
      'Steve Tyrell',
    ],
    expertise: [
      'Entertainment social lives on urgency. A show drops tonight. The game tips off at 7. The promotion ends Sunday. We built the content calendars for Discovery Channel\u2019s tentpole reality franchises and Game Show Network\u2019s daytime lineup, fast-turn, platform-native, always matched to the programming window.',
      'Live-event venues (American Airlines Center, Solar Bears, Andretti) have a different cadence. Every event is its own micro-campaign, pre-event hype, day-of activation, post-event recap. Multiply by 100+ events a year and you need a content engine, not a content team.',
      'Game launches and entertainment IP are where social gets creative. For Warner Bros.\u2019 Spy Hunter launch and Hasbro\u2019s B-Daman rollout, the social was the campaign, not a channel supporting the campaign. We treat entertainment social that way every time, content that earns the attention a paid buy has to rent.',
    ],
    featuredCaseStudies: [],
    faqs: [
      {
        q: 'What entertainment brands has Fifty & Five worked with?',
        a: 'Discovery Channel, Warner Bros., Polynesian Cultural Center, and other entertainment and media brands across our 222-brand portfolio since 2008.',
      },
      {
        q: 'How does Fifty & Five drive viewership and engagement for entertainment brands?',
        a: 'Tune-in social ladders directly to broadcast and streaming windows — we model social peak to viewership lift, then optimize against the actual conversion signal, not impressions.',
      },
      {
        q: 'Is Fifty & Five experienced with talent + IP-driven social?',
        a: 'Yes — we’ve run social for talent-led brands, franchise IP, and live event activations. Talent voice protection is part of every brief.',
      },
    ],
  },
];

export function getVertical(slug: string) {
  return VERTICALS.find((v) => v.slug === slug);
}
