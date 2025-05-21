import React from 'react';
import Details from './Details';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

export default function Homepage() {
  const profile = {
    name: "Amritansh Tripathi",
    about: "Amritansh Tripathi is a dedicated front-end web developer skilled in building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. He enjoys crafting clean, modern web experiences that are both functional and visually appealing. With a solid understanding of React's component-based architecture. \n Amritansh develops dynamic single-page applications and emphasizes writing efficient, maintainable code. He's passionate about turning designs into pixel-perfect, responsive websites and constantly works to improve user experience.",
    mailid: "amritanshtripathi150304@gmail.com",
    course: ["React", "HTML", "CSS", "JavaScript", "C++", "Python", "SQL"],
    phone: "7999757480",
    background: "A very good boy",
    github: "https://github.com/amritansh1503",
    linkedin: "https://www.linkedin.com/in/amritansh-tripathi150304/"
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1E3A8A',
      color: '#FFFFFF',
      padding: '2.5rem',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2.5rem'
      }}>
        Amritansh Tripathi's Portfolio 
      </h1>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <About name1={profile.name} about1={profile.about} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '2.5rem',
          marginLeft: '2.5rem',
          marginRight: '2.5rem',
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <Details background={profile.background} />
            <Skills course={profile.course} />
            <Contact contact={{ mailid: profile.mailid, phone: profile.phone, github: profile.github, linkedin: profile.linkedin }} />
          </div>
        </div>
      </div>
    </div>
  );
}