import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import AstroTrip from './AstroTrip.png';

export const HeaderStyle= styled.header `

`;


export class Header extends React.Component {
    constructor() {
      super();
      
    }

    render() {
    return (
        <HeaderStyle>
          lololo
           <img src={AstroTrip}/>
        </HeaderStyle>
     )  ;
    }
}