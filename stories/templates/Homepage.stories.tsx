import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Locale } from "@/middleware";
import { getSiteContent } from "@/lib/content";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ExperienceSection from "@/components/ExperienceSection";
import RecommendationSection from "@/components/RecommendationSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locale: Locale = "en";
const site = getSiteContent(locale);

const meta = {
  title: "Templates/Homepage",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Full homepage, composed from the real page components + real English content. */
export const FullPage: Story = {
  render: () => (
    <>
      <Navbar locale={locale} site={site} />
      <main>
        <Hero site={site} />
        <WorkSection locale={locale} site={site} />
        <SkillsSection site={site} />
        <IndustriesSection locale={locale} site={site} />
        <ExperienceSection site={site} />
        <RecommendationSection site={site} />
      </main>
      <Footer locale={locale} site={site} />
    </>
  ),
};

export const HeroOnly: Story = {
  render: () => <Hero site={site} />,
};

export const WorkGrid: Story = {
  render: () => <WorkSection locale={locale} site={site} />,
};

export const SkillsGrid: Story = {
  render: () => <SkillsSection site={site} />,
};

export const IndustriesGrid: Story = {
  render: () => <IndustriesSection locale={locale} site={site} />,
};

export const ExperienceList: Story = {
  render: () => <ExperienceSection site={site} />,
};

export const Recommendation: Story = {
  render: () => <RecommendationSection site={site} />,
};
