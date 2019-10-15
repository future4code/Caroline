import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

  export class Descricao extends React.Component {
    constructor() {
      super();
      this.state = {value : ''}   
    }

    descricao = (event) => {
      this.setState ({value : this.state.value})
      console.log ("descrição")
      }

    render() {
        return (
            <div>
                <h2>Detalhe a despesa</h2>
                <textarea type="text" value={this.setState.value} onChange={this.descricao}></textarea>
            </div>
        )   
    }
  }
  