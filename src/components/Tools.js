import React, { useContext } from "react";
import ToolDonut from "./ToolDonut";
import ReactIcon from "../img/react-icon.svg";

import { useSpring, animated } from "react-spring";
import { ToolContext } from "../contexts/ToolContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const Tools = (props) => {

  const { tools, setTools } = useContext(ToolContext);


  const designList = tools.map((tool) => {
    if(tool.category === 'Design and Layout'){
    return (
      <React.Fragment key={tool.name}>
        <ToolDonut percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="magenta"/>
      </React.Fragment>
    )
  }
});

const codingList = tools.map((tool) => {
  if(tool.category === 'Front-end development'){
  return (
    <React.Fragment key={tool.name}>
        <ToolDonut percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="cyan"/>
    </React.Fragment>
  )
}
});

const miscellaneousList = tools.map((tool) => {
  if(tool.category === 'Miscellaneous'){
  return (
    <React.Fragment key={tool.name}>
      <ToolDonut percent={tool.percentage} toolPath={tool.iconUrl} toolID={tool.id} toolName={tool.name} categColor="grey"/>
    </React.Fragment>
  )
}
});

  return (
    <Container maxWidth="md" style={{paddingTop: "20px"}}>
    <Grid container spacing={1}>
       <Grid item xs={12} md={4} align="left">
              <Grid container spacing={1}>
              <Grid item xs={12} align="left">
              <Typography variant="h6">Design &amp; layout</Typography>
              </Grid>
              <Grid item xs={12} align="left">
              {designList}
              </Grid>
          </Grid>
        </Grid> 
       <Grid item xs={12} md={4} align="left">
              <Grid container spacing={1}>
              <Grid item xs={12} align="left">
              <Typography variant="h6">Front-end Development</Typography>
              </Grid>
              <Grid item xs={12} align="left">
              {codingList}
              </Grid>
          </Grid>
        </Grid> 
       <Grid item xs={12} md={4} align="left">
              <Grid container spacing={1}>
              <Grid item xs={12} align="left">
              <Typography variant="h6">Miscellaneous</Typography>
              </Grid>
              <Grid item xs={12} align="left">
              {miscellaneousList}
              </Grid>
          </Grid>
        </Grid> 
    </Grid>
</Container>
  );
};

export default Tools;
