import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "./motion/variants";
import Header from "./components/ui/Header";
import ProfileHeader from "./components/sections/ProfileHeader";
import ContactDetails from "./components/sections/ContactDetails";
import AboutMe from "./components/sections/AboutMe";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import SocialLinks from "./components/sections/SocialLinks";
import Footer from "./components/ui/Footer";
import TypographyDiv from "./components/ui/TypographyDiv";
import ScrollToTopBtn from "./components/ui/ScrollToTopBtn";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useLayoutEffect(() => {
    // Apply the theme class and lang attribute to the html element
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
    root.lang = "en";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        const el = document.getElementById(id);
        if (el) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementTop - headerHeight,
            behavior: "smooth",
          });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    // Scroll on initial load if hash is present
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans transition-colors duration-300 max-w-screen overflow-x-clip">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TypographyDiv children={"RG"} />
          <ProfileHeader />
          <ContactDetails />
          <AboutMe />
          <Experiences />
          <Projects />
          <TechStack />
          <SocialLinks />
          <TypographyDiv children={"Raghav Goel"} />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}
