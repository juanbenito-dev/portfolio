import { JSX } from "react";
import Express from "@/components/icons/Express";
import Git from "@/components/icons/Git";
import Laravel from "@/components/icons/Laravel";
import Nextjs from "@/components/icons/Nextjs";
import React from "@/components/icons/React";
import TailwindCSS from "@/components/icons/TailwindCSS";
import TypeScript from "@/components/icons/TypeScript";

type FeaturedSkill = { icon: JSX.Element; name: string };

export const featuredSkills: FeaturedSkill[] = [
  { icon: <Nextjs />, name: "Next.js" },
  { icon: <React />, name: "React" },
  { icon: <TypeScript />, name: "TypeScript" },
  { icon: <TailwindCSS />, name: "Tailwind CSS" },
  { icon: <Express />, name: "Express" },
  { icon: <Laravel />, name: "Laravel" },
  { icon: <Git />, name: "Git" },
];
