import React from "react";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Routes;