/* ============================================================
   CONFIGURAÇÕES DO CASAL — EDITE AQUI
   ============================================================ */

// EDITAR: prazo final para presentear (contagem regressiva).
// Sugestão: defina para 30 dias após publicar o site.
const DEADLINE_DATE = new Date("2026-09-03T23:59:59");

// EDITAR: chave Pix real do casal (CPF, celular, e-mail ou chave aleatória)
const PIX_KEY = "chave-pix-do-casal@exemplo.com";

// EDITAR: nome que aparece para quem vai pagar (recebedor do Pix)
const PIX_NOME_RECEBEDOR = "Karol e Léo";

/* ============================================================
   LISTA DE PRESENTES — ilustrativos, valor de R$150 a R$1200
   Edite, remova ou adicione itens à vontade.
   ============================================================ */
const GIFTS = [
  { emoji: "💍", nome: "Polimento da aliança", desc: "Pra ela brilhar tanto quanto o sorriso dos dois na hora do sim.", preco: 150 },
  { emoji: "😅", nome: "Vale-desculpa do Léo", desc: "Um vale-presente emocional pra usar depois de uma bobagem qualquer.", preco: 170 },
  { emoji: "🎯", nome: "Kit 'eu tô certo(a)'", desc: "Pra vencer qualquer discussão boba de casal sem precisar de argumento.", preco: 200 },
  { emoji: "💐", nome: "Buquê que não murcha", desc: "Pra Karol jogar pra galera solteira sem gastar flor de verdade.", preco: 230 },
  { emoji: "✍️", nome: "Assinatura do sobrenome novo", desc: "Treino de caligrafia pra não errar bonito na hora H.", preco: 260 },
  { emoji: "💌", nome: "Cápsula do tempo do casal", desc: "Uma carta escrita hoje pra ler daqui a 10 anos de casados.", preco: 300 },
  { emoji: "🕺", nome: "Aula da primeira dança", desc: "Pra não pisar no pé um do outro na hora H.", preco: 340 },
  { emoji: "🥂", nome: "Brinde ao 'sim'", desc: "Uma taça de espumante pra comemorar o começo de tudo.", preco: 380 },
  { emoji: "🎻", nome: "Trilha sonora do grande dia", desc: "Uma ajuda pra deixar o momento ainda mais bonito de ouvir.", preco: 420 },
  { emoji: "🧠", nome: "Terapia de casal preventiva", desc: "Uma sessão pra já entrarem no casamento afiados em diplomacia.", preco: 470 },
  { emoji: "💆‍♀️", nome: "SPA anti-Léo", desc: "Um dia de relaxamento pra Karol recarregar as energias.", preco: 560 },
  { emoji: "🥩", nome: "Churrasco de recém-casados", desc: "Pra comemorar com os amigos o novo capítulo da dupla.", preco: 650 },
  { emoji: "🍰", nome: "Bolo extra pra comer até enjoar", desc: "Porque um bolo de casamento nunca é suficiente.", preco: 780 },
  { emoji: "🏖️", nome: "Mini lua de mel", desc: "Um fim de semana só dos dois, longe de tudo (e de todos).", preco: 900 },
  { emoji: "✈️", nome: "Passagem pra lua de mel", desc: "Uma ajudinha pra chegar mais longe na viagem dos sonhos.", preco: 1050 },
  { emoji: "💞", nome: "Lua de mel dos sonhos", desc: "O grand finale: um empurrão pra viagem inteira dos sonhos.", preco: 1200 },
];

/* ============================================================
   RENDERIZAÇÃO DOS CARDS
   ============================================================ */
const gridEl = document.getElementById("gifts-grid");

