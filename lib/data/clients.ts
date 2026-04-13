export type ClientLogo = {
  name: string;
  /** Optional path to a logo asset under /public (e.g. '/logos/microsoft.svg'). */
  asset?: string;
};

// When you have real SVG logos, drop them in /public/logos/ and add `asset` here.
// The ticker renders the name as a serif wordmark when `asset` is not provided.
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft' },
  { name: 'SAP' },
  { name: 'Kendall-Jackson' },
  { name: 'Enterprise Rent-A-Car' },
  { name: 'National Car Rental' },
  { name: 'Alamo' },
  { name: 'Blaze Pizza' },
  { name: 'Discovery Channel' },
  { name: 'American Airlines Center' },
  { name: 'Toys R Us' },
  { name: 'Resorts World' },
  { name: 'Axe / Unilever' },
  { name: 'NETGEAR / Arlo' },
  { name: 'Linksys' },
  { name: 'Tupperware' },
  { name: 'Warner Bros.' },
  { name: 'Penfolds' },
  { name: 'Molina Healthcare' },
  { name: 'The Irvine Company' },
  { name: 'AutoNation' },
  { name: 'Bain & Company' },
  { name: "Wolfgang's Steakhouse" },
];
