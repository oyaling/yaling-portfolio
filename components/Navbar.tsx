import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({
  locale,
  site,
}: {
  locale: Locale;
  site: SiteContent;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl">
            💡
          </span>
          YA-LING O
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink sm:flex">
          <Link href={`/${locale}`} className="hover:text-forest">
            {site.nav.home}
          </Link>
          <Link href={`/${locale}#work`} className="hover:text-forest">
            {site.nav.work}
          </Link>
          <Link href={`/${locale}#experience`} className="hover:text-forest">
            {site.nav.experience}
          </Link>
        </nav>
        <LanguageSwitcher locale={locale} labels={site.languageSwitcher} />
      </div>
    </header>
  );
}
