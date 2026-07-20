"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CalendarRange, BookOpenCheck } from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import type { NextStepStatus } from "@/lib/data";

const statusConfig = {
  estudando: {
    color: "bg-primary/10 text-primary border-primary/30",
    icon: BookOpenCheck,
  },
  planejado: {
    color: "bg-secondary/10 text-secondary border-secondary/30",
    icon: CalendarRange,
  },
} as const satisfies Record<
  NextStepStatus,
  { color: string; icon: typeof BookOpenCheck }
>;

export function NextSteps() {
  const { content } = usePortfolio();
  const { nextSteps } = content;

  return (
    <section id="next-steps" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            {nextSteps.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {nextSteps.title}{" "}
            <span className="gradient-text">{nextSteps.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {nextSteps.introduction}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nextSteps.items.map((item, index) => {
            const status = statusConfig[item.status];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-5 border border-border/40 hover:border-primary/40 transition-all group"
              >
                {/* Header: Step number + Title + Status */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-mono font-semibold text-lg tabular-nums leading-none"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        {nextSteps.stepLabel} {index + 1}
                      </p>
                      <h3 className="text-base font-bold text-foreground leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-semibold border whitespace-nowrap shrink-0",
                      status.color,
                    )}
                  >
                    <span className="inline-flex items-center gap-1">
                      <StatusIcon className="w-3 h-3" aria-hidden="true" />
                      {nextSteps.statusLabels[item.status]}
                    </span>
                  </span>
                </div>

                {/* Stage Focus */}
                <p className="text-xs italic text-muted-foreground">
                  {item.stageFocus}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Focus Tags */}
                <div className="mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-semibold">
                    {nextSteps.focusLabel}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.focus.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
