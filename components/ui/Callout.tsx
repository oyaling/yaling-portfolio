import type { ReactNode } from "react";

/** Highlighted note/challenge box, e.g. "📌 How might we streamline...". */
export function Callout({
  children,
  icon = "📌",
  size = "default",
}: {
  children: ReactNode;
  icon?: string;
  size?: "default" | "sm";
}) {
  const sizeClass = size === "sm" ? "p-4 text-sm" : "p-5";
  return (
    <p className={`rounded-xl bg-brand/10 font-semibold text-brand ${sizeClass}`}>
      {icon} {children}
    </p>
  );
}
