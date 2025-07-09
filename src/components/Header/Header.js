import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // دالة للتمرير السلس
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // إغلاق قائمة الجوال بعد النقر
    }
  };

  return (
    <header className="header">
      <h1 className="logo">Lina's Portfolio</h1>

      <nav className="nav">
        {/* قائمة عادية تظهر فقط على الشاشات الكبيرة */}
        <ul className="navbar-menu">
            <li>
          <Link 
  to="skills-section"
  smooth={true}
  duration={500}
  offset={-80} // تعديل التمرير إذا عندك header ثابت
  onClick={() => setIsOpen(false)} // إغلاق القائمة بعد التنقل
>
  Skills
</Link></li>
          
        
          {/* الروابط الأخرى التي تذهب لصفحات منفصلة لا تزال تستخدم Link */}
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* زر الهامبرغر */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        {/* قائمة الهاتف تظهر فقط لما يكون isOpen = true */}
        {isOpen && (
          <div className="navbar-mobile">
            {/* رابط Skills في قائمة الجوال يستخدم دالة التمرير */}
            <a href="#skills-section" onClick={(e) => { e.preventDefault(); scrollToSection('skills-section'); }} className="navbar-mobile-link">Skills</a>
            {/* الروابط الأخرى في قائمة الجوال لا تزال تستخدم Link */}
            <Link to="/education" className="navbar-mobile-link">Education</Link>
            <Link to="/projects" className="navbar-mobile-link">Projects</Link>
            <Link to="/contact" className="navbar-mobile-link">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;