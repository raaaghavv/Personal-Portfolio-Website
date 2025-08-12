import { motion } from "framer-motion";
import { itemVariants } from "../../motion/variants";
import { userDetails } from "../../data/userDetails";
import GutterDiv from "../ui/GutterDiv";

const ContactDetails = () => (
  <>
    <motion.section
      variants={itemVariants}
      className="p-4 border-x border-[var(--popover-border)] relative screen-line-after"
      aria-label="Contact and professional details"
    >
      <ul className="mx-auto space-y-4">
        {userDetails.map((detail, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 text-[var(--card-foreground)] text-sm"
          >
            <detail.icon className="w-4.5 h-4.5 text-[var(--card-foreground)]" />
            {detail.href ? (
              <a
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                {detail.text || detail.href}
              </a>
            ) : (
              <span>{detail.text}</span>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
    <GutterDiv />
  </>
);

export default ContactDetails;
