export type ClientLogo = {
  name: string;
  /** URL to logo image (Clearbit Logo API). */
  asset?: string;
};

/** Helper to build a Clearbit Logo URL */
function logo(domain: string) {
  return `https://logo.clearbit.com/${domain}?size=256`;
}

/**
 * Client logos — served directly from Clearbit's Logo API CDN.
 * Falls back to text wordmark in LogoTicker if the image fails to load.
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft', asset: logo('microsoft.com') },
  { name: 'SAP', asset: logo('sap.com') },
  { name: 'Kendall-Jackson', asset: logo('kj.com') },
  { name: 'Enterprise Rent-A-Car', asset: logo('enterprise.com') },
  { name: 'National Car Rental', asset: logo('nationalcar.com') },
  { name: 'Alamo', asset: logo('alamo.com') },
  { name: 'Blaze Pizza', asset: logo('blazepizza.com') },
  { name: 'Discovery Channel', asset: logo('discovery.com') },
  { name: 'American Airlines Center', asset: logo('americanairlinescenter.com') },
  { name: 'Toys R Us', asset: logo('toysrus.com') },
  { name: 'Resorts World', asset: logo('rwsentosa.com') },
  { name: 'Axe / Unilever', asset: logo('unilever.com') },
  { name: 'NETGEAR / Arlo', asset: logo('netgear.com') },
  { name: 'Linksys', asset: logo('linksys.com') },
  { name: 'Tupperware', asset: logo('tupperware.com') },
  { name: 'Warner Bros.', asset: logo('warnerbros.com') },
  { name: 'Penfolds', asset: logo('penfolds.com') },
  { name: 'Molina Healthcare', asset: logo('molinahealthcare.com') },
  { name: 'The Irvine Company', asset: logo('irvinecompany.com') },
  { name: 'AutoNation', asset: logo('autonation.com') },
  { name: 'Bain & Company', asset: logo('bain.com') },
  { name: "Wolfgang's Steakhouse", asset: logo('wolfgangssteakhouse.net') },
];
