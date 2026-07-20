"use client";

import { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BadgeCheck, Eye } from "lucide-react";
import { usePortfolio } from "@/components/providers/LocaleProvider";

type CertificationItem = ReturnType<
  typeof usePortfolio
>["content"]["certifications"]["items"][number];
const CertificateModal = dynamic(() =>
  import("@/components/sections/CertificateModal").then(
    (mod) => mod.CertificateModal,
  ),
  { ssr: false },
);

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
              className="glass group rounded-2xl border border-border/40 p-6 transition-colors hover:border-primary/40"
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

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          copy={copy}
          onClose={closeModal}
          returnFocusRef={activeTriggerRef}
        />
      )}
    </section>
  );
}
