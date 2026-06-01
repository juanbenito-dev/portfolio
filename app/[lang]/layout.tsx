import { LangParams } from "i18n";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
} & LangParams;

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
        className={`bg-neutral-1 text-neutral-2 mx-auto w-7/8 space-y-5 sm:max-w-xl ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider>
          <Nav />

          <main className="space-y-5">{children}</main>

          <hr className="border-neutral-2/50" />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
