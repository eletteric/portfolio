import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Donut from "./Donut";
import Portrait from "./Portrait";
import { db, auth } from "../services/firebase";
import { UserContext } from "../contexts/UserContext";

import Photo from "../img/mn.jpg";
import LanguageGraph from "./LanguageGraph";
import SoftSkills from "./SoftSkills";

const useStyles = makeStyles((theme) => ({
  big: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const About = (props) => {
  const classes = useStyles();

  return (
    <div className="absoluteWrapper">
      <Container maxWidth="md">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Portrait title="concept" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LanguageGraph />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SoftSkills />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
