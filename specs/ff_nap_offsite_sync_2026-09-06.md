# Off-site NAP sync checklist

Date: 2026-09-06
Trigger: sitewide phone number change shipped 2026-08-31 (PR #94)
Owner: Lucas (manual, requires account logins)

## Why this matters

Every third-party listing below still shows the old number until someone edits it. Google Business Profile, AI answer engines, and local-pack ranking all cross-check the site's Name, Address, Phone (NAP) against these sources. A mismatch is a measurable local-ranking negative and a citation-confidence negative for AI engines. Confidence: high.

## The exact strings

Copy these verbatim. Do not reformat.

| Field | Value |
| --- | --- |
| Name | Fifty & Five |
| Address line 1 | 1001 N Orange Ave |
| City, State ZIP | Orlando, FL 32801 |
| Phone, display | (321) 450-7550 |
| Phone, E.164 | +13214507550 |
| Phone, schema | +1-321-450-7550 |
| Email | hello@fiftyandfive.com |
| Website | https://fiftyandfive.com |

Old number to search for and remove: (310) 902-3246, +1-310-902-3246, 3109023246.

## Listings to update

Tier 1 (do first, highest weight):

- [ ] Google Business Profile: https://maps.google.com/?cid=17642359949703277975. Update phone. Confirm address and hours match the LocalBusiness schema on the site.
- [ ] Bing Places for Business (import from GBP if not yet claimed).
- [ ] Apple Business Connect (Apple Maps).
- [ ] LinkedIn company page: https://www.linkedin.com/company/fiftyandfive
- [ ] Clutch: https://clutch.co/profile/fifty-five

Tier 2 (directories already cited in the site's sameAs):

- [ ] Crunchbase: https://www.crunchbase.com/organization/fifty-five-6144
- [ ] Agency Spotter: https://www.agencyspotter.com/fifty-five
- [ ] Digital Agency Network: https://digitalagencynetwork.com/agency/fifty-five/
- [ ] Facebook page: https://www.facebook.com/fiftyandfive (About > Contact info)
- [ ] Instagram: https://www.instagram.com/fiftyandfive (business contact button)
- [ ] X: https://x.com/FiftyandFive (bio, if the number appears)

Tier 3 (check whether a listing exists; claim or correct if so):

- [ ] Yelp
- [ ] Yellow Pages / YP.com
- [ ] Better Business Bureau
- [ ] Chamber of Commerce (Orlando)
- [ ] Foursquare / Factual data feed
- [ ] Data aggregators: Data Axle, Neustar Localeze, Foursquare. These feed dozens of smaller directories. One fix here propagates.

Other places the old number may live:

- [ ] Email signatures (every team member)
- [ ] Calendly event descriptions and confirmation emails
- [ ] Proposal and contract templates
- [ ] Invoice templates
- [ ] Any PDF one-sheets or decks linked from the site or sent to prospects
- [ ] Google Ads and Meta Ads call extensions, if any are running
- [ ] Voicemail greeting on the old line, forwarding rule to the new line

## Verification

After updating, search Google for "310-902-3246" and "(310) 902-3246" in quotes. Any result that still shows the old number is a listing to fix. Repeat 30 days later; aggregators lag.

Then run this once and record the counts:

```
site:fiftyandfive.com "321"
"Fifty & Five" "450-7550"
```

## Not in scope

Do not add Review, AggregateRating, or itemReviewed schema anywhere on the site while doing this. Clutch and Google reviews stay on those platforms.
