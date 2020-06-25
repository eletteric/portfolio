import React, { useContext, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import PageBottom from "./components/PageBottom";
import Curriculum from "./components/Curriculum";

import WorkContextProvider from "./contexts/WorkContext";
import UserContextProvider from "./contexts/UserContext";
import { UserContext } from "./contexts/UserContext";
import { useTransition, animated } from "react-spring";
import { db, auth } from "./services/firebase";
import CurriculumkContextProvider from "./contexts/CurriculumContext";

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const App = () => {
  const { myself, setMyself } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translateX(100vw)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100vw)" },
  });

  return (
    <div className="App">
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item} key={item.pathname}>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/projects"
              render={(props) => (
                <WorkContextProvider>
                  <Projects {...props} />
                </WorkContextProvider>
              )}
            />
                        <Route
              exact
              path="/curriculum"
              render={(props) => (
                  <Curriculum {...props} />
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
        </animated.div>
      ))}
      <PageBottom />
      <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
        open={open}
        autoHideDuration={6000}
        TransitionComponent={TransitionLeft}
                onClose={handleClose}  
        action={
          <React.Fragment>
           <Button color="secondary" variant="text" size="small" onClick={(e) => {
      e.preventDefault();
      window.open('https://www.data-saga.be/cv-2020-mn.pdf', '_blank');
      }}>
              Download my curriculum vitae
        </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }    />
    </div>
  );
};

export default App;