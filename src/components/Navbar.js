// src/components/Navbar.js
import React from "react";
import About from "./About";

export default function NavBar() {
  return (
    <div className="h-12 sticky top-0 text-light">
      <nav>
        <ul className="flex items-center justify-end flex gap-12">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <button type="button" className="border border-highlight">
            Resume
          </button>
        </ul>
      </nav>
    </div>
  );
}
