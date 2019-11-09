import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getTrips} from "../../actions/allActions";
import List from "@material-ui/core/List";
import Header from "../components/Header.js";

class ListTrips extends Component {
    componentDidMount() {
      this.props.getTripsAction();
    }
  
    render(props) {
      console.log(this.props.trips) 
      return (
        <div>
          <Header/>
          <List>
              {
                  this.props.trips.map((trip) => {
                      return(<li>{trip.name}</li>)
                  })
              }
          </List>
          <button  onClick={this.props.goToTripDetails}>Detalhes</button>
        </div>  
      );
  }
}
  
  const mapStateToProps = state => ({
    trips: state.trips.trips
  });
  
  const mapDispatchToProps = dispatch => ({
    getTripsAction: () => dispatch(getTrips()),
    goToTripDetails:  () => dispatch(push("/trips/details"))

  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListTrips)