  // Mostrar push-up al cargar la página
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pushUpContainer").style.display = "block";
  });

  // Función para ocultar el push-up y quitar el desenfoque
  function ocultarPushUp() {
    document.getElementById("pushUpContainer").style.display = "none";
    document.querySelector(".blur-content").style.filter = "blur(0)";
  }

// Función para iniciar video al interactuar
  function playVideo() {
    var video = document.querySelector('.video');
    video.play();
}

// Función para iniciar audio al interactuar
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("backgroundAudio");

    // Detecta la interacción del usuario (puedes ajustar el evento según tus necesidades)
    document.addEventListener("click", function() {
        // Inicia la reproducción del audio
        audio.play();
    });
});

// bloquear-clic-derecho.js
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Bloquear la combinación de teclas Ctrl+Shift+I (Chrome, Firefox, Edge)
  if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'i')) {
    e.preventDefault();
  }
});