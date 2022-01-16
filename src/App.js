import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container" >
      <h1 className="titulo">Cronometro</h1>

      <img src={require("./assets/cronometro.png")} className="img" />
      <a className="timer" >0.0</a>

      <div className="areaBtn" >
        <a className="botao " >Iniciar</a> 
        <a className="botao" >Limpar</a>
      </div>


      </div>
    );
  }
}

export default App;
