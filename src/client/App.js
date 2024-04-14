import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import { Meals } from "./components/MealsPage/Meals";
import { MealWithId } from "./components/MealById/MealWithId";
import { Blog } from "./components/Blog/Blog";
import { MealsProvider } from "./components/MealsContext/MealsContext";
import { Home } from "./components/Home/Home";
import { NotFoundPage } from "./components/NotFound/NotFoundPage";
import { Footer } from "./components/Footer/Footer";
import { FormCreateNewMeal } from "./components/AddMeal/FormCreateNewMeal";

function App() {
  return (
    <Router>
      <Header />
      <MealsProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/meals">
            <Meals />
          </Route>
          <Route path="/meals/:id">
            <MealWithId />
          </Route>
          <Route exact path="/addMeal">
            <FormCreateNewMeal />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </MealsProvider>
      <Footer />
    </Router>
  );
}

export default App;
