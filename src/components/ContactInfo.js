export default function ContactInfo() {
    return (
        <div id='contact-info'>
            <h1>Contact me</h1>
            <p>Please get in touch if you think our work could be mutually beneficial!</p>

            <div id="personal-info">
                <div id='address'>
                    <p>215 Renforth Dr</p>
                    <p>Toronto, ON, Canada</p>
                </div>

                <div id='contact'>
                    <div id='phone'>
                        <p>647-515-2632</p>
                    </div>
                    <div id='email'>
                        <p>elizabeth.r.pinero@gmail.com</p>
                    </div>
                </div>

                <div id='footer-social'>
                    <a href='https://www.linkedin.com/in/elizabeth-pinero-984471177/' target='_blank' rel='noreferrer'>
                        <i className="devicon-linkedin-plain icon"></i>
                    </a>
                    <a href='https://github.com/itsaflamingo' target='_blank' rel='noreferrer'>
                        <i className="devicon-github-original colored icon"></i>
                    </a>
                    <a href='https://twitter.com/lizpinero_' target='_blank' rel='noreferrer'>
                        <i className="devicon-twitter-original icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}