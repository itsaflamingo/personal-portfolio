import ProjectLinks from "./ProjectLinks";

export default function Project(props) {

    const {project} = props;

    return (
        <div className='description-div' id={project.name}>
            <h2 class='heading'>{project.name}</h2>
            <div className="description">
                {project.description}
            </div>
            <ProjectLinks 
            ghLink = {project.ghRepoLink}
            projectLink = {project.projectLink} />
        </div>
    )
}

