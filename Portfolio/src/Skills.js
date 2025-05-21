import React from 'react';

export default function Skills({ course }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      padding: '2.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      flex: 1,
      marginRight: '1.5rem'
    }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1F2937', marginBottom: '1.5rem' }}>Skills</h3>
      <hr style={{ borderTop: '2px solid #E5E7EB', marginBottom: '1.5rem' }} />
      <ul style={{ color: '#4B5563', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        {course.map((skill, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}