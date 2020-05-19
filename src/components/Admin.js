import React, { useContext, useEffect } from "react";
import { db, auth } from "../services/firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import Login from "./Login";
import SkillSliders from "./SkillSliders";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
            <Container component="main" maxWidth="md">
                <form className={classes.form} /*onSubmit={submitProfile}*/ >
                <Grid container spacing={3}>
                  <Grid item sm={3} xs={6}>
<TextField
        required
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
        id="title"
        label="Last name"
        name="title"
        autoComplete="title"
        size="small"
value={myself[0].name.last}
onChange={onChangeLastName}
      />
      </Grid>
      <Grid item sm={3} xs={6}>
      <ImageUpload/>
</Grid>
<Grid item sm={6} xs={12}>
<Typography variant="overline">3 best skills</Typography>
<SkillSliders/>
          </Grid>
          <Grid item sm={12} xs={12}>
          <Button variant="contained" color="primary" /*onClick={handleUpload}*/>
              Save changes
            </Button>
            </Grid>
            </Grid>
          </form>
          </Container>
      ) : null}
    </div>
  );
};

export default Admin;
