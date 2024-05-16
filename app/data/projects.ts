export type Project = {
  name: string;
  emoji: string;
  url: string;
  description: string;
  subProjects?: Project[];
};

export const dataProjects: Project[] = [
  {
    name: "Allnimal",
    emoji: "🐾",
    url: "https://allnimal.com",
    description:
      "Group company that provide technical services, software products, and tech-enabled businesses.",
  },
  {
    name: "Bearmentor",
    emoji: "🐻",
    url: "https://bearmentor.com",
    description:
      "Mentoring programs to help people do better at what they do in modern career, to become the best professionals, especially in web development and software engineering. Provide mentorships, workshops, seminars, and bootcamps.",
  },
  {
    name: "Catamyst",
    emoji: "🐱",
    url: "https://catamyst.com",
    description:
      "Agency that helps people to solve business issues with software. Building various web apps such as information system, ecommerce, social media, etc.",
  },
  {
    name: "Dogokit",
    emoji: "🐶",
    url: "https://dogokit.allnimal.com",
    description: "App development template kit.",
  },
  {
    name: "Elephanity",
    emoji: "🐘",
    url: "https://allnimal.com",
    description: "Community management.",
    subProjects: [
      {
        name: "BandungDev",
        emoji: "🏯",
        url: "https://bandungdev.com",
        description: "Bandung developer community.",
      },
    ],
  },
];
