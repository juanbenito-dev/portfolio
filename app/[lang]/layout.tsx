import { LangParams } from "i18n";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
} & LangParams;

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://juanbenito.vercel.app"),
  title: {
    template: "%s • Juan Benito",
    default: "Juan Benito",
  },
  description:
    "Juan Benito's portfolio, a web developer building modern, scalable web applications. Explore my skills, projects, and much more.",
  openGraph: {
    type: "website",
    siteName: "Juan Benito",
    locale: "en_US",
    url: "/",
  },
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <meta name="apple-mobile-web-app-title" content="JB" />
      </head>

      <body
        className={`from-neutral-1 via-secondary/50 to-primary/50 text-neutral-2 mx-auto w-7/8 space-y-10 bg-linear-160 via-75% bg-fixed sm:max-w-xl lg:max-w-4xl ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider>
          <Nav />

          <main className="space-y-10">{children}</main>

          <hr className="border-neutral-2/25" />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
