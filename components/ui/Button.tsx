import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "pill" | "underline" | "border-bottom" | "nav";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  pill: "inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream hover:bg-brand/90",
  underline:
    "text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4",
  "border-bottom":
    "inline-block border-b-2 border-ink pb-1 text-sm font-semibold text-ink hover:border-brand hover:text-brand",
  nav: "text-sm font-semibold text-ink hover:text-brand",
};

/**
 * Reproduces the three CTA link styles used across the site (Hero resume link,
 * WorkSection/ExperienceSection "View work" links, CaseStudyView prototype link)
 * plus the plain nav-link hover style. All CTAs on the site are anchors, not
 * <button> elements, so this renders an <a>.
 */
export default function Button({
  variant = "pill",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
