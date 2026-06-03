import {
  ArrowAngularTopRightOutlined,
  Code1Outlined,
} from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import Carousel from "@/components/Carousel";
import { Project as ProjectType } from "@/data/projects";
import { CarouselMedia } from "@/types/carousel";

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
    <div className="bg-secondary flex flex-1 flex-col overflow-hidden rounded-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Carousel
        media={media}
        parentClassName={`${hasVideo ? "h-96" : "h-60"} rounded-t-xl`}
      />

      <div className="flex flex-1 flex-col gap-y-5 p-5">
        <div className="flex flex-wrap justify-center gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border-neutral-2/40 hover:border-neutral-2 rounded-xl border px-2 py-1 text-sm transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold">{name}</h3>

        <p>{description}</p>

        <div className="text-accent mt-auto flex items-center justify-between gap-5">
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
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                className="transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
