import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { useTransition, animated } from "react-spring";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import firebase from "../services/firebase";

const PageBottom = (props) => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      zIndex: 10,
      marginTop: "auto",
      backgroundColor: "none",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    },
    linkIcon: {
      fontSize: "1em",
      marginBottom: "-2px",
      marginRight: "5px",
      padding: "0px",
    },
  }));
  const classes = useStyles();

  const logout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    localStorage.setItem("Logged in", false);
    firebase.auth().signOut();
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link color="inherit" href="https://eletteric.com/">
          eletteric
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <footer className={classes.footer}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {loggedIn ? (
            <>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  <ExitToAppIcon className={classes.linkIcon} />
                  <Link
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    log out
                  </Link>
                </Typography>
              </Grid>
            </>
          ) : null}

          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default PageBottom;