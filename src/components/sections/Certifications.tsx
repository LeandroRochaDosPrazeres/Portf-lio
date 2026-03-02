"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { certifications, CertificationItem } from "@/lib/data";
import { BadgeCheck, X, Eye } from "lucide-react";

function CertificateModal({
  cert,
  onClose,
}: {
  cert: CertificationItem;
  onClose: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    closeButtonRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: "var(--card)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(16px)",
          opacity: visible ? 1 : 0,
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificado: ${cert.title}`}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between p-5 border-b rounded-t-3xl"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white shrink-0">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-foreground leading-tight truncate">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {cert.institution} &bull; {cert.year}
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-9 h-9 rounded-full border flex items-center justify-center hover:text-primary transition-colors shrink-0 ml-3"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
            }}
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Certificate Image */}
        {cert.certificateUrl && (
          <div className="w-full" style={{ backgroundColor: "var(--background)" }}>
            {!imgLoaded && !imgError && (
              <div className="w-full h-64 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {imgError && (
              <div className="w-full h-48 flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <p className="text-sm">Não foi possível carregar a imagem</p>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline"
                >
                  Abrir imagem diretamente
                </a>
              </div>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.certificateUrl}
              alt={`Certificado: ${cert.title}`}
              className="block w-full h-auto rounded-b-3xl"
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

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Certificações
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Conquistas que <span className="gradient-text">validam</span> minha evolução
          </h2>
          <p className="text-muted-foreground mt-4">
            Cursos e certificações que comprovam minha base técnica e compromisso com aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all cursor-pointer group"
              onClick={() => cert.certificateUrl && setSelectedCert(cert)}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && cert.certificateUrl) {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              role={cert.certificateUrl ? "button" : undefined}
              tabIndex={cert.certificateUrl ? 0 : undefined}
              aria-label={
                cert.certificateUrl
                  ? `Ver certificado: ${cert.title}`
                  : undefined
              }
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                  <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">{cert.institution}</p>
                </div>
                {cert.certificateUrl && (
                  <div
                    className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0"
                    title="Ver certificado"
                  >
                    <Eye className="w-3.5 h-3.5 text-primary" />
                  </div>
                )}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal via Portal — renderiza fora da section */}
      {selectedCert &&
        createPortal(
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />,
          document.body,
        )}
    </section>
  );
}
