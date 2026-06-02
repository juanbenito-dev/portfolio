import {
  Bulb4Outlined,
  ColourPalette3Outlined,
  Gears3Outlined,
  Globe1Outlined,
  GraduationCap1Outlined,
  IconData,
  Layers1Outlined,
  LinkedinOutlined,
  MapMarker1Outlined,
  Rocket5Outlined,
  User4Outlined,
} from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import { Metadata } from "next";
import Link from "next/link";

type Fact = { icon: IconData; label: string; value: string };
type Value = { icon: IconData; title: string; description: string };

const facts: Fact[] = [
  {
    icon: MapMarker1Outlined,
    label: "Based in",
    value: "Donostia / San Sebastián",
  },
  {
    icon: Layers1Outlined,
    label: "Role",
    value: "Full-Stack Web Developer",
  },
  {
    icon: GraduationCap1Outlined,
    label: "Education",
    value: "Higher Technician in Web App Development",
  },
  {
    icon: Globe1Outlined,
    label: "Languages",
    value: "Spanish · English · Basque",
  },
];

const values: Value[] = [
  {
    icon: ColourPalette3Outlined,
    title: "Thoughtful Design",
    description:
      "Interfaces built with attention to detail, balancing structure and creativity for experiences that feel effortless.",
  },
  {
    icon: Gears3Outlined,
    title: "Solid Engineering",
    description:
      "Clean, well-organized code across the stack: TypeScript, React, Next.js, Node.js, and reliable data layers.",
  },
  {
    icon: Bulb4Outlined,
    title: "Practical Problem-Solving",
    description:
      "Turning complex requirements into clear systems and taking ideas all the way from concept to deployment.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Juan Benito, a full-stack web developer based in Donostia / San Sebastián who blends thoughtful design, solid engineering, and practical problem-solving.",
};

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-2.5 text-center">
        <span className="bg-primary/40 text-accent flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
          <Lineicons icon={User4Outlined} size={32} />
        </span>

        <h1 className="text-2xl font-bold tracking-wide">ABOUT</h1>
      </div>

      {/* Quick facts */}
      <section className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="bg-secondary flex flex-col items-center gap-2.5 rounded-xl p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="bg-primary/40 text-accent flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
              <Lineicons icon={fact.icon} size={28} />
            </span>

            <span className="text-xs tracking-wide uppercase opacity-70">
              {fact.label}
            </span>

            <span className="font-bold">{fact.value}</span>
          </div>
        ))}
      </section>

      {/* My story */}
      <section className="bg-secondary rounded-xl p-5 shadow-sm lg:p-8">
        <h2 className="mb-5 text-center text-2xl font-bold tracking-wide">
          My Story
        </h2>

        <div className="mx-auto max-w-prose space-y-5">
          <p>
            I'm a <strong>full-stack web developer</strong> based in{" "}
            <strong>Donostia / San Sebastián</strong>, recently graduated with a{" "}
            <strong>
              Higher Technician degree in Web Application Development
            </strong>
            . I enjoy building products that combine thoughtful design, solid
            engineering, and practical problem-solving.
          </p>

          <p>
            My experience spans both <strong>frontend</strong> and{" "}
            <strong>backend development</strong>, working primarily with{" "}
            <strong>
              TypeScript, React, Next.js, Node.js, PostgreSQL, and MongoDB
            </strong>
            . Through internships and personal projects, I've built internal
            dashboards, contributed to ERP systems, and developed applications
            that help people interact with data and services more effectively.
          </p>

          <p>
            One of my most ambitious projects is <strong>NeoKaotik</strong>, a
            multiplayer fantasy mobile game built with{" "}
            <strong>React Native</strong> that blends branching narratives with{" "}
            <strong>QR codes, GPS, and IoT integration</strong>. I also
            developed <strong>Chaos Within Chaos Beyond</strong>, a platformer
            focused on fast-paced gameplay and level design. Projects like these
            have strengthened my ability to design systems, solve complex
            technical challenges, and take ideas from concept to deployment.
          </p>

          <p>
            I work in <strong>Spanish, English, and Basque</strong>, and I'm
            looking to join a team where I can contribute to meaningful
            products, continue growing as a developer, and take ownership of{" "}
            <strong>frontend-focused features</strong> while remaining involved
            across the stack.
          </p>
        </div>
      </section>

      {/* What I bring */}
      <section className="text-center">
        <h2 className="mb-5 text-2xl font-bold tracking-wide">What I Bring</h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-secondary flex flex-col items-center gap-y-4 rounded-xl p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="bg-primary/40 text-accent flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
                <Lineicons icon={value.icon} size={32} />
              </span>

              <h3 className="text-lg font-bold">{value.title}</h3>

              <p className="opacity-90">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary flex flex-col items-center gap-5 rounded-xl p-5 text-center shadow-sm lg:flex-row lg:justify-between lg:gap-8 lg:p-8 lg:text-left">
        <span className="text-neutral-2 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
          <Lineicons icon={Rocket5Outlined} size={36} />
        </span>

        <div className="lg:mr-auto">
          <h2 className="text-xl font-bold tracking-wide">
            Have a project in mind?
          </h2>

          <p className="opacity-90">
            I'm open to new opportunities and collaborations, let's build
            something great together.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/juanbenito-dev/?locale=en-US"
            target="_blank"
            rel="noreferrer"
            aria-label="Juan Benito on LinkedIn"
          >
            <Lineicons
              icon={LinkedinOutlined}
              size={40}
              className="transition duration-300 hover:scale-110"
            />
          </a>

          <Link
            href="/contact"
            className="bg-neutral-1 text-neutral-2 rounded-xl px-4 py-3 font-bold whitespace-nowrap shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
