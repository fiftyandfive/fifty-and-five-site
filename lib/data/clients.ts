export type ClientLogo = {
  name: string;
  /** Path to logo asset under /public (e.g. '/logos/microsoft.png'). */
  asset?: string;
};

/**
 * Client logos — fetched automatically at build time by scripts/fetch-logos.mjs.
 * To override with a custom logo, drop an SVG/PNG in /public/logos/ with the
 * same filename and the prebuild script will skip it.
 */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft', asset: '/logos/microsoft.png' },
  { name: 'SAP', asset: '/logos/sap.png' },
  { name: 'Kendall-Jackson', asset: '/logos/kendall-jackson.png' },
  { name: 'Enterprise Rent-A-Car', asset: '/logos/enterprise.png' },
  { name: 'National Car Rental', asset: '/logos/national.png' },
  { name: 'Alamo', asset: '/logos/alamo.png' },
  { name: 'Blaze Pizza', asset: '/logos/blaze-pizza.png' },
  { name: 'Discovery Channel', asset: '/logos/discovery.png' },
  { name: 'American Airlines Center', asset: '/logos/american-airlines-center.png' },
  { name: 'Toys R Us', asset: '/logos/toys-r-us.png' },
  { name: 'Resorts World', asset: '/logos/resorts-world.png' },
  { name: 'Axe / Unilever', asset: '/logos/unilever.png' },
  { name: 'NETGEAR / Arlo', asset: '/logos/netgear.png' },
  { name: 'Linksys', asset: '/logos/linksys.png' },
  { name: 'Tupperware', asset: '/logos/tupperware.png' },
  { name: 'Warner Bros.', asset: '/logos/warner-bros.png' },
  { name: 'Penfolds', asset: '/logos/penfolds.png' },
  { name: 'Molina Healthcare', asset: '/logos/molina.png' },
  { name: 'The Irvine Company', asset: '/logos/irvine-company.png' },
  { name: 'AutoNation', asset: '/logos/autonation.png' },
  { name: 'Bain & Company', asset: '/logos/bain.png' },
  { name: "Wolfgang's Steakhouse", asset: '/logos/wolfgangs.png' },
];
