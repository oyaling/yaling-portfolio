import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/ui/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["pill", "underline", "border-bottom", "nav"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  args: {
    variant: "pill",
    href: "#",
    children: (
      <>
        View prototype <span aria-hidden>↗</span>
      </>
    ),
  },
};

export const Underline: Story = {
  args: { variant: "underline", href: "#", children: "View work" },
};

export const BorderBottom: Story = {
  args: { variant: "border-bottom", href: "#", children: "Download resume" },
};

export const Nav: Story = {
  args: { variant: "nav", href: "#", children: "Experience" },
};

export const AllVariants: Story = {
  args: { variant: "pill", href: "#", children: "" },
  render: () => (
    <div className="flex flex-wrap items-center gap-8 bg-cream p-8">
      <Button variant="pill" href="#">
        View prototype ↗
      </Button>
      <Button variant="underline" href="#">
        View work
      </Button>
      <Button variant="border-bottom" href="#">
        Download resume
      </Button>
      <Button variant="nav" href="#">
        Experience
      </Button>
    </div>
  ),
};
