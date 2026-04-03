import { LangParams } from "@/i18n";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/app/components/nav";
import "@/app/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
} & LangParams;

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Benito | Desarrollador Frontend",
  description:
    "Portfolio de Juan Benito, un desarrollador frontend especializado en React y Next.js. Explora mis proyectos, habilidades y experiencia en el desarrollo web moderno.",
};

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

        <main>{children}</main>

        {/* TODO: Create footer */}
      </body>
    </html>
  );
}
