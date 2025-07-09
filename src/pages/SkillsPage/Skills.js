// src/components/Skills/Skills.jsx
import './Skills.css'; // استيراد ملف CSS لتنسيق صفحة المهارات
import React, { useState, useCallback } from 'react';
import SkillItem from './SkillItem';
import SkillDetailsModal from './SkillDetailsModal';
import mySkillsData from '../../data/SkillsData'; // استيراد البيانات

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  
  const handleSkillClick = useCallback((skill) => {
    setSelectedSkill(skill);
  }, []);

  // دالة تُستدعى لإغلاق المودال
const handleCloseModal = useCallback(() => {
    setSelectedSkill(null);
}, []);

return (
    <section className="skills-section" id='skills-section'>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'100px' }}>My Skills</h2>
        <div className="skills-grid">
            {mySkillsData.map(skill => (
                <SkillItem
                    key={skill.id}
                    skill={skill}
                    onClick={handleSkillClick}
                />
            ))}
        </div>

        {selectedSkill && (
            <SkillDetailsModal
                skill={selectedSkill}
                onClose={handleCloseModal}
            />
        )}
    </section>
);
}

export default Skills;