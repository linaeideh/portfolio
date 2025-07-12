import "./ContactUs.css";
import {
  
  FaLinkedinIn,
  FaGithub, // Import GitHub icon
  FaEnvelope, // Import Envelope icon (for Gmail)
  
} from "react-icons/fa";
import { Link } from "react-scroll";
const ContactUs = () => {
  return (
    <div className='ContactUs' id='contact-section'>
      <div className='ContactUs-top'>
        <Link
          to='skills-section'
          smooth={true}
          duration={500}
          offset={-80}
          className='ContactUs-link'
        >
          Skills
        </Link>
        <Link
          to='Education-section'
          smooth={true}
          duration={500}
          offset={-80}
          className='ContactUs-link'
        >
          Education
        </Link>
        <Link
          to='projects-section'
          smooth={true}
          duration={500}
          offset={-80}
          className='ContactUs-link'
        >
          Projects
        </Link>
        <Link
          to='contact-section'
          smooth={true}
          duration={500}
          offset={-80}
          className='ContactUs-link'
        >
          Contact
        </Link>
      </div>

      <div className='ContactUs-text'>
        <p>
         Thank you for visiting my portfolio. I’m always looking for new opportunities to grow my skills and work on unique and creative projects. Feel free to reach out for any inquiries or collaborations — let’s create something amazing together!
        </p>
      </div>

      <div className='ContactUs-icons'>
         <ul className="example-2">
      {/* <li className="icon-content">
        <a href="https://facebook.com/" aria-label="Facebook" data-social="facebook">
          <div className="filled"></div>
          <FaFacebookF />
        </a>
        <div className="tooltip">Facebook</div>
      </li> */}

      {/* <li className="icon-content">
        <a href="https://twitter.com/" aria-label="Twitter" data-social="twitter">
          <div className="filled"></div>
          <FaTwitter />
        </a>
        <div className="tooltip">Twitter</div>
      </li> */}

    
      <li className="icon-content">
        <a href="https://www.linkedin.com/in/lina-eideh-3970442a6/"   target="_blank" rel="noreferrer" aria-label="LinkedIn" data-social="linkedin">
          <div className="filled"></div>
          <FaLinkedinIn />
        </a>
        <div className="tooltip">LinkedIn</div>
      </li>
 {/* New GitHub Icon */}
          <li className="icon-content">
            <a href="https://github.com/linaeideh" target="_blank" rel="noreferrer" aria-label="GitHub" data-social="github">
              <div className="filled"></div>
              <FaGithub />
            </a>
            <div className="tooltip">GitHub</div>
          </li>

          {/* New Gmail (Email) Icon */}
          <li className="icon-content">
            <a href="linaeideh02@gmail.com" aria-label="Gmail" data-social="gmail">
              <div className="filled"></div>
              <FaEnvelope />
            </a>
            <div className="tooltip">Gmail</div>
          </li>
      {/* <li className="icon-content">
        <a href="https://instagram.com/" aria-label="Instagram" data-social="instagram">
          <div className="filled"></div>
          <FaInstagram />
        </a>
        <div className="tooltip">Instagram</div>
      </li> */}

      {/* <li className="icon-content">
        <a href="https://pinterest.com/" aria-label="Pinterest" data-social="pinterest">
          <div className="filled"></div>
          <FaPinterestP />
        </a>
        <div className="tooltip">Pinterest</div>
      </li> */}
    </ul>
      </div>

     
    </div>
  );
};

export default ContactUs;
