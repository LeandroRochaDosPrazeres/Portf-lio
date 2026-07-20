"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import type { PortfolioContent } from "@/lib/data";
import {
  getHtmlLocale,
  locales,
  localeStorageKey,
  type Locale,
} from "@/lib/i18n";

interface LocaleProviderProps {
  children: React.ReactNode;
  locale: Locale;
  content: PortfolioContent;
}

export interface PortfolioContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PortfolioContent;
  availableLocales: typeof locales;
  htmlLocale: string;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function LocaleProvider({
  children,
  locale,
  content,
}: LocaleProviderProps) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = getHtmlLocale(locale);
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    if (nextLocale === locale) return;

    window.localStorage.setItem(localeStorageKey, nextLocale);
    router.push(`/${nextLocale}${window.location.hash}`);
  }, [locale, router]);

  const value = useMemo<PortfolioContextValue>(
    () => ({
      locale,
      setLocale,
      content,
      availableLocales: locales,
      htmlLocale: getHtmlLocale(locale),
    }),
    [content, locale, setLocale],
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio(): PortfolioContextValue {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used within a LocaleProvider");
  }

  return context;
}
