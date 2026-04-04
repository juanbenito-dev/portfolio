import Express from "../components/icons/express";
import Git from "../components/icons/git";
import Laravel from "../components/icons/laravel";
import Nextjs from "../components/icons/nextjs";
import React from "../components/icons/react";
import TailwindCSS from "../components/icons/tailwindcss";
import TypeScript from "../components/icons/typescript";
import { JSX } from "react";

type FeaturedSkill = { icon: JSX.Element; name: string; href: string };

export const featuredSkills: FeaturedSkill[] = [
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
