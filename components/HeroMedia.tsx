import type { CSSProperties } from "react";

/**
 * Theme-aware hero illustration.
 *
 * Both variants are painted as CSS backgrounds and switched with the `dark`
 * class, which means the right one is on screen before any JavaScript runs —
 * no wrong-theme flash — and no client component is needed. Browsers skip
 * background images on `display: none` elements, so only the visible theme's
 * file is ever downloaded.
 */
export default function HeroMedia({
  light,
  dark,
  alt,
}: {
  light: string;
  dark: string;
  alt: string;
}) {
  const art: CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
      <div
        role="img"
        aria-label={alt}
        style={{ ...art, backgroundImage: `url(${light})` }}
        className="absolute inset-0 dark:hidden"
      />
      <div
        role="img"
        aria-label={alt}
        style={{ ...art, backgroundImage: `url(${dark})` }}
        className="absolute inset-0 hidden dark:block"
      />
    </div>
  );
}
