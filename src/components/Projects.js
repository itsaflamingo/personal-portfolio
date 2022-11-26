import projects from "./ProjectsFactory"

export default function Projects() {
    return (
        <div id='projects'>
            <ul>
                {projects.map(project => {
                    return (
                        <li key={project.id}>{project.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}