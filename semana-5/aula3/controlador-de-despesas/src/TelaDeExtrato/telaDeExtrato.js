import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Um = styled.div `
background-color : darkSeaGreen;
display: flex;
flex-direction: row;
height: 100vh;
justify-content: center;

`;

const Titulo = styled.h1 `
color:white

`;

export function TelaDeExtrato(){
    return (
        <Um>
           <Titulo> IMPRIMA SEU EXTRATO </Titulo>
       </Um>
    )
}