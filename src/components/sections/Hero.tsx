"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { buttonVariants } from "@/components/ui/Button";

export function Hero() {
  const { locale, content } = usePortfolio();
  const { siteConfig, hero } = content;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-2xl animate-orb-1 will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-2xl animate-orb-2 will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-2xl animate-orb-3 will-change-transform" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative w-36 h-36 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-spin-slow opacity-50 blur-md will-change-transform" />
              <div className="relative w-full h-full rounded-full bg-card border-2 border-border overflow-hidden">
                <Image
                  src="/avatar.webp"
                  alt={siteConfig.name}
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text">{siteConfig.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-9"
          >
            <h2 className="text-2xl font-semibold text-foreground">
              {siteConfig.name}
            </h2>
            <p className="text-muted-foreground mb-4">{siteConfig.title}</p>

            <div className="inline-flex items-center gap-2">
              <span className="pulse-badge relative flex h-3 w-3" aria-hidden="true">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
              </span>
              <span className="text-sm font-medium text-muted-foreground bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                {siteConfig.availability}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-24"
          >
            <Link
              href="#projects"
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                magnetic: true,
              })}
            >
              <FolderOpen className="w-5 h-5" aria-hidden="true" />
              {hero.projectsCta}
            </Link>
            <a
              href={`/api/cv?lang=${locale}`}
              download
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                magnetic: true,
              })}
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              {hero.resumeCta}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={hero.scrollAriaLabel}
          >
            <span className="text-sm">{hero.scrollLabel}</span>
            <ArrowDown className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
