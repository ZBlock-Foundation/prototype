import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppMain from "./app/AppMain";

import LandingMain from "./landing/LandingMain";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LandingMain />
          </Route>
          <Route path="/app" exact>
            <AppMain />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
