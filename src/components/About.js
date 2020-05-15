import React, { useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Donut from "./Donut";

import Portrait from "../img/mn.jpg";

const useStyles = makeStyles((theme) => ({
big:{
  width: theme.spacing(20),
  height: theme.spacing(20),
}
}));


const About = (props) => {

const classes = useStyles();

const [myself, setMyself] = useState({
  image:{
    url:'http://www.eletteric.com/portfolio/mn.jpg',
    alt: 'digital creative'
  },
name:{
  first:'Mihai',
  last:'Niculescu'
},
skills:{
  design:{
    score:95
  },
  coding:{
    score:75
  },
  other:{
    score:50
  }
}
});


  return (
    <div className="absoluteWrapper">
<h1 style={{paddingTop: '90px'}}>{myself.name.first} {myself.name.last}</h1>
<Avatar alt={myself.image.alt} src={myself.image.url} className={classes.big} style={{margin:'0px auto'}}/>
<Donut intValue={myself.skills.design.score} title="design"/>
<Donut intValue={myself.skills.coding.score}  title="coding" />
<Donut intValue={myself.skills.other.score}  title="concept"/>
    </div>
  );
};

export default About;
