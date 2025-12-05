"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Monta a mensagem para WhatsApp
    const whatsappMessage = `*Nova mensagem do Portfólio*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Email:* ${formData.email || "Não informado"}%0A` +
      `*Assunto:* ${formData.subject || "Não informado"}%0A%0A` +
      `*Mensagem:*%0A${formData.message}`;

    // Abre WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Limpa o formulário
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Quer discutir uma oportunidade? Ou apenas bater um papo sobre tecnologia? Estou sempre aberto a novas conexões.
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
              <h3 className="text-xl font-bold text-foreground">Contato Direto</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-success flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium text-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* GitHub - Em breve */}
                <div className="relative group">
                  <motion.div
                    className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-transparent cursor-not-allowed opacity-60"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="font-medium">Github</span>
                  </motion.div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-card border border-border rounded-lg text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Em breve
                  </div>
                </div>

                {/* LinkedIn */}
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 p-4 bg-card/50 rounded-xl hover:bg-card hover:border-primary border border-transparent transition-all"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                  <span className="font-medium">Linkedin</span>
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
              <h3 className="text-xl font-bold text-foreground">Envie uma Mensagem</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sobre o que você quer conversar?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  className={cn(inputClasses, "resize-none")}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-success/10 text-success rounded-xl"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Redirecionando para o WhatsApp...</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 text-red-500 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Preencha seu nome e mensagem.</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Enviar via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
