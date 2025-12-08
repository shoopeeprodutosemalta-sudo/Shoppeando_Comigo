window.addEventListener("DOMContentLoaded", () => {

  const nameOverlay = document.getElementById("name-overlay");
  const welcomeOverlay = document.getElementById("welcome-overlay");

  const nameInput = document.getElementById("name-input");
  const nameOkBtn = document.getElementById("name-ok");
  const welcomeMessage = document.getElementById("welcome-message");
  const closeWelcome = document.getElementById("welcome-close");

  // 1️⃣ Abre o popup para perguntar o nome
  nameOverlay.classList.remove("hidden");

  nameOkBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    // Previne continuar sem digitar nada
    if (!name) return;

    // Esconde popup do nome
    nameOverlay.classList.add("hidden");

    // Mostra popup com a mensagem personalizada
    welcomeMessage.innerHTML = `Seja bem-vindo ao meu site, <strong>${name}</strong>!`;
    welcomeOverlay.classList.remove("hidden");
  });

  // 2️⃣ Botão final para fechar tudo
  closeWelcome.addEventListener("click", () => {
    welcomeOverlay.classList.add("hidden");
  });

});
