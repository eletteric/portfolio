import React, {useContext, useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";



import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import NotFound from "./components/NotFound";

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
        exact
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
        exact
          path="/about"
          render={(props) => (
            <About
              {...props}
            />
          )}
        />
                <Route
          render={() => (
            <NotFound
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
