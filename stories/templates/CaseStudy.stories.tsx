import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Locale } from "@/middleware";
import { getSiteContent, getCaseStudies } from "@/lib/content";
import CaseStudyView from "@/components/CaseStudyView";

const locale: Locale = "en";
const site = getSiteContent(locale);
const caseStudies = getCaseStudies(locale);

const meta = {
  title: "Templates/Case Study",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function buildStory(slug: string): Story {
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)!;
  const others = caseStudies.filter((cs) => cs.slug !== slug);
  return {
    render: () => (
      <CaseStudyView locale={locale} site={site} caseStudy={caseStudy} others={others} />
    ),
  };
}

export const AdminEnrolment: Story = buildStory(
  "designing-admin-experience-for-better-enrolment-and-revenue-management"
);

export const BlockFeature: Story = buildStory(
  "designing-a-block-based-feature-for-website-customisation"
);

export const SurveyAssessment: Story = buildStory(
  "designing-a-survey-experience-and-visualising-assessment-data"
);
