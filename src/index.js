import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import CurriculumContextProvider from "./contexts/CurriculumContext";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { UserContext } from "./contexts/UserContext";
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import ToolContextProvider from "./contexts/ToolContext";


const theme = createMuiTheme({
  palette: {
    primary: {main: '#FF00FF'},
    secondary: {main: '#00FFFF'}
   }
});

console.log(theme)


ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <UserContextProvider>
        <ToolContextProvider>
      <CurriculumContextProvider>
        <MuiThemeProvider theme = {theme}>
        <App />
        </MuiThemeProvider>
        </CurriculumContextProvider>
        </ToolContextProvider>
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
