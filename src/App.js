import React from 'react';
import './App.css';
import BoasVindas from './components/BoasVindas';
import SurpresaModal from './components/SurpresaModal';
import GaleriaModal from './components/GaleriaModal';
import Cartinha from './components/Cartinha';
import QuizModal from './components/QuizModal';
import Musicas from './components/Musicas';

function App() {
  return (
    <div className="App">
    <div className="secao">
  <BoasVindas />
</div>
<div className="secao">
  <div className="secao-principal">
    <SurpresaModal />
    <Musicas />
  </div>
</div>

      <GaleriaModal />
      <Cartinha /> {/* Sempre no final */}
      <QuizModal /> {/* Botão flutuante, não interfere no layout */}

      

    
    <span className="coracao">💖</span>
<span className="coracao">💘</span>
<span className="coracao">💝</span>
<span className="coracao">💕</span>
<span className="coracao">💞</span>

    </div>
  );
}



export default App;
