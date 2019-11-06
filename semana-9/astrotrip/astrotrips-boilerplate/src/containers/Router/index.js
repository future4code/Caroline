import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import Inscricao from "../Inscricao";
import ListTrips from "../ListTripsPage"
import TripDetails from "../TripDetailsPage"
import CreateNewTrip from "../CreateNewTrip"

const routes = {
  
  root: "/login",
  inscricao:"/application-form",
  home:"/",
  //checkAplications:"",
  createTrip:"/trips/create",
  tripList: "/trips/list",
  tripDetails:"/trips/details",
  
  

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.createTrip} component={CreateNewTrip}/>
        <Route  path={routes.inscricao} component={Inscricao} />
        <Route exact path={routes.root} component={LoginPage} /> 
        <Route  path={routes.tripList} component={ListTrips} />
        <Route  path={routes.tripDetails} component={TripDetails} />
        <Route  path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
