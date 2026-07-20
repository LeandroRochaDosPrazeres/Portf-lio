"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { buttonVariants } from "@/components/ui/Button";
import { trackPortfolioEvent } from "@/lib/analytics";

export function Hero() {
  const { locale, content } = usePortfolio();
  const { siteConfig, hero } = content;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-2xl animate-orb-1 will-change-transform" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-2xl animate-orb-2 will-change-transform" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-2xl animate-orb-3 will-change-transform" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-12 pt-24 sm:pb-14 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 sm:mb-4"
          >
            <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full animate-spin-slow opacity-50 blur-md will-change-transform" />
              <div className="relative w-full h-full rounded-full bg-card border-2 border-border overflow-hidden">
                <Image
                  src="/avatar.webp"
                  alt={siteConfig.name}
                  fill
                  sizes="(min-width: 640px) 112px, 96px"
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
            className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary sm:tracking-[0.18em]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">{siteConfig.headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-5"
          >
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              {siteConfig.name}
            </h2>
            <p className="mb-2 text-sm text-muted-foreground sm:text-base">
              {siteConfig.title}
            </p>

            <div className="inline-flex items-center gap-2">
              <span className="pulse-badge relative flex h-3 w-3" aria-hidden="true">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
              </span>
              <span className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                {siteConfig.availability}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#projects"
              className={buttonVariants({
                variant: "primary",
                size: "lg",
                magnetic: true,
                className:
                  "cta-gradient min-h-12 w-full px-6 py-3 text-base sm:w-auto",
              })}
            >
              <FolderOpen className="w-5 h-5" aria-hidden="true" />
              {hero.projectsCta}
            </Link>
            <a
              href={`/api/cv?lang=${locale}`}
              download
              onClick={() =>
                trackPortfolioEvent("cv_downloaded", {
                  locale,
                  source: "hero",
                })
              }
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                magnetic: true,
                className:
                  "min-h-12 w-full border-foreground/25 px-6 py-3 text-base sm:w-auto",
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
        className="hero-scroll-cue absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
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
