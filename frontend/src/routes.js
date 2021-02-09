import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Pomodoro from "./containers/Pomodoro";
import Calendar from "./components/Calendar";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Pomodoro} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
          <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
};