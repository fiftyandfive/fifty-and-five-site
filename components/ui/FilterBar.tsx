'use client';

type Props = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
};

export function FilterBar({ options, value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-full px-4 py-2 text-[13px] font-medium border transition-all ${
              active
                ? 'bg-accent text-white border-accent'
                : 'border-glass-border text-text-secondary hover:text-text-primary hover:border-white/20'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
