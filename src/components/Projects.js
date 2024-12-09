import ProjectLinks from "./ProjectLinks";
import projects from "./ProjectsFactory";

export default function Projects() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5 w-full mt-20">
      <h3 className="self-start ml-72 font-merriweather">My Work</h3>
      <div className="w-4/6 grid grid-cols-3 justify-center gap-5">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
              <img className="proj-img" src={project.img} alt="project" />
              <div className="info">
                {project.name}
                <ProjectLinks
                  ghLink={project.ghRepoLink}
                  projectLink={project.projectLink}
                />
              </div>
              <div className="description">{project.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
