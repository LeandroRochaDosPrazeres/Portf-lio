"use client";

import { motion } from "framer-motion";
import { educationItems } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Formação Acadêmica
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Bases que sustentam minha <span className="gradient-text">trajetória</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Estudos em andamento que reforçam meu compromisso com engenharia de software e tecnologia.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-border/50 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-2xl font-semibold text-foreground">{item.course}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Principais Focos
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
