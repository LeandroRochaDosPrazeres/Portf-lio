"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const desktopHiddenDestinations = new Set(["#education", "#next-steps"]);
const mobileMenuId = "portfolio-mobile-navigation";

export function Header() {
  const {
    locale,
    setLocale,
    content,
    availableLocales,
  } = usePortfolio();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const { scrollYProgress, scrollY } = useScroll();
  const desktopNavigation = useMemo(
    () =>
      content.navigation.filter(
        (item) => !desktopHiddenDestinations.has(item.href),
      ),
    [content.navigation],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollYRef.current ? "down" : "up";

    if (latest > 100) {
      setIsScrolled(true);
      setIsVisible(direction !== "down" || latest <= 200);
    } else {
      setIsScrolled(false);
      setIsVisible(true);
    }

    lastScrollYRef.current = latest;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
        role="progressbar"
        aria-label={content.header.readingProgressLabel}
      />

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible || isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav
            aria-label={content.header.navigationLabel}
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
              isScrolled ? "glass-strong shadow-lg" : ""
            }`}
          >
            <Link
              href="#hero"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors shrink-0"
              aria-label={content.siteConfig.name}
            >
              <span className="gradient-text">
                {content.siteConfig.name.split(" ")[0]}
              </span>
              <span className="text-muted">.</span>
            </Link>

            <ul className="hidden xl:flex items-center gap-0.5">
              {desktopNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-2.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animated-underline whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div
                role="group"
                aria-label={content.header.languageLabel}
                className="flex items-center rounded-full border border-border bg-card/80 p-1"
              >
                {availableLocales.map((availableLocale) => {
                  const isActive = locale === availableLocale;

                  return (
                    <button
                      key={availableLocale}
                      type="button"
                      onClick={() => setLocale(availableLocale)}
                      aria-label={`${content.header.languageLabel}: ${content.header.localeLabels[availableLocale]}`}
                      aria-pressed={isActive}
                      title={content.header.localeLabels[availableLocale]}
                      className={`min-w-8 rounded-full px-2 py-1 text-[11px] font-semibold uppercase transition-colors focus-ring ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {availableLocale}
                    </button>
                  );
                })}
              </div>

              <ThemeToggle />

              <motion.button
                type="button"
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                className="xl:hidden w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={
                  isMobileMenuOpen
                    ? content.header.closeMenuLabel
                    : content.header.openMenuLabel
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls={mobileMenuId}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <motion.nav
              aria-label={content.header.menuLabel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-4 px-6 pt-24"
            >
              {content.navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.035 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
