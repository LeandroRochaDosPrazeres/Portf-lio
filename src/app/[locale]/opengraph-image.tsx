import { ImageResponse } from "next/og";
import { getPortfolioContent } from "@/lib/data";
import { isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export const alt = "Leandro Rocha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OpenGraphImageProps {
  params: Promise<{ locale: string }>;
}

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { locale } = await params;
  const content = getPortfolioContent(isLocale(locale) ? locale : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          padding: "64px 72px",
          color: "#fafafa",
          background: "#0a0a0b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 680,
            height: 680,
            borderRadius: "50%",
            top: -360,
            right: -160,
            background: "radial-gradient(circle, rgba(59,130,246,0.48), rgba(59,130,246,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            bottom: -380,
            left: 180,
            background: "radial-gradient(circle, rgba(139,92,246,0.5), rgba(139,92,246,0))",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8b5cf6, #3b82f6, #0891b2)",
              border: "2px solid rgba(255,255,255,0.55)",
              fontSize: 31,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            LR
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#cbd5e1",
              fontSize: 21,
            }}
          >
            {content.hero.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 990 }}>
          <div style={{ display: "flex", fontSize: 31, color: "#a1a1aa", marginBottom: 18 }}>
            {content.siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 65,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: -2.8,
              backgroundImage: "linear-gradient(90deg, #a78bfa, #60a5fa, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {content.siteConfig.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#a1a1aa",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>{content.siteConfig.title}</div>
          <div style={{ display: "flex" }}>{siteUrl.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
