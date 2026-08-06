import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamilies: Story = {
  render: () => (
    <div className="flex flex-col gap-6 bg-cream p-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink/50">
          font-display — Poppins (600 / 700 / 800)
        </p>
        <p className="font-display text-3xl font-extrabold text-ink">
          Ya-Ling O — Product Designer
        </p>
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink/50">
          font-body — Inter (400 default)
        </p>
        <p className="font-body text-lg text-ink">
          A product designer experienced in product strategy, UX/UI and System Thinking.
        </p>
      </div>
    </div>
  ),
};

export const TypeScale: Story = {
  render: () => (
    <div className="flex flex-col gap-6 bg-cream p-6">
      {[
        {
          label: "H1 — Hero name",
          className: "font-display text-4xl font-extrabold text-brand sm:text-5xl",
          sample: "YA-LING O",
        },
        {
          label: "H2 — Hero headline",
          className: "font-display text-2xl font-bold text-ink sm:text-3xl",
          sample: "A product designer experienced in product strategy, UX/UI.",
        },
        {
          label: "H2 — Section heading",
          className: "font-display text-3xl font-extrabold text-ink sm:text-4xl",
          sample: "Experience",
        },
        {
          label: "H2 — Case study section heading",
          className: "font-display text-2xl font-extrabold text-ink",
          sample: "Summary",
        },
        {
          label: "H3 — Card / step title",
          className: "font-display text-lg font-bold text-ink",
          sample: "Enrolment and revenue management",
        },
        {
          label: "Body — default",
          className: "text-ink/70",
          sample: "My experience across admin interfaces, CMS features, B2B products.",
        },
        {
          label: "Small — sm",
          className: "text-sm text-ink/70",
          sample: "Helps learning providers market, manage and sell courses.",
        },
        {
          label: "Eyebrow — xs uppercase",
          className: "text-xs font-semibold uppercase tracking-wide text-brand",
          sample: "Palette - E-learning platform admin",
        },
      ].map((row) => (
        <div key={row.label} className="border-b border-ink/10 pb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
            {row.label} — <code className="normal-case">{row.className}</code>
          </p>
          <p className={row.className}>{row.sample}</p>
        </div>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-3 bg-cream p-6 font-display text-2xl text-ink">
      <p className="font-semibold">Semibold 600 — Poppins</p>
      <p className="font-bold">Bold 700 — Poppins</p>
      <p className="font-extrabold">Extrabold 800 — Poppins</p>
    </div>
  ),
};
