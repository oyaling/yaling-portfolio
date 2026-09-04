import { notFound } from "next/navigation";
import { locales, type Locale } from "@/middleware";
import {
  getSiteContent,
  getCaseStudies,
  getCaseStudy,
  isUnlisted,
} from "@/lib/content";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCaseStudies(locale).map((cs) => ({ locale, slug: cs.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params.locale as Locale;
  const caseStudy = getCaseStudy(locale, params.slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} · Ya-Ling O`,
    description: caseStudy.subtitle,
    ...(isUnlisted(params.slug)
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params.locale as Locale;
  const site = getSiteContent(locale);
  const caseStudy = getCaseStudy(locale, params.slug);

  if (!caseStudy) {
    notFound();
  }

  const others = getCaseStudies(locale).filter(
    (cs) => cs.slug !== params.slug && !isUnlisted(cs.slug)
  );

  return (
    <CaseStudyView
      locale={locale}
      site={site}
      caseStudy={caseStudy!}
      others={others}
    />
  );
}
