import React, { useContext, useEffect } from "react";
import { db, auth } from "../services/firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import Login from "./Login";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
const Admin = (props) => {
  
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    authListener();
  }, []);



  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const logout = () => {
    firebase.auth().signOut();
    setLoggedIn(false);
    localStorage.setItem('Logged in', false);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(14),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(0, 0, 3),
    },
  }));

  const classes = useStyles();


  useEffect(() => {
const localMemory = localStorage.getItem('Logged in');
if(localMemory =='true'){
 setLoggedIn(true);
}else setLoggedIn(false);
     }, []);

  return (
    <div className="absoluteWrapper">
      {loggedIn ? (
        <Container>
        <h1 style={{ marginTop: "100px" }}>Admin Page</h1>
        <Button
        variant="contained"
        color="secondary"
        className={classes.submit}
        onClick={logout}
      >
        Log Out
      </Button>
      </Container>
      ) : (
        <Login />
      )}

      {loggedIn ? (
            <Container component="main" maxWidth="xs">
                      <h2 style={{ marginTop: "10px" }}>Add a new article</h2>
                <form className={classes.form} noValidate>
<TextField
        variant="outlined"
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        autoComplete="title"
        size="small"
      />
      <br/>
      <br/>
          <Button variant="contained" component="label">
            Choose image
            <input type="file" style={{ display: "none" }} />
          </Button>
          <br />
          </form>
          </Container>
        
      ) : null}
    </div>
  );
};

export default Admin;
