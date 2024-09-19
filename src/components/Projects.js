// src/components/Projects.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from './Modal';
import './Projects.css';

const Projects = () => {
  const projectList = [
    { name: 'Démarrez votre formation de Développeur Web', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
    { name: 'Créez la page d\'accueil d\'une agence de voyage', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
    { name: 'Créez une page web dynamique avec JavaScript', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
    { name: 'Débuggez et optimisez un site de photographe', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
    { name: 'Créez une application web de location immobilière avec React', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
    { name: 'Développez le back-end d\'un site de notation de livres', description: 'Lorem ipsum dolor sit amet.', link: 'https://github.com/Lysenti' },
  ];

  // État pour gérer la modale ouverte et le projet sélectionné
  const [selectedProject, setSelectedProject] = useState(null);

  // Fonction pour ouvrir la modale
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <ul>
        {projectList.map((project, index) => (
          <ProjectItem key={index} project={project} onClick={() => openModal(project)} />
        ))}
      </ul>

      {/* Modale pour afficher les détails du projet */}
      <Modal show={selectedProject !== null} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

const ProjectItem = ({ project, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,   // L'animation ne se déclenche qu'une fois
    threshold: 0.1,      // L'élément est visible à 10%
  });

  return (
    <li ref={ref} className={`project-item ${inView ? 'visible' : ''}`} onClick={onClick}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </li>
  );
};

export default Projects;


