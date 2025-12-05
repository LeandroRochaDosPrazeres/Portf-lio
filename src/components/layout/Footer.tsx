"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="#hero" className="text-xl font-bold">
              <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-muted">.</span>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} {siteConfig.name}. Feito com{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> e muito café.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="#timeline"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Trajetória
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#stack"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Stack
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors focus-ring"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted">
            Construído com{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span>,{" "}
            <span className="text-foreground">Tailwind CSS</span> e{" "}
            <span className="text-foreground">Framer Motion</span>.
            Hospedado na <span className="text-foreground">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
