import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUp from "../SignUp";
import Login from "../Login";
import NewPassword from "../PassWord";
import AddVideo from "../AddVideo";
import Home from "../Home"


export const routes = {
	signup: "/signup",
	login: "/login",
	newpassword: "/newpassword",
	addvideo:  "/addvideo",
	delvideo:  "/delvideo",
	home:  "/home",
};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch> 
		<Route exact path={routes.signup} component={SignUp} />
		<Route exact path={routes.login} component={Login} />
		<Route exact path={routes.newpassword} component={NewPassword} />
		<Route exact path={routes.addvideo} component={AddVideo} />
		<Route exact path={routes.home} component={Home} />
        </Switch>
      </ConnectedRouter>
    );
  
}

export default Router;