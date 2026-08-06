import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Foundations/Spacing & Radius",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const SPACING_ROWS: { label: string; className: string; px: string }[] = [
  { label: "gap-2 / p-2", className: "h-8 w-8", px: "8px" },
  { label: "gap-3 / p-3", className: "h-12 w-12", px: "12px" },
  { label: "gap-4 / p-4", className: "h-16 w-16", px: "16px" },
  { label: "gap-6 / p-6", className: "h-24 w-24", px: "24px" },
  { label: "gap-8", className: "h-32 w-32", px: "32px" },
  { label: "gap-10 / py-10", className: "h-40 w-40", px: "40px" },
  { label: "gap-12 / py-12", className: "h-48 w-48", px: "48px" },
];

export const SpacingScale: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6 bg-cream p-6">
      {SPACING_ROWS.map((row) => (
        <div key={row.label} className="flex flex-col items-center gap-2">
          <div className={`rounded bg-brand/30 ${row.className}`} />
          <p className="text-xs text-ink/60">{row.label}</p>
          <p className="text-xs text-ink/40">{row.px}</p>
        </div>
      ))}
    </div>
  ),
};

export const ContainerWidths: Story = {
  render: () => (
    <div className="flex flex-col gap-4 bg-cream p-6">
      <div>
        <p className="mb-2 text-xs font-semibold text-ink/50">
          max-w-6xl — homepage sections, work/industry grids
        </p>
        <div className="mx-auto h-6 max-w-6xl rounded bg-brand/20" />
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold text-ink/50">
          max-w-4xl — case study prose sections, recommendation
        </p>
        <div className="mx-auto h-6 max-w-4xl rounded bg-brand/30" />
      </div>
      <p className="text-xs text-ink/40">
        Both use <code>mx-auto px-6</code> for the horizontal gutter.
      </p>
    </div>
  ),
};

export const RadiusScale: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 bg-cream p-6">
      {[
        { label: "rounded-xl — images, callouts", className: "rounded-xl" },
        { label: "rounded-2xl — cards, hero image", className: "rounded-2xl" },
        { label: "rounded-full — pills, badges, avatars", className: "rounded-full" },
      ].map((r) => (
        <div key={r.label} className="flex flex-col items-center gap-2">
          <div className={`h-20 w-20 border border-ink/10 bg-white/70 ${r.className}`} />
          <p className="max-w-[8rem] text-center text-xs text-ink/60">{r.label}</p>
        </div>
      ))}
    </div>
  ),
};
