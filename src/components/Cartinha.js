import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Cartinha.css';

function Cartinha() {
  return (
    <div className="cartinha-container">
      <h2>Uma cartinha pra você 💌</h2>
      <p className="texto-cartinha">
        <Typewriter
          words={[
            'Oi, meu amor...',
            'Queria te dizer que cada momento ao seu lado é mágico.',
            'Você é minha melhor escolha, minha paz e minha alegria.',
            'Te amo mais do que palavras podem explicar.',
            'Obrigado por existir na minha vida. ❤️',
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={1500}
        />
      </p>
    </div>
  );
}

export default Cartinha;
