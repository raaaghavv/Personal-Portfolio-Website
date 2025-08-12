import { motion } from "motion/react";
import { socialLinks } from "../../data/socialLinks";
import { ExternalLinkIcon } from "../ui/Icons";
import GutterDiv from "../ui/GutterDiv";
import {
  containerVariants,
  itemVariants,
  detailsVariants,
} from "../../motion/variants";

const SocialLinks = () => (
  <>
    <div
      id="connect"
      className="relative screen-line-after border-x border-[var(--popover-border)]"
    >
      <div className="px-4 relative screen-line-after">
        <h2
          id="projects-heading"
          className="text-3xl text-[var(--card-foreground)]"
        >
          My Socials
        </h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto divide-y md:divide-y-0 divide-[var(--popover-border)]"
        variants={containerVariants}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Raghav Goel's profile on ${link.name}`}
            className={`p-4 flex items-center space-x-4 bg-[var(--card)] hover:bg-[var(--secondary)] transition-colors duration-200
            ${
              index % 2 === 1
                ? "md:border-l md:border-[var(--popover-border)]"
                : ""
            }
            ${
              index >= 2 ? "md:border-t md:border-[var(--popover-border)]" : ""
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-[var(--foreground)]">
              <link.icon />
            </div>
            <div className="flex-grow">
              <p className="text-[var(--card-foreground)] font-IBMSans">
                {link.name}
              </p>
              <p className="text-sm text-[var(--muted-foreground)] font-IBMSans">
                {link.handle}
              </p>
            </div>
            <ExternalLinkIcon
              className={"w-4 h-4 text-[var(--muted-foreground)]"}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
    <GutterDiv />
  </>
);
export default SocialLinks;
