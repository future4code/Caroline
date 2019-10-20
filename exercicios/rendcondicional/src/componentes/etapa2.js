import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

export function Continuar (props) {
    return (
      <div>
        <p> Por que você não terminou um curso de graduação?</p>
           <input type="text"/>
           <p> Você fez algum curso complementar? </p>
        <select>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
          <option>Não fiz curso complementar</option>
        </select>
        <button onClick="">Finalizar</button>
    </div>
    )
  }