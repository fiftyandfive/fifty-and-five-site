# Orlando social media visibility

Date: 2026-09-24
Branch: `claude/website-content-visual-system-fhpca` (not deployed)
Trigger: a 2026-09-24 search sample surfaced `/social-media-marketing-agency-florida`
and `/hospitality-social-media-agency` for Orlando social media queries, and never
the dedicated `/orlando-social-media-agency` page. That sample is directional, not a
verified Google position.

## What the diagnosis found

Measured on the built output, before any change.

| Check | Result |
| --- | --- |
| HTTP status, redirects | Static prerender, 200, no redirect |
| Robots | No robots meta, not disallowed in robots.txt |
| Canonical | Self-referencing, correct |
| Sitemap | Present |
| Title | "Orlando Social Media Agency \| Fifty & Five", unique |
| H1 | Present in HTML but every word shipped at `opacity:0` inside `aria-hidden` spans until JavaScript ran. Read as "Orlando social media agency.Fortune 500 roster." |
| Service scope | The phrase "social media management" appeared 0 times. The page never listed what a client can hire the agency to do. |
| Keyword density | "Orlando" 44 times in 2,421 words, much of it mechanical ("Orlando CPG", "Orlando hotel") |
| Topic focus | Roughly half the page was hotel and national CPG material that belongs on the hospitality and retail pages |
| Internal links | Footer link on every page, but body links from only 3 pages. Homepage, services, about, hospitality, restaurant, and local case study had none |
| Overlap | 8-word shingle overlap under 2% with the homepage, Florida, and hospitality pages. **Not cannibalization**, so nothing was redirected or canonicalized |
| Homepage | Zero mentions of Orlando or of social media in body text |

Internal links do not explain the search sample: the Florida page had zero body
links either. The likeliest content difference is that the Florida page states a
clear service in its H1 while the Orlando page did not state its service anywhere.
That is an inference, not a measurement.

Checks that need Search Console and could not be run from the repository:
indexed status, the Google-selected canonical, last crawl date, and which page
Google currently pairs with each query.

## Unverified claims removed

- "Continuously operating from Orlando for 18 years", "operated from Orlando since
  2008", "run from 1001 N Orange Ave since 2008": ten instances across the Orlando,
  Florida, fractional CMO, and fractional CMO Orlando pages and two blog posts.
  Evidence points the other way: the former phone number was a 310 (Los Angeles
  area) number, and third-party listings still show a Redondo Beach, CA HQ and a
  Winter Park address. Replaced with "founded in 2008" and "based at 1001 N Orange
  Ave", stated separately.
- "Most Orlando boutique agencies charge $1,500 to $5,000 per month"
  (unsourced competitor pricing).
- "Most Orlando / Florida agencies serve local clients only" (unsourced).
- "One of the only boutique social media agencies anywhere with a Fortune 500
  client list" (unsupported superlative), on the Orlando page and the homepage.
- "Florida's Leading Social Media Marketing Agency" (Florida OG title and schema).
- "The deepest track record anywhere" (Florida page).
- "Since 2008 we have run social for luxury resorts" (hospitality page): the About
  timeline dates the first travel engagement to 2013.
- Present-tense "runs accounts for Microsoft, Hasbro, Warner Bros." changed to
  past tense; current client status is unconfirmed.
- Teoxane SA removed from the Orlando page's local list: a Swiss company whose
  Orlando connection is a conference, not a local client.

## Business facts needing owner confirmation

1. **When the agency moved to Orlando**, and where it operated before. The About
   timeline has no relocation year. Once confirmed, a single accurate line can
   return.
2. **Current versus past clients.** The Orlando page says local clients "have
   included" BODYBar SoDo, Solar Bears Orlando, Andretti Indoor Karting, Crafty
   Bartender, Velocity Title, Laser Lab, Chance 2 Dance, Landmark Contracting, and
   Central Florida Talent. Confirm which are current and which service each
   received. Only Landmark (fractional CMO plus website) and Central Florida Talent
   (website, SEO, AEO) have documented scope.
3. **Teoxane SA**: local client, event client, or neither. Still listed as local on
   `/fractional-cmo-orlando`.
4. **SoDo Main Street Board**: confirm the seat is current.
5. **Legal name**: the footer says "Fifty & Five LLC", site facts and schema say
   "5ifty & 5ive LLC". Confirm the registered name.
