import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languageAlternates = {
    pt: absoluteUrl("/pt"),
    en: absoluteUrl("/en"),
    es: absoluteUrl("/es"),
  };

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "pt" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates,
    },
  }));
}
