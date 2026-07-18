import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/middleware";
import type { CaseStudy, SiteContent } from "@/lib/content";

export default function CaseStudyView({
  locale,
  site,
  caseStudy,
  others,
}: {
  locale: Locale;
  site: SiteContent;
  caseStudy: CaseStudy;
  others: CaseStudy[];
}) {
  const viewWorkCta = site.work[0]?.cta ?? "View work";

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest">
          {caseStudy.cardTitle}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {caseStudy.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">{caseStudy.subtitle}</p>

        <div className="relative mt-10 aspect-[3840/2480] w-full overflow-hidden rounded-2xl bg-forest/10">
          <Image
            src={caseStudy.cover}
            alt={caseStudy.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-10 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Role
            </p>
            <p className="mt-1 font-semibold text-ink">{caseStudy.meta.role}</p>
          </div>
          {caseStudy.meta.duration && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                Duration
              </p>
              <p className="mt-1 font-semibold text-ink">
                {caseStudy.meta.duration}
              </p>
            </div>
          )}
          {caseStudy.meta.team && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                Team
              </p>
              <p className="mt-1 font-semibold text-ink">{caseStudy.meta.team}</p>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.meta.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest"
            >
              {skill}
            </span>
          ))}
        </div>
        {caseStudy.meta.teamAvatars && caseStudy.meta.teamAvatars.length > 0 && (
          <div className="mt-6 flex -space-x-3">
            {caseStudy.meta.teamAvatars.map((avatar, i) => (
              <div
                key={i}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cream"
              >
                <Image
                  src={avatar}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-ink">1. Product</h3>
          <p className="mt-2 text-ink/70">{caseStudy.product}</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-ink">2. User</h3>
          <p className="mt-2 text-ink/70">{caseStudy.user}</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-ink">
            3. User story
          </h3>
          <p className="mt-2 text-ink/70">{caseStudy.userStory}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          Summary
        </h2>
        <p className="mt-4 leading-relaxed text-ink/70">{caseStudy.summary}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          Problem
        </h2>
        <div className="mt-4 space-y-8">
          {caseStudy.problem.items.map((item, i) => (
            <div key={i}>
              <p className="text-ink/70">{item.text}</p>
              {item.image && (
                <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-xl bg-forest/10 p-5 font-semibold text-forest">
          📌 {caseStudy.problem.challenge}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">Goal</h2>
        {caseStudy.goal.intro && (
          <p className="mt-4 text-ink/70">{caseStudy.goal.intro}</p>
        )}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {caseStudy.goal.items.map((item, i) => (
            <div key={i} className="rounded-xl border border-ink/10 bg-white/50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <div>
                  {item.title && (
                    <p className="font-display font-bold text-ink">
                      {item.title}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-ink/70">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          {caseStudy.process.heading}
        </h2>
        <div className="mt-8 space-y-12">
          {caseStudy.process.steps.map((step, i) => (
            <div key={i}>
              <h3 className="font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">{step.body}</p>
              {step.note && (
                <p className="mt-3 rounded-xl bg-forest/10 p-4 text-sm font-semibold text-forest">
                  📌 {step.note}
                </p>
              )}
              {step.prototypeUrl && (
                <a
                  href={step.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream hover:bg-forest/90"
                >
                  {step.prototypeLabel ?? "View prototype"}
                  <span aria-hidden>↗</span>
                </a>
              )}
              {step.image && (
                <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 800px, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
              {step.gallery && (
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {step.gallery.map((g, gi) => (
                    <div key={gi}>
                      <div className="relative aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
                        <Image
                          src={g.src}
                          alt={g.label}
                          fill
                          sizes="(min-width: 1024px) 260px, 33vw"
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-2 text-xs text-ink/60">{g.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          Final solution
        </h2>
        {caseStudy.finalSolution.intro && (
          <p className="mt-4 text-ink/70">{caseStudy.finalSolution.intro}</p>
        )}
        <div className="mt-8 space-y-12">
          {caseStudy.finalSolution.items.map((item, i) => (
            <div key={i}>
              <h3 className="font-display text-lg font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">{item.body}</p>
              {item.video ? (
                <div className="mt-4 w-full overflow-hidden rounded-xl bg-forest/10">
                  <video
                    src={item.video}
                    controls
                    playsInline
                    className="w-full"
                  />
                </div>
              ) : (
                item.image && (
                  <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-contain"
                    />
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          Outcome
        </h2>
        {caseStudy.outcome.video ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="w-full overflow-hidden rounded-xl bg-forest/10">
              <video
                src={caseStudy.outcome.video}
                controls
                playsInline
                className="w-full"
              />
            </div>
            <p className="rounded-xl bg-forest/10 p-5 text-sm leading-relaxed text-forest">
              {caseStudy.flow}
            </p>
          </div>
        ) : (
          caseStudy.outcome.image && (
            <div className="relative mt-6 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
              <Image
                src={caseStudy.outcome.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-contain"
              />
            </div>
          )
        )}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {caseStudy.outcome.items.map((item, i) => (
            <div key={i} className="rounded-xl border border-ink/10 bg-white/50 p-5">
              <p className="font-display font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
        {!caseStudy.outcome.video && (
          <p className="mt-8 text-sm text-ink/50">{caseStudy.flow}</p>
        )}
      </section>

      {caseStudy.learning && (
        <section className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            Learning
          </h2>
          <p className="mt-4 text-ink/70">{caseStudy.learning.intro}</p>
          <p className="mt-3 leading-relaxed text-ink/70">
            {caseStudy.learning.body}
          </p>
          {caseStudy.learning.image && (
            <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-forest/10">
              <Image
                src={caseStudy.learning.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-contain"
              />
            </div>
          )}
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          {site.otherWorksHeading}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/${locale}/work/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/50 transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[3840/2480] w-full overflow-hidden bg-forest/10">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                  {item.cardTitle}
                </p>
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.subtitle}
                </h3>
                <span className="mt-auto pt-4 text-sm font-semibold text-ink underline decoration-forest decoration-2 underline-offset-4">
                  {viewWorkCta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
