import React from "react";
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import CvDocument from "./CvDocument";
import { getPortfolioContent } from "@/lib/data";
import { getHtmlLocale, normalizeLocale } from "@/lib/i18n";

// Cache do PDF por 1 hora (revalidate a cada hora)
export const revalidate = 3600;

async function streamToBuffer(stream: NodeJS.ReadableStream) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const locale = normalizeLocale(requestUrl.searchParams.get("lang"));

  try {
    const content = getPortfolioContent(locale);
    const stream = await renderToStream(<CvDocument content={content} />);
    const pdfBuffer = await streamToBuffer(stream);

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${content.cv.fileName}"`,
        "Content-Language": getHtmlLocale(locale),
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("CV generation failed:", error);

    const errorMessages = {
      pt: "Não foi possível gerar o currículo.",
      en: "The résumé could not be generated.",
      es: "No se pudo generar el currículum.",
    };

    return new NextResponse(errorMessages[locale], {
      status: 500,
      headers: {
        "Content-Language": getHtmlLocale(locale),
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
