import { MetadataRoute } from "next";
import { getProjectCaseSlugs } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localizedAlternates = (path = "") => ({
    "pt-BR": absoluteUrl(`/pt${path}`),
    "en-US": absoluteUrl(`/en${path}`),
    "es-419": absoluteUrl(`/es${path}`),
    "x-default": absoluteUrl(`/pt${path}`),
  });

  const homePages = locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: locale === "pt" ? 1 : 0.9,
    alternates: { languages: localizedAlternates() },
  }));

  const projectPages = getProjectCaseSlugs().flatMap((slug) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}/projects/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: localizedAlternates(`/projects/${slug}`),
      },
    })),
  );

  const privacyPages = locales.map((locale) => ({
    url: absoluteUrl(`/${locale}/privacy`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.2,
    alternates: { languages: localizedAlternates("/privacy") },
  }));

  return [...homePages, ...projectPages, ...privacyPages];
}
