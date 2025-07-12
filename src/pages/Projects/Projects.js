import { FaGithub } from "react-icons/fa";
import "./Projects.css";
import Supportak from "../../assets/Supportak.png";
import SecretCafe from "../../assets/SecretCafe.png";
import Portfolio from "../../assets/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: "Supportak",
    description:
      "A fully integrated web platform designed to support small businesses, developed using HTML, CSS, and JavaScript for the frontend, and PHP for the backend. The platform allows business owners to register, showcase their products or services, and connect with potential customers. Key features include user authentication, personalized business profiles, product/service listings, and a contact form to facilitate communication between service providers and clients.",
    image: Supportak,
    link: "https://github.com/yourusername/ecommerce-project",
  },
  {
    id: 2,
    title: "Secreter Cafe",
    description:
      "A modern cafe management website built with React, featuring a dynamic menu, content management, and user-friendly interface. Designed to help cafe owners manage and showcase their offerings effectively.",
    image: SecretCafe,
    link: "https://github.com/linaeideh/Secrete-Cafe",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with React and styled with CSS.",
    image: Portfolio,
    link: "https://github.com/linaeideh/portfolio",
  },
];

const Projects = () => {
  return (
    <section className='projects-section' id='projects-section'>
      <h2 className='section-title'>My Projects</h2>
      <div className='projects-grid'>
        {projectsData.map((project) => (
          <div className='project-card' key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className='project-image'
            />
            <div className='project-content'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
            
               {/* href={project.link}
                target='_blank' */}
              <button className='button-github' onClick={() => window.open(project.link, "_blank")}>
                <FaGithub style={{color:'white', fontSize:'20px'}}/>
                <p className='text'>Click me</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
