import type { SiteContent } from "@/lib/content";
import HeroMedia from "./HeroMedia";

export default function Hero({ site }: { site: SiteContent }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-4xl font-extrabold text-brand sm:text-5xl">
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
          className="mt-8 inline-block border-b-2 border-ink pb-1 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          {site.hero.resumeCta}
        </a>
      </div>

      <HeroMedia
        image={site.profileImage}
        video="/hero-dark.mp4"
        poster="/hero-dark-poster.jpg"
        alt={site.hero.name}
      />
    </section>
  );
}
