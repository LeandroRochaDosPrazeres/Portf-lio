import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Github,
  House,
  Layers3,
  LockKeyhole,
  ShieldAlert,
  Smartphone,
  Wrench,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  getPortfolioContent,
  getProjectBySlug,
  getProjectCaseSlugs,
} from "@/lib/data";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CasePageScrollReset } from "./CasePageScrollReset";
import { TrackedProjectExternalLink } from "./TrackedProjectExternalLink";

interface ProjectCasePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const openGraphLocales: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_LA",
};

const projectVisuals: Record<
  string,
  { gradient: string; ctaGradient: string; icon: typeof Smartphone }
> = {
  "1": {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    ctaGradient: "from-emerald-700 via-teal-700 to-cyan-700",
    icon: Smartphone,
  },
  "2": {
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    ctaGradient: "from-violet-700 via-purple-700 to-fuchsia-700",
    icon: Bot,
  },
  "3": {
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    ctaGradient: "from-orange-700 via-amber-700 to-orange-800",
    icon: Layers3,
  },
  "5": {
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    ctaGradient: "from-cyan-700 via-sky-700 to-blue-700",
    icon: House,
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjectCaseSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectCasePageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) return {};

  const project = getProjectBySlug(localeParam, slug);
  if (!project?.caseStudy) return {};

  const content = getPortfolioContent(localeParam);
  const canonicalPath = `/${localeParam}/projects/${slug}`;

  return {
    title: `${project.title} | ${content.projects.casePage.eyebrow}`,
    description: project.caseStudy.summary,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "pt-BR": `/pt/projects/${slug}`,
        "en-US": `/en/projects/${slug}`,
        "es-419": `/es/projects/${slug}`,
        "x-default": `/pt/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: openGraphLocales[localeParam],
      alternateLocale: locales
        .filter((locale) => locale !== localeParam)
        .map((locale) => openGraphLocales[locale]),
      url: canonicalPath,
      title: project.title,
      description: project.caseStudy.summary,
      siteName: content.siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.caseStudy.summary,
    },
  };
}

export default async function ProjectCasePage({
  params,
}: ProjectCasePageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = getPortfolioContent(locale);
  const copy = content.projects;
  const project = getProjectBySlug(locale, slug);

  if (!project?.caseStudy) notFound();

  const caseStudy = project.caseStudy;
  const visual = projectVisuals[project.id] || {
    gradient: "from-violet-500 via-blue-500 to-cyan-500",
    ctaGradient: "from-violet-700 via-blue-700 to-cyan-700",
    icon: Layers3,
  };
  const ProjectIcon = visual.icon;
  const analyticsId = caseStudy.slug;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: caseStudy.summary,
    url: absoluteUrl(`/${locale}/projects/${slug}`),
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: content.siteConfig.name,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CasePageScrollReset />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav
          className="container mx-auto flex min-h-16 items-center justify-between gap-2 px-4 sm:gap-4"
          aria-label={content.header.navigationLabel}
        >
          <Link
            href={`/${locale}#projects`}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden min-[360px]:inline">
              {copy.casePage.backLabel}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <div
              role="group"
              className="flex items-center rounded-full border border-border bg-card/70 p-1"
              aria-label={copy.casePage.languageLabel}
            >
              {locales.map((availableLocale) => (
                <Link
                  key={availableLocale}
                  href={`/${availableLocale}/projects/${slug}`}
                  hrefLang={availableLocale}
                  aria-label={content.header.localeLabels[availableLocale]}
                  aria-current={availableLocale === locale ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-full px-2 py-1.5 text-xs font-semibold uppercase transition-colors sm:px-3",
                    availableLocale === locale
                      ? "cta-gradient"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {availableLocale}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <article>
          <section className="relative overflow-hidden border-b border-border/70 py-14 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_32%)]"
              aria-hidden="true"
            />
            <div className="container relative mx-auto grid items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                  {copy.casePage.eyebrow}
                </div>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {caseStudy.summary}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span className="sr-only">{copy.casePage.statusLabel}: </span>
                    {caseStudy.status}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
                    <FileCheck2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {project.evidence}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3" aria-label={copy.casePage.linksLabel}>
                  {project.demoUrl && (
                    <TrackedProjectExternalLink
                      href={project.demoUrl}
                      eventName="project_demo_opened"
                      locale={locale}
                      project={analyticsId}
                      className={cn(
                        "focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5",
                        visual.ctaGradient,
                      )}
                      ariaLabel={`${copy.demoLabel}: ${project.title}`}
                    >
                      {project.demoStatus === "authenticated" ? (
                        <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      )}
                      {project.demoStatus === "authenticated"
                        ? copy.demoStatusLabels.authenticated
                        : copy.demoLabel}
                    </TrackedProjectExternalLink>
                  )}
                  {!project.demoUrl && project.demoStatus === "maintenance" && (
                    <span
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-5 py-2.5 text-sm font-semibold text-warning-text"
                      role="status"
                    >
                      <Wrench className="h-4 w-4" aria-hidden="true" />
                      {copy.demoStatusLabels.maintenance}
                    </span>
                  )}
                  {project.githubUrl && (
                    <TrackedProjectExternalLink
                      href={project.githubUrl}
                      eventName="project_repository_opened"
                      locale={locale}
                      project={analyticsId}
                      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                      ariaLabel={`${copy.sourceLabel}: ${project.title}`}
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      {copy.sourceLabel}
                    </TrackedProjectExternalLink>
                  )}
                </div>
              </div>

              <div
                className={cn(
                  "relative mx-auto min-h-[340px] w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br p-4 shadow-2xl min-[360px]:p-6 sm:aspect-[4/3] sm:min-h-0 sm:p-8",
                  visual.gradient,
                )}
                role="img"
                aria-label={`${copy.previewLabel}: ${project.title}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.38),transparent_38%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.22))]" />
                <div className="relative flex h-full flex-col rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    </div>
                    <ProjectIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
                      {copy.casePage.architectureLabel}
                    </span>
                    <strong className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
                      {project.title}
                    </strong>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto space-y-16 px-4 py-16 sm:py-20">
            <section className="grid gap-6 lg:grid-cols-2" aria-labelledby="problem-heading">
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h2 id="problem-heading" className="text-2xl font-bold sm:text-3xl">
                  {copy.casePage.problemLabel}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {caseStudy.problem}
                </p>
              </div>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {copy.casePage.roleLabel}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {caseStudy.role}
                </p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {copy.casePage.responsibilitiesLabel}
                </h3>
                <ul className="mt-3 space-y-3">
                  {caseStudy.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section aria-labelledby="architecture-heading">
              <h2 id="architecture-heading" className="text-3xl font-bold sm:text-4xl">
                {copy.casePage.architectureLabel}
              </h2>
              <ol className="mt-7 grid gap-3 md:grid-cols-5">
                {caseStudy.architecture.map((step, index) => (
                  <li key={step} className="relative flex min-h-28 items-center rounded-2xl border border-border bg-card p-4">
                    <div>
                      <span className="text-xs font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                        {step}
                      </p>
                    </div>
                    {index < caseStudy.architecture.length - 1 && (
                      <ArrowRight
                        className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-background text-primary md:block"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="decisions-heading">
              <h2 id="decisions-heading" className="text-3xl font-bold sm:text-4xl">
                {copy.casePage.decisionsLabel}
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {caseStudy.decisions.map((decision, index) => (
                  <div key={decision.title} className="glass rounded-3xl p-6 sm:p-7">
                    <span className="text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-bold">{decision.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {decision.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-warning/20 bg-warning/5 p-6 sm:p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <ShieldAlert className="h-7 w-7 text-warning-text" aria-hidden="true" />
                  {copy.casePage.challengesLabel}
                </h2>
                <ul className="mt-6 space-y-4">
                  {caseStudy.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
                <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                  <FileCheck2 className="h-7 w-7 text-emerald-500" aria-hidden="true" />
                  {copy.casePage.validationsLabel}
                </h2>
                <ul className="mt-6 space-y-4">
                  {caseStudy.validations.map((validation) => (
                    <li key={validation} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{validation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              className={cn(
                "relative overflow-hidden rounded-3xl bg-gradient-to-br p-[1px]",
                visual.gradient,
              )}
              aria-labelledby="outcome-heading"
            >
              <div className="rounded-[calc(1.5rem-1px)] bg-background/95 p-7 sm:p-10">
                <h2 id="outcome-heading" className="text-3xl font-bold sm:text-4xl">
                  {copy.casePage.outcomeLabel}
                </h2>
                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
                  {caseStudy.outcome}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}#projects`}
                    className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    {copy.casePage.backLabel}
                  </Link>
                  {project.githubUrl && (
                    <TrackedProjectExternalLink
                      href={project.githubUrl}
                      eventName="project_repository_opened"
                      locale={locale}
                      project={analyticsId}
                      className={cn(
                        "focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5",
                        visual.ctaGradient,
                      )}
                      ariaLabel={`${copy.sourceLabel}: ${project.title}`}
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      {copy.sourceLabel}
                    </TrackedProjectExternalLink>
                  )}
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
