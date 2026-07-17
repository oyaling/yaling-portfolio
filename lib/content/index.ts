import siteEn from "./site.en";
import siteZh from "./site.zh";
import caseStudiesEn from "./caseStudies.en";
import caseStudiesZh from "./caseStudies.zh";
import type { CaseStudy } from "./caseStudies.en";
import type { SiteContent } from "./site.en";
import type { Locale } from "@/middleware";

export function getSiteContent(locale: Locale): SiteContent {
  return locale === "zh-Hant" ? siteZh : siteEn;
}

export function getCaseStudies(locale: Locale): CaseStudy[] {
  return locale === "zh-Hant" ? caseStudiesZh : caseStudiesEn;
}

export function getCaseStudy(locale: Locale, slug: string): CaseStudy | undefined {
  return getCaseStudies(locale).find((cs) => cs.slug === slug);
}

export type { CaseStudy, SiteContent };
