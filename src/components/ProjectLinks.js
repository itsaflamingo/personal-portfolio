
export default function ProjectLinks(props) {

    const {ghLink, projectLink} = props;

    return (
        <div className='links'>
            <button className='visit-repo'
            onClick={() => ghLink}>GitHub Repo</button>
            <button className='visit-project'
            onClick={() => projectLink}>Finished Project</button>
        </div>
    )
}