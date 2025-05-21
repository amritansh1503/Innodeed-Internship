import React from 'react';

export default function Contact({ contact }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      padding: '2.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      flex: 1
    }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1F2937', marginBottom: '1.5rem' }}>Contact</h3>
      <hr style={{ borderTop: '2px solid #E5E7EB', marginBottom: '1.5rem' }} />
      <p style={{ color: '#4B5563', marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
        <i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: '#1E3A8A' }}></i>
        Email: {contact.mailid}
      </p>
      <p style={{ color: '#4B5563', marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
        <i className="fas fa-phone" style={{ marginRight: '0.5rem', color: '#1E3A8A' }}></i>
        Phone: {contact.phone}
      </p>
      <p style={{ color: '#4B5563', marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
        <i className="fab fa-github" style={{ marginRight: '0.5rem', color: '#1E3A8A' }}></i>
        GitHub:{' '}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1E3A8A', textDecoration: 'underline', marginLeft: '0.25rem' }}
          onMouseOver={(e) => e.target.style.color = '#1E40AF'}
          onMouseOut={(e) => e.target.style.color = '#1E3A8A'}
        >
          amritansh1503
        </a>
      </p>
      <p style={{ color: '#4B5563', display: 'flex', alignItems: 'center' }}>
        <i className="fab fa-linkedin" style={{ marginRight: '0.5rem', color: '#1E3A8A' }}></i>
        LinkedIn:{' '}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1E3A8A', textDecoration: 'underline', marginLeft: '0.25rem' }}
          onMouseOver={(e) => e.target.style.color = '#1E40AF'}
          onMouseOut={(e) => e.target.style.color = '#1E3A8A'}
        >
          Amritansh Tripathi
        </a>
      </p>
    </div>
  );
}