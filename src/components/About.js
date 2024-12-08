import React from "react";
import me from "../images/me.jpeg";

export default function About() {
  return (
    <div className="flex flex-col justify-center w-3/5">
      <div className="flex justify-center">
        <h3 className="text-light text-4xl">Who am I?</h3>
      </div>
      <div className="flex">
        <p className="text-medium">
          Hi there! Call me Liz. I'm a <span>full-stack developer</span> who
          took the long way around. I graduated in 2020 with a degree in
          International Development. During COVID I decided to start my journey
          as a web developer. I taught myself web development through The Odin
          Project, where I created over 30 projects of various complexities.{" "}
        </p>
        <img alt="me" src={`${me}`} className="w-1/5"></img>
      </div>
    </div>
  );
}
