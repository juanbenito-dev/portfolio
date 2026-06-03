import { supportedLocales } from "@/constants/i18n";

export type Locale = (typeof supportedLocales)[number];

// Next.js types dynamic route params as "string", so that's what has to be used
export type LangParams = { params: Promise<{ lang: string }> };
