function toSpanish() {
  document.getElementById("welcome_text").innerText =
    "¡Bienvenid@! Esperamos que disfrute navegando en internet y le deseamos una agradable estancia en nuestras instalaciones.";

  document.getElementById("title").innerText = "Acceso de Invitado";
  document.getElementById("submit").value = "Conectar";
}

function toEnglish() {
  document.getElementById("welcome_text").innerText =
    "Welcome! We hope you enjoy browsing the internet and wish you a pleasant stay in our facilities.";

  document.getElementById("title").innerText = "Guest Access";
  document.getElementById("submit").value = "Connect";
}
