export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const htmlLocales: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-419",
};

export const localeStorageKey = "portfolio-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function normalizeLocale(value?: string | null): Locale {
  if (!value) return defaultLocale;

  const normalizedValue = value.toLowerCase().split("-")[0];
  return isLocale(normalizedValue) ? normalizedValue : defaultLocale;
}

export function getHtmlLocale(locale: Locale): string {
  return htmlLocales[locale];
}
