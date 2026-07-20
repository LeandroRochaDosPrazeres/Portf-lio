import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BarChart3, Gauge, ShieldCheck } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

const copy: Record<
  Locale,
  {
    title: string;
    description: string;
    back: string;
    updated: string;
    sections: Array<{ title: string; body: string }>;
  }
> = {
  pt: {
    title: "Privacidade e métricas",
    description:
      "Como este portfólio utiliza métricas anônimas para melhorar conteúdo, desempenho e acessibilidade.",
    back: "Voltar ao portfólio",
    updated: "Atualizado em julho de 2026",
    sections: [
      {
        title: "Métricas de visita",
        body: "A Vercel Web Analytics registra visualizações e interações de forma agregada. Os eventos incluem ações como abrir um projeto ou baixar o currículo, sem enviar nome, e-mail ou o conteúdo de mensagens.",
      },
      {
        title: "Desempenho real",
        body: "O Vercel Speed Insights coleta Core Web Vitals para identificar lentidão e problemas de experiência em diferentes dispositivos. Esses dados são usados somente para melhorar este site.",
      },
      {
        title: "Seus dados de contato",
        body: "O formulário prepara a mensagem no seu dispositivo. Ao continuar para o WhatsApp, nome, e-mail, assunto e mensagem são transmitidos ao WhatsApp/Meta; a partir daí, aplica-se a política de privacidade do WhatsApp. Esses dados não são enviados à telemetria deste portfólio nem armazenados por uma API própria.",
      },
    ],
  },
  en: {
    title: "Privacy and metrics",
    description:
      "How this portfolio uses anonymous metrics to improve content, performance, and accessibility.",
    back: "Back to the portfolio",
    updated: "Updated in July 2026",
    sections: [
      {
        title: "Visit metrics",
        body: "Vercel Web Analytics records page views and interactions in aggregate. Events include actions such as opening a project or downloading the résumé, without sending names, email addresses, or message content.",
      },
      {
        title: "Real-world performance",
        body: "Vercel Speed Insights collects Core Web Vitals to identify slowdowns and experience issues across devices. This data is used only to improve this website.",
      },
      {
        title: "Your contact data",
        body: "The form prepares the message on your device. When you continue to WhatsApp, your name, email address, subject, and message are transmitted to WhatsApp/Meta; from that point on, WhatsApp's privacy policy applies. This data is not sent to this portfolio's telemetry or stored by a first-party API.",
      },
    ],
  },
  es: {
    title: "Privacidad y métricas",
    description:
      "Cómo este portafolio utiliza métricas anónimas para mejorar el contenido, el rendimiento y la accesibilidad.",
    back: "Volver al portafolio",
    updated: "Actualizado en julio de 2026",
    sections: [
      {
        title: "Métricas de visita",
        body: "Vercel Web Analytics registra visualizaciones e interacciones de forma agregada. Los eventos incluyen acciones como abrir un proyecto o descargar el currículum, sin enviar nombres, correos electrónicos ni el contenido de mensajes.",
      },
      {
        title: "Rendimiento real",
        body: "Vercel Speed Insights recopila Core Web Vitals para identificar lentitud y problemas de experiencia en distintos dispositivos. Estos datos se utilizan únicamente para mejorar este sitio.",
      },
      {
        title: "Tus datos de contacto",
        body: "El formulario prepara el mensaje en tu dispositivo. Al continuar a WhatsApp, tu nombre, correo, asunto y mensaje se transmiten a WhatsApp/Meta; desde ese momento se aplica la política de privacidad de WhatsApp. Estos datos no se envían a la telemetría de este portafolio ni se almacenan en una API propia.",
      },
    ],
  },
};

const icons = [BarChart3, Gauge, ShieldCheck];

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: `${copy[locale].title} | Leandro Rocha`,
    description: copy[locale].description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        "pt-BR": "/pt/privacy",
        "en-US": "/en/privacy",
        "es-419": "/es/privacy",
        "x-default": "/pt/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = copy[locale];

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href={`/${locale}`}
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-primary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {content.back}
        </Link>

        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.updated}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.description}
          </p>
        </header>

        <div className="mt-14 grid gap-5">
          {content.sections.map((section, index) => {
            const Icon = icons[index];
            return (
              <section
                key={section.title}
                className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {section.body}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
