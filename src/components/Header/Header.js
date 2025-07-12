import  { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);




  return (
    <header className='header'>
      <h1 className='logo'>Lina's Portfolio-Front End</h1>

      <nav className='nav'>
       
        <ul className='navbar-menu'>
          <li>
            <Link
              to='skills-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
            >
              Skills
            </Link>
          </li>
<li>
            <Link
              to='Education-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to='projects-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
            >
             Projects
            </Link>
          </li>
          <li>
            <Link
              to='contact-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
            >
            Contact
            </Link>
          </li>
          
        </ul>

      
        <button
          className='navbar-toggle'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          ☰
        </button>

       
        {isOpen && (
          <div className='navbar-mobile'>
         
           
            <Link
              to='skills-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
              className="navbar-mobile-link"
            >
              Skills
            </Link>
        
              <Link
              to='Education-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
               className="navbar-mobile-link"
            >
              Education
            </Link>
             <Link
              to='projects-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
               className="navbar-mobile-link"
            >
             Projects
            </Link>
              <Link
              to='contact-section'
              smooth={true}
              duration={500}
              offset={-80} 
              onClick={() => setIsOpen(false)} 
               className="navbar-mobile-link"
            >
            Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
