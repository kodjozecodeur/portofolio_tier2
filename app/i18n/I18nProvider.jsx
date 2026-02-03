"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, translations } from "./translations";

const I18nContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem("locale");
    if (stored && translations[stored]) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => {
    return (key) =>
      translations[locale]?.[key] ??
      translations[defaultLocale]?.[key] ??
      key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function resolveLocalized(value, locale) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    return value[locale] ?? value[defaultLocale] ?? "";
  }
  return String(value);
}
