/* ============================================================
   PAGAMENTO — resumo do pedido + dados do convidado + InfinitePay
   ============================================================ */
function formatBRL(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const cart = getCart();
const emptyEl = document.getElementById("payment-empty");
const contentEl = document.getElementById("payment-content");
const summaryListEl = document.getElementById("payment-summary-list");
const summaryTotalEl = document.getElementById("payment-summary-total");
const form = document.getElementById("payment-form");
const stepForm = document.getElementById("payment-step-form");
const stepDone = document.getElementById("payment-step-done");
const doneTotalEl = document.getElementById("payment-done-total");
const whatsappBtn = document.getElementById("btn-avisar-whatsapp");

let pedidoResumoTexto = "";

if (cart.length === 0) {
  emptyEl.hidden = false;
  contentEl.hidden = true;
} else {
  emptyEl.hidden = true;
  contentEl.hidden = false;

  const linhas = [];
  cart.forEach((item) => {
    const gift = GIFTS[item.index];
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.qty > 1 ? `${item.qty}× ` : ""}${gift.nome}</span><span>${formatBRL(gift.preco * item.qty)}</span>`;
    summaryListEl.appendChild(li);
    linhas.push(`${item.qty > 1 ? `${item.qty}x ` : ""}${gift.nome} (${formatBRL(gift.preco * item.qty)})`);
  });

  const total = getCartTotal(cart);
  summaryTotalEl.textContent = formatBRL(total);
  doneTotalEl.textContent = formatBRL(total);
  pedidoResumoTexto = linhas.join(", ");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("pay-nome").value.trim();
    const telefone = document.getElementById("pay-telefone").value.trim();
    const email = document.getElementById("pay-email").value.trim();
    const mensagem = document.getElementById("pay-mensagem").value.trim();
    if (!nome || !telefone || !email) return;

    window.open(INFINITEPAY_LINK, "_blank", "noopener");

    whatsappBtn.onclick = () => {
      let texto = `Oi Karol! Presenteei vocês.\n\nPresentes: ${pedidoResumoTexto}\nTotal: ${formatBRL(total)}\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}`;
      if (mensagem) texto += `\nMensagem: ${mensagem}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    };

    clearCart();
    stepForm.hidden = true;
    stepDone.hidden = false;
  });
}
