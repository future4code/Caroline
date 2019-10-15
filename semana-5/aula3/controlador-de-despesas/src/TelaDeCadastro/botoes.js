import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Botoess = styled.div `
width: 100px;
display: flex;
flex-direction: column;
padding: 10px;

`;

export class Botoes extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
     return (
         <Botoess>
             <button> Salvar </button>
             <button> Próximo </button>
         </Botoess>
     ) 
}
}