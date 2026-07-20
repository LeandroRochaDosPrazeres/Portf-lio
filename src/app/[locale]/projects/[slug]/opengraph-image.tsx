import { ImageResponse } from "next/og";
import { getPortfolioContent, getProjectBySlug } from "@/lib/data";
import { isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const imageSize = { width: 1200, height: 630 };
const imageContentType = "image/png";
const caseAltLabels = {
  pt: "estudo de caso do projeto",
  en: "project case study",
  es: "caso de proyecto",
} as const;

interface ProjectOpenGraphImageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateImageMetadata({
  params,
}: ProjectOpenGraphImageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "pt";
  const project = getProjectBySlug(locale, slug);

  return [
    {
      id: "default",
      alt: `${project?.title || "Leandro Rocha"} — ${caseAltLabels[locale]}`,
      size: imageSize,
      contentType: imageContentType,
    },
  ];
}

const projectGradients: Record<string, string> = {
  "1": "linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)",
  "2": "linear-gradient(135deg, #8b5cf6, #a855f7, #d946ef)",
  "3": "linear-gradient(135deg, #f97316, #f59e0b, #eab308)",
  "5": "linear-gradient(135deg, #06b6d4, #0ea5e9, #3b82f6)",
};

export default async function ProjectOpenGraphImage({
  params,
}: ProjectOpenGraphImageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = isLocale(localeParam) ? localeParam : "pt";
  const content = getPortfolioContent(locale);
  const project =
    getProjectBySlug(locale, slug) || content.projects.items[0];
  const summary = project.caseStudy?.summary || project.description;
  const gradient =
    projectGradients[project.id] ||
    "linear-gradient(135deg, #8b5cf6, #3b82f6, #0891b2)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "60px 68px",
          position: "relative",
          overflow: "hidden",
          color: "#fafafa",
          background: "#0a0a0b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 760,
            height: 760,
            top: -430,
            right: -240,
            borderRadius: "50%",
            background: gradient,
            opacity: 0.62,
            filter: "blur(12px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            bottom: -370,
            left: 120,
            borderRadius: "50%",
            background: gradient,
            opacity: 0.42,
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: gradient,
                  border: "2px solid rgba(255,255,255,0.5)",
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                LR
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700 }}>
                  {content.siteConfig.name}
                </span>
                <span style={{ fontSize: 17, color: "#a1a1aa" }}>
                  {content.projects.casePage.eyebrow}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#d4d4d8",
                fontSize: 18,
              }}
            >
              {project.evidence}
            </div>
          </div>

          <div
            style={{
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -2.5,
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                maxWidth: 990,
                color: "#d4d4d8",
                fontSize: 25,
                lineHeight: 1.35,
              }}
            >
              {summary}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#a1a1aa",
              fontSize: 18,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              {project.technologies.slice(0, 4).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <span>{siteUrl.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
      </div>
    ),
    imageSize,
  );
}
