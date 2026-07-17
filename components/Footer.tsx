import Link from "next/link";
import type { Locale } from "@/middleware";
import type { SiteContent } from "@/lib/content";

export default function Footer({
  locale,
  site,
}: {
  locale: Locale;
  site: SiteContent;
}) {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          {site.contact.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-cream/70">{site.contact.body}</p>

        <div className="mt-8 text-sm text-cream/60">{site.contact.emailLabel}</div>
        <a
          href={`mailto:${site.contact.email}`}
          className="mt-1 inline-block text-xl font-semibold text-cream underline decoration-forest decoration-2 underline-offset-4"
        >
          {site.contact.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm font-semibold">
          <Link href={`/${locale}#work`} className="hover:text-forest">
            {site.contact.workLabel}
          </Link>
          <a
            href={site.contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-forest"
          >
            {site.contact.linkedinLabel}
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-forest"
          >
            {site.contact.resumeLabel}
          </a>
        </div>

        <p className="mt-14 text-xs text-cream/40">
          © {new Date().getFullYear()} Ya-ling O.
        </p>
      </div>
    </footer>
  );
}
