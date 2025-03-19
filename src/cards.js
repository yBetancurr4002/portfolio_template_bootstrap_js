$(document).ready(function () {
  // Al pasar el cursor sobre una tarjeta
  $('.project-card').hover(
    function () {
      // Mostrar la descripción completa y ocultar la breve
      $(this).find('.description').hide();
      $(this).find('.more-info').fadeIn(300);
      $(this).find('.link-card').show(); // Muestra inmediatamente el elemento

    },
    function () {
      // Restaurar la descripción breve y ocultar la completa
      $(this).find('.more-info').hide();
      $(this).find('.description').fadeIn(300);
      $(this).find('.link-card').hide(); // Muestra inmediatamente el elemento
    }
  );
});