"use client";

import { Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/locale";
import { locales } from "@/lib/locale";

/**
 * Compact language switcher for the footer. Language is a rare, one-time
 * choice, so it sits below the fold rather than competing with the theme
 * toggle in the header. Colours target the dark footer panel.
 */
export default function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { en: string; zhHant: string };
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: Locale) {
    if (target === locale) return;
    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=${60 * 60 * 24 * 365}`;
    const segments = pathname.split("/");
    segments[1] = target;
    router.push(segments.join("/") || `/${target}`);
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center justify-center gap-2.5 text-xs"
    >
      {locales.map((loc, i) => {
        const active = loc === locale;
        return (
          <Fragment key={loc}>
            {i > 0 && (
              <span aria-hidden className="text-oncontrast/25">
                ·
              </span>
            )}
            <button
              type="button"
              onClick={() => switchTo(loc)}
              aria-current={active ? "true" : undefined}
              lang={loc === "en" ? "en" : "zh-Hant"}
              className={
                active
                  ? "font-semibold text-oncontrast underline decoration-brand decoration-2 underline-offset-4"
                  : "text-oncontrast/50 transition-colors hover:text-oncontrast/90"
              }
            >
              {loc === "en" ? labels.en : labels.zhHant}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
