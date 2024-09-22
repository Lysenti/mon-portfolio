import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`modal-overlay ${project ? 'visible' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        {/* Slideshow d'images */}
        <div className="modal-image-slideshow">
          <button className="prev-button" onClick={prevImage}>&lt;</button>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.name} ${index}`}
              className={`modal-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          <button className="next-button" onClick={nextImage}>&gt;</button>
        </div>

        <div className="modal-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          
          {/* Séparateur visuel */}
          <div className="modal-separator"></div>

          <h4>Problématiques rencontrées :</h4>
          <p>{project.problem}</p>

          {/* Séparateur visuel */}
          <div className="modal-separator"></div>

          <h4>Compétences développées :</h4>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link">
            Voir le code sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
