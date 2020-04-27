import React from "react";
import Home from "./Home";
import WeatherForm from "./WeatherForm";
import Results from "./Results";
import About from "./About";
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
        <Route exact path="/results">
          <Results />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default Routes;