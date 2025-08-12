import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  containerVariants,
  itemVariants,
  detailsVariants,
} from "../../motion/variants";
import { experienceData } from "../../data/experienceData";
import { VerifiedIcon, ChevronDownIcon } from "../ui/Icons";
import GutterDiv from "../ui/GutterDiv";

const Experiences = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <motion.section
        id="experiences"
        variants={itemVariants}
        className="border-x border-[var(--popover-border)]"
        aria-labelledby="experience-heading"
      >
        <div className="px-4 relative screen-line-after">
          <h2
            id="experience-heading"
            className="text-3xl text-[var(--card-foreground)]"
          >
            Experience
          </h2>
        </div>
        <div className="px-4">
          {experienceData.map((exp, companyIndex) => (
            <div key={exp.company} className="py-4 relative screen-line-after">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={exp.companyIcon}
                  alt={`${exp.company} logo`}
                  className="w-8 h-8 rounded-md"
                />
                <h3 className="text-lg text-[var(--card-foreground)]">
                  {exp.company}
                </h3>
                <VerifiedIcon />
              </div>
              <div className="ml-3 border-l-2 border-[var(--popover-border)] space-y-2">
                {exp.roles.map((role, roleIndex) => {
                  const uniqueIndex = companyIndex - roleIndex;
                  const isOpen = openIndex === uniqueIndex;
                  const panelId = `experience-panel-${uniqueIndex}`;
                  const headingId = `experience-heading-${uniqueIndex}`;
                  return (
                    <div key={role.title} className="ml-4 relative">
                      <div className="absolute -left-6.5 top-1.5 w-4 h-4 bg-[var(--background)] border-2 border-[var(--muted-foreground)] rounded-full"></div>
                      <h4 id={headingId} className="text-[var(--foreground)]">
                        {role.title}
                      </h4>
                      <button
                        className="flex items-start justify-between w-full text-left rounded-md p-1 -m-1"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : uniqueIndex)
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <p className="text-sm text-[var(--muted-foreground)] font-IBMSans">
                          {role.duration}
                        </p>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                          <ChevronDownIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
                        </motion.div>
                      </button>
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
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 pl-5 space-y-2 list-disc text-[var(--muted-foreground)] text-sm">
                              {role.details.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {role.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs font-medium px-2.5 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <GutterDiv />
    </>
  );
};

export default Experiences;
