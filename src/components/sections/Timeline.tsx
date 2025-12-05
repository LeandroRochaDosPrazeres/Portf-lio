"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { timelineData, TimelineItem } from "@/lib/data";
import { cn } from "@/lib/utils";

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

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = typeIcons[item.type];
  const gradientColor = typeColors[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex items-start gap-4 md:gap-8",
        "md:w-1/2",
        isLeft ? "md:pr-8 md:text-right md:self-start" : "md:pl-8 md:self-end md:ml-auto"
      )}
    >
      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute top-0 w-4 h-4 rounded-full bg-gradient-to-br",
          gradientColor,
          "hidden md:block",
          isLeft ? "right-0 translate-x-1/2 md:-right-2" : "left-0 -translate-x-1/2 md:-left-2"
        )}
      />

      {/* Card */}
      <motion.div
        className={cn(
          "flex-1 glass rounded-2xl p-6 cursor-pointer group",
          "hover:border-primary/50 transition-all duration-300"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        layout
      >
        {/* Header */}
        <div className={cn("flex items-start gap-4", isLeft && "md:flex-row-reverse")}>
          {/* Icon */}
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0",
              gradientColor
            )}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className={cn("flex-1", isLeft && "md:text-right")}>
            <span className="text-sm font-medium text-primary">{item.year}</span>
            <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
            <p className="text-muted-foreground">{item.subtitle}</p>
          </div>

          {/* Expand Button */}
          <button
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors"
            aria-label={isExpanded ? "Recolher" : "Expandir"}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={cn("mt-4 pt-4 border-t border-border", isLeft && "md:text-right")}>
                <p className="text-muted-foreground mb-4">{item.description}</p>

                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tecnologias</h4>
                    <div className={cn("flex flex-wrap gap-2", isLeft && "md:justify-end")}>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Conquistas</h4>
                    <ul className={cn("space-y-1", isLeft && "md:text-right")}>
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Minha <span className="gradient-text">Trajetória</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de aprendizado contínuo, desafios superados e conquistas que moldaram quem sou hoje.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
