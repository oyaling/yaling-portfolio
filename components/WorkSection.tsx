import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";

export default function WorkSection({
  locale,
  site,
}: {
  locale: Locale;
  site: SiteContent;
}) {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        {site.workHeading}
      </h2>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {site.work.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/work/${item.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-[3840/2480] w-full overflow-hidden bg-brand/10">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {item.title}
              </p>
              <h3 className="font-display text-lg font-bold text-ink">
                {item.name}
              </h3>
              <p className="text-sm text-ink/70">{item.desc}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4">
                {item.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
