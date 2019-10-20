import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

export function QualCurso (props) {
    return (
      <div>
        <h1>Informações de ES</h1>
        <p> Qual Curso?</p>
           <input type="text"/>
        <p> Qual unidade de ensino? </p>
           <input type="text"/>
      </div>
    ) 
  }