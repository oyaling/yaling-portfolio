import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";

export default function IndustriesSection({
  locale,
  site,
}: {
  locale: Locale;
  site: SiteContent;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        {site.industriesHeading}
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {site.industries.map((industry) => (
          <div
            key={industry.title}
            className="rounded-2xl border border-ink/10 bg-white/50 p-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{industry.emoji}</span>
              <h3 className="font-display text-lg font-bold text-ink">
                {industry.title}
              </h3>
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-forest">
              {industry.tag}
            </p>
            <p className="mt-3 text-sm text-ink/70">{industry.body}</p>
            {industry.slug && (
              <Link
                href={`/${locale}/work/${industry.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-ink underline decoration-forest decoration-2 underline-offset-4"
              >
                {industry.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
