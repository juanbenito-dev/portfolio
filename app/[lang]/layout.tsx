import { LangParams } from "@/i18n";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import "@/app/globals.css";

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
        className={`bg-secondary text-neutral ${spaceGrotesk.className} antialiased`}
      >
        <Nav />

        {children}

        <hr className="border-neutral/50 mx-auto w-7/8" />

        <Footer />
      </body>
    </html>
  );
}
