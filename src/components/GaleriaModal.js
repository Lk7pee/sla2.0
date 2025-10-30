import React, { useState } from 'react';
import Slider from 'react-slick';
import './GaleriaModal.css';

const imagens = [
  '/imagens/foto1.jpg',
  '/imagens/foto2.jpg',
  '/imagens/foto3.jpg',
  '/imagens/foto4.jpg',
  '/imagens/foto5.jpg',
  '/imagens/foto6.jpg',
  '/imagens/foto7.jpg',
  '/imagens/foto8.jpg',
  '/imagens/foto9.jpg',
  '/imagens/foto10.jpg',
  '/imagens/foto11.jpg',
];

function GaleriaModal() {
  const [aberto, setAberto] = useState(false);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  swipe: true,         // ✅ permite arrastar com o dedo
  touchMove: true,     // ✅ garante que o toque funcione
  autoplay: true,
  autoplaySpeed: 3000,
};


  return (
    <div className="galeria-wrapper">
      <button className="botao-galeria" onClick={() => setAberto(true)}>
        Nossos Momentos 💑
      </button>

      {aberto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="fechar" onClick={() => setAberto(false)}>×</button>
            <Slider {...settings}>
              {imagens.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Foto ${index + 1}`} className="galeria-img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default GaleriaModal;
