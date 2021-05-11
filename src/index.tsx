import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import thunk from "redux-thunk";
import store from "./state/store/Store";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const appStore = createStore(store, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
