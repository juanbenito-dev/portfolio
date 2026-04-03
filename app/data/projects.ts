export type Project = {
  featured?: boolean;
  src: string;
  alt: string;
  techStack: string[];
  name: string;
  description: string;
  deploymentHref: string;
  sourceCodeHref: string;
};

export const projects: Project[] = [
  {
    featured: true,
    src: "/projects/old-mans-house/entry.png",
    alt: "",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    name: "Old Man's House",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, nisi accumsan porttitor dapibus, turpis augue posuere velit, ac commodo dui turpis at neque.",
    deploymentHref: "https://old-mans-house.vercel.app/",
    sourceCodeHref: "https://github.com/juanbenito-dev/old-mans-house",
  },
];
