import React from "react";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Experiences from "./components/sections/Experiences";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Publications from "./components/sections/Publications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main className="w-[80vw] max-w-[1440px] mx-auto">
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <TechStack />
      <Publications />
      <Contact />
    </main>
  );
}

export default App;
