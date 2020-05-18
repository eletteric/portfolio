import React, { useState, useEffect, useContext } from "react";
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Donut from "./Donut";
import Portrait from "./Portrait";
import {db, auth} from "../services/firebase";
import { UserContext } from "../contexts/UserContext";

import Photo from "../img/mn.jpg";

const useStyles = makeStyles((theme) => ({
big:{
  width: theme.spacing(20),
  height: theme.spacing(20),
}
}));


const About = (props) => {
 


  
const classes = useStyles();

  return (
    <div className="absoluteWrapper">
<Portrait title="concept"/>
{/*<h3 style={{paddingTop: '0px'}}>{myself.name.first} {myself.name.last}</h3>*/}

{/*<Avatar alt={myself.image.alt} src={myself.image.url} className={classes.big} style={{margin:'0px auto'}}/>
<Donut intValue={myself.skills.coding.score}  title="coding" />*/}
    </div>
  );
};

export default About;
