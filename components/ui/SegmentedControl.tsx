"use client";

/**
 * Generalised version of the LanguageSwitcher pill-toggle pattern.
 * components/LanguageSwitcher.tsx keeps its own locale-routing logic;
 * this documents the reusable visual pattern for Storybook/future use.
 */
export function SegmentedControl({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/15 bg-white/60 p-1 text-sm font-semibold">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          aria-current={opt.value === value}
          className={`rounded-full px-3 py-1 transition-colors ${
            opt.value === value ? "bg-brand text-cream" : "text-ink/60 hover:text-ink"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
