import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const Inscricao = props => {
    console.log(props);
    return (
      <div>
        <form>
          testee
        </form>
       
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
  