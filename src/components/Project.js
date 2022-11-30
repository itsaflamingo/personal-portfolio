import ProjectLinks from "./ProjectLinks";

export default function Project(props) {

    const {project} = props;

    return (
        <div className='description-div' id={project.name}>
            <h2 className='heading'>{project.name}</h2>
            <ProjectLinks 
            ghLink = {project.ghRepoLink}
            projectLink = {project.projectLink} />
        </div>
    )
}

