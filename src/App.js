import React, {useContext, useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";



import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";

import WorkContextProvider from "./contexts/WorkContext";


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
            <WorkContextProvider>
            <Work
              {...props}
            />
            </WorkContextProvider>
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
