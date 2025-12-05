"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { projectsData, Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative glass rounded-2xl overflow-hidden",
        sizeClasses[project.size],
        "hover:border-primary/50 transition-all duration-500"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video Container */}
      <div className="relative w-full h-48 md:h-full min-h-[200px] bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* Placeholder gradient - Replace with actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-card/50 to-transparent" />
        
        {/* Project Title Overlay for visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-foreground/5">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Uncomment when you have images:
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        */}

        {/* Video Preview on Hover */}
        {project.video && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
        />

        {/* Play Icon for Video */}
        {project.video && !isHovered && (
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-5 h-5 text-foreground" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium bg-muted/20 text-muted-foreground rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                Código
              </a>
            )}
          </div>
        </motion.div>

        {/* Always Visible Title (when not hovered) */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: isHovered ? -20 : 0, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 left-6 right-6"
        >
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </motion.div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Destaque
        </div>
      )}
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
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
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos projetos que mais me orgulho. Cada um representa um desafio único e uma oportunidade de aprendizado.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
