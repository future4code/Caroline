import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const Inscricao = props => {
    console.log(props);
    return (
      <div>
        <button onClick={}>INSCRIÇÕES</button>
        <button onClick={}>LOGIN</button>
      </div>
    );
  };
  
  function mapDispatchToProps(dispatch) {
    return {
      
    };
  }
  
  export default connect(
    null,
    mapDispatchToProps
  )(Inscricao);