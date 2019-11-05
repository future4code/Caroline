import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getTripsAction } from "../../actions/allActions";
import List from "@material-ui/core/List";
import { getTripDetail} from "../../actions/allActions";

class TripDetails extends Component {
    componentDidMount() {
      this.props.getDetails();
    }
  
    render() {
      return (
        <List>details</List>
      );
    }
  }
  
  const mapStateToProps = state => ({
    trip: state.trips.trip
   
  });
  
  const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getTripDetail()),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TripDetails);
  
