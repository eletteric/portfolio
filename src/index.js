import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import { UserContext } from "./contexts/UserContext";
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// Replaced StrictMode by Fragment for mui bug

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
