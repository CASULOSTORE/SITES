/* ============================================================
   LISTA DE PRESENTES — ilustrativos, valor de R$120 a R$2000
   Compartilhada por presentes.html, carrinho.html e pagamento.html.

   "legenda" é a frase estilo meme que aparece sobre a foto no
   cartão — é ela que carrega a piada visualmente. "imagem" aponta
   pra pasta images/. Edite, remova ou adicione itens à vontade.
   ============================================================ */
const GIFTS = [
  { nome: "Polimento da aliança", legenda: "Brilha mais que paixão", desc: "Pra ela brilhar tanto quanto o sorriso dos dois na hora do sim.", preco: 120, imagem: "images/presente-01.jpg" },
  { nome: "Vale-desculpa do Léo", legenda: "Usar com moderação", desc: "Um vale-presente emocional pra usar depois de uma bobagem qualquer.", preco: 150, imagem: "images/presente-02.jpg" },
  { nome: "Kit 'eu tô certo(a)'", legenda: "Sempre. Em tudo.", desc: "Pra vencer qualquer discussão boba de casal sem precisar de argumento.", preco: 180, imagem: "images/presente-03.jpg" },
  { nome: "Buquê que não murcha", legenda: "Imortal como o amor", desc: "Pra Karol jogar pra galera solteira sem gastar flor de verdade.", preco: 220, imagem: "images/presente-04.jpg" },
  { nome: "Assinatura do sobrenome novo", legenda: "Treino intensivo", desc: "Treino de caligrafia pra não errar bonito na hora H.", preco: 260, imagem: "images/presente-05.jpg" },
  { nome: "Cápsula do tempo do casal", legenda: "Só abrir daqui 10 anos", desc: "Uma carta escrita hoje pra ler daqui a 10 anos de casados.", preco: 310, imagem: "images/presente-06.jpg" },
  { nome: "Aula da primeira dança", legenda: "Salvando os pés dos dois", desc: "Pra não pisar no pé um do outro na hora H.", preco: 370, imagem: "images/presente-07.jpg" },
  { nome: "Brinde ao 'sim'", legenda: "Tim-tim pra vida toda", desc: "Uma taça de espumante pra comemorar o começo de tudo.", preco: 440, imagem: "images/presente-08.jpg" },
  { nome: "Trilha sonora do grande dia", legenda: "Modo cinema: ligado", desc: "Uma ajuda pra deixar o momento ainda mais bonito de ouvir.", preco: 520, imagem: "images/presente-09.jpg" },
  { nome: "Terapia de casal preventiva", legenda: "Prevenir é melhor que brigar", desc: "Uma sessão pra já entrarem no casamento afiados em diplomacia.", preco: 610, imagem: "images/presente-10.jpg" },
  { nome: "SPA anti-Léo", legenda: "Recarregando a paciência", desc: "Um dia de relaxamento pra Karol recarregar as energias.", preco: 710, imagem: "images/presente-11.jpg" },
  { nome: "Ceia dos recém-casados", legenda: "Jantar chique, edição casados", desc: "Depois de pagar o grande dia, o jantar chique dos primeiros meses vira isso — e também é gostoso do jeito dele.", preco: 820, imagem: "images/presente-12.jpg" },
  { nome: "Bolo extra pra comer até enjoar", legenda: "Nunca é demais", desc: "Porque um bolo de casamento nunca é suficiente.", preco: 950, imagem: "images/presente-13.jpg" },
  { nome: "Mini lua de mel", legenda: "Só nós dois (e o wi-fi desligado)", desc: "Um fim de semana só dos dois, longe de tudo (e de todos).", preco: 1150, imagem: "images/presente-14.jpg" },
  { nome: "Passagem pra lua de mel", legenda: "Destino: felizes pra sempre", desc: "Uma ajudinha pra chegar mais longe na viagem dos sonhos.", preco: 1500, imagem: "images/presente-15.jpg" },
  { nome: "Lua de mel dos sonhos", legenda: "O voo final do amor", desc: "O grand finale: um empurrão pra viagem inteira dos sonhos.", preco: 2000, imagem: "images/presente-16.jpg" },
];
