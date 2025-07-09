// src/components/Skills/SkillItem.jsx

import React, { useMemo } from 'react'; // استيراد useMemo
import { motion } from 'framer-motion';

// استخدام React.memo لتحسين الأداء الكلي للمكون
const SkillItem = React.memo(({ skill, onClick }) => {
  // 1. استخدام useMemo لتذكر كائن الـ style
  // هذا يضمن أن كائن الـ style لن يُعاد إنشاؤه في كل مرة يُعاد فيها عرض SkillItem
  // ما دامت التبعيات (التي لا توجد هنا، لذا ستُحسب مرة واحدة) لم تتغير.
  const itemStyle = useMemo(() => ({
    cursor: 'pointer',
    padding: '25px',
    border: '1px solid #ddd',
    width: '400px',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.3s ease',
    // خصائص الـ grid هنا قد لا تكون لها فائدة مباشرة للمحتوى الحالي بدون display: grid
    // ولكن نتركها كما هي بناءً على طلبك
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    gap: '20px',
    color: '#333',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '150px'
  }), []); // مصفوفة تبعيات فارغة تعني أن الكائن يُحسب مرة واحدة فقط

  // 2. استخدام useMemo (أو useCallback، وهو الأنسب للدوال) لتذكر دالة النقر
  // هنا، بما أننا نمرر "skill" كحجة، يجب أن تكون "skill" ضمن التبعيات.
  // ملاحظة: useCallback هو الأداة المخصصة لتذكر الدوال. useMemo يمكنه فعل ذلك أيضًا
  // لكن useCallback هو اختصار خاص للدوال ويوصى به. سأستخدم useMemo بناءً على طلبك.
  const handleClick = useMemo(() => {
    return () => onClick(skill);
  }, [onClick, skill]); // أعد إنشاء الدالة فقط إذا تغيرت onClick أو skill

  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      onClick={handleClick} // استخدام الدالة المذكرة
      style={itemStyle} // استخدام كائن الـ style المذكر
    >
        <img
        alt={skill.name}
          src={skill.icon}
          style={{width:"100px"}}/> {/* الستايل الخاص بالصورة ليس جزءًا من itemStyle */}
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
      {/* ممكن تضيف أيقونة المهارة هنا */}
    </motion.div>
  );
});

export default SkillItem;