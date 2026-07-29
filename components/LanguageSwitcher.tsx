"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/middleware";
import { locales } from "@/middleware";

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
    <div className="flex items-center gap-1 rounded-full border border-ink/15 bg-white/60 p-1 text-sm font-semibold">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchTo(loc)}
          aria-current={loc === locale}
          className={`rounded-full px-3 py-1 transition-colors ${
            loc === locale
              ? "bg-brand text-cream"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {loc === "en" ? labels.en : labels.zhHant}
        </button>
      ))}
    </div>
  );
}
