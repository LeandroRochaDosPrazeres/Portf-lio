import { NextResponse } from "next/server";
import { getPortfolioContent } from "@/lib/data";
import { getHtmlLocale, isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;
export const revalidate = 86400;

interface ManifestRouteProps {
  params: Promise<{ locale: string }>;
}

const categories = {
  pt: ["portfólio", "tecnologia", "software"],
  en: ["portfolio", "technology", "software"],
  es: ["portafolio", "tecnología", "software"],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: ManifestRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return new NextResponse(null, { status: 404 });
  }

  const content = getPortfolioContent(locale);

  return NextResponse.json(
    {
      id: `/${locale}`,
      name: content.metadata.title,
      short_name: content.siteConfig.name,
      description: content.metadata.description,
      start_url: `/${locale}`,
      scope: "/",
      lang: getHtmlLocale(locale),
      dir: "ltr",
      display: "standalone",
      orientation: "any",
      categories: categories[locale],
      prefer_related_applications: false,
      background_color: "#0a0a0b",
      theme_color: "#8b5cf6",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
        "Content-Language": getHtmlLocale(locale),
        "Content-Type": "application/manifest+json; charset=utf-8",
      },
    },
  );
}
