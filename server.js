// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurar el transporte de correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Puedes usar otros servicios como Outlook, Yahoo, etc.
    auth: {
      user: 'tu_correo@gmail.com', // Tu dirección de correo
      pass: 'tu_contraseña', // Tu contraseña de correo
    },
  });

  // Configurar el contenido del correo
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'destinatario@gmail.com', // Dirección de correo del destinatario
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).send('Correo enviado correctamente.');
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});