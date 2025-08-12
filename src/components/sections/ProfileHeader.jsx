import { motion, AnimatePresence } from "motion/react";
import { VerifiedIcon } from "../ui/Icons";
import { itemVariants, textVariants } from "../../motion/variants";
import { useEffect, useState } from "react";
import GutterDiv from "../ui/GutterDiv";

const subHeadings = [
  "Software Engineer",
  "Front-end Developer",
  "Practicing Backend Development",
  "Published ML Researcher",
  "Learning Generative AI",
];

const ProfileHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subHeadings.length);
    }, 2500);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={itemVariants}
        className="border-x border-[var(--popover-border)] relative screen-line-after"
      >
        <div className="mx-auto flex">
          <div className="pb-0.5 relative flex-shrink-0 border-r border-[var(--popover-border)]">
            <img
              className="size-35 rounded-full object-cover border-2 border-[var(--background)] shadow-md"
              src="profilePic.webp"
              alt="Profile picture of Raghav Goel"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/96x96/e2e8f0/4a5568?text=RG";
              }}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div
              className="flex grow items-end pb-1 pl-4 
            bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]
            border-b border-[var(--popover-border)]"
            >
              <div className="line-clamp-1 text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-600">
                text-3xl{" "}
                <span className="inline dark:hidden">text-zinc-300</span>
                <span className="hidden dark:inline">text-zinc-600</span>{" "}
                font-medium
              </div>
            </div>
            <div className="flex items-center border-b border-[var(--popover-border)]">
              <h1 className="text-3xl text-[var(--card-foreground)] font-PlayFair pl-4 pr-1 ">
                Raghav Goel
              </h1>
              <VerifiedIcon />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                className="text-[var(--muted-foreground)] pl-4 py-1 text-sm"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {subHeadings[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      <GutterDiv />
    </>
  );
};

export default ProfileHeader;
