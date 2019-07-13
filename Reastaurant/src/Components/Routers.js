import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import RecipesDetails from "./RecipeDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/RecipesDetails/:id" component={RecipesDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
