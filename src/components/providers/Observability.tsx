import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Production telemetry is isolated here so the root layout stays readable and
 * the portfolio can disable or replace a provider without touching page code.
 */
export function Observability() {
  if (process.env.VERCEL !== "1") return null;

  return (
    <>
      <Analytics />
      <SpeedInsights sampleRate={0.5} />
    </>
  );
}
