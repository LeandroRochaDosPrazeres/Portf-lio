import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getPortfolioContent } from "@/lib/data";
import { socialLinks } from "@/lib/profile";
import {
  htmlLocales,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "../globals.css";

const inter = localFont({
  src: [
    {
      path: "../../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const alternateLanguages = {
  "pt-BR": "/pt",
  "en-US": "/en",
  "es-419": "/es",
  "x-default": "/pt",
};

const openGraphLocales: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_LA",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) return {};

  const content = getPortfolioContent(localeParam);
  const canonicalPath = `/${localeParam}`;
  const alternateLocale = locales
    .filter((locale) => locale !== localeParam)
    .map((locale) => openGraphLocales[locale]);

  return {
    metadataBase: new URL(siteUrl),
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: content.metadata.keywords,
    authors: [{ name: content.siteConfig.name, url: socialLinks.linkedin }],
    creator: content.siteConfig.name,
    alternates: {
      canonical: canonicalPath,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "profile",
      locale: openGraphLocales[localeParam],
      alternateLocale,
      url: canonicalPath,
      title: content.metadata.title,
      description: content.metadata.description,
      siteName: content.siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadata.title,
      description: content.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: `/${localeParam}/manifest.webmanifest`,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

function buildPersonStructuredData(locale: Locale) {
  const content = getPortfolioContent(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.siteConfig.name,
    url: absoluteUrl(`/${locale}`),
    image: absoluteUrl("/avatar.webp"),
    jobTitle: content.siteConfig.title,
    description: content.metadata.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade São Judas Tadeu",
    },
    sameAs: [socialLinks.linkedin, socialLinks.github],
    knowsAbout: content.metadata.keywords,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = getPortfolioContent(locale);
  const structuredData = buildPersonStructuredData(locale);

  return (
    <html lang={htmlLocales[locale]} suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased noise-bg`}
      >
        <a href="#main-content" className="skip-link">
          {locale === "pt"
            ? "Pular para o conteúdo"
            : locale === "en"
              ? "Skip to content"
              : "Saltar al contenido"}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <LocaleProvider locale={locale} content={content}>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
