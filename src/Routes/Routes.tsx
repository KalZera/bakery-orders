import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { PageHome } from "Pages";

export const PathsDefault = {
  home: "/",
};

export const Routes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PathsDefault["home"]} component={PageHome} />
        <Redirect to={PathsDefault["home"]} />
      </Switch>
    </BrowserRouter>
  );
};
