import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, type Locale } from "@/middleware";
import { getSiteContent } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const isZh = params.locale === "zh-Hant";
  return {
    title: isZh
      ? "Ya-Ling O - 產品設計 . UX . 系統性思考"
      : "Ya-Ling O - Product design . UX . System thinking",
    description: isZh
      ? "一位擅長產品策略、UX/UI 設計與系統性思考的產品設計師。"
      : "A product designer experienced in product strategy, UX/UI and System Thinking.",
    icons: {
      icon: "https://cdn.prod.website-files.com/63e48f4ed598a369cd769311/63e7594075eb7b146bc41189_yaling.png",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const site = getSiteContent(locale);

  return (
    <html lang={locale === "zh-Hant" ? "zh-Hant" : "en"}>
      <body
        className={`${display.variable} ${body.variable} bg-cream font-body text-ink antialiased`}
      >
        <Navbar locale={locale} site={site} />
        {children}
        <Footer locale={locale} site={site} />
      </body>
    </html>
  );
}
