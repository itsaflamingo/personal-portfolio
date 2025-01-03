import ProjectLinks from "./ProjectLinks";
import projects from "./ProjectsFactory";

export default function Projects() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5 w-full mt-80">
      <h3 className="self-start ml-72 font-merriweather">My Work</h3>
      <div className="projects grid grid-cols-3 min-w-3/6 flex-1 gap-5 mx-40">
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
