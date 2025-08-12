import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SearchIcon } from "../ui/Icons";
import { commandGroups } from "../../data/commandPaletteMenu";

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const commandRefs = useRef([]);
  const activeIndexRef = useRef(0);

  const filteredGroups = commandGroups
    .map((group) => ({
      ...group,
      commands: group.commands.filter((command) =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((group) => group.commands.length > 0);

  const allCommands = filteredGroups.flatMap((group) => group.commands);

  // Reset index when search term changes
  useEffect(() => {
    activeIndexRef.current = 0;
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || allCommands.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (activeIndexRef.current + 1) % allCommands.length;
        activeIndexRef.current = nextIndex;
        commandRefs.current[nextIndex]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex =
          (activeIndexRef.current - 1 + allCommands.length) %
          allCommands.length;
        activeIndexRef.current = prevIndex;
        commandRefs.current[prevIndex]?.focus();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (commandRefs.current[activeIndexRef.current]) {
          commandRefs.current[activeIndexRef.current].click();
          setIsOpen(false);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, allCommands, setIsOpen]);

  // Reset the refs array on each render
  commandRefs.current = [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-4 bg-[var(--popover)] rounded-xl shadow-2xl overflow-hidden border border-[var(--popover-border)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-label"
          >
            <div className="flex items-center p-3 border-b border-[var(--popover-border)]">
              <SearchIcon className="w-5 h-5 text-[var(--muted-foreground)] mr-3" />
              <label htmlFor="command-search" className="sr-only font-IBMSans">
                Type a command or search...
              </label>
              <input
                id="command-search"
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                className="w-full text-lg bg-transparent outline-none text-[var(--popover-foreground)] placeholder-[var(--muted-foreground)] font-IBMMono"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="p-2 max-h-[400px] overflow-y-auto">
              {filteredGroups.length > 0 ? (
                filteredGroups.map((group) => (
                  <div key={group.name} className="mb-2">
                    <p
                      className="px-3 py-2 text-xs font-semibold text-[var(--muted-foreground)] font-IBMSans"
                      id={`${group.name.toLowerCase()}-group`}
                    >
                      {group.name}
                    </p>
                    <ul
                      role="listbox"
                      aria-labelledby={`${group.name.toLowerCase()}-group`}
                    >
                      {group.commands.map((command, index) => {
                        const commandIndex = allCommands.findIndex(
                          (c) =>
                            c.name === command.name && c.hash === command.hash
                        );
                        return (
                          <li key={command.name} role="option">
                            {command.hash ? (
                              <button
                                ref={(el) =>
                                  (commandRefs.current[commandIndex] = el)
                                }
                                className="font-IBMSans flex items-center px-3 py-2 text-[var(--popover-foreground)] rounded-md hover:bg-[var(--secondary)] outline-none focus:bg-[var(--secondary)] w-full text-left"
                                onClick={() => {
                                  window.location.hash = command.hash;
                                  setIsOpen(false);
                                }}
                              >
                                <command.icon className="w-5 h-5 text-[var(--muted-foreground)] mr-3" />
                                {command.name}
                              </button>
                            ) : (
                              <a
                                ref={(el) =>
                                  (commandRefs.current[commandIndex] = el)
                                }
                                href={command.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-IBMSans flex items-center px-3 py-2 text-[var(--popover-foreground)] rounded-md hover:bg-[var(--secondary)] outline-none focus:bg-[var(--secondary)]"
                                onClick={() => setIsOpen(false)}
                              >
                                <command.icon className="w-5 h-5 mr-3" />
                                {command.name}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="p-4 text-center text-[var(--muted-foreground)] font-IBMMono">
                  No results found.
                </p>
              )}
            </div>
            <div className="p-2 bg-[var(--secondary)] border-t border-[var(--popover-border)] text-xs text-[var(--muted-foreground)] flex justify-end items-center space-x-2 divide-x divide-[var(--popover-border)]">
              <span className="font-IBMSans font-semibold pr-2">
                Go to Page{" "}
                <kbd className="ml-1 font-sans text-xs font-semibold text-[var(--muted-foreground)] border border-[var(--popover-border)] rounded-md px-1.5 py-0.5">
                  ↵
                </kbd>
              </span>
              <span className="font-IBMSans">
                Exit{" "}
                <kbd className="ml-1 font-sans text-xs font-semibold text-[var(--muted-foreground)] border border-[var(--popover-border)] rounded-md px-1.5 py-0.5">
                  Esc
                </kbd>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default CommandPalette;
