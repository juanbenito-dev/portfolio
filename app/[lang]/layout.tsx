import { LangParams } from "@/i18n";
import { Space_Grotesk } from "next/font/google";
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
      <body
        className={`bg-secondary text-neutral ${spaceGrotesk.className} antialiased`}
      >
        <Nav />

        {children}

        {/* TODO: Create footer */}
      </body>
    </html>
  );
}
