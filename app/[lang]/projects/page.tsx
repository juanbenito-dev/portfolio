import { Folder1Outlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { Metadata } from "next";
import Project from "@/components/Project";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse a selection of projects built by Juan Benito, a full-stack web developer, showcasing modern, scalable web applications and the technologies behind them.",
};

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center gap-2.5 text-center">
        <span className="bg-primary/40 text-accent flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
          <Lineicons icon={Folder1Outlined} size={32} />
        </span>

        <h1 className="text-2xl font-bold tracking-wide">PROJECTS</h1>
      </div>

      <section className="grid grid-cols-1 gap-5 text-center lg:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </section>
    </>
  );
}
