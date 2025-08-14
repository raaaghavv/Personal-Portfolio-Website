import {
  ReactIcon,
  ReactRouterIcon,
  CssIcon,
  FigmaIcon,
  ViteIcon,
} from "../components/ui/Icons";
export const experienceData = [
  {
    company: "craftyydrafty.in",
    companyIcon: "https://placehold.co/32x32/FF9900/FFFFFF?text=C",
    roles: [
      {
        title: "Freelance Front-End Developer",
        duration: "Jan 2025 - July 2025",
        details: [
          <>Designed the complete UI/UX in Figma from the ground up.</>,
          <>
            Translated client requirements and Figma designs into a fully
            responsive, component-based{" "}
            <a
              href="https://www.craftyydrafty.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Single Page Application
            </a>
            .
          </>,
          <>
            Improved initial page load time through performance optimizations.
          </>,
          <>Engineered a client-side routing system with React Router DOM.</>,
        ],
        skills: [
          {
            id: 1,
            name: "React.js",
            icon: ReactIcon,
          },
          {
            id: 2,
            name: "React-Router",
            icon: ReactRouterIcon,
          },
          {
            id: 3,
            name: "CSS3",
            icon: CssIcon,
          },
          {
            id: 4,
            name: "Figma",
            icon: FigmaIcon,
          },
          {
            id: 5,
            name: "Vite",
            icon: ViteIcon,
          },
        ],
      },
    ],
  },
];
