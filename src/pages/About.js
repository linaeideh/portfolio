import React, { useState } from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import imgProfile from '../assets/1730223157268.jpg'; // ✨ تأكد من المسار الصحيح لصورة البروفايل ✨


import Skills from '../pages/SkillsPage/Skills';

// استورد أي مكونات أقسام أخرى لديك (إذا أردت دمجها في نفس الصفحة)
// import Education from '../components/education/Education'; // مثال: مكون التعليم
// import Projects from '../components/projects/Projects'; // مثال: مكون المشاريع
// import Contact from '../components/contact/Contact';   // مثال: مكون التواصل

const About = () => { // قم بتغيير اسم المكون إلى HomePage أو ما شابه إذا كان يمثل الصفحة الرئيسية كلها
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {/* قسم "عني" - عن لينّا */}
            <section id="about" className="about-container"> {/* ✨ أضف id="about" هنا ✨ */}
                <img alt="Lina Eideh Profile" src={imgProfile} className="profile-img" />
                <p>
                    <b style={{ fontSize: "50px" }}>Lina Eideh </b>
                    <br />
                    I'm a frontend developer...
                    {showMore && (
                        <>
                            {" "}I love React, UI/UX design, and building clean apps. I'm excited to start a new opportunity and eager to learn Laravel as well to become a full-stack developer.
                        </>
                    )}
                </p>
                <button onClick={() => setShowMore(!showMore)} className="read-more-btn">
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </section>

          
            <section id="skills-section"> {/* ✨ هذا هو الـ ID الذي سيستخدمه الـ Header ✨ */}
                <Skills />
            </section>

          
            {/* إذا كان لديك مكون Education وتريد ربطه بنفس الطريقة */}
            {/* <section id="education-section">
                <Education />
            </section> */}

         
            {/* <section id="projects-section">
                <Projects />
            </section> */}

           
            {/* <section id="contact-section">
                <Contact />
            </section> */}

        </div>
    );
};

export default About;