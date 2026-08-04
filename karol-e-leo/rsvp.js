/* ============================================================
   CONFIRMAÇÃO DE PRESENÇA
   Sem backend: a confirmação vira uma mensagem pronta enviada por
   WhatsApp para o número do casal (WHATSAPP_NUMBER em config.js).
   ============================================================ */
const rsvpForm = document.getElementById("rsvp-form");
const rsvpObrigado = document.getElementById("rsvp-obrigado");

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("rsvp-nome").value.trim();
  const mensagem = document.getElementById("rsvp-mensagem").value.trim();
  if (!nome) return;

  let texto = `Confirmando presença no almoço de Karol e Léo.\n\nNome: ${nome}`;
  if (mensagem) texto += `\nMensagem: ${mensagem}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank", "noopener");

  document.getElementById("rsvp-nome-confirmado").textContent = nome;
  rsvpForm.hidden = true;
  rsvpObrigado.hidden = false;
});
