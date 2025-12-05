"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import Link from "next/link";

const footerLinks = {
  navegacao: [
    { label: "Início", href: "#hero" },
    { label: "Formação", href: "#education" },
    { label: "Trajetória", href: "#timeline" },
    { label: "Próximos Passos", href: "#next-steps" },
  ],
  portfolio: [
    { label: "Certificações", href: "#certifications" },
    { label: "Projetos", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Contato", href: "#contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="text-2xl font-bold inline-block mb-4">
              <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
              <span className="text-muted">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {siteConfig.title} apaixonado por criar soluções inovadoras e escaláveis.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Portfólio
            </h4>
            <ul className="space-y-3">
              {footerLinks.portfolio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {siteConfig.name}. Todos os direitos reservados.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Voltar ao topo"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
