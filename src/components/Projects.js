
import React, { useState } from 'react';
import Modal from './Modal';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Créez la page d\'accueil d\'une agence de voyage ',
      description: 'Apprendre les bases du développement web notamment via les langages HTML et CSS.',
      problem: 'La prise en main de la maquette figma ainsi que la maitrise et la manipulation FLEX et GRID. Gérer l\'adaptation du contenu à la taille de l\'écran. Pour ce faire l\'expérimentation, l\'utilisation des outils de développement du navigateur ont été nécessaires.',
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
      description: 'Créer une page d\'accueil dynamique avec Javascript.',
      problem: 'Prendre en main la notion d\'API et passer à un nouveau langage. L\'affichage de la modale a nécessité quelques temps d\'adaptation. Ce projet a nécessité la lecture de documentations et livres relatifs à ce nouveau langage, implémenter des logs afin de comprendre les disfonctionnements rencontrés.',
      skills: ['Javascript'],
      link: 'https://github.com/Lysenti/projet_3',
      images: [
        require('../assets/images/projet2_1.jpg'),
        require('../assets/images/projet2_2.jpg'),
        require('../assets/images/projet2_3.jpg'),
        require('../assets/images/projet2_4.jpg')
      ]
    },
    {
      name: 'Débuggez et optimisez un site de photographe',
      description: 'Analyser les erreurs dans le code préalablement fourni, constater les dysfonctionnements et mettre en place des correctifs avec des améliorations pour le référencement et l\'affichage des images.',
      problem: 'Analyser et comprendre un code préexistant, implémenter des logs afin d\'identifier les dysfonctionnements en prenant connaissance des différentes ressources sur le web',
      skills: ['HTML', 'CSS'],
      link: 'https://github.com/Lysenti/projet_4',
      images: [
        require('../assets/images/projet3_1.jpg'),
        require('../assets/images/projet3_2.jpg'),
        require('../assets/images/projet3_3.jpg')
      ]
    },
    {
      name: 'Créez une application web de location immobilière avec React',
      description: 'Développer une application à partir d\'une maquette figma',
      problem: 'S\'adapter à un nouvel outil et une nouvelle structuration du code en utilisant notamment React Router. Utilisation de ressources trouvées sur le web ainsi qu\'une expérimentation active avec le recours aux logs et à la console du navigateur pour comprendre les erreurs.',
      skills: ['Javascript' , 'REACT'],
      link: 'https://github.com/Lysenti/projet_5',
      images: [
        require('../assets/images/projet4_1.jpg'),
        require('../assets/images/projet4_2.jpg'),
        require('../assets/images/projet4_3.jpg')
      ]
    },
    {
      name: 'Développez le back-end d\'un site de notation de livres',
      description: 'Implémenter une logique de base de données selon un cahier des charges.',
      problem: 'Comprendre le fonctionnement d\'une base de donnée avec les outils Express, MongoDB. Prise en main de la notion de Middleware et des opérations CRUD. Pour ce faire : pratique, expérimentation, tests, logs.',
      skills: ['JavaScript'],
      link: 'https://github.com/Lysenti/vieux-grimoire-app',
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
