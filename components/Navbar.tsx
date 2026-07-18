import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO_URL =
  "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/63ee00cd1631575f5c6219bb_Frame%204%20(1).png";

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
        <Link href={`/${locale}`} className="relative block h-8 w-32">
          <Image
            src={LOGO_URL}
            alt="Ya-Ling O"
            fill
            sizes="128px"
            className="object-contain object-left"
            priority
          />
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
