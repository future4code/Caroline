import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Header from "../components/Header.js";

class AprovaDeleta extends Component {
    componentDidMount() {
     
    }
  
    render(props) {
  
      return (
        <div>
          <Header/>
          <p> Inscrição X </p>
          <button>OK</button>
          <button>X</button>
          <p> Inscrição Y</p>
          <button>OK</button>
          <button>X</button>
        </div>  
      );
  }
}
  
  const mapStateToProps = state => ({
   
  });
  
  const mapDispatchToProps = dispatch => ({
 

  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AprovaDeleta)

