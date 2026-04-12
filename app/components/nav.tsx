import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <header className="bg-secondary/50 sticky top-5 z-10 mx-auto my-5 w-7/8 overflow-hidden rounded-xl p-4">
      <div className="absolute inset-0 h-[200%] backdrop-blur-lg"></div>

      <div className="relative flex items-center justify-between">
        <Link href="/">
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
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
