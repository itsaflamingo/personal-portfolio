import projects from "./ProjectsFactory"

export default function Projects(props) {

    const {setProject} = props;

    return (
        <div id='projects'>
            <h3 className="heading">Projects</h3>
                {projects.map(project => {
                    return (
                        <div className='project' key={project.id} 
                        onClick={() => setProject(project)}>
                            {project.name}
                        </div>
                    )
                })}
        </div>
    )
}