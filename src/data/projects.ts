import { CarouselImg, CarouselVideo } from "@/types/carousel";

export type Project = {
  featured?: boolean;
  imgs?: CarouselImg[];
  videos?: CarouselVideo[];
  techStack: string[];
  name: string;
  description: string;
  deploymentHref?: string;
  sourceCode: SourceCodeRepo[];
};

export type SourceCodeRepo = { label?: string; href: string };

export const projects: Project[] = [
  {
    featured: true,
    videos: [
      {
        src: "/projects/neokaotik/acolyte-tabs.",
        poster: "/projects/neokaotik/acolyte-tabs.webp",
      },
      {
        src: "/projects/neokaotik/maps.",
        poster: "/projects/neokaotik/maps.webp",
      },
      {
        src: "/projects/neokaotik/angelo-capture.",
        poster: "/projects/neokaotik/angelo-capture.webp",
      },
    ],
    techStack: [
      "TypeScript",
      "React Native",
      "Styled Components",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    name: "NeoKaotik",
    description:
      "A narrative, multiplayer mobile app set in a dark fantasy world, where players take on different roles and progress through a story of exploration, betrayal, and decision-making. The app combines Google/Firebase authentication, role and player status management, interactive maps, push notifications, real-time communication via sockets, QR code scanning, and integration with IoT hardware to link real-world actions to the game.",
    sourceCode: [
      {
        label: "Client",
        href: "https://github.com/juanbenito-dev/neokaotik-client",
      },
      {
        label: "Server",
        href: "https://github.com/juanbenito-dev/neokaotik-server",
      },
    ],
  },
  {
    featured: true,
    imgs: [
      {
        src: "/projects/the-potions-of-simon/start-screen.webp",
        alt: "'The Potions of Simon' start screen",
      },
      {
        src: "/projects/the-potions-of-simon/game.webp",
        alt: "'The Potions of Simon' game (first turn)",
      },
      {
        src: "/projects/the-potions-of-simon/defeat-modal.webp",
        alt: "The defeat modal shown after failing the potions' sequence",
      },
    ],
    techStack: ["React", "CSS"],
    name: "The Potions of Simon",
    description:
      "A medieval-themed memory game inspired by 'Simon Says'. At the start of each turn, a sequence of potions lights up in a specific order. Then, players must reproduce it correctly. One mistake ends the run, challenging players to beat their best score.",
    deploymentHref: "https://potions-simon.vercel.app/",
    sourceCode: [
      { href: "https://github.com/juanbenito-dev/the-potions-of-simon" },
    ],
  },
  {
    featured: false,
    imgs: [
      {
        src: "/projects/chaoswb/main-menu.webp",
        alt: "'Chaos Within Chaos Beyond' video game's main menu",
      },
      {
        src: "/projects/chaoswb/level.webp",
        alt: "The video game's first level, full of enemies, a healing potion and the player themselves",
      },
      {
        src: "/projects/chaoswb/story.webp",
        alt: "The video game's story screen",
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    name: "Chaos Within Chaos Beyond",
    description:
      "Similar to the well-known 'Super Mario Bros.', this short but intense video game presents a clear challenge: escape from a cave filled with all kinds of threats.",
    deploymentHref: "https://chaoswb.onrender.com/",
    sourceCode: [{ href: "https://github.com/juanbenito-dev/chaoswb" }],
  },
  {
    featured: false,
    imgs: [
      {
        src: "/projects/old-mans-house/entrance.webp",
        alt: "The entrance to the house of a mysterious old man",
      },
      {
        src: "/projects/old-mans-house/living-room.webp",
        alt: "The house's living room, filled with rather interesting paintings and other objects",
      },
      {
        src: "/projects/old-mans-house/main-bedroom.webp",
        alt: "The main bedroom, featuring an impressive crossbow and elegant furniture",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    name: "Old Man's House",
    description:
      "A website optimized for both mobile devices and computers that simulates a visit to the home of a mysterious old man...",
    deploymentHref: "https://old-mans-house.vercel.app/",
    sourceCode: [{ href: "https://github.com/juanbenito-dev/old-mans-house" }],
  },
];
