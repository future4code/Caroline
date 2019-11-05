import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {HeaderStyle} from "../../components/header/header.js"


const HomePage = props => {
    console.log(props);
    return (
      <div>
        <HeaderStyle/>
        <button onClick={props.goToInscricao}>INSCRIÇÕES</button>
        <button onClick={props.goToLogin}>LOGIN</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      goToInscricao: () => dispatch(push("/application-form")),
      goToLogin:  () => dispatch(push("/login"))
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(HomePage);