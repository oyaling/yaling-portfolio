import siteEn from "./site.en";
import siteZh from "./site.zh";
import caseStudiesEn from "./caseStudies.en";
import caseStudiesZh from "./caseStudies.zh";
import type { CaseStudy } from "./caseStudies.en";
import type { SiteContent } from "./site.en";
import type { Locale } from "@/middleware";

/**
 * Case studies that stay published but are not listed anywhere on the site.
 *
 * The page still builds and still answers at its own URL, so a link already
 * sent to an employer keeps working. It is simply not linked from the work
 * grid or the "Other works" rail, and it is marked noindex so search engines
 * drop it. Remove the slug here to list it again — nothing else to undo.
 */
const unlistedSlugs = new Set(["multi-platform-menu-sync"]);

export function isUnlisted(slug: string): boolean {
  return unlistedSlugs.has(slug);
}

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
