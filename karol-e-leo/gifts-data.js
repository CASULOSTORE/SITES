/* ============================================================
   LISTA DE PRESENTES — ilustrativos, valor de R$150 a R$1200
   Compartilhada por presentes.html, carrinho.html e pagamento.html.

   "legenda" é a frase estilo meme que aparece sobre o emoji no
   cartão — é ela que carrega a piada visualmente. Edite, remova ou
   adicione itens à vontade.
   ============================================================ */
const GIFTS = [
  { emoji: "💍", nome: "Polimento da aliança", legenda: "Brilha mais que paixão", desc: "Pra ela brilhar tanto quanto o sorriso dos dois na hora do sim.", preco: 150 },
  { emoji: "😅", nome: "Vale-desculpa do Léo", legenda: "Usar com moderação", desc: "Um vale-presente emocional pra usar depois de uma bobagem qualquer.", preco: 170 },
  { emoji: "🎯", nome: "Kit 'eu tô certo(a)'", legenda: "Sempre. Em tudo.", desc: "Pra vencer qualquer discussão boba de casal sem precisar de argumento.", preco: 200 },
  { emoji: "💐", nome: "Buquê que não murcha", legenda: "Imortal como o amor", desc: "Pra Karol jogar pra galera solteira sem gastar flor de verdade.", preco: 230 },
  { emoji: "✍️", nome: "Assinatura do sobrenome novo", legenda: "Treino intensivo", desc: "Treino de caligrafia pra não errar bonito na hora H.", preco: 260 },
  { emoji: "💌", nome: "Cápsula do tempo do casal", legenda: "Só abrir daqui 10 anos", desc: "Uma carta escrita hoje pra ler daqui a 10 anos de casados.", preco: 300 },
  { emoji: "🕺", nome: "Aula da primeira dança", legenda: "Salvando os pés dos dois", desc: "Pra não pisar no pé um do outro na hora H.", preco: 340 },
  { emoji: "🥂", nome: "Brinde ao 'sim'", legenda: "Tim-tim pra vida toda", desc: "Uma taça de espumante pra comemorar o começo de tudo.", preco: 380 },
  { emoji: "🎻", nome: "Trilha sonora do grande dia", legenda: "Modo cinema: ligado", desc: "Uma ajuda pra deixar o momento ainda mais bonito de ouvir.", preco: 420 },
  { emoji: "🧠", nome: "Terapia de casal preventiva", legenda: "Prevenir é melhor que brigar", desc: "Uma sessão pra já entrarem no casamento afiados em diplomacia.", preco: 470 },
  { emoji: "💆‍♀️", nome: "SPA anti-Léo", legenda: "Recarregando a paciência", desc: "Um dia de relaxamento pra Karol recarregar as energias.", preco: 560 },
  { emoji: "🥩", nome: "Churrasco de recém-casados", legenda: "Casal novo, fogo aceso", desc: "Pra comemorar com os amigos o novo capítulo da dupla.", preco: 650 },
  { emoji: "🍰", nome: "Bolo extra pra comer até enjoar", legenda: "Nunca é demais", desc: "Porque um bolo de casamento nunca é suficiente.", preco: 780 },
  { emoji: "🏖️", nome: "Mini lua de mel", legenda: "Só nós dois (e o wi-fi desligado)", desc: "Um fim de semana só dos dois, longe de tudo (e de todos).", preco: 900 },
  { emoji: "✈️", nome: "Passagem pra lua de mel", legenda: "Destino: felizes pra sempre", desc: "Uma ajudinha pra chegar mais longe na viagem dos sonhos.", preco: 1050 },
  { emoji: "💞", nome: "Lua de mel dos sonhos", legenda: "O voo final do amor", desc: "O grand finale: um empurrão pra viagem inteira dos sonhos.", preco: 1200 },
];
