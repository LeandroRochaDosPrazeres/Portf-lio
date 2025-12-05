import React from "react";
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import CvDocument from "./CvDocument";

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

export async function GET() {
  try {
    const stream = await renderToStream(<CvDocument />);
    const pdfBuffer = await streamToBuffer(stream);

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="leandro-rocha-cv.pdf"`,
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return new NextResponse("Erro ao gerar currículo", { status: 500 });
  }
}
