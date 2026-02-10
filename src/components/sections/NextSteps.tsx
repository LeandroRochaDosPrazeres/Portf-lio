"use client";

import { motion } from "framer-motion";
import { nextSteps } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CalendarRange, PlaneTakeoff, BookOpenCheck } from "lucide-react";

const statusConfig = {
  "em andamento": {
    label: "Em andamento",
    color: "bg-primary/10 text-primary border-primary/30",
    icon: BookOpenCheck,
  },
  planejado: {
    label: "Planejado",
    color: "bg-secondary/10 text-secondary border-secondary/30",
    icon: CalendarRange,
  },
  pesquisando: {
    label: "Pesquisando",
    color: "bg-accent/10 text-accent border-accent/30",
    icon: PlaneTakeoff,
  },
} as const;

const stageColors = [
  "from-blue-500 to-blue-600",
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-purple-500 to-purple-600",
  "from-red-500 to-red-600",
  "from-orange-500 to-orange-600",
];

const stageBorderAccents = [
  "hover:border-blue-500/40",
  "hover:border-blue-500/40",
  "hover:border-purple-500/40",
  "hover:border-purple-500/40",
  "hover:border-red-500/40",
  "hover:border-orange-500/40",
];

export function NextSteps() {
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
            Próximos Passos
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Roadmap de <span className="gradient-text">evolução contínua</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Certificações e formações estratégicas planejadas para evoluir de Desenvolvedor Full Stack
            para uma liderança técnica completa em DevOps, Segurança e Gestão.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nextSteps.map((item, index) => {
            const status = statusConfig[item.status];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "glass rounded-2xl p-6 flex flex-col gap-5 border border-border/40 transition-all group",
                  stageBorderAccents[index],
                )}
              >
                {/* Header: Step number + Subtitle + Status */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-mono font-semibold text-lg tabular-nums leading-none",
                        stageColors[index],
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        Etapa {index + 1}
                      </p>
                      <p className="text-sm font-semibold text-foreground/80 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-semibold border whitespace-nowrap shrink-0",
                      status.color,
                    )}
                  >
                    <span className="inline-flex items-center gap-1">
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>

                {/* Stage Focus */}
                <p className="text-xs italic text-muted-foreground -mt-3">
                  {item.stageFocus}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Focus Tags */}
                <div className="mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-semibold">
                    Foco
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
