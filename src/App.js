import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0
    }

    this.iniciar = this.iniciar.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  iniciar() {
    alert('cronômetro iniciado...')
  }

  limpar() {
    alert('cronômetro limpado com sucesso!!')
  }
  
  render() {
    return (
      <div className="container" >
      <h1 className="titulo">Cronometro</h1>

      <img src={require("./assets/cronometro.png")} className="img" />
      <a className="timer" >{this.state.numero.toFixed(1)}</a>

      <div className="areaBtn" >
        <a className="botao " onClick={this.iniciar} >Iniciar</a> 
        <a className="botao" onClick={this.limpar} >Limpar</a>
      </div>


      </div>
    );
  }
}

export default App;
