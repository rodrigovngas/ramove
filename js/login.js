// Cambiar de campo Enter
document.addEventListener("DOMContentLoaded", function () {
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  usernameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar el comportamiento predeterminado del Enter
      if (usernameInput.value.trim() !== "") {
        passwordInput.focus(); // Mover el foco al siguiente campo
      }
    }
  });

  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      // Agrega la lógica de validación o envío del formulario aquí
      validateLogin();
    }
  });
});

// Validacion Login
function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Ejemplo de validación básica:
  if (username === "151299" && (password === "Morado" || password === "morado")) {
      // Redirige automáticamente a la página deseada después del inicio de sesión exitoso
      window.location.href = "love.html";
  } else {
      // Muestra un mensaje de error
      alert("Seguramente no eres Aylin o te faltaron datos baby");
  }
}

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

// Caida de corazones
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('falling-container');
  
    // Configuración de la cantidad de imágenes
    const numImages = 1;
  
    // Crear imágenes inicialmente
    for (let i = 0; i < numImages; i++) {
      createFallingImage(container);
    }
  
    // Crear nuevas imágenes cada 2 segundos
    setInterval(function () {
      createFallingImage(container);
    }, 2000);
  });
  
  function createFallingImage(container) {
    const image = document.createElement('div');
    image.className = 'falling-image';
  
    // Posición inicial aleatoria en los ejes X e Y
    const initialX = Math.random() * window.innerWidth;
    const initialY = -Math.random() * window.innerHeight;
    image.style.left = `${initialX}px`;
    image.style.top = `${initialY}px`;
  
    container.appendChild(image);
  }