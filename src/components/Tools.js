import React, { useContext } from "react";
import ToolDonut from "./ToolDonut";
import ReactIcon from "../img/react-icon.svg";

import { useSpring, animated } from "react-spring";
import { ToolContext } from "../contexts/ToolContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.99%',
    flexShrink: 0,
    margin: '0px !important'

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    flexDirection: "row",
    flexWrap:"wrap",
    padding:'0px 16px 0px 16px'
  },
  summary: {
    margin: '0px'
  }
}));

const Tools = (props) => {

  const { tools, setTools } = useContext(ToolContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const [resetAnimation, setResetAnimation] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setResetAnimation(isExpanded ? panel : false);
  };



  const designList = tools.map((tool) => {
    if(tool.category === 'Design and Layout'){
    return (
      <React.Fragment key={tool.name}>
        <ToolDonut resetAnimation={resetAnimation} percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="magenta"/>
      </React.Fragment>
    )
  }
});

const codingList = tools.map((tool) => {
  if(tool.category === 'Front-end development'){
  return (
    <React.Fragment key={tool.name}>
        <ToolDonut resetAnimation={resetAnimation} percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="cyan"/>
    </React.Fragment>
  )
}
});

const miscellaneousList = tools.map((tool) => {
  if(tool.category === 'Miscellaneous'){
  return (
    <React.Fragment key={tool.name}>
      <ToolDonut resetAnimation={resetAnimation} percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="grey"/>
    </React.Fragment>
  )
}
});

  return (


<Container maxWidth="md" style={{paddingTop: "20px"}}>

<div className={classes.root}>
      <ExpansionPanel defaultExpanded={true} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.summary}
        >
          <Typography className={classes.heading}>Design &amp; layout</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        {designList}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Front-end development</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        {codingList}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Miscellaneous</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
        {miscellaneousList}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </Container>

  );
};

export default Tools;
