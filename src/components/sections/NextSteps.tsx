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
            Novos desafios em <span className="gradient-text">evolução contínua</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Cursos e certificações que estou estudando ou planejando para continuar evoluindo como
            desenvolvedor Full Stack.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
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
                className="glass rounded-2xl p-6 flex flex-col gap-6 border border-border/40 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-mono font-semibold text-lg md:text-xl tabular-nums leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">
                        Etapa {index + 1}
                      </p>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  <span className={cn("px-3 py-1 rounded-full text-xs font-semibold border", status.color)}>
                    <span className="inline-flex items-center gap-1">
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Foco</p>
                  <div className="flex flex-wrap gap-2">
                    {item.focus.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
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
