
import './About.css';
import imgProfile from '../assets/1730223157268.jpg'; 
import Projects from '../pages/Projects/Projects';

import Skills from '../pages/SkillsPage/Skills';
import Education from './Education';
import ContactUs from './Contact/ContactUs';


const About = () => { 


    return (
        <div>
           
            <section id="about" className="about-container"> 
                <img alt="Lina Eideh Profile" src={imgProfile} className="profile-img" />
                <p>
                    <b style={{ fontSize: "50px" }}>Lina Eideh </b>
                    <br />
                    I'm a Front-End Developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, and React.
                    
                </p>
                {/* <button onClick={() => setShowMore(!showMore)} className="read-more-btn">
                    {showMore ? "Show Less" : "Show More"}
                </button> */}
            </section>

          
            <section id="skills-section"> {/* ✨ هذا هو الـ ID الذي سيستخدمه الـ Header ✨ */}
                <Skills />
            </section>

          
           
            <section id="Education-section">
               <Education/>
            </section>

         
            <section id="projects-section">
                <Projects />
            </section>

           
            <section id="contact-section">
                <ContactUs />
            </section>

        </div>
    );
};

export default About;