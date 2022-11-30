import ProjectLinks from "./ProjectLinks";
import projects from "./ProjectsFactory"

export default function Projects() {

    return (
        <div id='projects'>
            <h3 className="heading">My Work</h3>
            <div id='projects-container'>
                {projects.map(project => {
                    return (
                        <div className='project' key={project.id}>
                            <img class='proj-img' src={project.img} alt='project' />
                            <div class='info'>
                                {project.name}
                                <ProjectLinks ghLink={project.ghRepoLink}
                                projectLink={project.projectLink} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}