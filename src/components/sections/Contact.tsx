"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePortfolio } from "@/components/providers/LocaleProvider";
import { trackPortfolioEvent } from "@/lib/analytics";
import { socialLinks } from "@/lib/profile";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "success" | "validation-error" | "popup-blocked";

const contactHandoffCopy = {
  pt: {
    required: "obrigatório",
    invalidEmail: "Informe um endereço de e-mail válido antes de continuar.",
    popupBlocked:
      "O navegador bloqueou a nova aba. Sua mensagem foi preservada.",
    openHere: "Abrir o WhatsApp nesta aba",
  },
  en: {
    required: "required",
    invalidEmail: "Enter a valid email address before continuing.",
    popupBlocked:
      "Your browser blocked the new tab. Your message has been preserved.",
    openHere: "Open WhatsApp in this tab",
  },
  es: {
    required: "obligatorio",
    invalidEmail: "Introduce una dirección de correo válida antes de continuar.",
    popupBlocked:
      "El navegador bloqueó la nueva pestaña. Tu mensaje se ha conservado.",
    openHere: "Abrir WhatsApp en esta pestaña",
  },
} as const;

export function Contact() {
  const { content } = usePortfolio();
  const { contact, siteConfig } = content;
  const handoffCopy = contactHandoffCopy[content.locale];
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [hasEmailTypeMismatch, setHasEmailTypeMismatch] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") setHasEmailTypeMismatch(false);
    setStatus("idle");
    setFallbackUrl(null);
  };

  const handleInvalid = (event: React.FormEvent<HTMLFormElement>) => {
    const field = event.target;

    if (
      field instanceof HTMLInputElement &&
      field.name === "email" &&
      field.validity.typeMismatch
    ) {
      setHasEmailTypeMismatch(true);
    }

    setStatus("validation-error");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emptyField = Object.entries(formData).find(
      ([, value]) => !value.trim(),
    );

    if (emptyField) {
      setStatus("validation-error");
      const field = e.currentTarget.elements.namedItem(emptyField[0]);

      if (field instanceof HTMLElement) {
        field.focus();
      }

      return;
    }

    const messageCopy = contact.whatsappMessage;
    const whatsappMessage = [
      `*${messageCopy.title}*`,
      "",
      `*${messageCopy.name}:* ${formData.name.trim()}`,
      `*${messageCopy.email}:* ${formData.email.trim() || messageCopy.notProvided}`,
      `*${messageCopy.subject}:* ${formData.subject.trim() || messageCopy.notProvided}`,
      "",
      `*${messageCopy.message}:*`,
      formData.message.trim(),
    ].join("\n");
    const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      const whatsappWindow = window.open("", "_blank");

      if (!whatsappWindow) {
        setFallbackUrl(whatsappUrl);
        setStatus("popup-blocked");
        return;
      }

      whatsappWindow.opener = null;
      whatsappWindow.location.replace(whatsappUrl);
      setFallbackUrl(null);
      setStatus("success");
      trackPortfolioEvent("contact_whatsapp_opened", {
        locale: content.locale,
        source: "contact_form",
      });
    } catch {
      setFallbackUrl(whatsappUrl);
      setStatus("popup-blocked");
    }
  };

  const normalizedPhone = siteConfig.phone.replace(/[^\d+]/g, "");

  const inputClasses = cn(
    "w-full px-4 py-3 bg-card border border-border rounded-xl",
    "text-foreground placeholder:text-muted-foreground",
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
    "transition-all duration-300"
  );

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {contact.title} <span className="gradient-text">{contact.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contact.introduction}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-foreground">{contact.directTitle}</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15 text-primary">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{contact.emailLabel}</p>
                    <p className="break-all font-medium text-foreground transition-colors group-hover:text-primary">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${normalizedPhone}`}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/15 text-secondary">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.phoneLabel}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/15 text-accent">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.locationLabel}</p>
                    <p className="font-medium text-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">{contact.socialTitle}</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackPortfolioEvent("external_profile_opened", {
                      profile: "github",
                      source: "contact",
                    })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-xl hover:bg-card hover:border-primary border border-transparent transition-all"
                >
                  <Github className="w-5 h-5 text-foreground" aria-hidden="true" />
                  <span className="font-medium">GitHub</span>
                </motion.a>

                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackPortfolioEvent("external_profile_opened", {
                      profile: "linkedin",
                      source: "contact",
                    })
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-xl hover:bg-card hover:border-primary border border-transparent transition-all"
                >
                  <Linkedin className="w-5 h-5 text-foreground" aria-hidden="true" />
                  <span className="font-medium">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
              className="glass rounded-2xl p-6 space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">{contact.formTitle}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {contact.nameLabel}
                    <span className="text-error" aria-hidden="true"> *</span>
                    <span className="sr-only"> ({handoffCopy.required})</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    autoCapitalize="words"
                    maxLength={100}
                    aria-invalid={
                      status === "validation-error" && !formData.name.trim()
                    }
                    placeholder={contact.namePlaceholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {contact.emailLabel}
                    <span className="text-error" aria-hidden="true"> *</span>
                    <span className="sr-only"> ({handoffCopy.required})</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    maxLength={254}
                    aria-invalid={
                      status === "validation-error" &&
                      (!formData.email.trim() || hasEmailTypeMismatch)
                    }
                    placeholder={contact.emailPlaceholder}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {contact.subjectLabel}
                  <span className="text-error" aria-hidden="true"> *</span>
                  <span className="sr-only"> ({handoffCopy.required})</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  maxLength={160}
                  aria-invalid={
                    status === "validation-error" && !formData.subject.trim()
                  }
                  placeholder={contact.subjectPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {contact.messageLabel}
                  <span className="text-error" aria-hidden="true"> *</span>
                  <span className="sr-only"> ({handoffCopy.required})</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  maxLength={2000}
                  aria-invalid={
                    status === "validation-error" && !formData.message.trim()
                  }
                  rows={5}
                  placeholder={contact.messagePlaceholder}
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-success/10 text-success rounded-xl"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  <span>{contact.successMessage}</span>
                </motion.div>
              )}

              {status === "validation-error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-error/10 p-4 text-error"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle className="w-5 h-5" aria-hidden="true" />
                  <span>
                    {hasEmailTypeMismatch
                      ? handoffCopy.invalidEmail
                      : contact.errorMessage}
                  </span>
                </motion.div>
              )}

              {status === "popup-blocked" && fallbackUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-error/25 bg-error/10 p-4 text-error"
                  role="alert"
                  aria-live="assertive"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <div>
                      <p>{handoffCopy.popupBlocked}</p>
                      <a
                        href={fallbackUrl}
                        onClick={() =>
                          trackPortfolioEvent("contact_whatsapp_opened", {
                            locale: content.locale,
                            source: "contact_form_fallback",
                          })
                        }
                        className="focus-ring mt-2 inline-flex min-h-11 items-center rounded-full border border-current px-4 py-2 font-semibold underline-offset-4 hover:underline"
                      >
                        {handoffCopy.openHere}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="cta-gradient min-h-12 w-full py-3 text-base"
                icon={<MessageCircle className="w-5 h-5" aria-hidden="true" />}
              >
                {contact.submitLabel}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
