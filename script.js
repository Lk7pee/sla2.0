// Modal surpresa
const botao = document.getElementById('botao-surpresa');
const modal = document.getElementById('modal');
const fechar = document.getElementById('fechar-modal');
const mensagemFinal = document.getElementById('mensagem-final');

botao.onclick = () => modal.classList.remove('hidden');
fechar.onclick = () => {
  modal.classList.add('hidden');
  mensagemFinal.classList.add('hidden');
};

function responder() {
  mensagemFinal.classList.remove('hidden');
}

let fotoAtual = 0;
const fotos = document.querySelectorAll('.carrossel-foto');

function mostrarFoto(index) {
  fotos.forEach((foto, i) => {
    foto.classList.toggle('ativa', i === index);
  });
}

document.getElementById('abrir-carrossel').onclick = () => {
  document.getElementById('carrossel-popup').classList.remove('hidden');
  mostrarFoto(fotoAtual);
};

document.getElementById('fechar-carrossel').onclick = () => {
  document.getElementById('carrossel-popup').classList.add('hidden');
};

document.getElementById('proximo').onclick = () => {
  fotoAtual = (fotoAtual + 1) % fotos.length;
  mostrarFoto(fotoAtual);
};

document.getElementById('anterior').onclick = () => {
  fotoAtual = (fotoAtual - 1 + fotos.length) % fotos.length;
  mostrarFoto(fotoAtual);
};


// Quiz
const quizPopup = document.getElementById('quiz-popup');
const quizBotao = document.getElementById('botao-quiz');
const fecharQuiz = document.getElementById('fechar-quiz');
const quizForm = document.getElementById('quiz-form');
const resultado = document.getElementById('resultado');
const repetirQuiz = document.getElementById('repetir-quiz');

// Abrir o pop-up do quiz
quizBotao.onclick = () => {
  quizPopup.classList.remove('hidden');
  quizForm.classList.remove('hidden'); // garante que o formulário esteja visível ao abrir
  resultado.classList.add('hidden');
  repetirQuiz.classList.add('hidden');
};

// Fechar o pop-up do quiz
fecharQuiz.onclick = () => {
  quizPopup.classList.add('hidden');
  resultado.classList.add('hidden');
  repetirQuiz.classList.add('hidden');
  quizForm.classList.remove('hidden'); // opcional: mostra o formulário se fechar antes de enviar
};

// Enviar o quiz
quizForm.onsubmit = (e) => {
  e.preventDefault();

  let corretas = 0;
  const respostas = quizForm.querySelectorAll('input[type="radio"]:checked');
  respostas.forEach(r => {
    if (r.value === 'correto') corretas++;
  });

  // Esconde o formulário
  quizForm.classList.add('hidden');

  // Mostra resultado e botão de refazer
  resultado.classList.remove('hidden');
  repetirQuiz.classList.remove('hidden');

  // Mensagem personalizada
  if (corretas === 5) {
    resultado.textContent = "🎉 Parabéns! Você me conhece perfeitamente 💖 Te amo demais!";
  } else if (corretas >= 3) {
    resultado.textContent = "🥰 Muito bemm! Você acertou a maioria 💘";
  } else {
    resultado.textContent = "😢 Poxa, tente novamente! Mas eu ainda te amo 💗";
  }
};

// Refazer o quiz
repetirQuiz.onclick = () => {
  quizForm.reset(); // limpa as respostas
  quizForm.classList.remove('hidden'); // mostra o formulário novamente
  resultado.classList.add('hidden'); // esconde o resultado
  repetirQuiz.classList.add('hidden'); // esconde o botão de refazer
};


// Rodapé animado
const mensagens = [
  "Você é minha princesa 💖",
  "Te amo mais do que tudo 🍫",
  "Tudo sem você perde a graça 🌙",
  "Nada é mais lindo que nós dois 💘"
];
let index = 0;
setInterval(() => {
  const msg = document.getElementById('mensagem-fofa');
  msg.textContent = mensagens[index];
  index = (index + 1) % mensagens.length;
}, 3000);

