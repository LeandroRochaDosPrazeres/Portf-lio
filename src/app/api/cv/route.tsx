import React from "react";
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import CvDocument from "./CvDocument";
import { getPortfolioContent } from "@/lib/data";
import { getHtmlLocale, normalizeLocale, type Locale } from "@/lib/i18n";

export const runtime = "nodejs";
export const revalidate = 86400;

const errorMessages: Record<Locale, string> = {
  pt: "Não foi possível gerar o currículo.",
  en: "The résumé could not be generated.",
  es: "No se pudo generar el currículum.",
};

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
  const requestedLocale = requestUrl.searchParams.get("lang");
  const locale = normalizeLocale(requestedLocale);
  const queryEntries = [...requestUrl.searchParams.entries()];
  const isCanonicalRequest =
    queryEntries.length === 1 &&
    queryEntries[0][0] === "lang" &&
    requestedLocale === locale;

  if (!isCanonicalRequest) {
    const canonicalUrl = new URL("/api/cv", requestUrl.origin);
    canonicalUrl.searchParams.set("lang", locale);

    return NextResponse.redirect(canonicalUrl, {
      status: 308,
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Language": getHtmlLocale(locale),
      },
    });
  }

  try {
    const content = getPortfolioContent(locale);
    const stream = await renderToStream(<CvDocument content={content} />);
    const pdfBuffer = await streamToBuffer(stream);

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${content.cv.fileName}"`,
        "Content-Length": String(pdfBuffer.byteLength),
        "Content-Language": getHtmlLocale(locale),
        "Cache-Control":
          "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  } catch (error) {
    console.error("CV generation failed:", error);

    return new NextResponse(errorMessages[locale], {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
        "Content-Language": getHtmlLocale(locale),
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
