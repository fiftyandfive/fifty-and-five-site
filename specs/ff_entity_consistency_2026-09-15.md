# Off-site entity consistency

Date: 2026-09-15
Supersedes the scope of `ff_nap_offsite_sync_2026-09-06.md`, which covered the phone
number only. That checklist is still valid; finish it alongside this.
Owner: Lucas (manual, requires account logins)

## What changed since the last spec

The phone spec assumed the only stale field off-site was the number. It is not.
Live third-party sources currently publish **four different geographic claims** for
one entity, plus a shorter tenure than the site states.

| Claim found live | Source | Correct? |
| --- | --- | --- |
| Redondo Beach, CA, as company HQ | aggregator data surfaced via ClearlyRated | **No.** Stale. The site was scrubbed of "Redondo" and `scripts/verify-content.mjs` has guarded against its return since then. |
| 227 S. Orlando Ave, Suite B-1, Winter Park, FL | ClearlyRated | **No.** Stale prior address. |
| Winter Park, FL (metro descriptor) | Owler, assorted aggregators | **No.** Winter Park is a service area on the site, never the address. |
| Orlando | Clutch | **Yes**, but without the street address. |
| "5 Fifty & Five LLC locations" | aggregator | **No.** One office. |
| "over 15 years" | aggregator | **No.** 18 years as of 2026. |
| Founded 2009 | Owler | **Defensible, see below.** Not a listing error. |

Google resolves conflicting entity attributes by trusting none of them. Four
addresses across CA and two FL cities is a materially worse local signal than a
stale phone number, and it degrades AI answer confidence for the same reason.
Confidence: high that the conflict exists (all observed live). Moderate on the
size of the ranking effect, since no Search Console or local-pack data is
available from here to measure it.

## The 2008 / 2009 question is not an error

Do not "correct" third parties that say 2009. The site itself states both, and
both are true:

- **2008**: brand founded, first social media engagements, pre-Instagram.
- **July 2009**: `5ifty & 5ive LLC` formally incorporated.

Sources reporting 2009 are reporting the incorporation date from public filings.
Asking them to change it invites a correction request that is factually wrong and
will be refused. The fix is disambiguation, not correction:

- `foundingDate: 2008` in the Organization schema is correct and stays.
- Where a listing offers only one "founded" field and pulls from filings, leave
  2009 and make sure the **description** carries "founded 2008, incorporated
  2009" so the two reconcile rather than contradict.

## The canonical strings

Copy verbatim. Do not reformat.

| Field | Value |
| --- | --- |
| Name | Fifty & Five |
| Legal name | 5ifty & 5ive LLC |
| Address line 1 | 1001 N Orange Ave |
| City, State ZIP | Orlando, FL 32801 |
| Phone, display | (321) 450-7550 |
| Phone, E.164 | +13214507550 |
| Email | hello@fiftyandfive.com |
| Website | https://fiftyandfive.com |
| Founded (brand) | 2008 |
| Incorporated (LLC) | July 2009 |
| Years operating | 18 |
| Brands managed | 222 |
| Locations | 1 |

Strings to search for and kill off-site: `Redondo Beach`, `227 S. Orlando Ave`,
`Suite B-1`, `Winter Park` (as address, not service area), `15 years`,
`(310) 902-3246`.

## Fix order

Tier 1, wrong data actively published:

- [ ] **ClearlyRated**: https://www.clearlyrated.com/marketing-services/fl-usa/winter-park-fl/fifty-five-llc-winter-park-fl
      Claim the listing. Fix address and HQ. This one is doubly worth doing: it
      corrects the worst record **and** adds a directory listing at the same time.
- [ ] **Owler**: https://www.owler.com/company/fiftyandfive
      Claim, fix HQ city, set description to carry the 2008/2009 reconciliation.
- [ ] **Data aggregators**: Data Axle, Neustar Localeze, Foursquare. The
      Redondo Beach and Winter Park records almost certainly originate here and
      keep repopulating downstream directories. Fixing a downstream directory
      without fixing the aggregator means it reverts. Do these before the long tail.
- [ ] **Google Business Profile**: https://maps.google.com/?cid=17642359949703277975
      Confirm address matches the LocalBusiness schema exactly.

Tier 2, listings cited in the site's own `sameAs` (a `sameAs` pointing at a
record with wrong data actively vouches for that wrong data):

- [ ] LinkedIn company page: https://www.linkedin.com/company/fiftyandfive
- [ ] Crunchbase: https://www.crunchbase.com/organization/fifty-five-6144
- [ ] Clutch: https://clutch.co/profile/fifty-five
- [ ] Agency Spotter: https://www.agencyspotter.com/fifty-five
- [ ] Digital Agency Network: https://digitalagencynetwork.com/agency/fifty-five/

Tier 3: everything in the Tier 3 list of the phone spec, same pass.

## Verification

Run these as exact-phrase searches and record the count before and after:

```
"Fifty & Five" "Redondo Beach"
"Fifty & Five" "Winter Park"
"5ifty & 5ive" "227 S. Orlando"
"Fifty & Five" "310-902-3246"
```

Every hit is a listing to fix. Re-run 30 days later; aggregator propagation lags
and some records revert once if the upstream source was not fixed first.

## Not in scope

No Review, AggregateRating, or itemReviewed schema on the site, before or after.
Reviews stay on Clutch and Google.
