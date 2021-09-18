import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useSelector, useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";
import { store } from "./redux/store";
import pizzas from "./redux/reducers/pizzas";
import filters from "./redux/reducers/filters";

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((response) => {
      dispatch(setPizzas(response.data.pizzas));
    });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
