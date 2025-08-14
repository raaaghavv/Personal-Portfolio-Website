import { useState } from "react";
import { motion } from "motion/react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex items-center space-x-[-12px]">
      {items.map((item) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          animate={{
            width: hoveredId === item.id ? "fit-content" : "32px",
            zIndex: hoveredId === item.id ? 20 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative flex h-8 cursor-pointer items-center overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800"
        >
          <div className="flex h-full w-full items-center justify-center px-1">
            <item.icon className="w-6 h-6" />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="pr-2 text-sm whitespace-nowrap text-neutral-600 dark:text-neutral-300"
          >
            {item.name}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};
