import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ExperienceSection from "@/components/ExperienceSection";
import RecommendationSection from "@/components/RecommendationSection";
import { getSiteContent } from "@/lib/content";
import type { Locale } from "@/middleware";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const site = getSiteContent(locale);

  return (
    <main>
      <Hero site={site} />
      <WorkSection locale={locale} site={site} />
      <SkillsSection site={site} />
      <IndustriesSection locale={locale} site={site} />
      <ExperienceSection site={site} />
      <RecommendationSection site={site} />
    </main>
  );
}
