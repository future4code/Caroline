import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Tipo} from './tipo.js';
import {Valor } from './valor';
import {Descricao } from './descricao';
import { Botoes } from './botoes';
import {TituloCadastro} from './titulo.js'


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
          <div>
          <TituloCadastro/>
          <TelaDeCadastroPrincipal>
            
            <Valor/>
            <Tipo />
            <Descricao />
            <Botoes/>

          </TelaDeCadastroPrincipal>
          </div>
    )
}