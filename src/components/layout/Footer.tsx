"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { socialLinks } from "@/lib/profile";

const navigationDestinations = new Set([
  "#hero",
  "#about",
  "#timeline",
  "#education",
  "#next-steps",
]);

export function Footer() {
  const { content } = usePortfolio();
  const currentYear = new Date().getFullYear();
  const { siteConfig, footer, contact } = content;
  const navigationLinks = content.navigation.filter((link) =>
    navigationDestinations.has(link.href),
  );
  const portfolioLinks = content.navigation.filter(
    (link) => !navigationDestinations.has(link.href),
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link
              href="#hero"
              className="text-2xl font-bold inline-block mb-4"
              aria-label={siteConfig.name}
            >
              <span className="gradient-text">
                {siteConfig.name.split(" ")[0]}
              </span>
              <span className="text-muted">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {footer.description}
            </p>
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
                <Linkedin className="w-4 h-4" aria-hidden="true" />
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
                <Github className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {footer.navigationTitle}
            </h2>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
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

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {footer.portfolioTitle}
            </h2>
            <ul className="space-y-3">
              {portfolioLinks.map((link) => (
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

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {footer.contactTitle}
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  aria-label={`${contact.emailLabel}: ${siteConfig.email}`}
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  aria-label={`${contact.phoneLabel}: ${siteConfig.phone}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">{contact.locationLabel}: </span>
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {siteConfig.name}. {footer.rights}
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={footer.backToTopAriaLabel}
            >
              {footer.backToTop}
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
