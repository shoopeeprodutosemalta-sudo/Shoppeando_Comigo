// Pergunta nome SEM SALVAR
function getUserName() {
  const asked = prompt("Qual é o seu nome?");
  return asked ? asked.trim() : "";
}

// Mostra overlay
function showOverlay() {
  document.getElementById("welcome-overlay").classList.remove("hidden");
}

// Esconde overlay
function hideOverlay() {
  document.getElementById("welcome-overlay").classList.add("hidden");
}

// INICIAR
window.addEventListener("DOMContentLoaded", () => {
  const name = getUserName();
  const msg = document.getElementById("welcome-message");

  msg.innerHTML = name
    ? `Seja bem-vindo ao meu site, <strong>${name}</strong>!`
    : "Seja bem-vindo ao meu site!";

  showOverlay();

  document.getElementById("welcome-close").addEventListener("click", hideOverlay);
});
