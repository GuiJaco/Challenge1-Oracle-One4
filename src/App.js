import './App.css';
import logo from './assets/logo.png';
import notFound from './assets/image-not-found.svg';
import { useState } from 'react';

function App() {
const [currentText, setCurrentText] = useState('')
const [criptText, setCriptText] = useState('')

const criptButton = () => {
  let exemplo = currentText;
  let resultado = exemplo.replace(/e/g, "enter").replace(/i/g,"imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");
  setCriptText(resultado)

  document.getElementById("content-first").style.display="none";
  document.getElementById("content-able").style.display="flex";
}

const descripButton = () => {
  let exemplo = currentText;
  let resultado = exemplo.replace(/imes/g, "i").replace(/enter/g, "e").replace(/ober/g, "o").replace(/ai/g, "a").replace(/ufat/g, "u");
  setCriptText(resultado)
}

const copyButton = () => {
  navigator.clipboard.writeText(criptText)
  document.getElementById("button-copy").textContent="Texto Copiado";
}


return (<>
  <body>
    <div className="first-part">
      <img src={logo} alt="logo alura" className="logo"/>
    </div>
    <div className="mid-part">
      <textarea id='input-1' placeholder="Digite seu texto" className="input-entrada" value={currentText} onChange={(e) => setCurrentText(e.target.value)}></textarea>
      <div>
      <p><ion-icon name="alert-circle"></ion-icon>  Apenas letras minúsculas e sem acento.</p>
      <div className="div-button">
        <button className="button-crip" onClick={criptButton}>Criptografar</button>
        <button className="button-descrip" onClick={descripButton}>Descriptografar</button>
        </div>
      </div>
    </div>
    <div className="caixa">
      <div id='content-first'>
        <img src={notFound} alt="imagem de um menino olhando por uma lupa"/>
        <div className="text">
          <h2>Nenhuma mensagem encontrada</h2>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      </div>
      <div id='content-able'>
        <textarea readOnly id='input-2' className="input-saida" value={criptText}></textarea>
        <button id="button-copy" onClick={copyButton}>Copiar</button>
      </div>
    </div>
  </body>
</>);
}

export default App;
