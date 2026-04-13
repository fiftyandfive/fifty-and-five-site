export type ClientLogo = {
  name: string;
  /** URL to logo image (Google Favicon API). */
  asset?: string;
};

/** Google Favicon API — returns real favicons at up to 256px */
function favicon(domain: string) {
  return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;
}

/**
 * Client logos — served directly from Google's Favicon API.
 * Falls back to serif text wordmark in LogoTicker if the image fails.
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft', asset: favicon('microsoft.com') },
  { name: 'SAP', asset: favicon('sap.com') },
  { name: 'Kendall-Jackson', asset: favicon('kj.com') },
  { name: 'Enterprise Rent-A-Car', asset: favicon('enterprise.com') },
  { name: 'National Car Rental', asset: favicon('nationalcar.com') },
  { name: 'Alamo', asset: favicon('alamo.com') },
  { name: 'Blaze Pizza', asset: favicon('blazepizza.com') },
  { name: 'Discovery Channel', asset: favicon('discovery.com') },
  { name: 'American Airlines Center', asset: favicon('americanairlinescenter.com') },
  { name: 'Toys R Us', asset: favicon('toysrus.com') },
  { name: 'Resorts World', asset: favicon('rwsentosa.com') },
  { name: 'Axe / Unilever', asset: favicon('unilever.com') },
  { name: 'NETGEAR / Arlo', asset: favicon('netgear.com') },
  { name: 'Linksys', asset: favicon('linksys.com') },
  { name: 'Tupperware', asset: favicon('tupperware.com') },
  { name: 'Warner Bros.', asset: favicon('warnerbros.com') },
  { name: 'Penfolds', asset: favicon('penfolds.com') },
  { name: 'Molina Healthcare', asset: favicon('molinahealthcare.com') },
  { name: 'The Irvine Company', asset: favicon('irvinecompany.com') },
  { name: 'AutoNation', asset: favicon('autonation.com') },
  { name: 'Bain & Company', asset: favicon('bain.com') },
  { name: "Wolfgang's Steakhouse", asset: favicon('wolfgangssteakhouse.net') },
];
