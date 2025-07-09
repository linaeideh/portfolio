// src/components/Skills/SkillDetailsModal.jsx

import React from 'react';
import { createPortal } from 'react-dom'; // مهم جداً للمودال
import { motion, AnimatePresence } from 'framer-motion';

function SkillDetailsModal({ skill, onClose }) {
  if (!skill) return null; // لا تعرض المودال إذا لم تكن هناك مهارة

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // إغلاق المودال عند النقر على الخلفية
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}
      >
        <motion.div
          className="modal-content"
          initial={{ y: -50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()} // منع إغلاق المودال عند النقر داخل المحتوى
          style={{
            backgroundColor: 'white', padding: '35px', borderRadius: '12px',
            maxWidth: '650px', width: '90%', boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
            position: 'relative', textAlign: 'center', color: '#333'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '15px', right: '15px',
              background: 'none', border: 'none', fontSize: '2.2rem',
              cursor: 'pointer', color: '#555', transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#e74c3c'}
            onMouseOut={(e) => e.currentTarget.style.color = '#555'}
          >
            &times;
          </button>

          <h2 style={{ marginBottom: '20px', color: '#3498db' }}>Description: {skill.name}</h2>
          {/* <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>المصدر:</strong> {skill.details.source}
          </p> */}
          {/* <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>عدد الساعات:</strong> {skill.details.hours} ساعة
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            <strong>الوصف:</strong> {skill.details.description}
          </p> */}

          {skill.details.certificateUrl && (
            <div style={{ marginTop: '25px' }}>
              <h3 style={{ marginBottom: '15px', color: '#2b6cb0' }}>Certificate:</h3>
              <img
                src={skill.details.certificateUrl}
                alt={`Certificate:${skill.name}`}
                style={{
                  maxWidth: '100%', height: 'auto', borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body 
  );
}

export default SkillDetailsModal;