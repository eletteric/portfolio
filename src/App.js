import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";


const App = () => {
  const location = useLocation();

  return (
    <div className="App">
        <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
            />
          )}
        />
        <Route
          path="/work"
          render={(props) => (
            <Work
              {...props}
            />
          )}
        />

        <Route
          path="/about"
          render={(props) => (
            <About
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
