'use client';

import { useState } from 'react';
import { MagneticButton } from './MagneticButton';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="glass rounded-glass p-8">
        <div className="font-mono text-caption uppercase text-accent tracking-[0.1em]">
          Got it
        </div>
        <h3 className="mt-2 font-serif text-[32px] leading-[1.1] tracking-[-0.02em]">
          Message received.
        </h3>
        <p className="mt-3 text-body text-text-secondary">
          Typical response time: same day. Want to skip the back-and-forth? Book a time below.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass rounded-glass p-8 md:p-10 space-y-5"
    >
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company / Brand" name="company" />
      <Field
        label="What are you looking for?"
        name="message"
        as="textarea"
      />
      <div className="pt-2">
        <MagneticButton type="submit" variant="primary" size="large">
          Send It →
        </MagneticButton>
      </div>
      <p className="font-mono text-caption uppercase text-text-tertiary tracking-[0.1em]">
        Typical response time: same day
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
