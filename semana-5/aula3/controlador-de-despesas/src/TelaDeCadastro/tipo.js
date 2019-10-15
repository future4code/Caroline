import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const capturaDeValor = {
valorTipo : tipoDeDespesa,
}

export class Tipo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};
    }

     tipoDeDespesa = (event) => { 
      const tipoValue = this.state.value
      this.setState({value: event.target.value});
      console.log (tipoValue) //não tá imprimindo o valor certo!
    }
    render() {
    return (
      <div>
          <h2>Qual foi o tipo de despesa?</h2>
          <select value={this.state.value} onChange={this.tipoDeDespesa}>
            <option value="casa">casa</option>
            <option value="lanches">lanches</option>
            <option value="transporte">transporte</option>
          </select>
      </div>
     )  ;
    }
  }