import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((response) => {
      setPizzas(response.data.pizzas);
    });
  }, []);

  console.log(pizzas);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
