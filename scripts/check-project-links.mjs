import { readFile } from "node:fs/promises";

const sourceUrl = new URL("../src/lib/data.ts", import.meta.url);
const source = await readFile(sourceUrl, "utf8");
const projectLinkPattern = /(?:demoUrl|githubUrl):\s*"([^"]+)"/g;
const links = [...new Set([...source.matchAll(projectLinkPattern)].map((match) => match[1]))];

if (links.length === 0) {
  throw new Error("No project demo or repository links were found in src/lib/data.ts.");
}

const failures = [];

await Promise.all(
  links.map(async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": "Leandro-Rocha-Portfolio-Link-Check/1.0",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(12_000),
      });

      await response.body?.cancel();

      if (!response.ok) {
        failures.push(`${url} returned HTTP ${response.status}`);
        return;
      }

      console.log(`OK ${response.status} ${url}`);
    } catch (error) {
      failures.push(`${url} failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }),
);

if (failures.length > 0) {
  console.error("\nProject link check failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log(`\nValidated ${links.length} unique project links.`);
}
