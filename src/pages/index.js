import * as React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import FirstPage from "../components/FirstPage";
import About from "../components/About";
import SocialsBar from "../components/SocialsBar";
import Project from "../components/Project";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-main-background h-full w-full relative overflow-y:scroll m-0 px-5">
      <Navbar />
      <div className="bg-main-background w-screen flex justify-center items-start h-screen">
        <FirstPage />
      </div>
      <div className="bg-main-background w-screen flex justify-center items-start h-screen">
        <About />
      </div>

      <section id="projects">
        <Projects />
      </section>

      <section
        id="contact"
        className="w-full flex justify-center items-start h-screen"
      >
        <Contact />
      </section>
      <SocialsBar />
    </div>
  );
}
