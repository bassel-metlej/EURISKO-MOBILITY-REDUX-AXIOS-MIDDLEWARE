import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import loginR from "./store/reducers/LoginReducer";
import articlesR from "./store/reducers/ArticlesReducer";

import httpMiddleware from "./middleware/http";

const reducer = combineReducers({
  login: loginR,
  articles: articlesR,
});

const middlewares = [thunk];
middlewares.push(httpMiddleware);

const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
