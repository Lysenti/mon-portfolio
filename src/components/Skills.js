import React from 'react';
import { useInView } from 'react-intersection-observer';
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
      <h2>Compétences</h2>
      <ul>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // L'animation se déclenche une fois
    threshold: 0.1,     // L'élément est visible à 10%
  });

  return (
    <li ref={ref} className={`skill-item ${inView ? 'visible' : ''}`}>
      <strong>{skill.name}</strong>
      <div className="progress-bar">
        <span style={{ width: inView ? skill.level : '0%' }}></span>
      </div>
    </li>
  );
};

export default Skills;
