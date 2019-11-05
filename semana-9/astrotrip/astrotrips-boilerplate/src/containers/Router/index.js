import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../Home";
import Inscricao from "../Inscricao";
import AdmPage from "../Adm/index.js";



const routes = {
  root: "/login",
  inscricao:"/inscricao",
  adm:"/adm",
  home:"/",

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
       <Route  path={routes.root} component={LoginPage} /> 
       <Route  path={routes.inscricao} component={Inscricao} />
       <Route  path={routes.adm} component={AdmPage} />
       <Route  path={routes.home} component={HomePage} />

      
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
