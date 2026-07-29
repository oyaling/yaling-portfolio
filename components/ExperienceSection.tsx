import type { SiteContent } from "@/lib/content";

export default function ExperienceSection({ site }: { site: SiteContent }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {site.experienceHeading}
        </h2>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4"
        >
          {site.hero.resumeCta}
        </a>
      </div>

      <div className="mt-10 space-y-10">
        {site.experience.map((job) => (
          <div key={job.role} className="border-t border-ink/10 pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg font-bold text-ink hover:text-brand"
              >
                {job.role}
              </a>
              {job.location && (
                <span className="text-sm text-brand">{job.location}</span>
              )}
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
