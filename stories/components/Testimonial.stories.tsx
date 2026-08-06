import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Testimonial } from "@/components/ui/Testimonial";

const meta = {
  title: "Components/Testimonial",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl bg-cream p-6">
      <Testimonial
        quote="Ya-ling is a talented, professional and versatile product designer and a delight to work with."
        avatar="https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/6655cd0f57bd4caa0225f8fa_gin.jpeg"
        name="Gin Atkins"
        meta="GM at Palette, Nov 7 2021 · managed Ya-ling directly"
      />
    </div>
  ),
};
