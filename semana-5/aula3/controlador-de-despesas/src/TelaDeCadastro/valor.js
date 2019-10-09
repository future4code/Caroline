import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


 export class Valor extends React.Component {
    constructor() {
      super();
      this.state = value = ''
      
    }
  
  
    valorDaDespesa (event) {
        this.valorDaDespesa = this.handleChange.bind(this);
        this.setState({value: event.target.value});
      }

    render() {
        return (
            <div>
                <h2>Qual foi o valor da despesa?</h2>
              <input type="text" value={this.state.value} onChange={this.valorDaDespesa}/>
            </div>
        )   
    }
  }
  