import Image from "next/image";
import type { SiteContent } from "@/lib/content";

export default function RecommendationSection({ site }: { site: SiteContent }) {
  const { recommendation } = site;
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        {site.recommendationHeading}
      </h2>
      <blockquote className="mt-8 rounded-2xl border border-ink/10 bg-surface/50 p-8">
        <p className="text-lg italic leading-relaxed text-ink/80">
          &ldquo;{recommendation.quote}&rdquo;
        </p>
        <footer className="mt-6 flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={recommendation.avatar}
              alt={recommendation.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-ink">{recommendation.name}</p>
            <p className="text-sm text-ink/60">{recommendation.meta}</p>
          </div>
        </footer>
      </blockquote>
    </section>
  );
}
