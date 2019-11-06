import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import logo from './logo.png';
import styled from "styled-components";

const Header = styled.div `
  background-color:white;
`
const Img = styled.img `
  width:250px;
`
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



const HomePage = props => {
    console.log(props);
    return (
      <div>
        <Header>
          <Img src={logo}/>
        </Header>
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
      goToTripDetails:  () => dispatch(push("/trips/details"))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomePage);

  /*            <ButtonStyled onClick={props.goToList}>Teste,list</ButtonStyled>
            <ButtonStyled onClick={props. goToTripDetails}>Teste,tripDetals</ButtonStyled>*/