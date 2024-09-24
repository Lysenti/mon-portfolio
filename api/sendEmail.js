const nodemailer = require('nodemailer');

// Fonction serverless sur Vercel
module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  // Configurer le transporteur Nodemailer (par exemple avec Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Définir l'email dans les variables d'environnement sur Vercel
      pass: process.env.PASSWORD // Définir le mot de passe dans les variables d'environnement sur Vercel
    }
  });

  // Options de l'email
  const mailOptions = {
    from: email,
    to: process.env.EMAIL, 
    subject: `Message de ${name}`,
    text: message,
  };

  try {
    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
