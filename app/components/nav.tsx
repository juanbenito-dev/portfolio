"use client";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "@/app/components/icons/hamburger";

const links = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);

  function handleClick() {
    setIsMobileNavExpanded(!isMobileNavExpanded);
  }

  return (
    <header
      className={`bg-secondary sticky top-0 z-10 flex flex-wrap items-center justify-between p-2 ${isMobileNavExpanded ? "" : "border-be-neutral/50 border-be"}`}
    >
      <Link href="/" className="text-xl">
        Juan Benito
      </Link>

      <button type="button" onClick={handleClick} className="md:hidden">
        <Hamburger />
      </button>

      <nav
        className={`border-bs-neutral/50 absolute inset-x-0 top-full border-bs bg-inherit p-2 md:static md:block md:border-none ${isMobileNavExpanded ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-center md:flex-row">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
