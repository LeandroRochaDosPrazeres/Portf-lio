"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Certificações
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Conquistas que <span className="gradient-text">validam</span> minha evolução
          </h2>
          <p className="text-muted-foreground mt-4">
            Cursos e certificações que comprovam minha base técnica e compromisso com aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                  <h3 className="text-xl font-semibold text-foreground leading-tight">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.institution}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
