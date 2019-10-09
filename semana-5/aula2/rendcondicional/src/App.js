import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import styled from "styled-components";


function finalizarOuNao (props) {
  if (props.finalizarET1) {
    return (<continuar/>)
  }
}

function continuar (props) {
  return (
    <div>
      <p> Por que você não terminou um curso de graduação?</p>
         <input type="text"/>
         <p> Você fez algum curso complementar? </p>
      <select>
        <option>Curso Técnico</option>
        <option>Curso de Inglês</option>
        <option>Não fiz curso complementar</option>
      </select>
      <button>Finalizar</button>
  </div>
  )
}

function finalizar (props) {
  return (
    <div>
      <h1>O FORMULÁRIO ACABOU</h1>
      <h2>Muito obrigado por particiupar! Entraremos em contato!</h2>
    </div>
  )
  
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         escolhasDeEscolaridade : "Ensino Médio Completo",    
         finalizarET1 :false,       
    }
  }

    escolhasDeEscolaridade= (event) => {
      this.setState({ escolhasDeEscolaridade: event.target.value });
      console.log ("oi,testando")
    }

    botaoContinuar = () => {
      function continuar() {
        return (
          <div>
            <p> Por que você não terminou um curso de graduação?</p>
               <input type="text"/>
               <p> Você fez algum curso complementar? </p>
            <select>
              <option>Curso Técnico</option>
              <option>Curso de Inglês</option>
              <option>Não fiz curso complementar</option>
            </select>
            <button>Finalizar</button>
        </div>
        )
      } 
      console.log ("me chamaram")
    }

    botaoFinalizar = ()=> {
    this.setState({finalizarET1 : !this.stste.finalizarET1})
    }

    render() {
      let escolha;     
      return (
      
        <div>
          <div>
            <p> Qual seu nome?</p>
            <input type="text"/>
            <p> Qual sua idade?</p>
            <input type="text"/>
            <p> Qual seu email?</p>
            <input type="text"/>
            <p> Qual sua escolaridade?</p>
            <select value={this.state.value} onChange={this.escolhasDeEscolaridade}>
              <option id=" EMC" value="Ensino Médio Completo">Ensino Médio Completo</option>
              <option id=" EMI" value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
              <option id=" ESC" value="Ensino Superior Completo">Ensino Superio Completo</option>
              <option id=" ESI" value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            </select>
            <botaoContinuar finalizarET1={this.state.finalizarET1} />
            <button onClick = {this.botaoContinuar} >continuar</button>
          </div>
        {escolha}
        </div>
      );
    }


}
    //<finalizarOuNao finalizarET1={this.state.finalizarET1} />

export default App;
