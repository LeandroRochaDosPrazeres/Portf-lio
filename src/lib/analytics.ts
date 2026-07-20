"use client";

import { track } from "@vercel/analytics/react";

type PortfolioEvent =
  | "contact_whatsapp_opened"
  | "cv_downloaded"
  | "external_profile_opened"
  | "locale_changed"
  | "project_case_opened"
  | "project_demo_opened"
  | "project_repository_opened";

type EventProperties = Record<string, boolean | number | string | null>;

export function trackPortfolioEvent(
  name: PortfolioEvent,
  properties: EventProperties = {},
) {
  try {
    track(name, properties);
  } catch {
    // Telemetry must never interrupt navigation or a conversion action.
  }
}
