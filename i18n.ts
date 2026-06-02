export const supportedLocales = ["en"] as const; // TODO: Translate site content to Spanish to support "es" locale
export type Locale = (typeof supportedLocales)[number];

// Next.js types dynamic route params as "string", so that's what has to be used
export type LangParams = { params: Promise<{ lang: string }> };
