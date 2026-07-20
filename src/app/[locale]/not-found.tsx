"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getRouteLocale, notFoundCopy } from "@/lib/route-error-copy";

export default function LocaleNotFound() {
  const params = useParams<{ locale?: string | string[] }>();
  const locale = getRouteLocale(params?.locale);
  const copy = notFoundCopy[locale];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center px-4 py-24"
      aria-labelledby="not-found-title"
    >
      <section className="glass w-full max-w-xl rounded-3xl p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {copy.eyebrow}
        </p>
        <h1 id="not-found-title" className="mb-4 text-3xl font-bold sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          {copy.description}
        </p>
        <Link
          href={`/${locale}`}
          className="focus-ring inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {copy.homeLabel}
        </Link>
      </section>
    </main>
  );
}
