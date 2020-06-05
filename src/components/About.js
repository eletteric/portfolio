import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Donut from "./Donut";
import Portrait from "./Portrait";
import { db, auth } from "../services/firebase";
import { UserContext } from "../contexts/UserContext";
import PropTypes from 'prop-types';
import Photo from "../img/mn.jpg";
import LanguageGraph from "./LanguageGraph";
import SoftSkills from "./SoftSkills";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const useStyles = makeStyles((theme) => ({
  big: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const About = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="absoluteWrapper">
<Container style={{paddingTop:'100px'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Skills" icon={<PersonSharpIcon />} {...a11yProps(0)} />
          <Tab label="Languages" icon={<LanguageSharpIcon />} {...a11yProps(1)} />
          <Tab label="Soft Skills" icon={<PeopleSharpIcon />} {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
      <Portrait />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <LanguageGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SoftSkills />
      </TabPanel>
      </Container>
    </div>
  );
};

export default About;
