/**
 * SMS consent copy for A2P 10DLC. Verbatim from fiftyandfive-sms-compliance.md,
 * section 1. Do not edit here: change the source file and copy it across, or
 * scripts/verify-content.mjs fails the build on the mismatch.
 *
 * The form renders this label, and the API stamps the same constant onto every
 * consent record server side, so the stored text is what was actually live on
 * the page rather than whatever string a client chose to send.
 */
export const SMS_CONSENT_LABEL =
  'I agree to receive text messages from Fifty & Five at the mobile number above about my inquiry, including call scheduling and project updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy and Terms.';

export const SMS_PHONE_LABEL = 'Mobile phone';
export const SMS_PHONE_HELPER = 'Optional. Only needed if you want us to text you.';
export const SMS_PHONE_REQUIRED_ERROR = 'Enter a mobile number to receive texts, or uncheck the box.';

/** A usable mobile number: 10 to 15 digits once formatting is stripped. */
export function isPlausiblePhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}
