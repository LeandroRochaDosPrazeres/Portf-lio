import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

interface RouteErrorCopy {
  eyebrow: string;
  title: string;
  description: string;
  homeLabel: string;
  retryLabel?: string;
}

export const unexpectedErrorCopy: Record<Locale, RouteErrorCopy> = {
  pt: {
    eyebrow: "Erro inesperado",
    title: "Algo saiu do percurso.",
    description:
      "Não foi possível carregar esta página. Tente novamente ou volte ao início.",
    homeLabel: "Voltar ao início",
    retryLabel: "Tentar novamente",
  },
  en: {
    eyebrow: "Unexpected error",
    title: "Something went off course.",
    description:
      "This page could not be loaded. Try again or return to the home page.",
    homeLabel: "Back to home",
    retryLabel: "Try again",
  },
  es: {
    eyebrow: "Error inesperado",
    title: "Algo se salió del camino.",
    description:
      "No se pudo cargar esta página. Inténtalo de nuevo o vuelve al inicio.",
    homeLabel: "Volver al inicio",
    retryLabel: "Intentar de nuevo",
  },
};

export const notFoundCopy: Record<Locale, RouteErrorCopy> = {
  pt: {
    eyebrow: "Erro 404",
    title: "Página não encontrada.",
    description:
      "O endereço pode ter mudado ou o conteúdo não está mais disponível.",
    homeLabel: "Voltar ao portfólio",
  },
  en: {
    eyebrow: "Error 404",
    title: "Page not found.",
    description:
      "The address may have changed or the content is no longer available.",
    homeLabel: "Back to the portfolio",
  },
  es: {
    eyebrow: "Error 404",
    title: "Página no encontrada.",
    description:
      "La dirección puede haber cambiado o el contenido ya no está disponible.",
    homeLabel: "Volver al portafolio",
  },
};

export function getRouteLocale(value?: string | string[]): Locale {
  const locale = Array.isArray(value) ? value[0] : value;
  return isLocale(locale) ? locale : defaultLocale;
}
