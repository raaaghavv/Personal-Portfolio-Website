import {
  InfiniteIcon,
  PackageIcon,
  HandIcon,
  MouseIcon,
  BoltIcon,
  SunIcon,
  VerifiedIcon,
  ReactIcon,
  TailwindCssIcon,
  FramerIcon,
  ViteIcon,
  ReduxIcon,
  ChartJsIcon,
  LocalStorageIcon,
} from "../components/ui/Icons";

export const projectsData = [
  {
    name: "raghavgoel.online",
    date: "Aug 2025",
    href: "https://raghavgoel.online/",
    icon: "rg200.png",
    description: "A minimal portfolio website.",
    features: [
      {
        icon: HandIcon,
        text: "Clean & modern design.",
      },
      {
        icon: SunIcon,
        text: "Light & Dark theme support.",
      },
      {
        icon: InfiniteIcon,
        text: "Full keyboard navigation support for all interactive elements.",
      },
      {
        icon: MouseIcon,
        text: "Implemented tasteful Micro-Interactions for better UX.",
      },
      {
        icon: VerifiedIcon,
        text: "Built with semantic HTML and ARIA attributes for improved accessibility.",
      },
    ],
    supporters: [],
    skills: [
      {
        id: 1,
        name: "React.js",
        icon: ReactIcon,
      },
      {
        id: 2,
        name: "Tailwind CSS",
        icon: TailwindCssIcon,
      },
      {
        id: 3,
        name: "Vite",
        icon: ViteIcon,
      },
      {
        id: 4,
        name: "LocalStorage API",
        icon: LocalStorageIcon,
      },
      {
        id: 5,
        name: "Motion",
        icon: FramerIcon,
      },
    ],
  },
  {
    name: "React Redux Theme Builder",
    date: "July 2025",
    href: "https://theme-builderr.netlify.app/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg",
    description:
      "A web application that allows users to dynamically customize and preview a mobile UI theme in real-time.",
    features: [
      {
        icon: HandIcon,
        text: "Developed as a technical assignment for a React Developer role.",
      },
      {
        icon: MouseIcon,
        text: "Engineered a robust state management system using Redux Toolkit.",
      },
      {
        icon: InfiniteIcon,
        text: "Persists all user changes across sessions with localStorage.",
      },
      {
        icon: PackageIcon,
        text: "Created a dynamic and context-aware UI for live styling updates.",
      },
    ],
    supporters: [],
    skills: [
      {
        id: 1,
        name: "React.js",
        icon: ReactIcon,
      },
      {
        id: 2,
        name: "Redux Toolkit",
        icon: ReduxIcon,
      },
      {
        id: 3,
        name: "LocalStorage API",
        icon: LocalStorageIcon,
      },
      {
        id: 4,
        name: "Vite",
        icon: ViteIcon, 
      },
      {
        id: 5,
        name: "Tailwind CSS",
        icon: TailwindCssIcon,
      },
    ],
  },
  {
    name: "Team Pulse Dashboard",
    date: "June 2025",
    href: "https://teampulsedash.netlify.app/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "A dual-view dashboard for team leads and members to streamline task management and monitor team performance.",
    features: [
      {
        icon: HandIcon,
        text: "Architected a role-based interface for Team Leads and Team Members.",
      },
      {
        icon: MouseIcon,
        text: "Integrated Chart.js for dynamic data visualization of team performance.",
      },
      {
        icon: InfiniteIcon,
        text: "Developed features for at-a-glance status monitoring and filtering.",
      },
      {
        icon: BoltIcon,
        text: "Implemented a personal task management system for progress updates.",
      },
    ],
    supporters: [],
    skills: [
      {
        id: 1,
        name: "React.js",
        icon: ReactIcon,
      },
      {
        id: 2,
        name: "Redux Toolkit",
        icon: ReduxIcon,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: TailwindCssIcon,
      },
      {
        id: 4,
        name: "Vite",
        icon: ViteIcon,
      },
      {
        id: 5,
        name: "Chart.js",
        icon: ChartJsIcon,
      },
    ],
  },
];
