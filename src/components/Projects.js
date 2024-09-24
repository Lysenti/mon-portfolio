
import React, { useState } from 'react';
import Modal from './Modal';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Créez la page d\'accueil d\'une agence de voyage ',
      description: 'Ce projet a consisté à apprendre les bases du développement web notamment via les langages HTML et CSS.',
      problem: 'La prise en main de la maquette figma ainsi que la maitrise la manipulation FLEX et GRID. Gérer l\'adaptation du contenu à la taille de l\'écran.',
      skills: ['HTML', 'CSS'],
      link: 'https://github.com/Lysenti/project1',
      images: [
        require('../assets/images/projet1_1.jpg'),
        require('../assets/images/projet1_2.jpg'),
        require('../assets/images/projet1_3.jpg'),
        require('../assets/images/projet1_4.jpg')
      ]
    },
    {
      name: 'Créez une page web dynamique avec JavaScript',
      description: 'Ce projet consistait à créer une page d\'accueil dynamique avec Javascript.',
      problem: 'Prendre en main la notion d\'API et passer à un nouveau langage. L\'affichage de la modale a nécessité quelques temps d\'adaptation.',
      skills: ['Javascript'],
      link: 'https://github.com/Lysenti/project2',
      images: [
        require('../assets/images/projet2_1.jpg'),
        require('../assets/images/projet2_2.jpg'),
        require('../assets/images/projet2_3.jpg'),
        require('../assets/images/projet2_4.jpg')
      ]
    },
    {
      name: 'Débuggez et optimisez un site de photographe',
      description: 'Ce projet a consisté à analyser les erreurs dans le code préalablement fourni, constater les dysfonctionnements et mettre en place des correctifs avec des améliorations pour le référencement et l\'affichage des images.',
      problem: 'J’ai rencontré des difficultés avec la gestion du DOM, mais j’ai appris à manipuler JavaScript efficacement.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Lysenti/project1',
      images: [
        require('../assets/images/projet3_1.jpg'),
        require('../assets/images/projet3_2.jpg'),
        require('../assets/images/projet3_3.jpg')
      ]
    },
    {
      name: 'Créez une application web de location immobilière avec React',
      description: 'Ce projet consistait à créer une page d\'accueil dynamique avec HTML et CSS.',
      problem: 'Problèmes d\'alignement et compatibilité cross-browser.',
      skills: ['HTML', 'CSS'],
      link: 'https://github.com/Lysenti/project2',
      images: [
        require('../assets/images/projet4_1.jpg'),
        require('../assets/images/projet4_2.jpg'),
        require('../assets/images/projet4_3.jpg')
      ]
    },
    {
      name: 'Développez le back-end d\'un site de notation de livres',
      description: 'Ce projet a consisté à apprendre les bases du développement web.',
      problem: 'J’ai rencontré des difficultés avec la gestion du DOM, mais j’ai appris à manipuler JavaScript efficacement.',
      skills: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Lysenti/project1',
      images: [
        require('../assets/images/projet5_1.jpg'),
        require('../assets/images/projet5_2.jpg'),
        require('../assets/images/projet5_3.jpg'),
        require('../assets/images/projet5_4.jpg')
      ]
    },
    {
      name: 'Créez un design et le site web d\'un groupe de musique',
      description: 'Ce projet consistait à créer le site web d\'un groupe de musique tout en respectant l\'identité visuelle de celui-ci.',
      problem: 'Imaginer le design complet d\'un site, mettre en adéquation les désirs du client avec une réalité de gestion et de coût',
      skills: ['HTML', 'CSS', 'React', 'Javascript'],
      link: 'https://github.com/Lysenti/project2',
      images: [
        require('../assets/images/projet6_1.jpg'),
        require('../assets/images/projet6_2.jpg')
      ]
    },
    
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
    <div className="project-container">
      <h2>Mes Projets</h2>
      <ul className="project-grid">
        {projectList.map((project, index) => (
          <li key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.images[0]} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>

        {selectedProject && (
          <Modal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};

export default Projects;
