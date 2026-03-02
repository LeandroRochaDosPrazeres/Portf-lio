"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, CertificationItem } from "@/lib/data";
import { BadgeCheck, X, Eye, ExternalLink } from "lucide-react";

function CertificateModal({
  cert,
  onClose,
}: {
  cert: CertificationItem;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-0"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificado: ${cert.title}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.institution} &bull; {cert.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cert.certificateUrl && (
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title="Abrir em nova aba"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image */}
        {cert.certificateUrl && (
          <div className="relative w-full bg-card/50 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.certificateUrl}
              alt={`Certificado: ${cert.title}`}
              className="w-full h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        )}

        {/* Skills */}
        <div className="p-6 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
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
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>

              <div className="flex items-center justify-between gap-4">
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
                {cert.certificateUrl && (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary shrink-0 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver certificado</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
