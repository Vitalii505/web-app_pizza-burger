import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./reducers/filters";
import pizzasReducer from "./reducers/pizzas";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pizzas: pizzasReducer,
  },
  thunk,
});

window.store = store;

// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COPOSE__ || compose;

//  const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
// export default store;
