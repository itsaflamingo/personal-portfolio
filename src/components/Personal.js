import girl from '../images/girl.png'
import AboutMe from './AboutMe';

export default function Personal() {
    return (
        <div id='personal'>
            <img id='my-pic' src={girl} alt='creator' />
            <AboutMe />
        </div>
    )
}