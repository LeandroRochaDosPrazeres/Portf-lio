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
import { socialLinks } from "@/lib/profile";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "success" | "error";

export function Contact() {
  const { content } = usePortfolio();
  const { contact, siteConfig } = content;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = Object.values(formData).map((value) => value.trim());

    if (values.some((value) => !value)) {
      setStatus("error");
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
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const normalizedPhone = siteConfig.phone.replace(/[^\d+]/g, "");

  const inputClasses = cn(
    "w-full px-4 py-3 bg-card border border-border rounded-xl",
    "text-foreground placeholder:text-muted",
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.emailLabel}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${normalizedPhone}`}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.phoneLabel}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-success flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
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
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-foreground">{contact.formTitle}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={contact.namePlaceholder}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={contact.emailPlaceholder}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {contact.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={contact.subjectPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 text-red-500 rounded-xl"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle className="w-5 h-5" aria-hidden="true" />
                  <span>{contact.errorMessage}</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
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
