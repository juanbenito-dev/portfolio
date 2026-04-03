import { Locale, supportedLocales } from "./i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

function getLocale(request: NextRequest): Locale {
  const requestedLocales = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") ?? undefined,
    },
  }).languages();

  const defaultLocale: Locale = "es";

  const locale = match(
    requestedLocales,
    supportedLocales,
    defaultLocale,
  ) as Locale;

  return locale;
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasSupportedLocale = supportedLocales.some((supportedLocale) =>
    pathname.startsWith(`/${supportedLocale}`),
  );
  if (pathnameHasSupportedLocale) return;

  // Redirect if there is no supported locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /projects
  // The new URL is now /es/projects
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip all internal paths (_next) & static files like .png, .webp, .jpg, .svg, .ico, etc.
  matcher: "/((?!_next|.*\\..*).*)",
};
