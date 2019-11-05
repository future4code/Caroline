import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getTripsAction } from "../../actions/allActions";
import List from "@material-ui/core/List";

class TripDetails extends Component {
    componentDidMount() {
     
    }
  
    render() {
      return (
        <List>details</List>
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
  )(TripDetails);