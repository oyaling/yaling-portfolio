import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

const LOGO_URL = "/logo.png";

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
        <Link href={`/${locale}`} className="block">
          <Image
            src={LOGO_URL}
            alt="Ya-Ling O"
            width={654}
            height={200}
            className="h-8 w-auto dark:invert"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink sm:flex">
          <Link href={`/${locale}`} className="hover:text-brand">
            {site.nav.home}
          </Link>
          <Link href={`/${locale}#work`} className="hover:text-brand">
            {site.nav.work}
          </Link>
          <Link href={`/${locale}#experience`} className="hover:text-brand">
            {site.nav.experience}
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
