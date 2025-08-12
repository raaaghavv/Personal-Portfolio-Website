import { motion } from "motion/react";
import { itemVariants } from "../../motion/variants";
import GutterDiv from "../ui/GutterDiv";

const aboutText = [
  "Hello! I'm Raghav Goel, a passionate Front-End Developer with a knack for creating intuitive and high-performing web applications.",
  "I specialize in React.js and its ecosystem, building everything from responsive single-page applications to complex dashboards. I thrive on translating designs into pixel-perfect, functional user interfaces and optimizing for the best possible user experience.",
  "Currently, I'm freelancing and expanding my skills in UI/UX design and backend technologies. I'm also proud to have co-authored a research paper on solar power forecasting, which is slated for publication.",
  "I'm always eager to take on new challenges and collaborate on exciting projects. Let's connect!",
];

const AboutMe = () => (
  <>
    <motion.section
      id="about"
      variants={itemVariants}
      className="border-x border-[var(--popover-border)] relative screen-line-after"
      aria-labelledby="about-heading"
    >
      <div className="relative screen-line-after px-4">
        <h2
          id="about-heading"
          className="text-3xl text-[var(--card-foreground)]"
        >
          About
        </h2>
      </div>
      <div className="p-4 font-IBMMono space-y-4 text-sm ">
        {aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
    <GutterDiv />
  </>
);

export default AboutMe;
