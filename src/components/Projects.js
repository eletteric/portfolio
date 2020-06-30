import React, { useState, useCallback, useContext, useRef } from "react";
import { WorkContext } from "../contexts/WorkContext";
import Carousel, { Modal, ModalGateway } from "react-images";
import Grid from "@material-ui/core/Grid";

import WebDesign from "./WebDesign";
import LogoDesign from "./LogoDesign";
import Other from "./Other";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";

import CodeSharpIcon from "@material-ui/icons/CodeSharp";
import PaletteSharpIcon from "@material-ui/icons/PaletteSharp";
import SquareFootSharpIcon from "@material-ui/icons/SquareFootSharp";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
/* @jsx glam */
import glam from "glam";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WebIcon from '@material-ui/icons/Web';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import GestureIcon from '@material-ui/icons/Gesture';
import BusinessIcon from '@material-ui/icons/Business';

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
      {value === index && <Box p={3}>{children}</Box>}
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  big: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function Projects(props) {
  const { works, addWork, setWorks } = useContext(WorkContext);

  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="absoluteWrapper">
      <Container style={{ padding: "0px", paddingTop: "60px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab
            label="Webdesign"
            {...a11yProps(0)}
          />
          <Tab label="Coding" {...a11yProps(1)} />
          <Tab label="Other" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <WebDesign />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LogoDesign />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Other />
        </TabPanel>
      </Container>
    </div>
  );
}
export default Projects;
