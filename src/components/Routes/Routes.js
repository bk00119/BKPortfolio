import { Component } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Main from "../Main/Main";
import "../../styles.css";

const Routes = () => {
  return (
    <div class="Routes">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default Routes;
