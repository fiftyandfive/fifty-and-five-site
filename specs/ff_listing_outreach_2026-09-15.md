# Directory and listicle placement

Date: 2026-09-15
Owner: Lucas (every item needs an account login or an editorial contact)

Purpose: get Fifty & Five onto the third-party pages that already rank for the
target terms. For "Orlando social media marketing agency" the top results are
Clutch, Semrush's agency list, The Manifest, and a LYFE Marketing listicle. Those
are the competitors for that query, and they cannot be outranked. Being listed on
them is the route in. The same pages are what AI answer engines cite, so this is
also the real AEO work: models cite third parties, not a brand's own copy about
itself.

## Route per target

Only three of these are email pitches. The rest are self-serve or paid listings,
which is why "send the pitch emails" covers a small slice of the work.

| Target | Route | Cost | Notes |
| --- | --- | --- | --- |
| Clutch | Account, then collect reviews | Free tier exists | **Highest leverage item on this page.** Currently 4 reviews, sitting on page 8 of the Orlando list. Clutch ranks #1 for the money term and sorts largely on review volume and recency. |
| The Manifest | None needed | Free | Fed by Clutch data. Fixing Clutch fixes this. |
| Semrush Agency Partners | Self-serve signup | Free tier exists | agencies.semrush.com. Ranks for the Orlando term already. |
| UpCity | Self-serve | Paid tiers | Verify the free listing first. |
| DesignRush | Self-serve | Paid for placement | Lower priority, heavily pay-to-play. |
| Expertise.com | Nomination based | Free | They select. A request to be evaluated is the only lever. |
| ClearlyRated | **Claim the existing listing** | Free | Already lists the agency with the wrong address. See `ff_entity_consistency_2026-09-15.md`. Claiming fixes bad data and adds a listing in one move. |
| LYFE Marketing listicle | Email pitch | Free | Draft written, in Gmail. No published editorial contact. |
| Grappos wine list | Email pitch | Free | Draft written, in Gmail. No published editorial contact. |
| Sommelier's Choice Awards | Email pitch | Free | Wine trade blog that runs agency roundups. Contact not yet found. |

## Blocked on you

The two drafts sit in Gmail with the **recipient line empty**. Neither publisher
lists an editorial address, and both domains are blocked by this environment's
egress proxy, so the address could not be retrieved here. Options, best first:

1. The site contact form, pasting the draft body.
2. A named author. Both posts carry bylines; a LinkedIn message to the author
   usually outperforms a generic inbox for listicle inclusion.
3. A generic inbox (`hello@`, `marketing@`) as a last resort.

Do not send to a guessed address. A bounced or misdirected cold pitch from a
marketing agency is worse than no pitch.

## Why Clutch comes first

Everything else on this page is a single referring domain. Clutch is the asset
that already outranks the entire field for the primary local term, and review
count is the input that moves position on it. Going from 4 reviews to roughly 20
moves the listing toward page 1 of that asset and updates The Manifest at the
same time.

The reviews exist and have simply never been asked for: clients averaging past
three years, plus a ten-year Blaze Pizza program. The `/review` route is already
built and live on the site; set `GBP_REVIEW_URL` in Vercel and the ask becomes a
single link.

Constraint that does not change: no Review, AggregateRating, or itemReviewed
schema on the site. Reviews stay on Clutch and Google.
