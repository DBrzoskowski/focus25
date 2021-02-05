import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Pomodoro from "./containers/Pomodoro";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Pomodoro} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </div>
  );
};