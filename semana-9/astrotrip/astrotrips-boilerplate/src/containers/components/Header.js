import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import logo from './logo.png';

const HeaderStyled = styled.div `
  background-color:white;
`
const Img = styled.img `
  width:250px;
`

export default class Header extends Component {
        constructor(props) {
          super(props);
          this.state = {
       
          };
    }    

          render(){
          return (
            <div>
                <HeaderStyled>
                    <Img src={logo}/>
                </HeaderStyled>
     
            </div>
          );
        }
      }
//(Header);
