import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

export function Tipo(props){
    return (
      <div>
          <h2>Qual foi o tipo de despesa?</h2>
        <select>
            <option value="casa">casa</option>
            <option value="lanches">lanches</option>
            <option value="transporte">transporte</option>
        </select>
      </div>
     )  
  }