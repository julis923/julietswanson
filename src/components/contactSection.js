import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.png';

const ContactSection = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-section-container">
        <div className="contact-item">
          <a href="mailto: juliswanson@gmail.com">
            <img className="contact-icon" src={emailIcon} alt="email icon" />
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/julietswanson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="contact-icon"
              src={linkedinIcon}
              alt="linkedin icon"
            />
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/julis923"
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact-icon" src={githubIcon} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
