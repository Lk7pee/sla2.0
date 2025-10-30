import React, { useState } from 'react';
import './QuizModal.css';

const perguntas = [
  {
    pergunta: 'Qual o dia que a gente se conheceu?',
    opcoes: ['20/08/2025', '21/08/2025', '22/08/2025', '09/10/2025'],
    correta: '22/08/2025',
  },
  {
    pergunta: 'Qual a minha cor favorita?',
    opcoes: ['Azul', 'Verde', 'Preto', 'Vermelho'],
    correta: 'Vermelho',
  },
  {
    pergunta: 'Pra onde eu quero te levar pra viajar?',
    opcoes: [
      'Itália e Rússia',
      'Itália e Gramado',
      'Grécia e França',
      'Rio de Janeiro e São Paulo',
    ],
    correta: 'Itália e Gramado',
  },
  {
    pergunta: 'Qual nome ou apelido eu odeio ser chamado por você?',
    opcoes: ['Filipe', 'divo', 'divônico', 'Todas as opções'],
    correta: 'Todas as opções',
  },
  {
    pergunta: 'De 0 a 10 o quanto você me ama?',
    opcoes: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    correta: '10',
  },
];

function QuizModal() {
  const [aberto, setAberto] = useState(false);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);

  const handleSelecionar = (index, opcao) => {
    setRespostas({ ...respostas, [index]: opcao });
  };

  const verificarRespostas = () => {
    let acertos = 0;
    perguntas.forEach((p, i) => {
      if (respostas[i] === p.correta) acertos++;
    });

    if (acertos === perguntas.length) {
      setResultado('fofinha');
    } else if (acertos >= perguntas.length / 2) {
      setResultado('muito');
    } else {
      setResultado('pouco');
    }
  };

  const reiniciarQuiz = () => {
    setRespostas({});
    setResultado(null);
  };

  return (
    <div className="quiz-wrapper">
      <button className="botao-quiz" onClick={() => setAberto(true)}>
        🤔
      </button>

      {aberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="fechar" onClick={() => setAberto(false)}>×</button>

            {!resultado ? (
              <>
                <h2>Quiz do Amor 💘</h2>
                {perguntas.map((p, i) => (
                  <div key={i} className="pergunta">
                    <p>{p.pergunta}</p>
                    {p.opcoes.map((opcao, j) => (
                      <label key={j}>
                        <input
                          type="radio"
                          name={`pergunta-${i}`}
                          value={opcao}
                          checked={respostas[i] === opcao}
                          onChange={() => handleSelecionar(i, opcao)}
                        />
                        {opcao}
                      </label>
                    ))}
                  </div>
                ))}
                <button className="verificar" onClick={verificarRespostas}>
                  Ver resultado 💌
                </button>
              </>
            ) : (
              <div className="resultado">
                {resultado === 'pouco' && <p>😢 Poxa, tente novamente!</p>}
                {resultado === 'muito' && <p>🥰 Muito bemm! Você me conhece bastante!</p>}
                {resultado === 'fofinha' && (
                  <div>
                    <p>🎉 UAU! Você acertou tudo!</p>
                    <p>Você é minha alma gêmea, minha melhor escolha, meu amor eterno ❤️</p>
                  </div>
                )}
                <button className="verificar" onClick={reiniciarQuiz}>
                  Refazer quiz 🔁
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizModal;
