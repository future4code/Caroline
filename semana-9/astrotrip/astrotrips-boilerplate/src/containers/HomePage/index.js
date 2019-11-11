import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import Header from "../components/Header.js";
import rocket from "./rocket.jpg"

const ButtonsStyledDiv = styled.div `
  display:flex;
  justify-content:center;
  background-image: url(${rocket});
  width:100%;
  height:600px;
 
`
const ButtonStyled = styled.button `
  height:100px;
  width:150px;
  margin-right:10%;
  margin-left:10%;
  background-color:#3f51b5;
  color: #f5f5f5;
  font-weight: 800;
  font-family: Courier New, monospace;
  border-radius:10px;
  margin-top:15%;
  margin-left:10%;
  margin-right:10%;
  `


/*

  */

const HomePage = props => {
    console.log(props);
    return (
      <div>
        <Header/>
        <ButtonsStyledDiv>
            <ButtonStyled onClick={props.goToInscricao}>INSCRIÇÕES</ButtonStyled>
            <ButtonStyled onClick={props.goToLogin}>LOGIN</ButtonStyled>
        </ButtonsStyledDiv>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      goToInscricao: () => dispatch(push("/application-form")),
      goToLogin:  () => dispatch(push("/login")),
      goToList:  () => dispatch(push("/trips/list")),
      
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomePage);

  /*            <ButtonStyled onClick={props.goToList}>Teste,list</ButtonStyled>
            <ButtonStyled onClick={props. goToTripDetails}>Teste,tripDetals</ButtonStyled>*/