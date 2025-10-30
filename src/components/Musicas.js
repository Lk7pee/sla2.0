import React from 'react';
import './Musicas.css';

function Musicas() {
  return (
    <div className="musicas-container">
      <h2>Músicas 🎶</h2>
      <div className="musicas-grid">
        {/* Música 1 - lado esquerdo */}
        <div className="musica-bloco esquerda">
          <img
            src="https://th.bing.com/th/id/R.d6a7a4534525d279dbf71d0baa8f993c?rik=6933hLzJolVB5Q&pid=ImgRaw&r=0"
            alt="Ícone música 1"
            className="musica-icon"
          />
          <iframe
            src="https://open.spotify.com/embed/track/6fPALIGFkjmlHKuiiZLRl6?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Música 1"
          ></iframe>
        </div>

        {/* Música 2 - lado direito */}
        <div className="musica-bloco direita">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.RPdb55sbfs9FGDay5_hD3QHaIu?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Ícone música 2"
            className="musica-icon"
          />
          <iframe
            src="https://open.spotify.com/embed/track/1DLKuppSYytOuxhtI6KBGu?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Música 2"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Musicas;
