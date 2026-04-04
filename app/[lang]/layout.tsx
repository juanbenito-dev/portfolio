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
  title: "Juan Benito | Front-end Developer",
  description:
    "Juan Benito's portfolio, a front-end developer specializing in React and Next.js. Explore my skills, projects, and experience in modern web development.",
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
