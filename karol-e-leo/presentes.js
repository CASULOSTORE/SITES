/* ============================================================
   RENDERIZAÇÃO DA LOJINHA DE PRESENTES
   ============================================================ */
const gridEl = document.getElementById("gifts-grid");

function formatBRL(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

GIFTS.forEach((gift, index) => {
  const card = document.createElement("article");
  card.className = "gift-card";
  card.innerHTML = `
    <div class="gift-card__visual">
      <img class="gift-card__img" src="${gift.imagem}" alt="${gift.nome}" loading="lazy" />
      <p class="gift-card__caption">${gift.legenda}</p>
    </div>
    <div class="gift-card__body">
      <h3 class="gift-card__title">${gift.nome}</h3>
      <p class="gift-card__desc">${gift.desc}</p>
      <p class="gift-card__price">${formatBRL(gift.preco)}</p>
      <button class="gift-card__btn" data-index="${index}">Adicionar</button>
    </div>
  `;
  gridEl.appendChild(card);
});

/* ============================================================
   MODAL: PRESENTE ADICIONADO
   ============================================================ */
const addedModal = document.getElementById("added-modal");

function abrirAddedModal(gift) {
  document.getElementById("added-modal-title").textContent = gift.nome;
  addedModal.classList.add("modal--open");
  addedModal.setAttribute("aria-hidden", "false");
}

function fecharAddedModal() {
  addedModal.classList.remove("modal--open");
  addedModal.setAttribute("aria-hidden", "true");
}

addedModal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", fecharAddedModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharAddedModal();
});

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".gift-card__btn");
  if (!btn) return;

  const gift = GIFTS[Number(btn.dataset.index)];
  addToCart(Number(btn.dataset.index));
  abrirAddedModal(gift);
});
