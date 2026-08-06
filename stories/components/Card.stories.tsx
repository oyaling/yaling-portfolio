import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WorkCard, IndustryCard, NumberedCard, OutcomeCard } from "@/components/ui/Card";

const IMG = "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311";

const meta = {
  title: "Components/Card",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Work: Story = {
  render: () => (
    <div className="max-w-sm bg-cream p-6">
      <WorkCard
        href="#"
        cover={`${IMG}/67370fcb86b2e6ca5c5f1150_Designthinking_Final%20solution3.jpg`}
        eyebrow="Palette - E-learning platform admin"
        title="Enrolment and revenue management"
        description="Helps learning providers market, manage and sell courses."
        cta="View work"
      />
    </div>
  ),
};

export const Industry: Story = {
  render: () => (
    <div className="max-w-sm bg-cream p-6">
      <IndustryCard
        emoji="📚"
        title="Course Sales platform"
        tag="(B2B / SaaS / Education)"
        body="Palette (renamed to Course-hub) is a service that helps learning course providers to market, manage and sell courses."
        cta="View work"
        href="#"
      />
    </div>
  ),
};

export const NumberedGoal: Story = {
  render: () => (
    <div className="max-w-sm bg-cream p-6">
      <NumberedCard
        number={1}
        title="Reduce Task Time for Finding Enrolments"
        body="Implement an improved information structure and intuitive view pages to save users time."
      />
    </div>
  ),
};

export const Outcome: Story = {
  render: () => (
    <div className="max-w-sm bg-cream p-6">
      <OutcomeCard
        title="100% positive feedback from UAT testing"
        body="Before launching the new version, we conducted user acceptance testing with all existing clients."
      />
    </div>
  ),
};
