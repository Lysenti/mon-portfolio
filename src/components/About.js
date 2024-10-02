
import React from 'react';
import './About.css';
import backgroundImage from '../assets/images/596.jpg';  

const About = () => {
  return (
    <section id="about" className='container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Developpeuse web</h2>
      <p className="slide-text slide-1">
        Je suis formatrice pour adulte et développeuse Web.
      </p>
      <p className="slide-text slide-2"><br />
        <strong>OBJECTIFS :</strong> Continuer à développer mon expertise sur REACT mais aussi prendre en main de nouveaux outils et langages : Angular  Typescript  PHP
      </p>
      <p className="slide-text slide-3"><br />
        <strong>PARCOURS :</strong> Polyvalente et dynamique, j'ai commencé la programmation en autodidacte via le LUA pour concevoir de petits jeux vidéos tout en créant des graphismes sur Photoshop. En parallèle des formations que je dispense, je développe des sites au plus proche des désirs et besoins de mes clients.
      </p>
    </section>
  );
};

export default About;
