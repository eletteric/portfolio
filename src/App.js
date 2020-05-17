import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";

import WorkContextProvider from "./contexts/WorkContext";
import UserContextProvider from "./contexts/UserContext";
import { useTransition, animated } from "react-spring";



const App = () => {

  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translateX(100vw)'},
    enter: { opacity: 1, transform: 'translateX(0%)'},
    leave: { opacity: 0 , transform: 'translateX(-100vw)'},
  });

  return (
    <div className="App">
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <UserContextProvider>
          <Switch location={item} key={item.pathname}>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/work"
              render={(props) => (
                <WorkContextProvider>
                  <Work {...props} />
                </WorkContextProvider>
              )}
            />

            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
                          exact
              path="/admin"
              render={(props) => <Admin {...props} />}
            />
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
          </UserContextProvider>
        </animated.div>
      ))}
    </div>
  );
};

export default App;
