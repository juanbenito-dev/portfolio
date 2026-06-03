import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="bg-neutral-1/50 border-neutral-2/25 sticky top-5 z-10 mt-5 mb-10 overflow-hidden rounded-full border p-4">
      <div className="absolute inset-0 h-[200%] backdrop-blur-lg"></div>

      <div className="relative flex items-center justify-between">
        <Link href="/" className="transition duration-300 hover:scale-110">
          <Image
            src="/jb.svg"
            alt="'JB' logo (short for Juan Benito)"
            width={30}
            height={30}
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
