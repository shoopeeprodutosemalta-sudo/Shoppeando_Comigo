window.addEventListener("DOMContentLoaded", () => {

  const nameOverlay = document.getElementById("name-overlay");
  const welcomeOverlay = document.getElementById("welcome-overlay");

  const nameInput = document.getElementById("name-input");
  const nameOkBtn = document.getElementById("name-ok");
  const welcomeMessage = document.getElementById("welcome-message");
  const closeWelcome = document.getElementById("welcome-close");

  // Abre o popup
  nameOverlay.classList.remove("hidden");

  function closeNamePopup() {
    const name = nameInput.value.trim();

    nameOverlay.classList.add("hidden");

    // Se tiver nome, mostra boas-vindas
    if (name) {
      welcomeMessage.textContent = `Seja bem-vindo ao meu site, ${name}!`;
      welcomeOverlay.classList.remove("hidden");
    }
  }

  // Clique no botão OK
  nameOkBtn.addEventListener("click", closeNamePopup);

  // 🔹 Clique fora do popup
  nameOverlay.addEventListener("click", (e) => {
    if (e.target === nameOverlay) {
      closeNamePopup();
    }
  });

  // Fecha boas-vindas
  closeWelcome.addEventListener("click", () => {
    welcomeOverlay.classList.add("hidden");
  });

});
// sistema de busca do site

// Função para remover acentos
function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", () => {
  const search = normalizeText(searchInput.value);

  products.forEach(prod => {
    const title = normalizeText(prod.querySelector("h3").innerText);
    const price = normalizeText(prod.querySelector("p").innerText);

    // Busca por múltiplas palavras
    const words = search.split(" ");

    // Verifica se todas as palavras aparecem no título ou no preço
    const match = words.every(word =>
      title.includes(word) || price.includes(word)
    );

    prod.style.display = match ? "block" : "none";
  });
});


// Modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

// Quando clicar na imagem do produto → abrir modal
document.querySelectorAll(".product img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Fechar clicando fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fechar apertando ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});



