import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";
import { store } from "./redux/store";
import pizzas from "./redux/reducers/pizzas";
import filters from "./redux/reducers/filters";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then((response) => {
      dispatch(setPizzas(response.data));
    });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
