"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Smartphone, Bot, BarChart3, Briefcase, ChevronRight } from "lucide-react";
import { projectsData, Project } from "@/lib/data";
import { cn } from "@/lib/utils";

// Ícones customizados para cada projeto
const projectIcons: Record<string, React.ElementType> = {
  "1": Smartphone, // IronTrack
  "2": Bot,        // BotLink
  "3": BarChart3,  // LLControl
  "4": Briefcase,  // Portfolio
};

// Gradientes únicos para cada projeto
const projectGradients: Record<string, string> = {
  "1": "from-emerald-500 via-teal-500 to-cyan-500",
  "2": "from-violet-500 via-purple-500 to-fuchsia-500",
  "3": "from-orange-500 via-amber-500 to-yellow-500",
  "4": "from-blue-500 via-indigo-500 to-violet-500",
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com gradiente */}
        <div className={cn("relative h-32 bg-gradient-to-r rounded-t-3xl", gradient)}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute -bottom-8 left-6">
            <div className="w-16 h-16 rounded-2xl bg-card border-4 border-card flex items-center justify-center shadow-xl">
              <Icon className="w-8 h-8 text-foreground" />
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 pt-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Stack Tecnológica
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium",
                  "bg-gradient-to-r transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  gradient
                )}
              >
                <ExternalLink className="w-4 h-4" />
                Ver Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Código Fonte
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const Icon = projectIcons[project.id] || Briefcase;
  const gradient = projectGradients[project.id] || "from-primary to-secondary";

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-1",
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "group relative glass rounded-2xl overflow-hidden cursor-pointer",
          sizeClasses[project.size],
          "hover:border-primary/50 transition-all duration-500",
          "min-h-[320px]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        whileHover={{ y: -5 }}
      >
        {/* Background Gradient */}
        <div className={cn(
          "absolute inset-0 opacity-10 bg-gradient-to-br transition-opacity duration-500",
          gradient,
          isHovered && "opacity-20"
        )} />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                gradient
              )}
              animate={{ rotate: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Featured Badge */}
            {project.featured && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                ⭐ Destaque
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Preview */}
          <div className="mt-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-card/80 border border-border rounded-full text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 border border-primary/30 rounded-full text-primary">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  title="Ver Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  title="Ver Código"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>

            <motion.div
              className="flex items-center gap-1 text-sm font-medium text-primary"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              <span>Ver mais</span>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none",
            "bg-gradient-to-r",
            gradient
          )}
          style={{ opacity: isHovered ? 0.05 : 0 }}
        />
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <ProjectModal project={project} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            🚀 Meus Projetos
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos que mais me orgulho. Cada um representa um desafio único, 
            desde PWAs de alta performance até sistemas de automação com IA.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Projetos", value: projectsData.length, icon: "📦" },
            { label: "Tecnologias", value: "15+", icon: "⚡" },
            { label: "PWAs", value: "3", icon: "📱" },
            { label: "Com IA", value: "2", icon: "🤖" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <span className="text-2xl mb-1 block">{stat.icon}</span>
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
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
            className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full text-foreground font-medium hover:border-primary transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>Ver todos os projetos no GitHub</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
