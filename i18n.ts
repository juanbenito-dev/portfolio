export const supportedLocales = ["en"] as const; // TODO: Translate site content to Spanish to support "es" locale
export type Locale = (typeof supportedLocales)[number];
export type LangParams = { params: Promise<{ lang: Locale }> };
