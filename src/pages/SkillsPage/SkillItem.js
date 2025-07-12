import React, { useMemo } from "react";
import { motion } from "framer-motion";

const SkillItem = React.memo(({ skill, onClick }) => {
  const itemStyle = useMemo(
    () => ({
      cursor: "pointer",
      padding: "25px",
      border: "1px solid #ddd",
      width: "400px",
      borderRadius: "10px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      transition: "all 0.3s ease",

      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      gap: "20px",
      color: "#333",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "150px",
    }),
    []
  );

  const handleClick = useMemo(() => {
    return () => onClick(skill);
  }, [onClick, skill]);

  return (
    <motion.div
      className='skill-item'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      onClick={handleClick}
      style={itemStyle}
    >
      <img alt={skill.name} src={skill.icon} style={{ width: "100px" }} />
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </motion.div>
  );
});

export default SkillItem;