6. **Opening hours** in schema (Monday to Friday, 9:00 to 18:00) and the geo
   coordinates (28.5494, -81.3792): carried over unchanged from the old
   LocalBusiness node. Confirm both match Google Business Profile.
7. **"One of only two American agencies, alongside VaynerMedia, built social-first
   from scratch"** on /about: a strong historical claim, kept because it is
   established positioning with its own article. Confirm it is defensible.
8. **"Central Florida Talent, Orlando's longest operating SAG-AFTRA franchised
   agency"** on `/fractional-cmo-orlando`: a claim about the client; confirm its
   source.

## External follow-ups (not done from the repository)

- Search Console, after deploy: URL Inspection and Request Indexing for
  `/orlando-social-media-agency`, then `/`, `/services`,
  `/social-media-marketing-agency-florida`, `/hospitality-social-media-agency`.
  Record the Google-selected canonical for each.
- Google Business Profile: primary category "Social media agency" or "Marketing
  agency"; description names the services on the Orlando page; website link can
  point to `/orlando-social-media-agency` for local intent. Hours must match schema.
- Clutch: 4 reviews, page 8 of the Orlando social media list. Review volume is the
  main placement lever. Services list and description should mirror the Orlando page.
- Directory entity cleanup per `ff_entity_consistency_2026-09-15.md`: Redondo Beach
  and Winter Park records, "5 locations", "15 years".
- Semrush agency directory, UpCity, The Manifest (fed by Clutch): listings with
  Orlando as the location and social media management as the primary service.

## Measurement checklist

No baseline positions are recorded here, because none were measured with a
reliable tool. Take the baseline in the first week after deploy, then repeat at
30, 60, and 90 days. Use a clean browser with location set to Orlando, FL, or a rank
tracker set to Orlando.

For every query, record these separately. Do not merge them into one number:

- **Organic**: position of the first fiftyandfive.com result, and **which URL** it is.
  Query-to-page alignment means the Orlando page for the local queries, and the
  hospitality page for the hotel query.
- **Map pack**: whether Fifty & Five appears, and its position.
- **Directories**: whether Fifty & Five appears on the directory pages that rank
  (Clutch, The Manifest, Semrush, listicles), and on which page of the directory.
- **AI answers**: whether ChatGPT, Perplexity, Gemini, and Google AI Overviews name
  Fifty & Five, and which source they cite. Record as seen, not as a ranking.

| Query | Expected page | Organic pos + URL | Map pack | Directory | AI mention |
| --- | --- | --- | --- | --- | --- |
| Orlando social media agency | /orlando-social-media-agency | | | | |
| Social media agency Orlando | /orlando-social-media-agency | | | | |
| Social media marketing agency Orlando | /orlando-social-media-agency | | | | |
| Orlando social media marketing company | /orlando-social-media-agency | | | | |
| Social media management Orlando | /orlando-social-media-agency | | | | |
| Best social media agencies in Orlando | directory placement | | | | |
| Top social media marketing agencies Orlando | directory placement | | | | |
| Boutique social media agency Orlando | /orlando-social-media-agency | | | | |
| Social media agency Orlando Florida | /orlando-social-media-agency | | | | |
| Social media marketing Central Florida | /orlando-social-media-agency | | | | |
| Restaurant social media agency Orlando | /orlando-social-media-agency or /verticals/restaurant | | | | |
| Hospitality social media agency Orlando | /hospitality-social-media-agency | | | | |

"Best" and "top" queries are answered by directories and listicles, not agency
pages, so the realistic target there is placement inside those lists.

Search Console, filtered to these queries and to the pages above, every 30 days:

- Nonbranded impressions and clicks per query. Exclude queries containing
  "fifty", "5ifty", or "vandenberg".
- Which page receives impressions for each query. That is the alignment check.
- Average position is directional only. Do not report it as a rank.

Qualified inquiries, every 30 days:

- Contact form submissions whose page URL or referrer is `/orlando-social-media-agency`.
  The contact API already records the submitting page for SMS-consent submissions.
  The hero buttons fire the existing "Orlando CTA, Let's Talk" and "Orlando CTA, See the Work" events, unchanged from before this branch so the history stays comparable.
- Of those, the number that are Central Florida businesses within the retainer range.
  That is the number that matters. Rankings are only a leading indicator.
