/* ============================================================
   CARRINHO DE PRESENTES
   Persistido em localStorage (sem backend). Cada item guarda o
   índice do presente em GIFTS (gifts-data.js) e a quantidade.
   ============================================================ */
const CART_KEY = "karol-leo-cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(giftIndex) {
  const cart = getCart();
  const existing = cart.find((item) => item.index === giftIndex);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ index: giftIndex, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(giftIndex) {
  saveCart(getCart().filter((item) => item.index !== giftIndex));
}

function clearCart() {
  saveCart([]);
}

function getCartCount(cart = getCart()) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Precisa de GIFTS (gifts-data.js) carregado antes desta chamada.
function getCartTotal(cart = getCart()) {
  return cart.reduce((sum, item) => sum + item.qty * GIFTS[item.index].preco, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.hidden = count === 0;
}

updateCartBadge();
