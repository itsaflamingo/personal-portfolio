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
                            <img className='proj-img' src={project.img} alt='project' />
                            <div className='info'>
                                {project.name}
                                <ProjectLinks ghLink={project.ghRepoLink}
                                projectLink={project.projectLink} />
                            </div>
                            <div className="description">
                                {project.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}