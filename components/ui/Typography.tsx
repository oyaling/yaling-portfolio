import type { ReactNode } from "react";

/** Section-level H2 used at the top of every homepage section. */
export function SectionHeading({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <h2 id={id} className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

/** Small uppercase label, e.g. work card eyebrow or case study meta labels. */
export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "muted";
}) {
  const toneClass = tone === "brand" ? "text-brand" : "text-ink/50";
  return (
    <p className={`text-xs font-semibold uppercase tracking-wide ${toneClass}`}>
      {children}
    </p>
  );
}

/** Left-accented list item used in the Skills section. */
export function AccentListItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-brand/40 pl-5">
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-ink/70">{description}</p>
    </div>
  );
}
