import React, { FunctionComponent } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { useAuth } from "Hooks";
import { Loading } from "Components";

import { PageHome, PageAuthentication, PageRegister } from "Pages";

export const PathsDefault = {
  home: "/home",
  authentication: "/auth",
  register: "/register",
};

export const Routes: FunctionComponent = () => {
  const auth = useAuth();
  if (auth === "loadingUser") {
    return (
      <BrowserRouter>
        <Route component={Loading} />
      </BrowserRouter>
    );
  } else if (auth === "authenticated") {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={PathsDefault["home"]} component={PageHome} />
          <Redirect to={PathsDefault["home"]} />
        </Switch>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={PageRegister} />
        <Route exact path={PathsDefault["register"]} component={PageRegister} />
        <Route
          exact
          path={PathsDefault["authentication"]}
          component={PageAuthentication}
        />
        <Redirect to={PathsDefault["authentication"]} />
      </Switch>
    </BrowserRouter>
  );
};
