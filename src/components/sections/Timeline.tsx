"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Heart,
} from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";

type TimelineEntry = ReturnType<
  typeof usePortfolio
>["content"]["timeline"]["items"][number];
type TimelineCopy = ReturnType<typeof usePortfolio>["content"]["timeline"];

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
  personal: Heart,
};

const typeColors = {
  work: "from-primary to-secondary",
  education: "from-secondary to-accent",
  certification: "from-accent to-success",
  personal: "from-success to-primary",
};

function TimelineCard({
  item,
  index,
  copy,
}: {
  item: TimelineEntry;
  index: number;
  copy: TimelineCopy;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const generatedId = useId();
  const buttonId = `timeline-trigger-${generatedId}`;
  const panelId = `timeline-panel-${generatedId}`;
  const Icon = typeIcons[item.type];
  const gradientColor = typeColors[item.type];
  const isLeft = index % 2 === 0;
  const actionLabel = isExpanded ? copy.collapseLabel : copy.expandLabel;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex items-start gap-4 md:w-1/2 md:gap-8",
        isLeft
          ? "md:self-start md:pr-8 md:text-right"
          : "md:ml-auto md:self-end md:pl-8",
      )}
    >
      <div
        className={cn(
          "absolute top-0 hidden h-4 w-4 rounded-full bg-gradient-to-br md:block",
          gradientColor,
          isLeft
            ? "right-0 translate-x-1/2 md:-right-2"
            : "left-0 -translate-x-1/2 md:-left-2",
        )}
        aria-hidden="true"
      />

      <motion.article
        className="glass group flex-1 overflow-hidden rounded-2xl transition-colors duration-300 hover:border-primary/50"
        whileHover={{ scale: 1.02 }}
      >
        <button
          id={buttonId}
          type="button"
          className="focus-ring flex w-full items-start gap-4 p-6 text-left"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          aria-label={`${actionLabel}: ${item.title}`}
        >
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
              gradientColor,
            )}
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 text-white" />
          </span>

          <span className={cn("min-w-0 flex-1", isLeft && "md:text-right")}>
            <span className="block text-sm font-medium text-primary">{item.year}</span>
            <span className="mt-1 block text-xl font-bold text-foreground">
              {item.title}
            </span>
            <span className="block text-muted-foreground">{item.subtitle}</span>
          </span>

          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary"
            aria-hidden="true"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className={cn(
                  "mx-6 border-t border-border pb-6 pt-4",
                  isLeft && "md:text-right",
                )}
              >
                <p className="mb-4 text-muted-foreground">{item.description}</p>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      {copy.technologiesLabel}
                    </h4>
                    <div
                      className={cn(
                        "flex flex-wrap gap-2",
                        isLeft && "md:justify-end",
                      )}
                    >
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div
                    className={cn(
                      isLeft && "md:flex md:flex-col md:items-end md:text-right",
                    )}
                  >
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      {copy.achievementsLabel}
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className={cn(
                            "flex items-center gap-2 text-sm text-muted-foreground",
                            isLeft && "md:justify-end",
                          )}
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-success"
                            aria-hidden="true"
                          />
                          <span className={cn(isLeft && "md:text-right")}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </motion.div>
  );
}

export function Timeline() {
  const { content } = usePortfolio();
  const copy = content.timeline;

  return (
    <section id="timeline" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {copy.title} <span className="gradient-text">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {copy.introduction}
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="pointer-events-none absolute bottom-0 left-4 top-0 hidden md:left-1/2 md:block"
            aria-hidden="true"
          >
            <div className="relative flex h-full items-stretch justify-center">
              <div className="absolute inset-y-0 -ml-3 w-6 bg-gradient-to-b from-primary/8 via-secondary/4 to-accent/8 opacity-70" />
              <div className="w-[3px] rounded-full bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_15px_rgba(139,92,246,0.25)]" />
              <div className="absolute inset-y-0 w-px bg-white/30 opacity-60" />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {copy.items.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                copy={copy}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
