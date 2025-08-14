import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  containerVariants,
  itemVariants,
  detailsVariants,
} from "../../motion/variants";
import { projectsData } from "../../data/projectsData";
import { LinkIcon, ChevronDownIcon } from "../ui/Icons";
import GutterDiv from "../ui/GutterDiv";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <motion.section
        id="projects"
        variants={itemVariants}
        className="border-x border-[var(--popover-border)] relative screen-line-after"
        aria-labelledby="projects-heading"
      >
        <div className="px-4 relative screen-line-after">
          <h2
            id="projects-heading"
            className="text-3xl text-[var(--card-foreground)]"
          >
            Projects
          </h2>
        </div>
        <div className="space-y-6 divide-y divide-[var(--popover-border)]">
          {projectsData.map((project, projectIndex) => {
            const isOpen = openIndex === projectIndex;
            const panelId = `project-panel-${projectIndex}`;
            const headingId = `project-heading-${projectIndex}`;
            return (
              <div key={project.name} className="mb-0">
                <div
                  className={`flex items-center ml-1 ${
                    isOpen ? "border-b border-[var(--popover-border)]" : ""
                  }`}
                >
                  <img
                    src={project.icon}
                    alt={`${project.name} logo`}
                    className="w-8 h-8 rounded-md m-2"
                  />

                  <button
                    className="flex-1 flex justify-between text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-4 px-2 rounded-md"
                    onClick={() => setOpenIndex(isOpen ? null : projectIndex)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <div className="text-start">
                      <h3
                        id={headingId}
                        className="text-lg text-[var(--card-foreground)]"
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] font-IBMSans">
                        {project.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        aria-label={`View details for ${project.name}`}
                        className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md mr-0"
                        href={project.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </a>

                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDownIcon className="w-5 h-5" />
                      </motion.div>
                      <span className="sr-only">Toggle project details</span>
                    </div>
                  </button>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden pl-11 py-4"
                    >
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {project.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-[var(--muted-foreground)]">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <feature.icon className="w-5 h-5 text-[var(--muted-foreground)]" />
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <AnimatedTooltip items={project.skills} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>
      <GutterDiv />
    </>
  );
};

export default Projects;