function formatBRL(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

GIFTS.forEach((gift, index) => {
  const card = document.createElement("article");
  card.className = "gift-card";
  card.innerHTML = `
    <span class="gift-card__emoji">${gift.emoji}</span>
    <h3 class="gift-card__title">${gift.nome}</h3>
    <p class="gift-card__desc">${gift.desc}</p>
    <p class="gift-card__price">${formatBRL(gift.preco)}</p>
    <button class="gift-card__btn" data-index="${index}">Presentear</button>
  `;
  gridEl.appendChild(card);
});

/* ============================================================
   CONTAGEM REGRESSIVA
   ============================================================ */
function updateCountdown() {
  const now = new Date();
  const diff = DEADLINE_DATE - now;

  const els = {
    dias: document.getElementById("cd-dias"),
    horas: document.getElementById("cd-horas"),
    min: document.getElementById("cd-min"),
    seg: document.getElementById("cd-seg"),
  };

  if (diff <= 0) {
    els.dias.textContent = "00";
    els.horas.textContent = "00";
    els.min.textContent = "00";
    els.seg.textContent = "00";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  els.dias.textContent = String(dias).padStart(2, "0");
  els.horas.textContent = String(horas).padStart(2, "0");
  els.min.textContent = String(min).padStart(2, "0");
  els.seg.textContent = String(seg).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ============================================================
   MODAL DE PRESENTE
   ============================================================ */
const modal = document.getElementById("gift-modal");
const stepForm = document.getElementById("step-form");
const stepPix = document.getElementById("step-pix");
const stepObrigado = document.getElementById("step-obrigado");

let presenteAtual = null;

function abrirModal(gift) {
  presenteAtual = gift;
  document.getElementById("modal-emoji").textContent = gift.emoji;
  document.getElementById("modal-title").textContent = gift.nome;
  document.getElementById("modal-desc").textContent = gift.desc;
  document.getElementById("modal-price").textContent = formatBRL(gift.preco);

  document.getElementById("input-nome").value = "";
  document.getElementById("input-mensagem").value = "";

  mostrarStep(stepForm);
  modal.classList.add("modal--open");
  modal.setAttribute("aria-hidden", "false");
}

function fecharModal() {
  modal.classList.remove("modal--open");
  modal.setAttribute("aria-hidden", "true");
}

function mostrarStep(stepParaMostrar) {
  [stepForm, stepPix, stepObrigado].forEach((step) => {
    step.classList.toggle("modal__step--hidden", step !== stepParaMostrar);
  });
}

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".gift-card__btn");
  if (!btn) return;
  const gift = GIFTS[Number(btn.dataset.index)];
  abrirModal(gift);
});

document.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", fecharModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModal();
});

/* --- Passo 1 → Passo 2 (Pix) --- */
document.getElementById("btn-ir-pix").addEventListener("click", () => {
  const nome = document.getElementById("input-nome").value.trim();
  if (!nome) {
    document.getElementById("input-nome").focus();
    return;
  }

  // Monta o texto "copia e cola" simplificado com a chave Pix.
  // EDITAR: substitua PIX_KEY por um payload BR Code (EMV) completo
  // gerado pelo seu banco, para permitir leitura de QR Code com valor
  // e recebedor já preenchidos automaticamente.
  const pixTexto = PIX_KEY;

  document.getElementById("pix-key-text").textContent = pixTexto;
  document.getElementById("pix-qr-img").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(pixTexto);
  document.getElementById(
    "pix-qr-img"
  ).alt = `QR Code Pix para ${PIX_NOME_RECEBEDOR}`;

  mostrarStep(stepPix);
});

document.getElementById("btn-voltar").addEventListener("click", () => {
  mostrarStep(stepForm);
});

/* --- Copiar chave Pix --- */
document.getElementById("btn-copiar-pix").addEventListener("click", async () => {
  const texto = document.getElementById("pix-key-text").textContent;
  const btn = document.getElementById("btn-copiar-pix");
  try {
    await navigator.clipboard.writeText(texto);
    btn.textContent = "Copiado!";
  } catch (err) {
    btn.textContent = "Copie manualmente";
  }
  setTimeout(() => (btn.textContent = "Copiar"), 2000);
});

/* --- Passo 2 → Passo 3 (obrigado) --- */
document.getElementById("btn-confirmar").addEventListener("click", () => {
  const nome = document.getElementById("input-nome").value.trim() || "amigo(a)";
  document.getElementById("obrigado-nome").textContent = nome;
  mostrarStep(stepObrigado);

  // NOTA: aqui não há confirmação real de pagamento (sem backend/gateway).
  // Este passo é apenas um agradecimento visual. Se quiser confirmação
  // automática de pagamento, será necessário integrar uma API Pix.
});
