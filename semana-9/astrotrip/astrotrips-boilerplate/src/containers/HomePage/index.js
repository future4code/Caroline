import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import Header from "../components/Header.js";

const ButtonsStyledDiv = styled.div `
  display:flex;
  margin-top:15%;
  margin-left:10%;
  margin-right:10%;
  justify-content:center;
  border-radius:10px;
`
const ButtonStyled = styled.button `
  height:100px;
  width:150px;
  margin-right:10%;
  margin-left:10%;
  background-color: #c5cae9;
  color: #f5f5f5;
  font-weight: 800;
  font-family: Courier New, monospace;
  `

//#eeeeee

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