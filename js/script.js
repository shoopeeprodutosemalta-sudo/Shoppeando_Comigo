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

/* ======== MELHORAR OVERLAY NO CELULAR ======== */
@media (max-width: 600px) {

  #welcome-overlay {
    padding: 0 14px; /* evita que o box encoste nas bordas */
    backdrop-filter: blur(3px);
  }

  #welcome-box {
    padding: 18px;
    border-radius: 12px;
    width: 100%;
    max-width: 360px;
    background: rgba(255,255,255,0.97);
  }

  #welcome-box h2 {
    font-size: 20px;   /* menor no mobile */
    margin-bottom: 6px;
  }

  #welcome-box p {
    font-size: 14px;   /* texto mais leve */
    margin-bottom: 14px;
  }

  #welcome-box button {
    padding: 10px 14px;
    width: 100%;        /* botão grande e confortável */
    margin-top: 10px;
    font-size: 15px;
  }
}

