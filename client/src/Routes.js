import React from "react";
import Home from "./Home";
import WeatherForm from "./WeatherForm";
import AllResults from "./AllResults";
import Result from "./Result";
import Preferences from "./Preferences";
import { Switch, Route, Redirect } from "react-router-dom";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/check">
          <WeatherForm />
        </Route>
        <Route exact path="/results/:id">
          <Result />
        </Route>
        <Route exact path="/results">
          <AllResults />
        </Route>
        <Route exact path="/preferences">
          <Preferences />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default Routes;