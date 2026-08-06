import type { ReactNode } from "react";

/** Skill/tag pill used in the case study meta row (e.g. "UX design", "Design System"). */
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
      {children}
    </span>
  );
}
