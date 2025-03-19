$(document).ready(function () {
  // Manejar el evento click del botón "Enviar"
  $('#submitButton').click(function () {
    // Obtener valores de los campos
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    let isValid = true;

    // Validar el campo de nombre
    if (name === '') {
      alert('El campo "Nombre" es obligatorio.');
      isValid = false;
    }

    // Validar el campo de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      alert('El campo "Correo Electrónico" es obligatorio.');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      alert('Ingresa un correo electrónico válido.');
      isValid = false;
    }

    // Validar el campo de mensaje
    if (message === '') {
      alert('El campo "Mensaje" es obligatorio.');
      isValid = false;
    }

    // Si todos los campos son válidos, mostrar un resumen de la información
    if (isValid) {
      const info = `Resumen de la información:\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
      console.log(info); // Depuración en la consola

      const confirmSend = confirm(`${info}\n\n¿Está seguro de enviar esta información?`);

      // $.ajax({
      //   url: 'http://localhost:3000/send-email', // URL del servidor
      //   type: 'POST',
      //   contentType: 'application/json',
      //   data: JSON.stringify(formData),
      //   success: function (response) {
      //     alert(response); // Mostrar mensaje de éxito
      //     $('#contactForm')[0].reset(); // Limpiar el formulario
      //   },
      //   error: function (error) {
      //     alert('Error al enviar el correo. Por favor, inténtalo más tarde.');
      //     console.error(error);
      //   },
      // });

      if (confirmSend) {
        alert('¡Formulario enviado correctamente!');
        $('#contactForm')[0].reset(); // Limpiar el formulario
      }
    }
  });
});