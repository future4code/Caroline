import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Tipo} from './tipo.js';
import {Valor } from './valor';
import {Descricao } from './descricao';


const TelaDeCadastroPrincipal = styled.div `
background-color : Thistle;
display: flex;
flex-direction: row;
height:100vh
align-items: center;
text-align: center;
justify-content: space-between;
padding: 8px;

`;

export function TelaDeCadastro(){
    return (

        <TelaDeCadastroPrincipal>
      
          <Valor/>
          <Tipo />
          <Descricao />
          
        </TelaDeCadastroPrincipal>
    )
}