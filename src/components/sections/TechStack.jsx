import { motion } from "motion/react";
import { techStack } from "../../data/techStack";
import { itemVariants } from "../../motion/variants";
import GutterDiv from "../ui/GutterDiv";

const TechStack = () => (
  <>
    <motion.section
      id="techstack"
      variants={itemVariants}
      className="relative screen-line-after border-x border-[var(--popover-border)]"
      aria-labelledby="tech-stack-heading"
    >
      <div className="relative screen-line-after">
        <h2
          id="tech-stack-heading"
          className="text-3xl text-[var(--card-foreground)] px-4"
        >
          Stack
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="group relative flex items-center justify-center"
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.name} logo`}
              className="w-10 h-10 transition-transform duration-200"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div
              className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              role="tooltip"
            >
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <GutterDiv />
  </>
);

export default TechStack;
