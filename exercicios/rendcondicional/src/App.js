import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Home} from "./componentes/etapa1.js";
import {Continuar} from "./componentes/etapa2.js";
import {QualCurso} from "./componentes/etapa3.js";
import {Finalizar} from "./componentes/etapa4.js";


function FinalizarOuNao (props) {
  if(props.etapas) {
    return (<Home/>)
  } 
    return (<Continuar/>) 
}

class App extends React.Component{
  constructor(props){
      super(props)
      this.msgBotao = "Continuar"
      this.state = { 
       etapas :true,       
  }
}

    escolhasDeEscolaridade= (event) => {
      this.setState({ escolhasDeEscolaridade: event.target.value });
      console.log ("oi,testando")
    }

    botaoContinuar = () => {
      this.msgBotao = this.state.etapas ? "Voltar" : "Continuar";
    ///if (this.state.logado) {
    //  this.msgBotao = "Sair"
    //  } else {
    //  this.msgBotao = "Login"
    //  }
    this.setState({etapas: !this.state.etapas})
  } 
      

  render() {
    let escolha;     
    return (
      <div>
          <FinalizarOuNao etapas={this.state.etapas} />
          <button onClick = {this.botaoContinuar} >{this.msgBotao}</button>
      {escolha}
      </div>
    );
  }


}
export default App;
// value={this.state.value} onChange={this.escolhasDeEscolaridade}