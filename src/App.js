import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./Pages/HomePage";
import CategoryFoods from "./Pages/CategoryFoods";

import * as ROUTES from "./constants/routes";
import HallPlan from "./Pages/HallPlan";
import TablePage from "./Pages/TablePage";
import demoCategory from "./Pages/demoCategory";
import AllMenuPage from "./Pages/AllMenuPage";
// import TPage from "./Pages/TPage";s

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={ROUTES.DEMO} component={AllMenuPage} />
          <Route exact path={ROUTES.HALLPLAN} component={HallPlan} />
          <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />
          <Route exact path={ROUTES.CATEGORYFOODS} component={CategoryFoods} />
          <Route exact path={ROUTES.TABLES} component={TablePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
