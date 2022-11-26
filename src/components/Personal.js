import DisplayInformation from "./DisplayInformation"
import girl from '../images/girl.png'

function Personal() {
    return (
        <div id='personal'>
            <img src={girl} alt='creator' />
        </div>
    )
}

export default DisplayInformation(Personal);