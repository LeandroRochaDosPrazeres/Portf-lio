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
import { trackPortfolioEvent } from "@/lib/analytics";
import { isolatePageRegions } from "@/lib/accessibility";

const desktopHiddenDestinations = new Set(["#education", "#next-steps"]);
const mobileMenuId = "portfolio-mobile-navigation";
const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

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
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuNavigationTargetRef = useRef<string | null>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null);
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

    const panel = mobileMenuPanelRef.current;
    const menuTrigger = menuTriggerRef.current;
    const previousBodyOverflow = document.body.style.overflow;
    const restorePageRegions = isolatePageRegions();

    const focusFrame = window.requestAnimationFrame(() => {
      closeMenuButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusableElements = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter(
        (element) =>
          element.getAttribute("aria-hidden") !== "true" &&
          element.offsetParent !== null,
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;

      restorePageRegions();

      const navigationTarget = menuNavigationTargetRef.current;
      menuNavigationTargetRef.current = null;

      if (!navigationTarget) {
        menuTrigger?.focus();
        return;
      }

      window.requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(navigationTarget);
        if (!target) return;

        const previousTabIndex = target.getAttribute("tabindex");
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });

        if (previousTabIndex === null) {
          target.addEventListener(
            "blur",
            () => target.removeAttribute("tabindex"),
            { once: true },
          );
        } else {
          target.addEventListener(
            "blur",
            () => target.setAttribute("tabindex", previousTabIndex),
            { once: true },
          );
        }
      });
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <motion.header
        data-site-header
        initial={{ y: 0 }}
        animate={{ y: isVisible || isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-1 left-0 right-0 z-50 transition-[padding] duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav
            aria-label={content.header.navigationLabel}
            className={`flex items-center justify-between rounded-full px-2 min-[360px]:px-4 sm:px-6 py-3 transition-all duration-300 ${
              isScrolled ? "glass-strong shadow-lg" : ""
            }`}
          >
            <Link
              href="#hero"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors shrink-0"
              aria-label={content.siteConfig.name}
            >
              <span className="hidden gradient-text min-[360px]:inline">
                {content.siteConfig.name.split(" ")[0]}
              </span>
              <span className="gradient-text min-[360px]:hidden">
                {content.siteConfig.name.charAt(0)}
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

            <div className="flex shrink-0 items-center gap-1.5 min-[360px]:gap-2 sm:gap-3">
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
                      onClick={() => {
                        if (locale !== availableLocale) {
                          trackPortfolioEvent("locale_changed", {
                            from: locale,
                            to: availableLocale,
                          });
                        }

                        setLocale(availableLocale);
                      }}
                      aria-label={`${content.header.languageLabel}: ${content.header.localeLabels[availableLocale]}`}
                      aria-pressed={isActive}
                      title={content.header.localeLabels[availableLocale]}
                      className={`min-h-8 min-w-8 rounded-full px-1.5 py-1 text-xs font-semibold uppercase transition-colors focus-ring min-[360px]:min-w-9 min-[360px]:px-2 ${
                        isActive
                          ? "cta-gradient"
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
                ref={menuTriggerRef}
                type="button"
                onClick={() => {
                  menuNavigationTargetRef.current = null;
                  setIsMobileMenuOpen((isOpen) => !isOpen);
                }}
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
            ref={mobileMenuPanelRef}
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label={content.header.menuLabel}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex min-h-full flex-col px-4 pb-8 pt-5 sm:px-6">
              <div className="sticky top-0 z-10 flex items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-lg backdrop-blur-xl">
                <span className="text-lg font-bold gradient-text" aria-hidden="true">
                  {content.siteConfig.name.split(" ")[0]}
                </span>
                <button
                  ref={closeMenuButtonRef}
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground"
                  aria-label={content.header.closeMenuLabel}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <motion.nav
                aria-label={content.header.navigationLabel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="my-auto flex flex-col items-center gap-2 py-8"
              >
                {content.navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.035 }}
                    className="w-full max-w-sm"
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        menuNavigationTargetRef.current = item.href;
                        setIsMobileMenuOpen(false);
                      }}
                      className="focus-ring flex min-h-12 w-full items-center justify-center rounded-2xl px-4 py-2 text-center text-xl font-bold text-foreground transition-colors hover:bg-card hover:text-primary sm:text-2xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
