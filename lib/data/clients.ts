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
  { name: 'Enterprise Holdings' },
  { name: 'Blaze Pizza' },
  { name: 'Discovery Channel' },
  { name: 'Toys R Us' },
  { name: 'Resorts World' },
  { name: 'Axe / Unilever' },
  { name: 'NETGEAR / Arlo' },
  { name: 'Tupperware' },
  { name: 'Orange Theory' },
  { name: 'Warner Bros.' },
  { name: 'Penfolds' },
  { name: 'UC Irvine' },
  { name: 'AutoNation' },
  { name: 'Bain & Company' },
  { name: "Wolfgang's Steakhouse" },
];
