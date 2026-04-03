import Express from "../components/icons/express";
import Git from "../components/icons/git";
import GitHub from "../components/icons/github";
import Laravel from "../components/icons/laravel";
import LinkedIn from "../components/icons/linkedin";
import Nextjs from "../components/icons/nextjs";
import React from "../components/icons/react";
import TailwindCSS from "../components/icons/tailwindcss";
import TypeScript from "../components/icons/typescript";
import Project from "../components/project";
import { projects } from "../data/projects";
import { getDictionary } from "./dictionaries";
import { LangParams } from "@/i18n";
import Image from "next/image";
import Link from "next/link";

const featuredSkills = [
  { icon: <Nextjs />, name: "Next.js", href: "https://nextjs.org/" },
  { icon: <React />, name: "React", href: "https://react.dev/" },
  {
    icon: <TypeScript />,
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: <TailwindCSS />,
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <Express />,
    name: "Express",
    href: "https://expressjs.com/",
  },
  {
    icon: <Laravel />,
    name: "Laravel",
    href: "https://laravel.com/",
  },
  {
    icon: <Git />,
    name: "Git",
    href: "https://git-scm.com/",
  },
];

const featuredProjects = projects.filter((project) => project.featured);
featuredProjects.forEach((project) => {
  delete project.featured;
});

export default async function Home({ params }: LangParams) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <div>
      {/* "Available" button */}
      <Link
        href="/contact"
        className="bg-primary mx-auto my-5 flex w-36 items-center justify-center gap-x-4 rounded-xl p-3 text-left transition hover:brightness-110"
      >
        <span className="relative flex h-3 w-3">
          <span className="bg-neutral absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-neutral relative inline-flex h-3 w-3 rounded-full"></span>
        </span>

        {dict.me.available}
      </Link>

      {/* Introduction */}
      <section className="bg-tertiary mx-auto flex w-7/8 flex-col items-center gap-5 rounded-xl p-5 text-center">
        <h1 className="text-xl">
          ¡Hey, aquí <strong>Juan Benito</strong>!
        </h1>

        <Image
          src="/my-avatar.webp"
          alt="Avatar 3D de Juan Benito"
          width={300}
          height={300}
          loading="eager"
          className="rounded-xl"
        />

        <p>
          <strong>Desarrollador frontend</strong> especializado en crear
          experiencias web modernas, rápidas y centradas en el usuario.
        </p>

        <div className="flex gap-x-4">
          <a href="https://github.com/juanbenito-dev" target="_blank">
            <GitHub />
          </a>

          <a href="https://www.linkedin.com/in/juanbenito-dev/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </section>

      {/* "+X..." cards */}
      <section className="mx-auto my-5 flex w-7/8 gap-x-5">
        <p className="bg-tertiary flex-1 rounded-xl p-5 text-center">
          <strong className="block text-5xl">+X</strong> AÑOS EN EL CAMPO
        </p>

        <p className="bg-tertiary flex-1 rounded-xl p-5 text-center">
          <strong className="block text-5xl">+X</strong> PROYECTOS TRABAJADOS
        </p>
      </section>

      {/* Featured skills */}
      <section className="m-5 text-center">
        <h2 className="mb-5 text-xl">HABILIDADES DESTACADAS</h2>

        <div className="flex flex-wrap justify-center gap-5">
          {featuredSkills.map((featuredSkill) => (
            <div
              key={featuredSkill.name}
              className="border-neutral/50 flex w-32 flex-col items-center rounded-xl border p-2.5"
            >
              {featuredSkill.icon}

              <a href={featuredSkill.href} target="_blank">
                {featuredSkill.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto my-5 w-7/8 text-center">
        <h2 className="mb-5 text-xl">PROYECTOS DESTACADOS</h2>

        <div className="flex flex-wrap justify-center gap-5">
          {featuredProjects.map((featuredProject) => (
            <Project key={featuredProject.name} {...featuredProject} />
          ))}
        </div>
      </section>
    </div>
  );
}
