import React, { useContext, useEffect } from "react";
import { db, auth } from "../services/firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import Login from "./Login";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ImageUpload from "./ImageUpload";

const Admin = (props) => {
  
  const { user, setUser, loggedIn, setLoggedIn, myself, setMyself} = useContext(UserContext);

  const myState = Object.assign([], myself);


const onChangeFirstName = (e) =>{
  myState[0].name.first = e.target.value;
  setMyself(myState);
  }
const onChangeLastName = (e) =>{
  myState[0].name.last = e.target.value;
  setMyself(myState);
  }


  useEffect(() => {
    authListener();
  }, []);

  useEffect(() => {
    const localMemory = localStorage.getItem('Logged in');
    if(localMemory =='true'){
     setLoggedIn(true);
    }else setLoggedIn(false);
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

  return (
    <div className="absoluteWrapper">
      {loggedIn ? (
        <Container>
        <h1 style={{ marginTop: "100px" }}>Admin Page</h1>
      </Container>
      ) : (
        <Login />
      )}

      {loggedIn ? (
            <Container component="main" maxWidth="xs">
                      <Typography variant="overline">Profile picture</Typography>
                <form className={classes.form} noValidate>
                <ImageUpload/>
<TextField
        required
        fullWidth
        id="firstname"
        label="First name"
        name="first"
        autoComplete="First name"
        size="small"
        value={myself[0].name.first}
        onChange={onChangeFirstName}
      />
<TextField
        required
        fullWidth
        id="title"
        label="Last name"
        name="title"
        autoComplete="title"
        size="small"
value={myself[0].name.last}
onChange={onChangeLastName}
      />
      <br/>
      <br/>
          <br />
          </form>
          </Container>
        
      ) : null}
    </div>
  );
};

export default Admin;
