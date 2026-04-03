import { Project as ProjectType } from "../data/projects";
import ArrowAngularTopRight from "./icons/arrow-angular-top-right";
import Code from "./icons/code";
import Image from "next/image";

type ProjectProps = Omit<ProjectType, "featured">;

export default function Project({
  src,
  alt,
  techStack,
  name,
  description,
  deploymentHref,
  sourceCodeHref,
}: ProjectProps) {
  return (
    <div className="bg-tertiary rounded-xl">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="w-full rounded-t-xl"
      />

      <div className="flex flex-col gap-y-5 p-5">
        <div className="flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border-neutral/50 rounded-xl border px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="font-bold">{name}</h3>

        <p>{description}</p>

        <div className="text-primary flex items-center justify-between">
          <a
            href={deploymentHref}
            target="_blank"
            className="flex items-center gap-x-2.5"
          >
            Visitar <ArrowAngularTopRight />
          </a>

          <a
            href={sourceCodeHref}
            target="_blank"
            className="flex items-center gap-x-2.5"
          >
            Código <Code />
          </a>
        </div>
      </div>
    </div>
  );
}
