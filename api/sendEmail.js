
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration du transporteur d'email avec Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS   
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `Nouveau message de ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
    } catch (error) {
      console.error('Erreur d\'envoi d\'email :', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Méthode non autorisée.' });
  }
}

