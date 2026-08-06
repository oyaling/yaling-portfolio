import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeading, Eyebrow, AccentListItem } from "@/components/ui/Typography";

const meta = {
  title: "Components/Typography",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionHeadingExample: Story = {
  name: "Section heading",
  render: () => (
    <div className="bg-cream p-6">
      <SectionHeading>Experience</SectionHeading>
    </div>
  ),
};

export const EyebrowExample: Story = {
  name: "Eyebrow",
  render: () => (
    <div className="flex flex-col gap-4 bg-cream p-6">
      <Eyebrow tone="brand">Palette - E-learning platform admin</Eyebrow>
      <Eyebrow tone="muted">Role</Eyebrow>
    </div>
  ),
};

export const AccentListItemExample: Story = {
  name: "Accent list item",
  render: () => (
    <div className="max-w-sm bg-cream p-6">
      <AccentListItem
        title="User Research"
        description="Qualitative and quantitative methods, usability testing, stakeholder interviews"
      />
    </div>
  ),
};
