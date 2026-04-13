# Client logos

Drop SVG (preferred) or transparent PNG logos here. The ticker on the homepage
applies a grayscale-to-color hover treatment, so single-color marks read best.

## Format guidelines

- **SVG preferred** — scales perfectly, small file size.
- **PNG fallback** — transparent background, ~400px wide, 2x density for retina.
- Use the brand's primary wordmark (not the stacked version with tagline).
- Single color (black or white) if the brand has a monotone version —
  the grayscale filter will handle the neutralization.

## Expected filenames

The ticker reads from `lib/data/clients.ts`. Once you drop a file here, add
the `asset` field to the matching entry:

```ts
{ name: 'Microsoft', asset: '/logos/microsoft.svg' },
```

Filenames below map to the 22 entries currently in `clients.ts`:

| Brand                     | Filename                        |
| ------------------------- | ------------------------------- |
| Microsoft                 | `microsoft.svg`                 |
| SAP                       | `sap.svg`                       |
| Kendall-Jackson           | `kendall-jackson.svg`           |
| Enterprise Rent-A-Car     | `enterprise.svg`                |
| National Car Rental       | `national.svg`                  |
| Alamo                     | `alamo.svg`                     |
| Blaze Pizza               | `blaze-pizza.svg`               |
| Discovery Channel         | `discovery.svg`                 |
| American Airlines Center  | `american-airlines-center.svg`  |
| Toys R Us                 | `toys-r-us.svg`                 |
| Resorts World             | `resorts-world.svg`             |
| Axe / Unilever            | `axe.svg`                       |
| NETGEAR / Arlo            | `netgear.svg` or `arlo.svg`     |
| Linksys                   | `linksys.svg`                   |
| Tupperware                | `tupperware.svg`                |
| Warner Bros.              | `warner-bros.svg`               |
| Penfolds                  | `penfolds.svg`                  |
| Molina Healthcare         | `molina.svg`                    |
| The Irvine Company        | `irvine-company.svg`            |
| AutoNation                | `autonation.svg`                |
| Bain & Company            | `bain.svg`                      |
| Wolfgang's Steakhouse     | `wolfgangs.svg`                 |

## Legal note

Only upload logos for brands you have a right to display as past work. Most
standard SOWs cover this implicitly, but if in doubt, check the original
agreement or ask the brand before using.
