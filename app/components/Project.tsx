import {
  ArrowAngularTopRightOutlined,
  Code1Outlined,
} from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import Carousel from "@/components/Carousel";
import { Project as ProjectType } from "@/data/projects";
import { CarouselMedia } from "@/types";

type ProjectProps = Omit<ProjectType, "featured">;

export default function Project({
  imgs,
  videos,
  techStack,
  name,
  description,
  deploymentHref,
  sourceCode,
}: ProjectProps) {
  const media: CarouselMedia[] = [
    ...(videos ?? []).map((video) => ({
      type: "video" as const,
      ...video,
    })),
    ...(imgs ?? []).map((img) => ({
      type: "img" as const,
      ...img,
    })),
  ];

  const hasVideo = media.some((item) => item.type === "video");

  return (
    <div className="bg-secondary flex-1 rounded-xl">
      <Carousel
        media={media}
        parentClassName={`${hasVideo ? "h-96" : "h-60"} rounded-t-xl`}
      />

      <div className="flex flex-col gap-y-5 p-5">
        <div className="flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border-neutral-2/50 rounded-xl border px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="font-bold">{name}</h3>

        <p>{description}</p>

        <div className="text-accent flex items-center justify-between gap-5">
          {deploymentHref && (
            <a
              href={deploymentHref}
              target="_blank"
              className="group flex items-center gap-x-2.5"
            >
              Visit{" "}
              <Lineicons
                icon={ArrowAngularTopRightOutlined}
                size={20}
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}

          {sourceCode.map((repo) => (
            <a
              key={repo.label}
              href={repo.href}
              target="_blank"
              className="group flex items-center gap-x-2.5"
            >
              {repo.label ?? "Code"}{" "}
              <Lineicons
                icon={Code1Outlined}
                size={20}
                className="transition-transform duration-200 ease-out group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
