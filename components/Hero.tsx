import Image from "next/image";
import type { SiteContent } from "@/lib/content";

export default function Hero({ site }: { site: SiteContent }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
        <div className="absolute inset-0 rounded-full bg-forest/10 blur-2xl" />
        <div className="relative flex flex-col items-center gap-3">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-40 sm:w-40">
            <Image
              src={site.profileImage}
              alt="Ya-ling O"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center font-display text-2xl font-extrabold leading-tight text-forest sm:text-3xl">
            {site.hero.greetings.map((g) => (
              <div key={g}>{g}</div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-display text-4xl font-extrabold text-forest sm:text-5xl">
          {site.hero.name}
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
          {site.hero.headline}
        </h2>
        <p className="mt-5 max-w-xl text-ink/70">{site.hero.body}</p>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block border-b-2 border-ink pb-1 text-sm font-semibold text-ink hover:border-forest hover:text-forest"
        >
          {site.hero.resumeCta}
        </a>
      </div>
    </section>
  );
}
