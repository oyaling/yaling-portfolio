import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/middleware";
import type { CaseStudy, SiteContent } from "@/lib/content";

function CaseImage({
  src,
  alt,
  w,
  h,
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
}) {
  // Wide multi-screen images break out of the reading column so the UI stays legible.
  if (w && h) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="relative left-1/2 mt-6 block w-[min(94vw,1400px)] -translate-x-1/2 overflow-hidden rounded-xl border border-ink/10 bg-white"
      >
        <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full" />
      </a>
    );
  }
  return (
    <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-brand/10">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 800px, 100vw"
        className="object-contain"
      />
    </div>
  );
}

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
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {caseStudy.cardTitle}
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {caseStudy.cardName}
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">{caseStudy.subtitle}</p>

        <div className="relative mt-10 aspect-[3840/2480] w-full overflow-hidden rounded-2xl bg-brand/10">
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
              className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
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
                <div className="relative mt-4 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-brand/10">
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
        <p className="mt-6 rounded-xl bg-brand/10 p-5 font-semibold text-brand">
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
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-cream">
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
                <p className="mt-3 rounded-xl bg-brand/10 p-4 text-sm font-semibold text-brand">
                  📌 {step.note}
                </p>
              )}
              {step.prototypeUrl && (
                <a
                  href={step.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream hover:bg-brand/90"
                >
                  {step.prototypeLabel ?? "View prototype"}
                  <span aria-hidden>↗</span>
                </a>
              )}
              {step.image && (
                <CaseImage
                  src={step.image}
                  alt={step.title}
                  w={step.imageW}
                  h={step.imageH}
                />
              )}
              {step.gallery && (
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {step.gallery.map((g, gi) => (
                    <div key={gi}>
                      <div className="relative aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-brand/10">
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
        {caseStudy.finalSolution.linkUrl && (
          <a
            href={caseStudy.finalSolution.linkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream hover:bg-brand/90"
          >
            {caseStudy.finalSolution.linkLabel ?? "Open the Figma file"}
            <span aria-hidden>↗</span>
          </a>
        )}
        <div className="mt-8 space-y-12">
          {caseStudy.finalSolution.items.map((item, i) => (
            <div key={i}>
              <h3 className="font-display text-lg font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">{item.body}</p>
              {item.video ? (
                <div className="mt-4 w-full overflow-hidden rounded-xl bg-brand/10">
                  <video
                    src={item.video}
                    controls
                    playsInline
                    className="w-full"
                  />
                </div>
              ) : (
                item.image && (
                  <CaseImage
                    src={item.image}
                    alt={item.title}
                    w={item.imageW}
                    h={item.imageH}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {(caseStudy.outcome.items.length > 0 ||
        caseStudy.outcome.video ||
        caseStudy.outcome.image) && (
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          Outcome
        </h2>
        {caseStudy.outcome.video ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="w-full overflow-hidden rounded-xl bg-brand/10">
              <video
                src={caseStudy.outcome.video}
                controls
                playsInline
                className="w-full"
              />
            </div>
            <p className="rounded-xl bg-brand/10 p-5 text-sm leading-relaxed text-brand">
              {caseStudy.flow}
            </p>
          </div>
        ) : (
          caseStudy.outcome.image && (
            <div className="relative mt-6 aspect-[3024/1964] w-full overflow-hidden rounded-xl bg-brand/10">
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
        {!caseStudy.outcome.video && caseStudy.flow && (
          <p className="mt-8 text-sm text-ink/50">{caseStudy.flow}</p>
        )}
      </section>
      )}

      {caseStudy.learning && (
        <section className="mx-auto max-w-4xl px-6 py-10">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            {caseStudy.learning.items ? "Reflection" : "Learning"}
          </h2>
          <p className="mt-4 text-ink/70">{caseStudy.learning.intro}</p>
          {caseStudy.learning.body && (
            <p className="mt-3 leading-relaxed text-ink/70">
              {caseStudy.learning.body}
            </p>
          )}
          {caseStudy.learning.items && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {caseStudy.learning.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-ink/10 bg-white/50 p-5"
                >
                  <p className="font-display font-bold text-brand">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          )}
          {caseStudy.learning.image && (
            <CaseImage src={caseStudy.learning.image} alt="" />
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
              <div className="relative aspect-[3840/2480] w-full overflow-hidden bg-brand/10">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {item.cardTitle}
                </p>
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.cardName}
                </h3>
                <p className="text-sm text-ink/70">{item.cardDesc}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4">
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
