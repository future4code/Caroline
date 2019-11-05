import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";


const AdmPage = props => {
    console.log(props);
    return (
      <div>
    
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

      /*<button onClick={}>Listar Viagens</button>
        <button onClick={}>Criar Novas Viagens</button>
        <button onClick={}>Análise de incrições</button>*/