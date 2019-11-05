import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import Inscricao from "../Inscricao";
import AdmPage from "../Adm/index.js";
import ListTrips from "../ListTripsPage"
import TripDetails from "../TripDetailsPage"


const routes = {
  root: "/login",
  inscricao:"/application-form",
  adm:"/adm",
  home:"/",
  //checkAplications:"",
  createTrip:"/trips/create ",
  tripList: "/trips/list ",
  tripDetails:"/trips/details",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
       <Route  path={routes.root} component={LoginPage} /> 
       <Route  path={routes.inscricao} component={Inscricao} />
       <Route  path={routes.tripList} component={ListTrips} />
       <Route  path={routes.home} component={HomePage} />
       <Route  path={routes.TripDetails} component={TripDetails} />
      
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
