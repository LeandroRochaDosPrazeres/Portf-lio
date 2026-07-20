"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  getRouteLocale,
  unexpectedErrorCopy,
} from "@/lib/route-error-copy";

interface LocaleErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LocaleError({ error, reset }: LocaleErrorProps) {
  const params = useParams<{ locale?: string | string[] }>();
  const locale = getRouteLocale(params?.locale);
  const copy = unexpectedErrorCopy[locale];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center px-4 py-24"
      aria-labelledby="route-error-title"
    >
      <section className="glass w-full max-w-xl rounded-3xl p-8 text-center sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {copy.eyebrow}
        </p>
        <h1 id="route-error-title" className="mb-4 text-3xl font-bold sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          {copy.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="focus-ring rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copy.retryLabel}
          </button>
          <Link
            href={`/${locale}`}
            className="focus-ring rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary"
          >
            {copy.homeLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
