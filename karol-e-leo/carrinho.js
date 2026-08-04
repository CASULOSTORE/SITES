/* ============================================================
   CARRINHO — listagem, remoção e total
   ============================================================ */
const listEl = document.getElementById("cart-list");
const emptyEl = document.getElementById("cart-empty");
const summaryEl = document.getElementById("cart-summary");
const totalEl = document.getElementById("cart-total");

function formatBRL(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderCart() {
  const cart = getCart();
  listEl.innerHTML = "";

  if (cart.length === 0) {
    emptyEl.hidden = false;
    summaryEl.hidden = true;
    return;
  }

  emptyEl.hidden = true;
  summaryEl.hidden = false;

  cart.forEach((item) => {
    const gift = GIFTS[item.index];
    const row = document.createElement("li");
    row.className = "cart-item";
    row.innerHTML = `
      <span class="cart-item__emoji">${gift.emoji}</span>
      <div class="cart-item__info">
        <strong>${gift.nome}</strong>
        <span>${item.qty > 1 ? `${item.qty}× ` : ""}${formatBRL(gift.preco)}</span>
      </div>
      <span class="cart-item__subtotal">${formatBRL(gift.preco * item.qty)}</span>
      <button class="cart-item__remove" data-index="${item.index}" aria-label="Remover ${gift.nome}">&times;</button>
    `;
    listEl.appendChild(row);
  });

  totalEl.textContent = formatBRL(getCartTotal(cart));
}

listEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".cart-item__remove");
  if (!btn) return;
  removeFromCart(Number(btn.dataset.index));
  renderCart();
});

renderCart();
