/* ============================================================
   PAGAMENTO — resumo do pedido + dados do convidado + Pix/Mercado Pago
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
const doneTitleEl = document.getElementById("payment-done-title");
const doneTextEl = document.getElementById("payment-done-text");
const whatsappBtn = document.getElementById("btn-avisar-whatsapp");
const methodInputs = document.querySelectorAll('input[name="payment-method"]');
const pixBox = document.getElementById("pix-box");
const pixKeyEl = document.getElementById("pix-key-value");
const copyPixBtn = document.getElementById("btn-copy-pix");
const submitBtn = document.getElementById("payment-submit-btn");
const submitHintEl = document.getElementById("payment-submit-hint");

pixKeyEl.textContent = PIX_KEY;

function metodoSelecionado() {
  return document.querySelector('input[name="payment-method"]:checked').value;
}

function atualizarFormularioPorMetodo() {
  const metodo = metodoSelecionado();
  pixBox.hidden = metodo !== "pix";
  if (metodo === "pix") {
    submitBtn.textContent = "Já fiz o Pix";
    submitHintEl.textContent = "Depois de pagar, confirme aqui pra gente saber do seu presente.";
  } else {
    submitBtn.textContent = "Pagar com Mercado Pago";
    submitHintEl.textContent = "Você será direcionado pro Mercado Pago pra pagar via Pix ou cartão de crédito.";
  }
}

methodInputs.forEach((input) => input.addEventListener("change", atualizarFormularioPorMetodo));
atualizarFormularioPorMetodo();

copyPixBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(PIX_KEY).then(() => {
    const original = copyPixBtn.textContent;
    copyPixBtn.textContent = "Copiado!";
    setTimeout(() => { copyPixBtn.textContent = original; }, 2000);
  });
});

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
  pedidoResumoTexto = linhas.join(", ");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("pay-nome").value.trim();
    const telefone = document.getElementById("pay-telefone").value.trim();
    const email = document.getElementById("pay-email").value.trim();
    const mensagem = document.getElementById("pay-mensagem").value.trim();
    if (!nome || !telefone || !email) return;

    const metodo = metodoSelecionado();
    const metodoTexto = metodo === "pix" ? "Pix" : "Mercado Pago";

    if (metodo === "mercadopago") {
      window.open(MERCADOPAGO_LINK, "_blank", "noopener");
      doneTitleEl.textContent = "Quase lá!";
      doneTextEl.innerHTML = `Abrimos o Mercado Pago em outra aba — é só concluir o pagamento de <strong>${formatBRL(total)}</strong> por lá (Pix ou cartão).`;
    } else {
      doneTitleEl.textContent = "Obrigado!";
      doneTextEl.innerHTML = `É só concluir o Pix de <strong>${formatBRL(total)}</strong> usando a chave <strong>${PIX_KEY}</strong>, caso ainda não tenha pago.`;
    }

    whatsappBtn.onclick = () => {
      let texto = `Oi Karol! Presenteei vocês.\n\nPresentes: ${pedidoResumoTexto}\nTotal: ${formatBRL(total)}\nForma de pagamento: ${metodoTexto}\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}`;
      if (mensagem) texto += `\nMensagem: ${mensagem}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    };

    clearCart();
    stepForm.hidden = true;
    stepDone.hidden = false;
  });
}
