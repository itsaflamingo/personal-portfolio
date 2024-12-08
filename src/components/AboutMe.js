import SocialIcons from "./SocialIcons";

export default function AboutMe() {
  return (
    <div id="header">
      <div id="about-me">
        <h3>Hi there! Call me Liz</h3>
        <p>
          I'm a <span className="bold">full-stack developer</span> who took the
          long way around.
          <br></br>
          <br></br>I graduated in 2020 with a degree in International
          Development. During COVID I decided to start my journey as a web
          developer. I taught myself web development through The Odin Project,
          where I created over 30 projects of various complexities.{" "}
          {/* Hi, my name is Elizabeth and I am a pastry cook turned Web Developer. 
                <br></br>
                <br></br>
                Coming from a background of collaboration, craftsmanship, preparation, and problem solving, I was instantly intrigued by the importance of these skills in Web Development. 
                <br></br>
                <br></br>
                Committed to the idea of lifelong learning and driven by curiosity, I am a Web Developer ready to bring my passion for all things Web Development.   */}
        </p>
      </div>
      <SocialIcons />
    </div>
  );
}
