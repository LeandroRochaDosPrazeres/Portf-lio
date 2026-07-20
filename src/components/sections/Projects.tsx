"use client";

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
  ChevronRight,
  ExternalLink,
  Github,
  House,
  Smartphone,
  X,
} from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";
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
  onClose,
  returnFocusRef,
}: {
  project: ProjectItem;
  copy: ProjectsCopy;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";
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
              <span className="rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-500">
                <span aria-hidden="true">🚧 </span>
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
                className={cn(
                  "focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  gradient,
                )}
                aria-label={`${copy.demoLabel}: ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {copy.demoLabel}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
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
}: {
  project: ProjectItem;
  index: number;
  copy: ProjectsCopy;
}) {
  const [showModal, setShowModal] = useState(false);
  const detailsButtonRef = useRef<HTMLButtonElement>(null);
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";
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
          "glass group relative min-h-[320px] overflow-hidden rounded-2xl transition-all duration-500 hover:border-primary/50",
          sizeClasses[project.size],
        )}
        whileHover={{ y: -5 }}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-10 transition-opacity duration-500 group-hover:opacity-20",
            gradient,
          )}
          aria-hidden="true"
        />

        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-transparent blur-xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tr from-secondary to-transparent blur-xl" />
        </div>

        <div className="relative flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:rotate-[5deg]",
                gradient,
              )}
              aria-hidden="true"
            >
              <Icon className="h-7 w-7 text-white" />
            </div>

            <div className="flex flex-col items-end gap-2">
              {project.inDevelopment && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-500">
                  <span aria-hidden="true">🚧 </span>
                  {copy.inDevelopmentLabel}
                </span>
              )}
              {project.featured && (
                <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  <span aria-hidden="true">★ </span>
                  {copy.featuredLabel}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
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

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/50 pt-4">
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
                  aria-label={`${copy.demoLabel}: ${project.title}`}
                  title={copy.demoLabel}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
                  aria-label={`${copy.sourceLabel}: ${project.title}`}
                  title={copy.sourceLabel}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>

            <button
              ref={detailsButtonRef}
              type="button"
              onClick={() => setShowModal(true)}
              className="focus-ring flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
              aria-label={`${copy.detailsAriaLabel}: ${project.title}`}
            >
              <span>{copy.moreLabel}</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
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
  const { content } = usePortfolio();
  const copy = content.projects;
  const technologiesCount = new Set(
    copy.items.flatMap((project) => project.technologies),
  ).size;

  const stats = [
    { label: copy.stats.projects, value: copy.items.length, icon: "📦" },
    {
      label: copy.stats.technologies,
      value: `${technologiesCount}+`,
      icon: "⚡",
    },
    {
      label: copy.stats.featured,
      value: copy.items.filter((project) => project.featured).length,
      icon: "★",
    },
    {
      label: copy.stats.inDevelopment,
      value: copy.items.filter((project) => project.inDevelopment).length,
      icon: "🚧",
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
            <span aria-hidden="true">🚀 </span>
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
              <span className="mb-1 block text-2xl" aria-hidden="true">
                {stat.icon}
              </span>
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
