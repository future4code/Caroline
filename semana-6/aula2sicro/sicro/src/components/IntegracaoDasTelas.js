import React from 'react';
import {InputNomeEmail} from './TelaDeCadastro.js';
import {ListaDeUsuario} from './ListaDeUsuario.js';
import styled from "styled-components";

const ButtonVoltar = styled.button `
width: 20vh;
display:flex;
justify-content:center;
border-radius: 20px;
`

function Integrar (props){
  if(props.cadastrado){
      return (<InputNomeEmail/>)
  }
      return (<ListaDeUsuario/>)
}


export class Integracao extends React.Component{
  constructor(props) {
    super(props);
    this.msgBotao = "Lista de Nomes"
    this.state = {
      cadastrado:false,
    };
  }

aoClicar =()=> {
this.msgBotao = this.state.cadastrado ? "Lista de Nomes" : "Volte";
this.setState({cadastrado: !this.state.cadastrado})
}

  render() {
      return (
          <div>
            <Integrar cadastrado={!this.state.cadastrado} />    
            <ButtonVoltar onClick={this.aoClicar} >{this.msgBotao}</ButtonVoltar>      
      </div>
      );
    }
  }



