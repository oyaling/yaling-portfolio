import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "@/components/ui/Badge";

const meta = {
  title: "Components/Badge",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Badge>UX design</Badge>,
};

export const SkillGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 bg-cream p-6">
      {[
        "UX design",
        "UI design",
        "Information Architecture",
        "Design System",
        "Usability Test",
        "End-to-End Product Design",
      ].map((skill) => (
        <Badge key={skill}>{skill}</Badge>
      ))}
    </div>
  ),
};
