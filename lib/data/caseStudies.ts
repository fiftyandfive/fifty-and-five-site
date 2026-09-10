import type { ProseBlock } from '@/components/ui/ProseSection';
import type { VerticalColorKey } from './verticals';

export type CaseStudy = {
  slug: string;
  client: string;
  /** Short <title> override, kept under 60 characters. */
  seoTitle?: string;
  /** Meta description override when the tagline is shorter than 120 characters. */
  metaDescription?: string;
  /** Long-form sections rendered under the case study body. */
  deepDive?: { h2: string; blocks: ProseBlock[] }[];
  /** Case-study-specific FAQs, rendered visibly and as FAQPage schema. */
  faqs?: { q: string; a: string }[];
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
    deepDive: [
      {
        "h2": "A heritage wine brand on platforms that kept moving",
        "blocks": [
          {
            "type": "p",
            "text": "Heritage is an asset and a liability on social at the same time. A wine brand with decades of shelf presence arrives with an audience that already exists and already has expectations, and that audience notices immediately when the tone drifts. The work started in 2020 and has run continuously since, a window in which the mechanics of wine content changed more than once."
          },
          {
            "type": "p",
            "text": "The first constraint was register. Wine is a category where most brand accounts fall into one of two failure modes. They either write for sommeliers, which loses everyone who buys a bottle on the way to dinner, or they strip the wine out entirely and post generic lifestyle images that could belong to any consumer brand. Four platforms made that harder, because Instagram, Facebook, TikTok and Pinterest each reward a different level of explanation and a different pace."
          },
          {
            "type": "p",
            "text": "The second constraint was the calendar. Wine has real seasons and the audience knows them. Harvest, holiday and the rose season window are not invented content pegs, they are moments when interest genuinely rises and when every competitor is also posting. Planning against those windows meant deciding months ahead what each one would carry, then protecting open room in the calendar for whatever the platforms did in the meantime."
          }
        ]
      },
      {
        "h2": "How the account was run week to week",
        "blocks": [
          {
            "type": "p",
            "text": "This account ran on a weekly rhythm, not a campaign cycle. Wine buying is continuous, so the feed had to be useful in an ordinary week and not only during a launch. Each week carried a mix of education, food pairing, vineyard storytelling and community replies, with the seasonal tentpoles layered on top of that base rather than replacing it."
          },
          {
            "type": "ul",
            "items": [
              "Planning: a rolling calendar set months ahead for seasonal moments, with slots deliberately held open for platform shifts and reactive posts.",
              "Production: content cut for the platform it was going to, since a vineyard clip that works on TikTok is not the same edit that works on Pinterest.",
              "Community: replies written with authority and without condescension, because a question about a varietal is usually a purchase question in disguise.",
              "Review: a standing read on what the platforms were actually rewarding, so the strategy moved when Reels or Pinterest moved."
            ]
          },
          {
            "type": "p",
            "text": "The judgment call worth naming is what did not get chased. Trends arrive weekly and most of them are wrong for a brand with real equity to protect. Declining them is only defensible when the base program is strong enough to carry the account without them, which is why the weekly rhythm mattered more than any single post. That discipline, seasonal planning plus a reliable base cadence plus selective trend participation, now sets the default shape of every wine and spirits engagement we take."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Kendall-Jackson?",
        "a": "Fifty & Five runs the social program: content strategy, day to day social media management, and community management across Instagram, Facebook, TikTok and Pinterest. The content mix balances lifestyle with wine education, covering food pairings, vineyard storytelling and varietal explanation, plus the seasonal moments the category runs on. Community replies are handled in the same voice as the posts, with authority and without talking down to anyone asking a basic question about a bottle."
      },
      {
        "q": "How long has the Kendall-Jackson engagement run?",
        "a": "It has run since 2020 and is ongoing, a multi-year partnership rather than a project. That length is normal for this agency, where the average client retainer runs past three years, but it is unusual in wine social at the boutique level. The practical benefit is that strategy compounds. Nobody spends the first quarter of each year relearning the brand, so planning time goes into the next season instead of into onboarding."
      }
    ],
    metaDescription: "Kendall-Jackson case study. A multi-year social partnership across the portfolio, balancing lifestyle aspiration with wine education.",
    seoTitle: "Kendall-Jackson Case Study: Wine Social Media",
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
    deepDive: [
      {
        "h2": "Importing a regional Italian story into a crowded U.S. market",
        "blocks": [
          {
            "type": "p",
            "text": "An imported wine portfolio starts from zero recognition in the United States, and the story that sells it at home does not travel on its own. Trentino-Alto Adige means something specific to an Italian drinker and close to nothing to an American shopper standing in front of forty bottles. There was no existing English-language social presence to improve here. It had to be built from nothing."
          },
          {
            "type": "p",
            "text": "The constraint was register. Region of origin is the whole argument for an imported portfolio, so the content could not skip it, but leading with appellation rules and geography turns a feed into homework. The audience being built was not a wine school audience. It was people who buy Italian wine for a Tuesday dinner and would buy more of it if they understood what made it different."
          },
          {
            "type": "p",
            "text": "The second constraint was the length of the run. A decade is long enough that the platforms themselves became the moving target. Organic reach collapsed and paid distribution became mandatory. Video moved from optional to primary. Reels arrived, TikTok arrived, shoppable formats arrived. Any strategy written to a single platform behavior would have expired several times over, so the work had to rest on something more durable than format."
          }
        ]
      },
      {
        "h2": "How ten years on one account stays worth doing",
        "blocks": [
          {
            "type": "p",
            "text": "Consistency here is a discipline, not a default. The account was never rebuilt from scratch, which is the more common pattern when a brand changes agencies or marketing leads every couple of years. Instead the same core story got re-cut for each new format as it arrived."
          },
          {
            "type": "ul",
            "items": [
              "The story stayed fixed: the region, the growers, and the food the wine belongs next to.",
              "The format changed every time the platforms changed, from static images to video to short vertical video to shoppable placements.",
              "Distribution changed when organic reach stopped delivering, and paid support was folded into the plan rather than bolted onto it.",
              "Community management ran continuously, because a following built over years is only worth what the replies do with it."
            ]
          },
          {
            "type": "p",
            "text": "The reason this was the right call is compounding. Ten years of one story told well is worth more than ten years of restarts, because the audience learns the brand instead of relearning it. That is the same argument this agency makes to every long horizon client, and this portfolio is the evidence: a decade long retainer, one of the longest continuous engagements in the wine category, on a presence that did not exist before the work started."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Mezzacorona?",
        "a": "Fifty & Five built and ran the entire English-language social presence for the Mezzacorona portfolio in the United States, starting from nothing. The work covers social media management, content creation and community growth on Instagram and Facebook, with brand storytelling built around the Trentino-Alto Adige region rather than generic wine content. Across the engagement the program was adapted through every major platform change, including the shift from organic reach to paid, the rise of video, Reels, TikTok and shoppable content."
      },
      {
        "q": "How long has the Mezzacorona engagement run?",
        "a": "It is a decade long retainer, one of the longest continuous engagements in the agency's history and in the wine category generally. Length is the point rather than a footnote. A wine brand does not keep the same social partner for close to ten years unless the presence is doing real commercial work, and the run allowed one story to be told consistently while the platforms underneath it changed several times over."
      }
    ],
    seoTitle: "Mezzacorona Case Study: A Decade-Long Retainer",
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
    deepDive: [
      {
        "h2": "Starting four months before the first restaurant opened",
        "blocks": [
          {
            "type": "p",
            "text": "The program began before there was a restaurant to post about. Work started four months ahead of the first opening, which is a rare and useful position: no legacy audience, no accumulated bad habits, no established voice to argue with. It also meant building an audience for a product nobody had eaten yet."
          },
          {
            "type": "p",
            "text": "The hard constraint arrived with growth. Fast casual expansion across hundreds of locations creates a structural tension on social. Corporate wants one voice so the brand reads the same in every market. Individual locations want to sound like the neighborhood they sit in, because that is what makes a restaurant feel local rather than franchised. Resolve that badly in either direction and you get a feed that sounds like a press release, or hundreds of accounts drifting into their own tone."
          },
          {
            "type": "p",
            "text": "Pace was the third constraint. A chain scaling that fast produces national campaign beats, limited time offers, celebrity partnerships and cultural moments, all landing on top of whatever is happening at store level on any given day. Some of those days involve a viral moment. Some involve an operational problem that becomes a social problem inside an hour, and both need the same steady hand."
          }
        ]
      },
      {
        "h2": "The system that made hundreds of locations manageable",
        "blocks": [
          {
            "type": "p",
            "text": "Scale on social is a systems problem before it is a creative problem. The answer was content frameworks rather than one off posts: repeatable formats produced centrally that local markets could fill with their own specifics without inventing a new voice every time."
          },
          {
            "type": "table",
            "headers": [
              "Layer",
              "What it carried"
            ],
            "rows": [
              [
                "National",
                "Limited time offers, celebrity partnerships and cultural moments, planned ahead and released on a set beat."
              ],
              [
                "Local",
                "Market level responsiveness and community detail, produced inside a fixed format so the voice held."
              ],
              [
                "Community",
                "Daily reply management across Instagram, Facebook and Twitter, including viral moments and the occasional operational crisis."
              ]
            ]
          },
          {
            "type": "p",
            "text": "The number the client points to is 400 percent engagement growth across national social channels over a ten year retainer. What transferred is the system itself. Scalable content frameworks for multi-location brands now shape every quick service and franchise engagement the agency takes, and the same layered structure was later applied to multi-property and multi-brand clients, where the problem is identical in shape: one owner, many locations, and no appetite for a generic voice."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Blaze Pizza?",
        "a": "Fifty & Five built and ran the national social media program for Blaze Pizza, starting four months before the first restaurant opened. That covered content strategy, day to day management and community management across Instagram, Facebook and Twitter. The team created content frameworks that scaled across hundreds of franchise locations while keeping the brand voice intact, and balanced national beats such as limited time offers and celebrity partnerships against local market responsiveness. Engagement across national channels grew 400 percent."
      },
      {
        "q": "How long did the Blaze Pizza engagement run?",
        "a": "Ten years, from 2012 to 2022. The program started four months before the first restaurant opened and ran through the brand's rise to one of the fastest growing restaurant chains in United States history. A retainer of that length sits well above the agency average, which is already past three years, and it meant the same senior team handled the emerging concept phase, the hyper growth phase and the household name phase with no handoff in between."
      }
    ],
    seoTitle: "Blaze Pizza Case Study: Day Zero to 300+ Stores",
    client: 'Blaze Pizza',
    industry: 'Restaurant / QSR',
    verticalLabel: 'Restaurant',
    verticalColor: 'restaurant',
    services: ['National social media program', 'Content strategy', 'Community management'],
    duration: '2012\u20132022',
    durationBadge: '10-Year Program',
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
      '10-year retainer, from four months before the first restaurant opened through hyper-growth to household name',
      'Scalable content system across hundreds of franchise locations',
    ],
  },
  {
    slug: 'enterprise-holdings',
    deepDive: [
      {
        "h2": "Six brands, two markets, one corporate standard",
        "blocks": [
          {
            "type": "p",
            "text": "Six brands under one corporate owner is harder than six unrelated clients. Enterprise, National, Alamo and the related entities share a parent, a compliance standard and in many cases a customer, but they compete for different people and cannot sound alike. The audiences overlap enough that a lazy voice on one account quietly undercuts the others."
          },
          {
            "type": "p",
            "text": "The constraint was differentiation under shared governance. Each brand needed its own tone and its own competitive frame while every post still had to clear the same corporate standards. There is no version of this work where you write once and publish six times. There is also no version where six teams go their own way, because the parent has legitimate reasons to hold the line on compliance and campaign alignment."
          },
          {
            "type": "p",
            "text": "Geography added the second layer. Running the U.S. and LATAM at once is not translation work. Demand patterns, seasonality, platform preference and the tone that reads as friendly rather than stiff all differ by market, so localization had to happen at the content level and not at the caption level. Four platforms sat on top of that, Instagram, Facebook, Twitter and LinkedIn, each reaching a different slice of the audience for brands whose competitive sets do not overlap."
          }
        ]
      },
      {
        "h2": "Running corporate complexity without a twenty person pod",
        "blocks": [
          {
            "type": "p",
            "text": "A program this size normally gets staffed with a twenty person agency pod, and it did not need one. The work was structured so that everything shared sat in one place and everything brand specific stayed separate, which is what keeps headcount down without flattening the brands into each other."
          },
          {
            "type": "ul",
            "items": [
              "Shared layer: compliance standards, approval paths, campaign alignment with the parent, and a single reporting format so performance was comparable across all six.",
              "Brand layer: a separate content strategy, tone and competitive frame for each brand, written once and maintained rather than reinvented per campaign.",
              "Market layer: localization and community management handled inside each market, so replies read as native rather than translated."
            ]
          },
          {
            "type": "p",
            "text": "A small senior team beat a large one here because the hard part was judgment, not volume. Deciding which idea belongs to which brand, when a corporate standard genuinely applies and when a market needs to deviate is work that gets slower and worse when it passes through junior hands. The founder sits on every account for exactly this reason. This engagement is the strongest evidence the agency has that a senior led model holds at corporate scale, and the shared layer and brand layer split now structures every multi-brand client we take."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Enterprise Holdings?",
        "a": "Fifty & Five managed social media for six distinct brands under the Enterprise Holdings umbrella, including Enterprise, National and Alamo, across United States and LATAM markets. Each brand received its own content strategy, tone and competitive positioning while staying aligned with corporate standards, compliance and campaign timing. The work also covered cross market coordination, localization and community management on Instagram, Facebook, Twitter and LinkedIn, all delivered by a small senior team rather than a large agency pod."
      },
      {
        "q": "How did Fifty & Five run six brands across two markets with a small team?",
        "a": "By separating what is shared from what is not. Corporate standards, compliance, approval paths and reporting sit in one common layer, built once and then maintained. Strategy, tone and competitive positioning stay separate for each brand, and localization and community management sit inside each market. The judgment calls run through senior people instead of being routed to junior staff, which is what keeps a program of this size moving without the overhead of a twenty person pod."
      }
    ],
    seoTitle: "Enterprise Holdings Case Study: 6 Brands, 2 Markets",
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
    deepDive: [
      {
        "h2": "Nine shopping centers that share an owner and little else",
        "blocks": [
          {
            "type": "p",
            "text": "A shopping center is a local business that happens to be owned by a national company. Nine of them under one owner means nine tenant mixes, nine demographics and nine local calendars, and the only thing they genuinely share is a reporting line. A center in Texas does not talk like a center in Southern California, and pretending otherwise costs foot traffic."
          },
          {
            "type": "p",
            "text": "The constraint was that the standard playbook does not work. Generic mall marketing produces a feed of sale announcements and stock imagery that could belong to any property in the country, which gives a shopper no reason to follow and no reason to drive over. What actually produces a visit is specific: the store that just opened, the event this weekend, the restaurant people in that suburb already like."
          },
          {
            "type": "p",
            "text": "The second constraint was arithmetic. Nine accounts with genuinely local content is nine times the input if each one is handled as a separate client, and no boutique team survives that for long. The work had to be individual at the output and shared at the process, or it collapses into one of two bad outcomes: generic content, or a workload nobody can hold."
          }
        ]
      },
      {
        "h2": "Local content, centralized process",
        "blocks": [
          {
            "type": "p",
            "text": "The system is what made nine accounts feasible. Each property got its own content strategy tied to its actual tenants, events and community, while planning, production standards, approvals and reporting all ran through one shared workflow."
          },
          {
            "type": "table",
            "headers": [
              "Handled per property",
              "Handled once for all nine"
            ],
            "rows": [
              [
                "Tenant and event content, local voice, community replies",
                "Calendar structure and production cadence"
              ],
              [
                "Demographic and market specific creative choices",
                "Brand standards, approval flow and reporting format"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Week to week the rhythm was the same at every property and the content never was. Tenant openings, seasonal events, food and shopping content built around what is actually in that center, plus reply management for people asking about hours, parking and stores while they decide whether to make the trip."
          },
          {
            "type": "p",
            "text": "The judgment call was where to draw that line. Push too much to the center and every property sounds the same, which is the exact failure the client hired against. Push too much to the properties and the program becomes nine unmanaged accounts with no comparable reporting. Keeping voice and content local while standardizing everything upstream of the post is what let a small team run all nine well, and that split became the template for every multi-property engagement since."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Centennial Real Estate?",
        "a": "Fifty & Five ran social media management for nine Centennial Real Estate shopping centers at the same time, on Instagram and Facebook. Each property was given its own content strategy reflecting its specific tenants, events, demographics and local personality rather than a shared mall marketing template. Underneath that, the agency built local content systems and one shared workflow covering planning, standards and reporting, which is what made running nine distinct accounts feasible with a small senior team."
      },
      {
        "q": "How do you run nine shopping center accounts without them all sounding the same?",
        "a": "You keep the content local and the process central. Every property has its own voice, tenant mix, event calendar and community replies, so the feed reflects what is actually in that center and what is happening there this week. Everything upstream of the post is shared: calendar structure, production standards, approvals and a single reporting format across all nine. That split is what allows individual local identities without nine times the workload."
      }
    ],
    seoTitle: "Centennial Case Study: 9 Properties, 9 Local Voices",
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
    deepDive: [
      {
        "h2": "Two properties with nothing in common but an owner",
        "blocks": [
          {
            "type": "p",
            "text": "A tropical island resort and a mountain retreat cannot share a content strategy. One property sits in Bimini in the Bahamas with turquoise water and over water villas. The other is in the Catskills in upstate New York with fireplaces and foliage. Both carry the same parent brand, and both need a guest to decide that this specific place is worth booking a trip for."
          },
          {
            "type": "p",
            "text": "The constraint is that resort social sells a decision, not a product. Nobody buys a stay on impulse from a feed. They see a place, they picture themselves in it, and then they ask a question. That means the content has to be specific enough to be believable and the inbox has to be treated as a sales channel, because a resort direct message is often a conversation worth thousands of dollars."
          },
          {
            "type": "p",
            "text": "Seasonality was the second constraint, and it ran in opposite directions. A beach property and a mountain property peak at different times and sell different feelings, so one calendar with one set of creative would have left a property flat for half the year. Managing both under a single umbrella meant running two separate rhythms without the brand reading as two unrelated companies."
          }
        ]
      },
      {
        "h2": "How the work ran across both properties",
        "blocks": [
          {
            "type": "p",
            "text": "Each property was treated as its own account against a shared standard. Creative direction came from the place itself rather than from a hospitality template, which is the only way aspirational content stays believable to someone about to spend real money."
          },
          {
            "type": "ul",
            "items": [
              "Bimini: water, villas and the pace of an island stay, shot and cut to make the trip feel plausible rather than staged.",
              "The Catskills: fireplaces, foliage and the seasonal shift, built around the reasons people leave a city for a weekend.",
              "Community: direct messages handled as sales conversations, with reply quality treated as a revenue input rather than a service metric.",
              "Standards: one brand level bar for voice and production quality across both, so the umbrella still reads as a single company."
            ]
          },
          {
            "type": "p",
            "text": "The right call here was refusing to average the two properties together. A shared luxury look would have been cheaper to produce and would have sold neither place, because what makes someone book is the specificity of the destination and not the category it belongs to. Hospitality rewards that discipline more than most verticals, and the two rhythm structure built here now carries directly into any client with several properties that differ in character."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Resorts World?",
        "a": "Fifty & Five handled social media management, content creation and community management for two Resorts World properties, one in Bimini in the Bahamas and one in the Catskills in upstate New York. Each property got its own aspirational content approach built around what actually distinguishes it, turquoise water and over water villas in one case, fireplaces and foliage in the other. Community management treated direct messages as sales conversations, because resort inquiries often represent bookings worth thousands of dollars."
      },
      {
        "q": "How do you market two resorts that are completely different from each other?",
        "a": "You give each one its own content strategy and hold both to a shared brand standard. A beach property and a mountain property attract guests for different reasons and peak in different seasons, so they need separate creative direction and separate calendars. What stays common is voice, production quality and how the inbox gets handled. Averaging the two into one generic luxury look is cheaper to produce and ends up selling neither destination."
      }
    ],
    metaDescription: "Resorts World case study. Luxury resort social for two very different properties, Bimini in the Bahamas and the Catskills in New York.",
    seoTitle: "Resorts World Case Study: Boutique to Mega-Resort",
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
    deepDive: [
      {
        "h2": "A product line becoming a company",
        "blocks": [
          {
            "type": "p",
            "text": "A sub brand separating from its parent has to build recognition before it has independence. The camera line started inside NETGEAR and ended as a standalone smart home company listed on the NYSE, and the social work sat in the window between those two states. During that window the brand had to become recognizable on its own without discarding the credibility that came from the parent."
          },
          {
            "type": "p",
            "text": "The constraint was category, not brand. Connected home cameras were still an emerging category, which means a meaningful share of the audience was not choosing between competitors. They were deciding whether they wanted this kind of product at all. Content had to do two jobs at once: explain why the category is worth having, and explain why this brand is the right one inside it."
          },
          {
            "type": "p",
            "text": "Launch timing added the pressure. Consumer hardware releases are fixed dates with a short window in which attention is available, and social either has an audience in place beforehand or it does not. Four platforms with different jobs made that harder, since Instagram, Facebook, Twitter and YouTube each carry a different part of a hardware launch, from demonstration through to support questions."
          }
        ]
      },
      {
        "h2": "Building the audience ahead of the launches",
        "blocks": [
          {
            "type": "p",
            "text": "The work was front loaded on purpose. Audience gets built before a launch date or the launch has nowhere to land, so the ongoing program existed largely to make the release moments work when they came."
          },
          {
            "type": "ul",
            "items": [
              "Category education: content that explained what a connected camera actually does in a household, aimed at people not yet sold on the product type.",
              "Positioning: consistent differentiation against a competitive field that was filling up quickly.",
              "Launch support: coordinated activity across all four platforms around release dates, with demonstration content doing the heavy lifting.",
              "Community: question handling, which in consumer hardware is half pre purchase research and half support."
            ]
          },
          {
            "type": "p",
            "text": "What transferred is the sequencing. Product launch work in consumer technology is won in the months before the date rather than in the week of it, and that still sets how the agency structures launch engagements. The second thing carried forward is treating an emerging category as its own marketing problem. When buyers are still deciding whether a product type belongs in their home, brand comparison content is premature and category content is what moves them."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for NETGEAR and Arlo?",
        "a": "Fifty & Five handled social media and product launch support for Arlo during its transition from a NETGEAR product line to a standalone smart home brand. The work covered Instagram, Facebook, Twitter and YouTube, and included building audience ahead of hardware releases, education for a smart home category that was still emerging, and positioning that separated the brand in a field filling with competitors. Arlo later launched as an independent company listed on the NYSE."
      },
      {
        "q": "How long did the Arlo engagement run?",
        "a": "It was a multi-year engagement covering the brand's most critical growth window, the stretch in which it moved from a product line inside a larger hardware company to an independent business trading on the NYSE. The agency was part of the team that built the early social presence during that period. The experience still informs how consumer technology launches are structured here, with audience building starting well before any release date."
      }
    ],
    metaDescription: "NETGEAR Arlo case study. Social support through the evolution from a NETGEAR product line to an NYSE-listed standalone camera brand.",
    seoTitle: "NETGEAR Arlo Case Study: Sub-Brand to Standalone",
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
    deepDive: [
      {
        "h2": "Seventy five years of equity meeting an audience that never went to a party",
        "blocks": [
          {
            "type": "p",
            "text": "Legacy is the asset and the obstacle in the same account. Seventy five years of brand equity means near universal recognition and a community genuinely attached to the product, and it also means a set of associations formed decades before Instagram existed. The audience being recruited grew up on social feeds, not on home parties."
          },
          {
            "type": "p",
            "text": "The constraint was that both audiences had to be served in one feed. The existing community is loyal, vocal and quick to notice when a brand it loves starts talking as though it is embarrassed by its own history. A newer audience needs a reason to follow that has nothing to do with nostalgia. Content that leans entirely one way loses the other, and there is no second feed to hide the difference in."
          },
          {
            "type": "p",
            "text": "The third factor is that nothing was actually broken. This was not a turnaround. The brand had equity, a product people use daily and a community already talking about it, so the real risk in the work was never failing to grow. It was growing by breaking something that took decades to build."
          }
        ]
      },
      {
        "h2": "Reframing rather than rebuilding",
        "blocks": [
          {
            "type": "p",
            "text": "The decision was to reframe the brand on social, not replace it. A rebuild would have been faster to pitch and would have thrown away the exact thing that makes an account like this valuable, which is that people already have a relationship with the product."
          },
          {
            "type": "ul",
            "items": [
              "Heritage stayed in place, but as a reason to trust the product rather than as the subject of every post.",
              "Modern formats carried the message, so social first storytelling reached people who were never going to respond to legacy cues.",
              "Nostalgia was used deliberately and sparingly, aimed at the community that owns those memories.",
              "Community growth was treated as a trust exercise, because a legacy audience that feels dismissed leaves loudly."
            ]
          },
          {
            "type": "p",
            "text": "The outcome was a significantly larger Instagram following with the established identity and community trust intact. That combination is the harder version of the job. Growth on its own is easy to buy and easy to fake, and growth that alienates the existing community is a net loss for a brand whose equity is the reason anyone shows up at all. The approach now shapes how the agency handles any brand with decades of history, where the instinct to modernize has to be weighed against what modernizing would cost."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Tupperware?",
        "a": "Fifty & Five modernized the social presence of Tupperware for contemporary audiences, handling social media management and community growth on Instagram and Facebook. The approach reframed the brand rather than rebuilding it, bridging seventy five years of heritage with social first storytelling that gives newer audiences a reason to follow. Nostalgia was used deliberately rather than constantly, so the established community stayed intact. The Instagram following grew significantly while brand identity and community trust were preserved."
      },
      {
        "q": "How do you modernize a legacy brand without losing its existing community?",
        "a": "You reframe it instead of rebuilding it. The heritage stays in place as the reason to trust the product, while the formats and the storytelling move to what current platforms actually reward. Nostalgia gets used deliberately and in measured amounts, aimed at the people who own those memories, rather than becoming the subject of every post. The test is whether growth arrives with the existing community still engaged, because a legacy audience that feels dismissed leaves loudly."
      }
    ],
    seoTitle: "Tupperware Case Study: Legacy Brand, Modern Feed",
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
    deepDive: [
      {
        "h2": "What a 2010 product launch actually looked like",
        "blocks": [
          {
            "type": "p",
            "text": "The constraint was timing. Twitter had no ad products worth buying, Facebook pages were barely two years into being a brand surface, and there was no agreed way to measure whether a room full of people holding a product had done anything for a launch. Everything had to be argued from first principles, in front of a parent company with real brand safety obligations and a legal review process built for television."
          },
          {
            "type": "p",
            "text": "A hair line also sits awkwardly for a brand the shelf already knows for something else. Buying it means changing a grooming habit, not adding a can to a gym bag. That pushed the work toward the places where grooming decisions actually get made and talked about, which is why bars and barber chairs were the right rooms rather than a media buy."
          },
          {
            "type": "ul",
            "items": [
              "No established benchmarks, so success had to be defined before the campaign rather than argued after it",
              "Platform rules were changing mid campaign, and a takeover that worked one month could break the next",
              "Experiential and social sat with different teams at most agencies, which made an integrated brief hard to staff",
              "Retail timing was fixed, so the cultural moment had to land when the product did, not whenever the content was ready"
            ]
          }
        ]
      },
      {
        "h2": "How the campaign was run, and what stayed",
        "blocks": [
          {
            "type": "p",
            "text": "The work ran as one calendar, not three. Social, events, and the barber chairs were planned against the same dates, so a person who saw the online moment could walk into a room that matched it that same week. The content plan was built backwards from the event schedule, and the event schedule was built backwards from the date the product hit shelves."
          },
          {
            "type": "ol",
            "items": [
              "Scout and lock venues first, because the physical footprint sets what content is even possible to shoot",
              "Write the social moment against the room, so nothing promised online is missing on site",
              "Staff each activation with people who can actually cut hair and pour drinks, since a fake experience reads as fake immediately",
              "Capture everything on site and feed it back into the feed the same week, while attention is still on it"
            ]
          },
          {
            "type": "p",
            "text": "What transferred is the sequencing. Fifty & Five still plans experiential and social from a single calendar rather than treating events as something social covers afterward, and still treats the physical room as the constraint that governs the content plan. The credential matters less than the method. A Unilever brand approved this at a moment when nobody had a case study to point to, which is the only real proof that the reasoning held up on its own."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Axe?",
        "a": "Fifty & Five built and ran an integrated launch for a new Axe hair product line in 2010, combining a Twitter takeover, pop up experiential events, and bars converted into branded barber shop experiences. The services covered experiential marketing, social media, and product launch work across Twitter, Facebook, and live activations. It stands as one of the earliest integrated social and experiential campaigns delivered for a major consumer packaged goods brand."
      },
      {
        "q": "When did the Axe campaign run?",
        "a": "It ran as a 2010 campaign, and that timing is the point. Social platforms were still deciding what brands were allowed to do, and experiential marketing had not yet become a category with a name and a rate card. The launch was built and approved under those conditions, which is why it reads as an early integrated social and experiential effort for a major consumer packaged goods brand rather than a version of a playbook that already existed."
      }
    ],
    seoTitle: "Axe Unilever Case Study: Twitter Takeover, 2010",
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
    deepDive: [
      {
        "h2": "Two audiences, one feed",
        "blocks": [
          {
            "type": "p",
            "text": "A cultural institution that sells tickets answers to two audiences at once, and they do not want the same thing. The communities represented on site are watching to see whether their traditions are handled with care. Prospective visitors are comparing a day out against every other thing they could do with a vacation day. A post that satisfies one can easily insult or bore the other."
          },
          {
            "type": "p",
            "text": "The commercial pressure is real. Attraction marketing in Hawaii competes with beaches, boat trips, and hotel activity desks, all of which are cheaper to depict and easier to sell in a single image. Meanwhile the mission side of the house has a legitimate veto over anything that turns living culture into set dressing. Most agencies resolve that tension by defaulting to the safest tourism imagery, which is how cultural attractions end up looking interchangeable."
          },
          {
            "type": "p",
            "text": "The constraint we accepted was that respect and performance were not a trade to be split down the middle. Content that flattened the culture would have worked in the short term and cost the relationship, so cultural accuracy became a production requirement rather than an approval step at the end."
          }
        ]
      },
      {
        "h2": "How the program ran week to week",
        "blocks": [
          {
            "type": "p",
            "text": "The work started with people rather than the calendar. Performers and artisans were the source material, so planning was built around who was on site, what they were making or performing, and whether they wanted their story told. That is slower than shooting a venue and captioning it later, and it is the reason the feed never read like a brochure."
          },
          {
            "type": "ul",
            "items": [
              "Report from the grounds first, then build the month around what is actually happening instead of a template",
              "Name and credit the people on camera, since an artisan is not a stock image",
              "Run cultural accuracy checks before production, not as a final approval that forces a reshoot",
              "Keep visitation messaging in the same feed as the storytelling, so the commercial job still gets done"
            ]
          },
          {
            "type": "p",
            "text": "This became the template for later cultural heritage tourism accounts. The transferable part is the order of operations. Put the cultural review upstream of production, source stories from the people doing the work, and let the ticket sales case ride on that credibility instead of competing with it. The founder is on the account, which matters more here than in most categories, because judgment calls about what is respectful cannot be handed to a junior coordinator working a content calendar."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for the Polynesian Cultural Center?",
        "a": "Fifty & Five ran social media management and content strategy on Instagram and Facebook across a multi year engagement. The work centered on cultural storytelling that featured performers, artisans, and their stories rather than generic attraction photography, while still driving awareness and visitation for Hawaii's number one paid attraction. Balancing the cultural mission against the commercial reality of a tourism business was the entire brief, and it shaped every content decision made on the account."
      },
      {
        "q": "How long did the Polynesian Cultural Center engagement run?",
        "a": "It was a multi year engagement, which is consistent with how this agency works. The average client retainer runs past three years, and cultural accounts in particular need that time, because trust with the communities represented on site is built slowly and lost quickly. A short campaign would not have produced the balance of cultural respect and tourism marketing that later became the model for every cultural heritage client taken on since."
      }
    ],
    seoTitle: "Polynesian Cultural Center Social Media Case Study",
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
    deepDive: [
      {
        "h2": "Why classroom educators are a hard audience",
        "blocks": [
          {
            "type": "p",
            "text": "Classroom educators are the most marketing resistant audience in technology. They are pitched constantly, they have almost no budget authority, and they have seen enough district software rollouts to distrust any promise that a tool will change their week. Anything that reads like a product pitch gets ignored on sight, and anything that reads like flattery gets ignored faster."
          },
          {
            "type": "p",
            "text": "The scale of a global education initiative makes that harder rather than easier. The program had to speak to teachers in very different school systems, with different devices, different curricula, and different amounts of support from their administrations. A message written for one country's classroom often means nothing in another, and the corporate voice that holds a global program together is exactly the voice teachers tune out."
          },
          {
            "type": "ul",
            "items": [
              "The audience shares content with peers, so anything that would embarrass a teacher in front of colleagues is unusable",
              "Term calendars differ by region, so a single global posting rhythm misses half the audience at any given moment",
              "Educators had no reason to care about how the initiative was structured, only about what happens in their own room"
            ]
          }
        ]
      },
      {
        "h2": "Running a program teachers would actually share",
        "blocks": [
          {
            "type": "p",
            "text": "The content pipeline was a sourcing operation more than a design operation. Finding a teacher with a story worth telling, getting it in their own terms, and publishing it without sanding off the specifics took more time than producing the post itself. Specificity is what made the material shareable, because a teacher forwards the thing that sounds like their own room."
          },
          {
            "type": "ol",
            "items": [
              "Find classroom stories first, then decide what the month looks like",
              "Let the teacher describe the outcome instead of translating it into program language",
              "Keep the technology in the background of the story, since the classroom is the subject",
              "Publish on Twitter and Facebook in the formats educators were already using to talk to each other"
            ]
          },
          {
            "type": "p",
            "text": "The transferable lesson is that credibility comes from the practitioner, not the brand. Fifty & Five now applies the same sourcing discipline to any account where the buyer distrusts vendors, which covers most professional audiences. The second thing that carried forward is patience with skeptical audiences. A program aimed at educators cannot be forced with frequency or budget, and treating a multi year initiative as a relationship rather than a campaign is the only version of it that works."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Microsoft Partners in Learning?",
        "a": "Fifty & Five handled social media and content strategy for the Partners in Learning education initiative on Twitter and Facebook. The job was translating enterprise scale education technology into content that individual classroom educators would actually read and share, which meant showcasing real teachers, real classroom stories, and real outcomes instead of product pitches. It ran as a multi year engagement supporting a global initiative aimed squarely at teachers rather than at enterprise technology buyers."
      },
      {
        "q": "How long did the Partners in Learning engagement run and where did it live?",
        "a": "It was a multi year engagement running on Twitter and Facebook. Those were the platforms educators already used to talk to each other about their classrooms, so the content was built to fit those conversations rather than to interrupt them. The length mattered, because an audience that distrusts corporate marketing does not change its mind in a quarter. Consistent, credible classroom storytelling over years is what built community around the initiative."
      }
    ],
    seoTitle: "Microsoft Case Study: Education at Enterprise Scale",
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
    deepDive: [
      {
        "h2": "Why insurance is the hardest social vertical",
        "blocks": [
          {
            "type": "p",
            "text": "Insurance content fails on social for a structural reason. Nobody wants to think about the thing being sold, the purchase is infrequent, and the product only matters at the worst moment of someone's life. That puts the category in a bind. Go too light and you look like you are joking about a death benefit. Go too serious and nobody stops scrolling."
          },
          {
            "type": "p",
            "text": "Regulation narrows the room further. Financial products carry compliance review, statements about coverage have to be accurate, and a casual caption can create a real problem for a licensed business. Most agencies respond by producing safe wallpaper, which is why so many insurance feeds look identical and perform like nothing at all."
          },
          {
            "type": "p",
            "text": "Then there is the audience mix. Facebook, Twitter, and LinkedIn were carrying different people in different mindsets, from someone quietly comparing policies to someone who works in the industry and reads every post as a competitor would. One message pushed to all three would have been wrong in at least two places."
          }
        ]
      },
      {
        "h2": "How the account was run across years",
        "blocks": [
          {
            "type": "p",
            "text": "The program worked because tone was treated as a system, not a vibe. Every post had to clear two tests before it went out. Is this accurate and defensible, and would a person who is not currently shopping for insurance still find it worth reading. Anything that passed only one test got rewritten."
          },
          {
            "type": "ul",
            "items": [
              "Educational content carried the weight, because explaining the product honestly is the most human thing a financial brand can do",
              "Storytelling was used to build trust rather than to dramatize claims, which also keeps compliance simple",
              "Formats were built for each platform instead of one asset resized three ways",
              "The same senior person stayed on the account across years, so the voice did not drift with staff turnover"
            ]
          },
          {
            "type": "p",
            "text": "Longevity is the result worth pointing at. Retainers here average past three years, and this one held in a vertical most agencies will not even pitch, which is a harder test than a single campaign spike. The transferable piece is the two test rule for regulated categories. It now governs how Fifty & Five writes for finance and for any other client where an inaccurate sentence is a legal problem rather than just a weak post."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for SelectQuote Insurance?",
        "a": "Fifty & Five ran social media management across Facebook, Twitter, and LinkedIn over a multi year term. The assignment was humanizing an insurance brand without trivializing a product people genuinely need, so the content combined education, trust building storytelling, and platform native formats designed to earn attention in a feed where insurance advertising usually gets scrolled past. Insurance is one of the hardest verticals on social, and the program was built to perform there consistently."
      },
      {
        "q": "How long did the SelectQuote relationship last?",
        "a": "It was a multi year relationship, and that length is the proof point. Consistent performance over years in one of the hardest social verticals is a harder thing to achieve than one successful campaign. Fifty & Five averages more than three years per client retainer, with the founder on the account throughout and no junior handoffs, which is what keeps voice and compliance judgment steady on a regulated financial services brand over that kind of timeline."
      }
    ],
    seoTitle: "SelectQuote Case Study: Humanizing Insurance",
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
    deepDive: [
      {
        "h2": "No budget, in the hardest dining market in the country",
        "blocks": [
          {
            "type": "p",
            "text": "The math on independent restaurant marketing is brutal. Margins do not support a media budget, a PR retainer costs more than a line cook, and the competition includes restaurant groups with in house marketing teams and publicists on call. In Los Angeles that competition is thicker than almost anywhere, and food writers there are buried in pitches every single day."
          },
          {
            "type": "p",
            "text": "The constraint shaped everything downstream. With no money to buy reach and no agency of record making calls to editors, the only asset available was the product itself, plated and poured and shot well enough that a stranger would pass it along. That is a high bar, because a mediocre photo of excellent food is indistinguishable from a mediocre photo of bad food."
          },
          {
            "type": "ul",
            "items": [
              "No paid media, so every impression had to be earned by the content itself",
              "No PR retainer, so coverage had to start from something a writer found rather than something a publicist sent",
              "A natural wine program that needs explaining, which is harder to photograph than a signature dish",
              "One room, which had to look fresh across years of content without being redecorated for the camera"
            ]
          }
        ]
      },
      {
        "h2": "How the seeding actually worked",
        "blocks": [
          {
            "type": "p",
            "text": "Seeding is a relationship business, and the rule here was no pay for play and no gifted meal programs. That meant earning the attention of food writers, local influencers, and neighborhood tastemakers by handing them something genuinely worth posting, then staying present enough that the room came to mind when they were hunting for a story."
          },
          {
            "type": "ol",
            "items": [
              "Shoot during real service, so the food on camera is the food a guest is served",
              "Match each writer or creator to the part of the menu or the wine list they actually care about",
              "Send the work rather than a pitch deck, and let the images do the asking",
              "Keep the feed dense enough that anyone who checks the account after a recommendation finds a reason to book"
            ]
          },
          {
            "type": "p",
            "text": "The outcome held up over time. Two consecutive years on the LA Times Top 101 Restaurants list, plus coverage in BuzzFeed, Thrillist, and NBC LA, all organic, with no PR retainer and no paid media behind any of it. What transferred to later hospitality clients is the sequence. Content quality first, seeding second, press as a consequence rather than a purchase. Organic press is treated as an output of the content program, not a separate line item."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for Barsha?",
        "a": "Fifty & Five handled social media management, content creation, influencer seeding, and PR amplification on Instagram and Facebook. The strategy was built around the Mediterranean meets California menu and the curated natural wine program, with every post shot to stop the scroll and seeded organically to food writers, local influencers, and neighborhood tastemakers. There was no pay for play, no gifted meal program, and no paid media budget behind any part of the work."
      },
      {
        "q": "What results did the Barsha work produce?",
        "a": "Barsha landed on the LA Times Top 101 Restaurants list two years running. Coverage in BuzzFeed, Thrillist, and NBC LA followed, all of it organic and none of it bought with a PR retainer, and all growth came from organic social and influencer seeding with zero paid media budget. Those outcomes came out of a multi year engagement covering social media management, content creation, influencer seeding, and PR amplification on Instagram and Facebook."
      }
    ],
    seoTitle: "Barsha Case Study: LA Times Top 101, Two Years",
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
    deepDive: [
      {
        "h2": "Selling a category the market had not heard of",
        "blocks": [
          {
            "type": "p",
            "text": "The hardest part of this category is explanation. A product nobody has seen before has to be understood before it can be wanted, and a static image does not do that job. Meanwhile the fitness conversation was owned by connected indoor equipment and gym culture, both of which had enormous budgets and an audience that already knew what it was buying."
          },
          {
            "type": "p",
            "text": "There was also nothing to start from. No creator relationships, no pipeline, no roster of athletes who had ever touched the product, and no reference campaigns in the category to borrow structure from. Building an influencer program under those conditions is a sales job before it is a marketing job, and it fails outright if the outreach is generic."
          },
          {
            "type": "ul",
            "items": [
              "Outdoor fitness content depends on weather and location, which makes production schedules unpredictable",
              "A considered purchase means creator content has to teach, not simply endorse",
              "Follower count is the wrong filter when the buyer is a specific kind of athlete"
            ]
          }
        ]
      },
      {
        "h2": "How the creator engine was built and run",
        "blocks": [
          {
            "type": "p",
            "text": "The engine ran on matching, not on reach. Every partnership started by identifying creators whose community would plausibly ride the thing, then pitching them on the product rather than on a fee schedule. That is slower per deal, and it is the reason the roster ended up including Natalie Jill, Olympic medalists, and CrossFit athletes as organic ambassadors instead of paid placements that read as ads."
          },
          {
            "type": "ol",
            "items": [
              "Identify creators by community fit across fitness, wellness, and outdoor lifestyle, then pitch and close",
              "Brief each creator on what to demonstrate, so the footage explains the product",
              "Harvest every deal for reusable assets: workout clips, testimonials, unboxings",
              "Feed those assets back into the organic calendar for months after the partnership ends"
            ]
          },
          {
            "type": "p",
            "text": "That last step is what turned a hundred separate deals into a system. Content from closed partnerships kept working long after the deal itself was done, which is why the program became the primary acquisition channel rather than a line item that had to be refilled every quarter. Fifty & Five still builds creator programs this way for niche products, because matching a creator to a community beats buying follower count whenever a buyer has to understand something before purchasing it."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five do for StreetStrider?",
        "a": "Fifty & Five built the influencer program from zero and ran social media management, content strategy, and community building across Instagram, Facebook, YouTube, and TikTok. The team identified, pitched, and closed more than one hundred creator partnerships spanning fitness, wellness, and outdoor lifestyle, including Natalie Jill, Olympic medalists, and CrossFit athletes as organic ambassadors. Every partnership was also converted into reusable social assets that kept feeding the organic feed after each deal closed."
      },
      {
        "q": "How many creator partnerships came out of the StreetStrider engagement?",
        "a": "More than one hundred active creator partnerships, all built from a starting point of zero existing influencer relationships. The roster covered fitness, wellness, and outdoor lifestyle creators, including Natalie Jill, Olympic medalists, and CrossFit athletes. The pipeline was repeatable rather than one off, and it became the primary acquisition channel for the brand over a multi year engagement. Matching each creator to the right community, instead of buying the largest follower counts, is what made it work."
      }
    ],
    seoTitle: "StreetStrider Case Study: 100+ Creator Deals",
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
    deepDive: [
      {
        "h2": "Three decades of reputation that machines could not read",
        "blocks": [
          {
            "type": "p",
            "text": "A talent agency's reputation lives in rooms that software cannot see. Casting directors know who has been placing actors in Orlando since 1994, and that knowledge never existed in a form a search engine or a language model could verify. The gap was not credibility. It was that none of the credibility had been published as structured, machine readable fact on a page."
          },
          {
            "type": "p",
            "text": "The category makes this urgent. Talent representation sits next to a well documented population of scams, so the first questions anyone asks are about fees, franchising, and legitimacy. Those are exactly the questions an AI assistant has to answer before it will name a business, and a model will not assert something it cannot ground in a source. A site that implies authority through design alone gives it nothing to work with."
          },
          {
            "type": "ul",
            "items": [
              "Search and the AI layer above it are both first filters now, for prospective talent and for clients",
              "Trust claims have to be verifiable rather than adjectival before Google or a model will repeat them",
              "A site that is slow or hard to crawl loses before the content question is ever reached"
            ]
          }
        ]
      },
      {
        "h2": "How the build ran and what it became",
        "blocks": [
          {
            "type": "p",
            "text": "The build treated content as data. Every claim worth making was written as a question and answer a real person would ask, then marked up so machines read it as labeled question and answer rather than prose. Identity signals were published as facts with numbers attached, including SAG-AFTRA Agency ID 000347 and Florida license TA# 498, because a citable fact is worth more than a paragraph of positioning."
          },
          {
            "type": "table",
            "headers": [
              "Layer",
              "What it does"
            ],
            "rows": [
              [
                "Server rendered Next.js build",
                "Fast, crawlable pages, so nothing depends on client side rendering to be indexed"
              ],
              [
                "FAQPage schema",
                "Marks the answer layer as labeled question and answer for machines"
              ],
              [
                "EmploymentAgency and WebSite schema",
                "Completes the structured data stack and defines the entity"
              ],
              [
                "Published credentials",
                "SAG-AFTRA Agency ID 000347 and FL license TA# 498 as verifiable trust signals"
              ]
            ]
          },
          {
            "type": "p",
            "text": "The result is verifiable in the page source rather than asserted in a deck, and the off site picture supports it with 463 backlinks across 241 referring domains per Ahrefs. This build, running from 2025 into 2026, is now the template. Modern framework, structured answer content, verifiable entity signals, applied to every local authority and professional services brand that has to win Google and the assistants reading Google."
          }
        ]
      }
    ],
    faqs: [
      {
        "q": "What did Fifty & Five build for Central Florida Talent?",
        "a": "Fifty & Five designed and built a new website on Next.js, then engineered it for search and for Answer Engine Optimization. The work included a structured FAQ layer answering the questions prospects and AI assistants actually ask, FAQPage schema so those answers read as labeled question and answer, EmploymentAgency and WebSite schema, and published entity signals including SAG-AFTRA Agency ID 000347 and Florida license TA# 498. This was a site and search visibility build, not a social retainer."
      },
      {
        "q": "How long did the Central Florida Talent website and AEO project run?",
        "a": "The engagement ran from 2025 into 2026. It covered website design and build on Next.js, SEO, Answer Engine Optimization, and structured data and entity strategy for the longest operating SAG-AFTRA franchised agency in Orlando, in business since 1994. The finished site carries three JSON-LD schema blocks, a structured answer layer, and published license and credential facts, all verifiable live in the page source rather than claimed in a report."
      }
    ],
    seoTitle: "Central Florida Talent Case Study: AI Search",
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

// Short title hooks for case-study <title> tags:
// "{Client} Social Media Case Study | {hook}"
export const CASE_STUDY_TITLE_HOOKS: Record<string, string> = {
  'kendall-jackson': 'Multi-Year Wine Portfolio Partnership',
  'mezzacorona': 'A Decade-Long Wine Retainer',
  'blaze-pizza': 'Day Zero to 300+ Locations',
  'enterprise-holdings': '6 Brands, 2 Markets, One Team',
  'centennial-real-estate': '9 Properties, 9 Local Voices',
  'resorts-world': 'Boutique Charm to Mega-Resort',
  'netgear-arlo': 'Sub-Brand to Standalone Launch',
  'tupperware': 'Legacy Brand, Modern Feed',
  'axe-unilever': 'Twitter Takeover, 2010',
  'polynesian-cultural-center': "Hawaii's #1 Paid Attraction",
  'microsoft': 'Enterprise Education at Scale',
  'selectquote-insurance': 'Humanizing Insurance on Social',
  'barsha': 'LA Times Top 101, Two Years Running',
  'streetstrider': '100+ Creator Deals From Zero',
  'central-florida-talent': 'A Website Built for AI Search',
};

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
