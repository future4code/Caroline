import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import axios from "axios";
import {InputNomeEmail} from './TelaDeCadastro';

function Voltar (props){
    if(props.voltar){
        return (<InputNomeEmail/>)
    }
}


export class ListaDeUsuario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          voltar: false,
          lista:[],

      };
    }

    
    aoClicarVoltar =()=> {
          this.setState({voltar: !this.state.voltar})
      }






    render() {
        return (
          <div>
              <li></li>
              <button onClick={this.aoClicarVoltar}>Voltar!</button>
          </div>
        );
      }
    }
    
    //<Voltar voltar = {this.state.voltar}/>