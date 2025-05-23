import React, { useState, useEffect } from 'react';

export default function Skills() {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    fetch('/skills.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch skills.json');
        return response.json();
      })
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills.json:', error));
  }, []);

  if (!skillsData) {
    return <div style={{ color: '#1F2937', padding: '2rem' }}>Loading...</div>;
  }

  const allSkills = [
    ...skillsData.programming_skills.languages,
    ...skillsData.programming_skills.frameworks,
    ...skillsData.programming_skills.tools_and_databases
  ];

  return (
    <div style={{
      color: '#1F2937',
      padding: '2rem'
    }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0D9488', marginBottom: '1rem' }}>Skills</h3>
      <hr style={{ borderTop: '2px solid #D1D5DB', marginBottom: '1rem' }} />
      {allSkills.length > 0 ? (
        <ul style={{ color: '#4B5563', listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
          {allSkills.map((skill, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: '#4B5563', fontSize: '1rem', textAlign: 'left' }}>No skills available</p>
      )}
    </div>
  );
}
