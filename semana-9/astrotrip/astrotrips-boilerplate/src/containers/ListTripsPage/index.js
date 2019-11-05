import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getTripsAction } from "../../actions/allActions";
import List from "@material-ui/core/List";

class ListTrips extends Component {
    componentDidMount() {
      this.props.getTripsAction();
    }
  
    render() {
      return (
        <List>LISTA!</List>
      );
    }
  }
  
  const mapStateToProps = state => ({
    trips: state.trips.trips
  });
  
  const mapDispatchToProps = dispatch => ({
    getTripsAction: () => dispatch(getTripsAction()),

  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListTrips);