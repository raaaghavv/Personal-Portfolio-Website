import { useState, useEffect, useRef } from "react";
import { SearchIcon } from "./Icons";
import { GitHubIcon } from "./Icons";
import { MoonIcon } from "./Icons";
import { SunIcon } from "./Icons";
import CommandPalette from "./CommandPalette";

const Header = ({ theme, toggleTheme }) => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const onSearchClick = () => setIsCommandPaletteOpen(true);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsCommandPaletteOpen((isOpen) => !isOpen);
      }
      if (event.key === "Escape") {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to box shadow listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--background)] pt-2 ${
        hasScrolledDown ? "shadow-md" : ""
      }`}
    >
      <div className="relative screen-line-after screen-line-before border-x border-[var(--popover-border)] w-full max-w-3xl mx-auto px-2 flex items-center justify-between h-16">
        <a
          href="#"
          aria-label="Homepage"
          className={`flex-shrink-0 rounded-md font-PlayFair text-5xl font-bold transition-all ${
            hasScrolledDown ? "" : "opacity-0"
          }`}
        >
          RG
        </a>
        <div className="flex items-center justify-end space-x-2">
          <nav
            className="hidden md:flex items-center space-x-4 px-2"
            aria-label="Main navigation"
          >
            <a
              href="#"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md"
            >
              Portfolio
            </a>
            <a
              href="#connect"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md"
            >
              Connect
            </a>
            <a
              href="https://drive.google.com/drive/folders/176zwefbsG_pOOBEzZ9s9EnP0yeSp3EyU?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Raghav's Resume on Google Drive"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md"
            >
              Resume
            </a>
          </nav>
          <button
            onClick={onSearchClick}
            className="flex items-center space-x-2 p-2 rounded-md border border-[var(--popover-border)] text-sm text-[var(--muted-foreground)] hover:bg-[var(--secondary)] w-full sm:w-auto justify-center sm:justify-start focus-red"
          >
            <SearchIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline ml-auto text-xs font-semibold text-[var(--muted-foreground)] border border-[var(--popover-border)] rounded-md px-1.5 py-0.5">
              Ctrl K
            </kbd>
          </button>
          <a
            href="https://github.com/raaaghavv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            className="p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border rounded-full border-[var(--popover-border)]"
          >
            <GitHubIcon className="w-5 h-5 fill-current" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border rounded-full border-[var(--popover-border)]"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        setIsOpen={setIsCommandPaletteOpen}
      />
    </header>
  );
};
export default Header;
