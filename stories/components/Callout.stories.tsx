import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Callout } from "@/components/ui/Callout";

const meta = {
  title: "Components/Callout",
  component: Callout,
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: "select", options: ["default", "sm"] },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Challenge: Story = {
  args: {
    children:
      "How might we streamline the enrolment checking experience to improve efficiency?",
  },
};

export const Note: Story = {
  args: {
    size: "sm",
    children:
      "Opportunity: extracting valuable marketing insights from sales data could meet clients' expectations.",
  },
};
