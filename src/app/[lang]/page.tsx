import {
  Download1Outlined,
  ExpressjsOutlined,
  EyeOutlined,
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
import Image from "next/image";
import Link from "next/link";
import Project from "@/components/Project";
import { projects } from "@/data/projects";
import { getDictionary } from "@/dictionaries";
import { LangParams, Locale } from "@/types/i18n";

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

export default async function Home({ params }: LangParams) {
  const { lang } = await params;

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* "Available" button */}
      <Link
        href="/contact"
        className="bg-primary mx-auto mb-5 flex w-36 items-center justify-center gap-x-4 rounded-xl p-3 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
      >
        <span className="relative flex h-3 w-3">
          <span className="bg-neutral-2 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-neutral-2 relative inline-flex h-3 w-3 rounded-full"></span>
        </span>

        {dict.me.available}
      </Link>

      {/* Introduction */}
      <section className="bg-secondary mb-5 flex flex-col items-center gap-5 rounded-xl p-5 text-center shadow-sm lg:flex-row lg:gap-8 lg:p-8 lg:text-left">
        <Image
          src="/my-avatar.webp"
          alt="Juan Benito's 3D avatar"
          width={300}
          height={300}
          loading="eager"
          className="rounded-xl lg:shrink-0"
        />

        <div className="flex flex-col items-center gap-5 lg:items-start">
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

          <p className="max-w-prose">
            A <strong>web developer</strong> focused on building modern, fast,
            user-centered experiences. I approach development as a balance
            between structure and creativity, writing clean, well-organized code
            with strong attention to detail.
          </p>

          <p className="max-w-prose">
            I'm always exploring new tools and ideas, using each project as an
            opportunity to grow and create work that is both meaningful and
            enjoyable.
          </p>

          <div className="flex items-center gap-x-4">
            <a
              href="/en-cv.pdf"
              download
              className="bg-primary text-neutral-2 flex items-center gap-x-2 rounded-xl px-4 py-3 font-bold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
            >
              <Lineicons icon={Download1Outlined} size={20} />
              CV
            </a>

            <a
              href="https://github.com/juanbenito-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Juan Benito on GitHub"
            >
              <Lineicons
                icon={GithubOutlined}
                size={48}
                className="transition duration-300 hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/juanbenito-dev/?locale=en-US"
              target="_blank"
              rel="noreferrer"
              aria-label="Juan Benito on LinkedIn"
            >
              <Lineicons
                icon={LinkedinOutlined}
                size={48}
                className="transition duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>

      {/* "+X..." cards */}
      <section className="flex gap-5">
        <p className="bg-secondary flex-1 content-center rounded-xl p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <strong className="text-accent block text-5xl">+3</strong> YEARS IN
          THE FIELD
        </p>

        <p className="bg-secondary flex-1 content-center rounded-xl p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <strong className="text-accent block text-5xl">+8</strong> PROJECTS
          COMPLETED
        </p>
      </section>

      {/* Featured skills */}
      <section className="text-center">
        <h2 className="mb-5 text-2xl font-bold tracking-wide">
          Featured Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {featuredSkills.map((featuredSkill) => (
            <div
              key={featuredSkill.name}
              className="bg-secondary flex w-32 flex-col items-center rounded-xl p-2.5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <Lineicons icon={featuredSkill.icon} size={80} />
              <span>{featuredSkill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="space-y-5 text-center">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-wide">
            Featured Projects
          </h2>

          <Link
            href="/projects"
            className="bg-primary flex items-center justify-center gap-x-2 rounded-xl px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110"
          >
            See all
            <Lineicons icon={EyeOutlined} size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featuredProjects.map((featuredProject) => (
            <Project key={featuredProject.name} {...featuredProject} />
          ))}
        </div>
      </section>
    </>
  );
}
