/* ============================================================
   CONTAGEM REGRESSIVA PARA O ALMOÇO
   ============================================================ */
function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

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
