import Express from "../components/icons/express";
import Git from "../components/icons/git";
import Laravel from "../components/icons/laravel";
import Nextjs from "../components/icons/nextjs";
import React from "../components/icons/react";
import TailwindCSS from "../components/icons/tailwindcss";
import TypeScript from "../components/icons/typescript";
import { JSX } from "react";

type FeaturedSkill = { icon: JSX.Element; name: string };

export const featuredSkills: FeaturedSkill[] = [
  { icon: <Nextjs />, name: "Next.js" },
  { icon: <React size={80} color="#bfbfbf" />, name: "React" },
  { icon: <TypeScript />, name: "TypeScript" },
  { icon: <TailwindCSS />, name: "Tailwind CSS" },
  { icon: <Express />, name: "Express" },
  { icon: <Laravel />, name: "Laravel" },
  { icon: <Git />, name: "Git" },
];
