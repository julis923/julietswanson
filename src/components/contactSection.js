import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png'
import resumeIcon from '../assets/resume-icon.png'
import resume from '../files/Resume2022.pdf'

const ContactSection = () => {
    return  (
        <div className="contact-section">
            <h2 id="contactSection">contact</h2>
            <div className="contact-section-container">
                <div className="contact-item">
                    <img className="contact-icon" src={emailIcon} alt="email icon"/>
                    <p>juliswanson@gmail.com</p>
                </div>
                <div className="contact-item">
                    <img className="contact-icon" src={linkedinIcon} alt="linkedin icon"/>
                    <a href="https://www.linkedin.com/in/julietswanson" target="_blank" rel="noreferrer">linkedin.com/in/julietswanson</a>
                </div>
                <div className="contact-item">
                    <img className="contact-icon" src={githubIcon} alt="github icon"/>
                    <a href="https://github.com/julis923" target="_blank" rel="noreferrer">github.com/julis923</a>
                </div>
                <div className="contact-item">
                    <img className="contact-icon" src={resumeIcon} alt="resume icon"/>
                    <a href={resume} target="_blank" rel="noreferrer">View Resume</a>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;