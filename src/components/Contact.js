import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);

    fetch('/api/send', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setStatusMessage('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Erreur lors de l\'envoi du message.');
        setIsError(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setStatusMessage('Erreur lors de l\'envoi du message.');
      setIsError(true);
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

      {statusMessage && (
        <p style={{ color: isError ? 'red' : 'green' }}>
          {statusMessage}
        </p>
      )}

    </section>
  );
};

export default Contact;
