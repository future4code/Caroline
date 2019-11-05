import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import logo from './logo.png';
import styled from "styled-components";

const Img = styled.img `
  width:250px;

`

const HomePage = props => {
    console.log(props);
    return (
      <div>
        <div>
          <Img src={logo}/>
        </div>
        <button onClick={props.goToInscricao}>INSCRIÇÕES</button>
        <button onClick={props.goToLogin}>LOGIN</button>
        <button onClick={props.goToList}>Teste,list</button>
        <button onClick={props. goToTripDetails}>Teste,tripDetals</button>
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