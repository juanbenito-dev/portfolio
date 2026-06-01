import {
  ExpressjsOutlined,
  EyeSolid,
  GitOutlined,
  GithubOutlined,
  IconData,
  LinkedinOutlined,
  MongodbOutlined,
  NextjsOutlined,
  PostgresqlOutlined,
  ReactOutlined,
  TailwindcssOutlined,
  TypescriptOutlined,
} from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { LangParams } from "i18n";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Project from "@/components/Project";
import { projects } from "@/data/projects";
import { getDictionary } from "@/dictionaries";

type FeaturedSkill = { icon: IconData; name: string };

const featuredSkills: FeaturedSkill[] = [
  { icon: NextjsOutlined, name: "Next.js" },
  { icon: ReactOutlined, name: "React" },
  { icon: TypescriptOutlined, name: "TypeScript" },
  { icon: TailwindcssOutlined, name: "Tailwind CSS" },
  { icon: ExpressjsOutlined, name: "Express" },
  { icon: GitOutlined, name: "Git" },
  { icon: PostgresqlOutlined, name: "PostgreSQL" },
  { icon: MongodbOutlined, name: "MongoDB" },
];

const featuredProjects = projects
  .filter((project) => project.featured)
  .map(({ featured, ...project }) => project);

export const metadata: Metadata = {
  title: "Juan Benito | Web Developer",
  description:
    "Juan Benito's portfolio, a web developer building modern, scalable web applications. Explore my skills, projects, and much more.",
};

export default async function Home({ params }: LangParams) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <>
      {/* "Available" button */}
      <Link
        href="/contact"
        className="bg-primary mx-auto flex w-36 items-center justify-center gap-x-4 rounded-xl p-3 text-left transition hover:brightness-110"
      >
        <span className="relative flex h-3 w-3">
          <span className="bg-neutral-2 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-neutral-2 relative inline-flex h-3 w-3 rounded-full"></span>
        </span>

        {dict.me.available}
      </Link>

      {/* Introduction */}
      <section className="bg-secondary flex flex-col items-center gap-5 rounded-xl p-5 text-center">
        <h1 className="text-2xl">
          Hey, it's{" "}
          <Link
            href="/about"
            className="decoration-neutral-2 decoration font-bold underline decoration-dashed decoration-2 underline-offset-2 transition hover:decoration-solid"
          >
            Juan Benito
          </Link>
          !
        </h1>

        <Image
          src="/my-avatar.webp"
          alt="Juan Benito's 3D avatar"
          width={300}
          height={300}
          loading="eager"
          className="rounded-xl"
        />

        <p>
          A <strong>web developer</strong> focused on building modern, fast,
          user-centered experiences. I approach development as a balance between
          structure and creativity, writing clean, well-organized code with
          strong attention to detail.
        </p>

        <p>
          I'm always exploring new tools and ideas, using each project as an
          opportunity to grow and create work that is both meaningful and
          enjoyable.
        </p>

        <div className="flex gap-x-4">
          <a
            href="https://github.com/juanbenito-dev"
            target="_blank"
            rel="noreferrer"
          >
            <Lineicons
              icon={GithubOutlined}
              size={48}
              className="transition duration-200 hover:scale-110"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/juanbenito-dev/?locale=en-US"
            target="_blank"
            rel="noreferrer"
          >
            <Lineicons
              icon={LinkedinOutlined}
              size={48}
              className="transition duration-200 hover:scale-110"
            />
          </a>
        </div>
      </section>

      {/* "+X..." cards */}
      <section className="flex gap-x-5">
        <p className="bg-secondary flex-1 rounded-xl p-5 text-center">
          <strong className="block text-5xl">+3</strong> YEARS IN THE FIELD
        </p>

        <p className="bg-secondary flex-1 rounded-xl p-5 text-center">
          <strong className="block text-5xl">+9</strong> PROJECTS COMPLETED
        </p>
      </section>

      {/* Featured skills */}
      <section className="text-center">
        <h2 className="mb-5 text-2xl">FEATURED SKILLS</h2>

        <div className="flex flex-wrap justify-center gap-5">
          {featuredSkills.map((featuredSkill) => (
            <div
              key={featuredSkill.name}
              className="border-neutral-2/50 flex w-32 flex-col items-center rounded-xl border p-2.5"
            >
              <Lineicons icon={featuredSkill.icon} size={80} />
              <span>{featuredSkill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="space-y-5 text-center">
        <div className="flex items-center justify-center gap-x-5">
          <h2 className="flex-1 text-2xl sm:flex-auto">FEATURED PROJECTS</h2>

          <Link
            href="/projects"
            className="bg-primary flex flex-1 items-center justify-center gap-x-2 rounded-xl p-3 transition hover:brightness-110 sm:flex-auto"
          >
            See all
            <Lineicons icon={EyeSolid} size={20} />
          </Link>
        </div>

        <div className="flex flex-col justify-center gap-y-5">
          {featuredProjects.map((featuredProject) => (
            <Project key={featuredProject.name} {...featuredProject} />
          ))}
        </div>
      </section>
    </>
  );
}
