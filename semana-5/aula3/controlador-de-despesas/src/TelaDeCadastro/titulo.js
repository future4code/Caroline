import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TituloCad = styled.div `
background-color : Thistle;
display: flex;
color:white
justify-content: center;
`;

export function TituloCadastro(){
    return (
      <TituloCad>
          <h1> REGISTRE SUAS DESPESAS </h1>
      </TituloCad>
    )
}