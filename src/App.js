import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋Olá! Pronto para mandar tchauzinho?👋
        </div>

        <div className="bio">
        Sou o Paulo Gio e fiz essa página para receber tchauzinhos de pessoas que conectam suas carteiras!
        </div>

        <button className="waveButton" onClick={wave}>
          CLIQUE AQUI PARA MANDAR TCHAUZINHO!
        </button>
      </div>
    </div>
  );
}
