import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewPhoto from "./containers/NewPhoto/NewPhoto";
import Photo from "./containers/Photo/Photo";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to="/login" />
);

const Routes = ({user}) => (
  <Switch>
    <Route path="/" exact component={Photo}/>
    <ProtectedRoute
      isAllowed={user}
      path="/new"
      exact
      component={NewPhoto}
    />
    <Route path="/register" exact component={Register}/>
    <Route path="/login" exact component={Login}/>
  </Switch>
);

export default Routes;