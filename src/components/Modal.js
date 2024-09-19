import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <div className={`modal-overlay ${show ? 'visible' : ''}`} onClick={onClose}>
      <div className={`modal ${show ? 'visible' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
      </div>
    </div>
  );
};

export default Modal;