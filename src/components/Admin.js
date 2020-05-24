import React, { useContext, useEffect } from "react";
import { db, auth } from "../services/firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import Login from "./Login";
import SkillSliders from "./SkillSliders";
import LanguageSliders from "./LanguageSliders";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImageUpload from "./ImageUpload";
import SoftSkillRating from "./SoftSkillRating";

const Admin = (props) => {
  const {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    myself,
    setMyself,
  } = useContext(UserContext);

  const myState = Object.assign([], myself);

  const onChangeFirstName = (e) => {
    myState[0].name.first = e.target.value;
    setMyself(myState);
  };
  const onChangeLastName = (e) => {
    myState[0].name.last = e.target.value;
    setMyself(myState);
  };

  useEffect(() => {
    authListener();
  }, []);

  useEffect(() => {
    const localMemory = localStorage.getItem("Logged in");
    if (localMemory == "true") {
      setLoggedIn(true);
    } else setLoggedIn(false);
  }, [loggedIn]);

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

  const submitProfile = () =>{
    db.collection("myself").doc('56hRy1cU7VHxPuenWq6n').set(myself[0]);
  }

  const classes = useStyles();

  return (
    <div className="absoluteWrapper">
      {loggedIn ? null: (
        <Login />
      )}

      {loggedIn ? (
        <Container component="main" maxWidth="md" style={{ marginTop: "70px", paddingBottom: "100px" }}>
          <form className={classes.form} >
            <Grid container spacing={5}>
              <Grid item sm={4} xs={12}>              
              <Grid container spacing={1}>
              <Grid item xs={12}>
              <Typography variant="overline">Profile Picture</Typography>
              </Grid>
              <Grid item xs={12}>
                <br/>
              <ImageUpload />
              <br/>
              <br/>

              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  id="firstname"
                  label="First name"
                  name="first"
                  autoComplete="First name"
                  size="small"
                  value={myself[0].name.first}
                  onChange={onChangeFirstName} style={{marginBottom: '10px'}}
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
                 </Grid>
              </Grid>
              <Grid item sm={4} xs={12}>
              <Typography variant="overline">3 best skills</Typography>
                 <SkillSliders />
                 <br/>
                 <br/>
                 <Typography variant="overline">Soft skills</Typography>
                 <SoftSkillRating/>
              </Grid>
              <Grid item sm={4} xs={12}>
              <Typography variant="overline">3 best languages</Typography>
                <LanguageSliders />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitProfile}
                >
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
