import Resume from "./Resume";
import SocialIcons from "./SocialIcons";

export default function AboutMe() {
  return (
    <div
      id="header"
      className="bg-white max-w-md shadow-md px-20 py-5 pl-10 pr-10"
    >
      <div id="about-me">
        <h3 className="text-2xl">Hi there! I'm Liz ~</h3>
        <br></br>
        <p>
          I'm a <span className="font-semibold">full-stack developer</span> who
          took the long way around.
          <br></br>
          <br></br>I graduated in 2020 with a Business Bachelor's. During COVID
          I decided to start my journey as a web developer. I taught myself web
          development through The Odin Project, where I created over 30 projects
          of various complexities.{" "}
        </p>
      </div>
      <br></br>
      <div className="flex justify-end align-center w-full h-full gap-2">
        <SocialIcons />
        <Resume />
      </div>
    </div>
  );
}
