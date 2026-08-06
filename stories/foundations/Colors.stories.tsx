import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const BASE_COLORS: { name: string; className: string; value: string }[] = [
  { name: "cream", className: "bg-cream", value: "#faf1e4" },
  { name: "brand", className: "bg-brand", value: "#D4742A" },
  { name: "ink", className: "bg-ink", value: "#2c2b29" },
];

// Tailwind's scanner needs literal class strings, not template-built ones
// (`bg-${base}/${step}` would never be detected), so every combination is
// spelled out explicitly here.
const BRAND_OPACITIES = [
  { label: "brand/100", className: "bg-brand" },
  { label: "brand/90", className: "bg-brand/90" },
  { label: "brand/70", className: "bg-brand/70" },
  { label: "brand/40", className: "bg-brand/40" },
  { label: "brand/10", className: "bg-brand/10" },
];
const INK_OPACITIES = [
  { label: "ink/100", className: "bg-ink" },
  { label: "ink/80", className: "bg-ink/80" },
  { label: "ink/70", className: "bg-ink/70" },
  { label: "ink/60", className: "bg-ink/60" },
  { label: "ink/50", className: "bg-ink/50" },
  { label: "ink/15", className: "bg-ink/15" },
  { label: "ink/10", className: "bg-ink/10" },
];

function Swatch({
  label,
  className,
  sub,
}: {
  label: string;
  className: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-20 w-full rounded-xl border border-ink/10 ${className}`} />
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-xs text-ink/50">{sub}</p>
      </div>
    </div>
  );
}

export const BaseColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 bg-cream p-6">
      {BASE_COLORS.map((c) => (
        <Swatch key={c.name} label={c.name} className={c.className} sub={c.value} />
      ))}
    </div>
  ),
};

export const OpacityScale: Story = {
  name: "Opacity variants (brand, ink)",
  render: () => (
    <div className="flex flex-col gap-8 bg-cream p-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">brand/*</p>
        <div className="grid grid-cols-5 gap-3">
          {BRAND_OPACITIES.map((c) => (
            <Swatch key={c.label} label={c.label} className={c.className} sub="" />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold text-ink">ink/*</p>
        <div className="grid grid-cols-7 gap-3">
          {INK_OPACITIES.map((c) => (
            <Swatch key={c.label} label={c.label} className={c.className} sub="" />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const UsageMap: Story = {
  name: "Usage",
  render: () => (
    <div className="max-w-2xl bg-cream p-6 text-sm text-ink/80">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-ink/20">
            <th className="py-2 pr-4">Token</th>
            <th className="py-2">Used for</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">cream</td>
            <td className="py-2">Page background, footer text on ink</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">brand</td>
            <td className="py-2">
              CTA fills, hover states, eyebrow labels, active segmented control, link
              underline decoration
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">ink</td>
            <td className="py-2">Body text, borders (ink/10, ink/15), footer background</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">brand/10</td>
            <td className="py-2">Badge/callout backgrounds, image placeholder tint</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">white/50–60</td>
            <td className="py-2">Card backgrounds over the cream page</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
