export const supportedLocales = [/* "es", */ "en"] as const;
export type Locale = (typeof supportedLocales)[number];
export type LangParams = { params: Promise<{ lang: Locale }> };
