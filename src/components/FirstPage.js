import React from "react";
import About from "./AboutMe";

export default function FirstPage() {
  return (
    <div className="w-11/12 text h-[93%] flex flex-col justify-self-end justify-center">
      <h3 className="text-highlight">Hi, my name is</h3>
      <h1 className="text-6xl text-light">Elizabeth Pinero</h1>
      <h2 className="text-6xl text-medium">
        Building digital solutions one line at a time.
      </h2>
      <div className="flex w-1/2">
        <p className="text-medium">
          I'm a freelance developer who loves to build full-stack web
          applications and APIs. I finished The Odin Project in 2022, and have
          been working as a freelance developer since.
        </p>
      </div>
    </div>
  );
}
