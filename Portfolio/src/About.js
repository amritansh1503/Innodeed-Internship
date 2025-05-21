import React, { useState } from 'react';

export default function About({ name1, about1 }) {
  const [name2, setName2] = useState(name1);
  const changeName = () => {
    setName2("Tanshu");
    console.log(1);
  };

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      color: '#1F2937',
      padding: '2.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem'
    }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>About Me</h2>
      <hr style={{ borderTop: '2px solid #E5E7EB', marginBottom: '1.5rem' }} />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '1.25rem', marginRight: '1rem' }}>{name2}</p>
        <button
          onClick={changeName}
          style={{
            backgroundColor: '#1E3A8A',
            color: '#FFFFFF',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1E40AF'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1E3A8A'}
        >
          Magic
        </button>
      </div>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem', textAlign: 'left' }}>
        {about1}
      </p>
    </div>
  );
}