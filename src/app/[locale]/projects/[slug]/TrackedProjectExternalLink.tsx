"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

interface TrackedProjectExternalLinkProps {
  href: string;
  eventName: "project_demo_opened" | "project_repository_opened";
  locale: Locale;
  project: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
}

export function TrackedProjectExternalLink({
  href,
  eventName,
  locale,
  project,
  className,
  ariaLabel,
  children,
}: TrackedProjectExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPortfolioEvent(eventName, { locale, project })}
    >
      {children}
    </a>
  );
}
