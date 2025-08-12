import {
  PortfolioIcon,
  BlogIcon,
  ComponentsIcon,
  AboutIcon,
  TechStackIcon,
  ExperienceIcon,
  ProjectsIcon,
  LinkedInIcon,
  GitHubIcon,
  XIcon,
  PeerlistIcon,
} from "../components/ui/Icons";

export const commandGroups = [
  {
    name: "Menu",
    commands: [
      {
        name: "Portfolio",
        icon: PortfolioIcon,
        hash: "#",
      },
      {
        name: "Resume",
        icon: BlogIcon,
        href: "https://drive.google.com/drive/folders/176zwefbsG_pOOBEzZ9s9EnP0yeSp3EyU?usp=sharing",
      },
    ],
  },
  {
    name: "Raghav's Portfolio",
    commands: [
      { name: "About", icon: AboutIcon, hash: "#about" },
      {
        name: "Tech Stack",
        icon: TechStackIcon,
        hash: "#techstack",
      },
      {
        name: "Experience",
        icon: ExperienceIcon,
        hash: "#experiences",
      },
      {
        name: "Projects",
        icon: ProjectsIcon,
        hash: "#projects",
      },
    ],
  },
  {
    name: "Connect",
    commands: [
      {
        name: "LinkedIn",
        icon: LinkedInIcon,
        href: "https://www.linkedin.com/in/raghav-goel01/",
      },
      {
        name: "Peerlist",
        icon: PeerlistIcon,
        href: "https://peerlist.io/raaaghavv/",
      },
      {
        name: "GitHub",
        icon: GitHubIcon,
        href: "https://github.com/raaaghavv/",
      },
      {
        name: "X",
        icon: XIcon,
        href: "https://x.com/raaaghavvvvv/",
      },
    ],
  },
];
