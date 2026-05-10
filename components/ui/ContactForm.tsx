'use client';

import { useState } from 'react';
import { trackEvent } from '@/components/layout/Analytics';

type State = 'idle' | 'submitting' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Organic Social Management',
  'Paid Social / Ad Management',
  'Content Production',
  'Brand Strategy',
  'Multi-practice retainer',
  "Not sure yet — let's talk",
];

const BUDGET_OPTIONS = [
  '$1.5K–$3K',
  '$3K–$8K',
  '$8K–$15K',
  '$15K–$25K',
  '$25K+',
  'Not sure yet',
];

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState<string | null>(null);

  if (state === 'success') {
    return (
      <div className="border border-ff-fade-30 rounded p-8">
        <div className="font-editorial text-[28px] text-ff-paper">
          Thanks. I&rsquo;ll write back today.
        </div>
        <div className="mt-2 font-receipt text-[14px] text-ff-fade-50">
          &mdash; Lucas
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setState('submitting');
        setError(null);
        const fd = new FormData(e.currentTarget);
        const payload = {
          name: String(fd.get('name') || ''),
          email: String(fd.get('email') || ''),
          company: String(fd.get('company') || ''),
          service: String(fd.get('service') || ''),
          budget: String(fd.get('budget') || ''),
          message: String(fd.get('message') || ''),
          honey: String(fd.get('website') || ''),
        };
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({ ok: false }));
          if (!res.ok || !data.ok) throw new Error(data.error || 'Submission failed');
          trackEvent('form_submit_contact', {
            company: payload.company || '(none)',
            budget: payload.budget || '(none)',
            service: payload.service || '(none)',
          });
          setState('success');
        } catch (err) {
          setState('error');
          setError(err instanceof Error ? err.message : 'Something went wrong');
        }
      }}
      className="border border-ff-fade-30 rounded p-8 md:p-10 space-y-5"
    >
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company / Brand" name="company" />

      <SelectField label="What are you looking for?" name="service" options={SERVICE_OPTIONS} required />
      <SelectField label="Estimated monthly budget" name="budget" options={BUDGET_OPTIONS} />

      <Field label="Project notes" name="message" as="textarea" />

      {/* Honeypot */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="pt-2 flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="bg-ff-stamp text-ff-paper font-receipt text-[14px] uppercase tracking-[0.05em] px-8 py-4 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {state === 'submitting' ? 'Sending…' : 'Send the receipt →'}
        </button>
        {state === 'error' && (
          <span className="text-[14px] text-ff-stamp">
            {error || 'Something went wrong. Try again or email lucas@fiftyandfive.com.'}
          </span>
        )}
      </div>
      <p className="font-receipt text-[11px] uppercase tracking-[0.12em] text-ff-fade-50">
        TYPICAL RESPONSE TIME: SAME DAY
      </p>
    </form>
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
      <span className="font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-fade-50">
        {label} {required && <span className="text-ff-stamp">*</span>}
      </span>
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className="mt-2 w-full bg-transparent border border-ff-fade-30 rounded px-4 py-3 text-body text-ff-paper placeholder:text-ff-fade-50 focus:outline-none focus:border-ff-stamp transition-colors resize-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="mt-2 w-full bg-transparent border border-ff-fade-30 rounded px-4 py-3 text-body text-ff-paper placeholder:text-ff-fade-50 focus:outline-none focus:border-ff-stamp transition-colors"
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-receipt text-[12px] uppercase tracking-[0.1em] text-ff-fade-50">
        {label} {required && <span className="text-ff-stamp">*</span>}
      </span>
      <select
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border border-ff-fade-30 rounded px-4 py-3 text-body text-ff-paper focus:outline-none focus:border-ff-stamp transition-colors appearance-none"
        defaultValue=""
      >
        <option value="" disabled className="bg-ff-bg text-ff-fade-50">
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ff-bg text-ff-paper">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
