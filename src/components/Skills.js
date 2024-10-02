import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '75%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '70%' },
    { name: 'Node.js', level: '60%' },
    { name: 'Express', level: '55%' },
  ];

  

  return (
    <section id="skills" className="container">
      <div className="container">
        <h2>COMPETENCES  :</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}</strong>
              <div className="progress-bar">
                <span style={{ width: skill.level }}></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};



export default Skills;
