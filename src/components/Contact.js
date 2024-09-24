import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/send', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      
      console.log('Raw response:', response);

      return response.text();
    })


    .then(data => {
      if (data.success) {
        console.log('Email envoyé avec succès:', data.message);
      } else {
        console.log('Erreur d\'envoi d\'email:', data.message);
      }
    })
    .catch((error) => {
      console.error('Erreur:', error);
    });
  };

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
