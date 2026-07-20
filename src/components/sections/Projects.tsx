"use client";

import Link from "next/link";
import {
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Briefcase,
  Boxes,
  ChevronRight,
  Code2,
  ExternalLink,
  FileCheck2,
  Github,
  House,
  LockKeyhole,
  Sparkles,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { trackPortfolioEvent } from "@/lib/analytics";
import { isolatePageRegions } from "@/lib/accessibility";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ProjectItem = ReturnType<
  typeof usePortfolio
>["content"]["projects"]["items"][number];
type ProjectsCopy = ReturnType<typeof usePortfolio>["content"]["projects"];

const projectIcons: Record<string, React.ElementType> = {
  "1": Smartphone,
  "2": Bot,
  "3": BarChart3,
  "4": Briefcase,
  "5": House,
};

const projectGradients: Record<string, string> = {
  "1": "from-emerald-500 via-teal-500 to-cyan-500",
  "2": "from-violet-500 via-purple-500 to-fuchsia-500",
  "3": "from-orange-500 via-amber-500 to-yellow-500",
  "4": "from-blue-500 via-indigo-500 to-violet-500",
  "5": "from-cyan-500 via-sky-500 to-blue-500",
};

const projectCtaGradients: Record<string, string> = {
  "1": "from-emerald-700 via-teal-700 to-cyan-700",
  "2": "from-violet-700 via-purple-700 to-fuchsia-700",
  "3": "from-orange-700 via-amber-700 to-orange-800",
  "4": "from-blue-700 via-indigo-700 to-violet-700",
  "5": "from-cyan-700 via-sky-700 to-blue-700",
};

function getProjectAnalyticsId(project: ProjectItem) {
  return project.caseStudy?.slug || project.id;
}

function ProjectPreview({
  project,
  copy,
}: {
  project: ProjectItem;
  copy: ProjectsCopy;
}) {
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";

  return (
    <div
      className={cn(
        "relative h-44 overflow-hidden border-b border-white/10 bg-gradient-to-br",
        gradient,
      )}
      role="img"
      aria-label={`${copy.previewLabel}: ${project.title}`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.32),transparent_38%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-5 top-5 flex items-center justify-between rounded-t-xl border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-md"
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span className="h-2 w-2 rounded-full bg-white/45" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <span className="max-w-[65%] truncate text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
          {project.title}
        </span>
      </div>
      <div
        className="absolute inset-x-5 bottom-5 top-[53px] flex items-center gap-4 rounded-b-xl border-x border-b border-white/20 bg-black/20 px-5 backdrop-blur-sm"
        aria-hidden="true"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-lg">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-2.5 w-4/5 rounded-full bg-white/75" />
          <div className="h-2 w-full rounded-full bg-white/30" />
          <div className="flex gap-1.5">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="truncate rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/85"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter(
    (element) =>
      element.getAttribute("aria-hidden") !== "true" &&
      !element.hasAttribute("hidden"),
  );
}

function ProjectModal({
  project,
  copy,
  locale,
  onClose,
  returnFocusRef,
}: {
  project: ProjectItem;
  copy: ProjectsCopy;
  locale: Locale;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";
  const ctaGradient =
    projectCtaGradients[project.id] || "from-violet-700 to-blue-700";
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const titleId = `project-title-${generatedId}`;
  const descriptionId = `project-description-${generatedId}`;

  useEffect(() => {
    const returnFocusElement = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const restorePageRegions = isolatePageRegions();

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = getFocusableElements(dialogRef.current);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      restorePageRegions();
      requestAnimationFrame(() => returnFocusElement?.focus());
    };
  }, [onClose, returnFocusRef]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl p-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <div className={cn("relative h-32 rounded-t-3xl bg-gradient-to-r", gradient)}>
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <div className="absolute -bottom-8 left-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-card bg-card shadow-xl">
              <Icon className="h-8 w-8 text-foreground" aria-hidden="true" />
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label={copy.closeLabel}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 pt-12">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3 id={titleId} className="text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            {project.inDevelopment && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-semibold text-warning-text">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                {copy.inDevelopmentLabel}
              </span>
            )}
          </div>

          <p
            id={descriptionId}
            className="mb-6 leading-relaxed text-muted-foreground"
          >
            {project.longDescription || project.description}
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              {copy.stackLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackPortfolioEvent("project_demo_opened", {
                    locale,
                    project: getProjectAnalyticsId(project),
                  })
                }
                className={cn(
                  "focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  ctaGradient,
                )}
                aria-label={`${copy.demoLabel}: ${project.title}`}
              >
                {project.demoStatus === "authenticated" ? (
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                )}
                {project.demoStatus === "authenticated"
                  ? copy.demoStatusLabels.authenticated
                  : copy.demoLabel}
              </a>
            )}
            {!project.demoUrl && project.demoStatus === "maintenance" && (
              <span className="inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-5 py-2.5 text-sm font-medium text-warning-text">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                {copy.demoStatusLabels.maintenance}
              </span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackPortfolioEvent("project_repository_opened", {
                    locale,
                    project: getProjectAnalyticsId(project),
                  })
                }
                className="focus-ring flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                aria-label={`${copy.sourceLabel}: ${project.title}`}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {copy.sourceLabel}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  copy,
  locale,
}: {
  project: ProjectItem;
  index: number;
  copy: ProjectsCopy;
  locale: Locale;
}) {
  const [showModal, setShowModal] = useState(false);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const gradient = projectGradients[project.id] || "from-primary to-secondary";
  const ctaGradient =
    projectCtaGradients[project.id] || "from-violet-700 to-blue-700";
  const closeModal = useCallback(() => setShowModal(false), []);

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 md:col-span-1",
    large: "col-span-1 row-span-1 md:col-span-2",
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "glass group relative flex min-h-[500px] flex-col overflow-hidden rounded-2xl transition-colors duration-500 hover:border-primary/50",
          sizeClasses[project.size],
        )}
        whileHover={{ y: -5 }}
      >
        <ProjectPreview project={project} copy={copy} />

        <div className="relative flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <FileCheck2 className="h-4 w-4 text-primary" aria-hidden="true" />
              {project.evidence}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.inDevelopment && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-xs font-semibold text-warning-text">
                  <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.inDevelopmentLabel}
                </span>
              )}
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.featuredLabel}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="mb-4 mt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackPortfolioEvent("project_demo_opened", {
                      locale,
                      project: getProjectAnalyticsId(project),
                    })
                  }
                  className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={`${copy.demoLabel}: ${project.title}`}
                  title={copy.demoLabel}
                >
                  {project.demoStatus === "authenticated" ? (
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span>
                    {project.demoStatus === "authenticated"
                      ? copy.demoStatusLabels.authenticated
                      : copy.demoLabel}
                  </span>
                </a>
              )}
              {!project.demoUrl && project.demoStatus === "maintenance" && (
                <span
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-3 py-2 text-xs font-medium text-warning-text"
                  role="status"
                >
                  <Wrench className="h-4 w-4" aria-hidden="true" />
                  {copy.demoStatusLabels.maintenance}
                </span>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackPortfolioEvent("project_repository_opened", {
                      locale,
                      project: getProjectAnalyticsId(project),
                    })
                  }
                  className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={`${copy.sourceLabel}: ${project.title}`}
                  title={copy.sourceLabel}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.sourceLabel}</span>
                </a>
              )}
            </div>

            {project.caseStudy ? (
              <Link
                href={`/${locale}/projects/${project.caseStudy.slug}`}
                onClick={() =>
                  trackPortfolioEvent("project_case_opened", {
                    locale,
                    project: getProjectAnalyticsId(project),
                  })
                }
                className={cn(
                  "focus-ring inline-flex min-h-10 items-center gap-1 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5",
                  ctaGradient,
                )}
                aria-label={`${copy.caseAriaLabel}: ${project.title}`}
              >
                <span>{copy.caseLabel}</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : (
              <button
                ref={detailsButtonRef}
                type="button"
                onClick={() => setShowModal(true)}
                className="focus-ring inline-flex min-h-10 items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
                aria-label={`${copy.detailsAriaLabel}: ${project.title}`}
              >
                <span>{copy.moreLabel}</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]",
            gradient,
          )}
          aria-hidden="true"
        />
      </motion.article>

      {showModal &&
        createPortal(
          <AnimatePresence>
            <ProjectModal
              project={project}
              copy={copy}
              locale={locale}
              onClose={closeModal}
              returnFocusRef={detailsButtonRef}
            />
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

export function Projects() {
  const { content, locale } = usePortfolio();
  const copy = content.projects;
  const technologiesCount = new Set(
    copy.items.flatMap((project) => project.technologies),
  ).size;

  const stats = [
    { label: copy.stats.projects, value: copy.items.length, icon: Boxes },
    {
      label: copy.stats.technologies,
      value: `${technologiesCount}+`,
      icon: Code2,
    },
    {
      label: copy.stats.featured,
      value: copy.items.filter((project) => project.featured).length,
      icon: Sparkles,
    },
    {
      label: copy.stats.inDevelopment,
      value: copy.items.filter((project) => project.inDevelopment).length,
      icon: Wrench,
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Briefcase className="mr-2 inline-block h-4 w-4" aria-hidden="true" />
            {copy.eyebrow}
          </motion.span>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {copy.title} <span className="gradient-text">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {copy.introduction}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <stat.icon
                className="mx-auto mb-2 h-6 w-6 text-primary"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="block text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              copy={copy}
              locale={locale}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/LeandroRochaDosPrazeres"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring glass group inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>{copy.githubCta}</span>
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
