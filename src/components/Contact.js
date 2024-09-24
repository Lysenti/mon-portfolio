import React, { useState } from 'react';

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

    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message envoyé avec succès');
      } else {
        alert('Erreur lors de l\'envoi');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Message</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;

