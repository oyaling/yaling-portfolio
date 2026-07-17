import type { SiteContent } from "@/lib/content";

export default function SkillsSection({ site }: { site: SiteContent }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        {site.skillsHeading}
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {site.skills.map((skill) => (
          <div key={skill.title} className="border-l-2 border-forest/40 pl-5">
            <h3 className="font-display text-lg font-bold text-ink">
              {skill.title}
            </h3>
            <p className="mt-2 text-ink/70">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
