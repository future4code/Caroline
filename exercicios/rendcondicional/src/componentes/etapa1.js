import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

 
export function Home (props) {
    return (
    <div>
        <p> Qual seu nome?</p>
          <input type="text"/>
        <p> Qual sua idade?</p>
          <input type="text"/>
        <p> Qual seu email?</p>
          <input type="text"/>
        <p> Qual sua escolaridade?</p>
        <select>
          <option id=" EMC" value="Ensino Médio Completo">Ensino Médio Completo</option>
          <option id=" EMI" value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
          <option id=" ESC" value="Ensino Superior Completo">Ensino Superio Completo</option>
          <option id=" ESI" value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
        </select>
  </div>
    )
  }
  