'use client';

import { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { trackEvent, gtagEvent } from '@/components/layout/Analytics';
import {
  SMS_CONSENT_LABEL,
  SMS_PHONE_HELPER,
  SMS_PHONE_LABEL,
  SMS_PHONE_REQUIRED_ERROR,
  isPlausiblePhone,
} from '@/lib/sms-consent';

type State = 'idle' | 'submitting' | 'success' | 'error';

const BUDGET_OPTIONS = [
  '$4K–$10K',
  '$10K–$25K',
  '$25K+',
  'Not sure yet',
];

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState<string | null>(null);
  const [smsConsent, setSmsConsent] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  if (state === 'success') {
    return (
      <div className="glass rounded-glass p-8">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
          Got it
        </div>
        <h3 className="mt-2 font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
          Message received.
        </h3>
        <p className="mt-3 text-body text-text-secondary">
          Typical response time: same day. Want to skip the back-and-forth? Book a time above.
        </p>
        <p className="mt-4 font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
          Already a client?{' '}
          <a href="/review" className="text-accent hover:text-accent-light">
            Leave a Google review
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setPhoneError(null);
        const form = e.currentTarget;
        const fd = new FormData(form);
        const phone = String(fd.get('phone') || '').trim();
        // The phone number is optional unless the SMS consent box is checked.
        if (smsConsent && !isPlausiblePhone(phone)) {
          setPhoneError(SMS_PHONE_REQUIRED_ERROR);
          form.querySelector<HTMLInputElement>('input[name="phone"]')?.focus();
          return;
        }
        setState('submitting');
        const payload = {
          name: String(fd.get('name') || ''),
          email: String(fd.get('email') || ''),
          company: String(fd.get('company') || ''),
          budget: String(fd.get('budget') || ''),
          message: String(fd.get('message') || ''),
          honey: String(fd.get('website') || ''),
          phone,
          smsConsent,
          pageUrl: window.location.href,
        };
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({ ok: false }));
          if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
          trackEvent('Contact Form Submit', {
            company: payload.company || '(none)',
            budget: payload.budget || '(none)',
          });
          gtagEvent('generate_lead', {
            event_category: 'contact',
            event_label: payload.company || '(none)',
            value: 1,
          });
          setState('success');
        } catch (err) {
          setState('error');
          setError(err instanceof Error ? err.message : 'Something went wrong');
        }
      }}
      className="glass rounded-glass p-8 md:p-10 space-y-5"
    >
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company / Brand" name="company" />

      <label className="block">
        <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
          Monthly social budget <span className="text-accent">*</span>
        </span>
        <select
          name="budget"
          required
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary focus:outline-none focus:border-accent transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="bg-bg-primary text-text-tertiary">
            Select a range
          </option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-bg-primary text-text-primary">
              {opt}
            </option>
          ))}
        </select>
      </label>

      <Field label="What are you looking for?" name="message" as="textarea" />

      <label className="block">
        <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
          {SMS_PHONE_LABEL} {smsConsent && <span className="text-accent">*</span>}
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required={smsConsent}
          aria-invalid={phoneError ? true : undefined}
          aria-describedby="phone-help"
          onChange={() => phoneError && setPhoneError(null)}
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
        />
        <span id="phone-help" className="mt-2 block text-meta text-text-tertiary">
          {SMS_PHONE_HELPER}
        </span>
        {phoneError && (
          <span role="alert" className="mt-1 block text-meta text-[#FF6B6B]">
            {phoneError}
          </span>
        )}
      </label>

      {/* SMS consent: optional, unchecked by default, separate from every other
          field. Links open in a new tab so reading them never loses the form. */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="smsConsent"
          checked={smsConsent}
          onChange={(e) => {
            setSmsConsent(e.target.checked);
            if (!e.target.checked) setPhoneError(null);
          }}
          className="mt-1 h-4 w-4 shrink-0 accent-[#C41E3A] cursor-pointer"
        />
        <span className="text-meta text-text-secondary leading-[1.55]">
          <ConsentLabel />
        </span>
      </label>

      {/* Honeypot, hidden from users, bots fill it */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="pt-2 flex items-center gap-4 flex-wrap">
        <MagneticButton type="submit" variant="primary" size="large">
          {state === 'submitting' ? 'Sending…' : 'Send →'}
        </MagneticButton>
        {state === 'error' && (
          <span className="text-meta text-[#FF6B6B]">
            {error || 'Something went wrong. Try again or email hello@fiftyandfive.com.'}
          </span>
        )}
      </div>
      <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
        Typical response time: same day
      </p>
    </form>
  );
}

/** Renders SMS_CONSENT_LABEL verbatim, turning its two policy names into links. */
function ConsentLabel() {
  const [beforePrivacy, afterPrivacy] = SMS_CONSENT_LABEL.split('Privacy Policy');
  const [between, afterTerms] = afterPrivacy.split('Terms');
  const link = 'text-accent hover:text-accent-light underline underline-offset-2';
  return (
    <>
      {beforePrivacy}
      <a href="/privacy" target="_blank" rel="noopener" className={link}>
        Privacy Policy
      </a>
      {between}
      <a href="/terms" target="_blank" rel="noopener" className={link}>
        Terms
      </a>
      {afterTerms}
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  as = 'input',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
}) {
  return (
    <label className="block">
      <span className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full bg-transparent border border-glass-border rounded-lg px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
        />
      )}
    </label>
  );
}
