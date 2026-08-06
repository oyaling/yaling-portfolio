import Image from "next/image";
import Link from "next/link";

/** Project card used in WorkSection and the "Other works" grid. */
export function WorkCard({
  href,
  cover,
  eyebrow,
  title,
  description,
  cta,
}: {
  href: string;
  cover: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[3840/2480] w-full overflow-hidden bg-brand/10">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {eyebrow}
        </p>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="text-sm text-ink/70">{description}</p>
        <span className="mt-auto pt-4 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4">
          {cta}
        </span>
      </div>
    </Link>
  );
}

/** Industry/experience-area card with emoji header, used in IndustriesSection. */
export function IndustryCard({
  emoji,
  title,
  tag,
  body,
  cta,
  href,
}: {
  emoji: string;
  title: string;
  tag: string;
  body: string;
  cta?: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/50 p-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      </div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand">
        {tag}
      </p>
      <p className="mt-3 text-sm text-ink/70">{body}</p>
      {href && cta && (
        <Link
          href={href}
          className="mt-4 inline-block text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}

/** Numbered goal card used in the case study "Goal" grid. */
export function NumberedCard({
  number,
  title,
  body,
}: {
  number: number;
  title?: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white/50 p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-cream">
          {number}
        </span>
        <div>
          {title && <p className="font-display font-bold text-ink">{title}</p>}
          <p className="mt-1 text-sm text-ink/70">{body}</p>
        </div>
      </div>
    </div>
  );
}

/** Plain title+body card used in the case study "Outcome" grid. */
export function OutcomeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white/50 p-5">
      <p className="font-display font-bold text-ink">{title}</p>
      <p className="mt-2 text-sm text-ink/70">{body}</p>
    </div>
  );
}
