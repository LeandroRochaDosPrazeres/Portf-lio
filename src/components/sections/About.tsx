"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CloudCog, Code2, type LucideIcon } from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";

const principleIcons: Record<string, LucideIcon> = {
  engineering: Code2,
  "responsible-ai": BrainCircuit,
  delivery: CloudCog,
};

export function About() {
  const { content } = usePortfolio();
  const { about } = content;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {about.title} <span className="gradient-text">{about.titleAccent}</span>
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-5">
              {about.introduction}
            </p>
            <p className="text-muted-foreground leading-relaxed">{about.body}</p>
          </motion.div>

          <div className="grid gap-4">
            {about.principles.map((principle, index) => {
              const Icon = principleIcons[principle.id] ?? Code2;

              return (
                <motion.article
                  key={principle.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
