import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form action="contact.php" method="POST">
          <label>
            Nom :
            <input type="text" name="name" required />
          </label>
          <label>
            Email :
            <input type="email" name="email" required />
          </label>
          <label>
            Message :
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

