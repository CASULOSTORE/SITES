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

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".gift-card__btn");
  if (!btn) return;

  addToCart(Number(btn.dataset.index));

  const textoOriginal = btn.textContent;
  btn.textContent = "Adicionado";
  btn.classList.add("gift-card__btn--added");
  setTimeout(() => {
    btn.textContent = textoOriginal;
    btn.classList.remove("gift-card__btn--added");
  }, 1200);
});
