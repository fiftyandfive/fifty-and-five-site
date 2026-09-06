/**
 * Single source of truth for every credential number and identity fact the
 * site publishes. Organization and Person JSON-LD, the footer credential
 * line, the About page stats, and the llms.txt / llms-full.txt routes all
 * read from here. Change a value here and grep the surfaces listed in the
 * repo before shipping; prose in blog posts is not wired to this file.
 */
const FOUNDED = 2008;

export const FACTS = {
  name: 'Fifty & Five',
  legalName: '5ifty & 5ive LLC',
  alternateNames: ['Fifty and Five', 'Fifty & Five LLC', '5ifty & 5ive LLC', 'fiftyandfive'],
  founder: 'Lucas Vandenberg',
  founded: FOUNDED,
  /** Computed at build time from the founding year. Never hardcode. */
  yearsOperating: new Date().getFullYear() - FOUNDED,
  brandsManaged: 222,
  continents: 5,
  countries: 40,
  verticals: 12,
  wineSpiritsBrands: 34,
  avgRetainerYears: 3,
  clutchRating: '4.9',
  clutchReviewCount: 4,
  phone: '+1-321-450-7550',
  phoneDisplay: '(321) 450-7550',
  address: {
    streetAddress: '1001 N Orange Ave',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    postalCode: '32801',
    addressCountry: 'US',
  },
  email: 'hello@fiftyandfive.com',
  url: 'https://fiftyandfive.com',
} as const;

/** E.164 form derived from the schema form, for tel: links. */
export const PHONE_E164 = FACTS.phone.replace(/[^\d+]/g, '');

/** "1001 N Orange Ave, Orlando, FL 32801" */
export const ADDRESS_LINE = `${FACTS.address.streetAddress}, ${FACTS.address.addressLocality}, ${FACTS.address.addressRegion} ${FACTS.address.postalCode}`;
