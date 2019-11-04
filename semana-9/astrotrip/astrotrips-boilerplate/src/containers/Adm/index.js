import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const AdmPage = props => {
    console.log(props);
    return (
      <div>
       <ul>
           <li></li>
           <li></li>
           <li></li>
       </ul>
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
  )(AdmPage);