
export default function ProjectLinks(props) {

    const {ghLink, projectLink} = props;

    return (
        <div className='links'>
            <a href={ghLink} target='_blank' rel='noreferrer'>
                <i className="devicon-github-original colored icon"></i>
            </a>
            <a href={projectLink} target='_blank' rel='noreferrer'>
            <svg className= 'icon' style={{width:'24px', height:'24px'}}  viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
            </a>
        </div>
    )
}