import React, { useState } from 'react';
import './SurpresaModal.css';

function SurpresaModal() {
  const [aberto, setAberto] = useState(false);
  const [resposta, setResposta] = useState('');

  return (
    <div className="surpresa-wrapper">
      <div className="botao-imagem-container">
        <button className="botao-surpresa" onClick={() => setAberto(true)}>
          Clique aqui 💘
        </button>
        <img
          src="https://i.pinimg.com/originals/7a/c4/bf/7ac4bfcb3c37fe7c6bd14d17941e5f4d.png"
          alt="Personagem fofo"
          className="imagem-fofa"
        />
      </div>

      {aberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="fechar" onClick={() => setAberto(false)}>×</button>
            {!resposta ? (
              <>
                <h2>Você me ama? 💖</h2>
                <div className="botoes-resposta">
                  <button onClick={() => setResposta('Sim')}>Sim</button>
                  <button onClick={() => setResposta('Claro!')}>Claro!</button>
                </div>
              </>
            ) : (
              <div className="mensagem-final">
                <h3>Eu também te amo muito! ❤️</h3>
                <p>Você é tudo pra mim. Obrigado por estar comigo!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SurpresaModal;
