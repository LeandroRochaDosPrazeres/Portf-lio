import { NextResponse } from "next/server";
import { getPortfolioContent } from "@/lib/data";
import { getHtmlLocale, isLocale } from "@/lib/i18n";

interface ManifestRouteProps {
  params: Promise<{ locale: string }>;
}

const categories = {
  pt: ["portfólio", "tecnologia", "software"],
  en: ["portfolio", "technology", "software"],
  es: ["portafolio", "tecnología", "software"],
};

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
      display: "standalone",
      categories: categories[locale],
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
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Content-Language": getHtmlLocale(locale),
        "Content-Type": "application/manifest+json; charset=utf-8",
      },
    },
  );
}
