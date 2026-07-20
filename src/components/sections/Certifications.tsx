"use client";

import {
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { BadgeCheck, Eye, X } from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";

type CertificationItem = ReturnType<
  typeof usePortfolio
>["content"]["certifications"]["items"][number];
type CertificationsCopy = ReturnType<
  typeof usePortfolio
>["content"]["certifications"];

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter(
    (element) =>
      element.getAttribute("aria-hidden") !== "true" &&
      !element.hasAttribute("hidden"),
  );
}

function CertificateModal({
  cert,
  copy,
  onClose,
  returnFocusRef,
}: {
  cert: CertificationItem;
  copy: CertificationsCopy;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const titleId = `certificate-title-${generatedId}`;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const returnFocusElement = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = getFocusableElements(dialogRef.current);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      requestAnimationFrame(() => returnFocusElement?.focus());
    };
  }, [onClose, returnFocusRef]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        ref={dialogRef}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-3xl shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: "var(--card)",
          transform: visible
            ? "scale(1) translateY(0)"
            : "scale(0.95) translateY(16px)",
          opacity: visible ? 1 : 0,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between rounded-t-3xl border-b p-5"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent text-white"
              aria-hidden="true"
            >
              <BadgeCheck className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h3
                id={titleId}
                className="truncate text-base font-bold leading-tight text-foreground"
              >
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cert.institution} &bull; {cert.year}
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors hover:text-primary"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
            }}
            aria-label={copy.closeLabel}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {cert.certificateUrl && (
          <div className="w-full" style={{ backgroundColor: "var(--background)" }}>
            {!imgLoaded && !imgError && (
              <div className="flex h-64 w-full items-center justify-center" aria-hidden="true">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            )}

            {imgError && (
              <div className="flex h-48 w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                <p className="text-sm">{copy.imageErrorLabel}</p>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring text-sm text-primary underline"
                >
                  {copy.openImageLabel}
                </a>
              </div>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.certificateUrl}
              alt={`${copy.certificateAriaLabel}: ${cert.title}`}
              className="block h-auto w-full rounded-b-3xl"
              style={{ display: imgLoaded ? "block" : "none" }}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function CertificationCardContent({
  cert,
}: {
  cert: CertificationItem;
}) {
  return (
    <>
      <div className="mb-4 flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-white"
          aria-hidden="true"
        >
          <BadgeCheck className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-muted-foreground">{cert.year}</p>
          <h3 className="text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {cert.title}
          </h3>
          <p className="text-muted-foreground">{cert.institution}</p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {cert.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}

export function Certifications() {
  const { content } = usePortfolio();
  const copy = content.certifications;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(
    null,
  );
  const activeTriggerRef = useRef<HTMLButtonElement>(null);
  const closeModal = useCallback(() => setSelectedCert(null), []);

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {copy.title} <span className="gradient-text">{copy.titleAccent}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{copy.introduction}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {copy.items.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass group rounded-2xl border border-border/40 p-6 transition-all hover:border-primary/40"
            >
              <CertificationCardContent cert={cert} />
              {cert.certificateUrl && (
                <button
                  type="button"
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-primary/15"
                  onClick={(event) => {
                    activeTriggerRef.current = event.currentTarget;
                    setSelectedCert(cert);
                  }}
                  aria-label={`${copy.viewLabel}: ${cert.title}`}
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  {copy.viewLabel}
                </button>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {selectedCert &&
        createPortal(
          <CertificateModal
            cert={selectedCert}
            copy={copy}
            onClose={closeModal}
            returnFocusRef={activeTriggerRef}
          />,
          document.body,
        )}
    </section>
  );
}
