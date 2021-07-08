import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes as Routes } from ".";

function BaseRoute() {
  return (
    <Router>
      <Switch>
        {Routes.default.map(({ exact, path, component }, index) => (
          <Route key={index} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default BaseRoute;
