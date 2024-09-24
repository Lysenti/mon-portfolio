
import React from 'react';
import './About.css';
import backgroundImage from '../assets/images/596.jpg';  

const About = () => {
  return (
    <section id="about" className='container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Developpeuse web</h2>
      <p className="slide-text slide-1">
        Je suis formatrice pour adulte et développeuse freelance.
      </p>
      <p className="slide-text slide-2">
        <strong>Objectifs :</strong> Développer mon activité freelance et continuer à développer mes compétences sur de nouveaux outils.
      </p>
      <p className="slide-text slide-3">
        <strong>Parcours :</strong> J'ai travaillé dans ce nombreux domaines et après une reconversion dans le domaine de la formation, je développe des sites web avec un design adapté au besoins spécifiques de chacun.
      </p>
    </section>
  );
};

export default About;
