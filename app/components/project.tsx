import Carousel from "@/components/Carousel";
import ArrowAngularTopRight from "@/components/icons/ArrowAngularTopRight";
import Code from "@/components/icons/Code";
import { Project as ProjectType } from "@/data/projects";

type ProjectProps = Omit<ProjectType, "featured">;

export default function Project({
  carouselImgs,
  techStack,
  name,
  description,
  deploymentHref,
  sourceCodeHref,
}: ProjectProps) {
  return (
    <div className="bg-tertiary flex-1 rounded-xl">
      <Carousel
        imgs={carouselImgs}
        parentClassName="h-60 rounded-t-xl"
        imgsClassName="absolute h-full w-full object-cover rounded-t-xl"
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
            Visit <ArrowAngularTopRight />
          </a>

          <a
            href={sourceCodeHref}
            target="_blank"
            className="flex items-center gap-x-2.5"
          >
            Code <Code />
          </a>
        </div>
      </div>
    </div>
  );
}
