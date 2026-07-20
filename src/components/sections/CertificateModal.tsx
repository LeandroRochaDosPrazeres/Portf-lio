"use client";

import {
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { BadgeCheck, X } from "lucide-react";
import type { CertificationItem, PortfolioContent } from "@/lib/data";
import { isolatePageRegions } from "@/lib/accessibility";

type CertificationsCopy = PortfolioContent["certifications"];

interface CertificatePreview {
  src: string;
  width: number;
  height: number;
}

const certificatePreviews: Record<string, CertificatePreview> = {
  "/certificates/aws-devops.png": {
    src: "/certificates/previews/aws-devops.webp",
    width: 1536,
    height: 1123,
  },
  "/certificates/aws-developer.png": {
    src: "/certificates/previews/aws-developer.webp",
    width: 1536,
    height: 1123,
  },
  "/certificates/notion-service-specialist.png": {
    src: "/certificates/previews/notion-service-specialist.webp",
    width: 1536,
    height: 860,
  },
  "/certificates/salesforce-agentforce.png": {
    src: "/certificates/previews/salesforce-agentforce.webp",
    width: 1536,
    height: 836,
  },
  "/certificates/notion-admin.png": {
    src: "/certificates/previews/notion-admin.webp",
    width: 1536,
    height: 696,
  },
};

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

interface CertificateModalProps {
  cert: CertificationItem;
  copy: CertificationsCopy;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}

export function CertificateModal({
  cert,
  copy,
  onClose,
  returnFocusRef,
}: CertificateModalProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const titleId = `certificate-title-${generatedId}`;
  const preview = cert.certificateUrl
    ? certificatePreviews[cert.certificateUrl]
    : undefined;

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
    const restorePageRegions = isolatePageRegions();

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
      restorePageRegions();
      requestAnimationFrame(() => returnFocusElement?.focus());
    };
  }, [onClose, returnFocusRef]);

  if (!cert.certificateUrl) return null;

  return createPortal(
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

        <div className="w-full" style={{ backgroundColor: "var(--background)" }}>
          {!preview || imgError ? (
            <div className="flex h-48 w-full flex-col items-center justify-center gap-2 text-muted-foreground">
              <p className="text-sm">{copy.imageErrorLabel}</p>
            </div>
          ) : (
            <div className="relative overflow-hidden">
              {!imgLoaded && (
                <div
                  className="absolute inset-0 z-10 flex items-center justify-center bg-background"
                  aria-hidden="true"
                >
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              )}

              <Image
                src={preview.src}
                alt={`${copy.certificateAriaLabel}: ${cert.title}`}
                width={preview.width}
                height={preview.height}
                sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
                quality={75}
                loading="eager"
                className={`block h-auto w-full transition-opacity duration-300 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
            </div>
          )}

          <div className="flex justify-center border-t border-border p-4">
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm font-semibold text-primary underline underline-offset-4"
            >
              {copy.openImageLabel}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
