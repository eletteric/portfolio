import React, { useContext, useState, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Rating from '@material-ui/lab/Rating';

const SoftSkillRating = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  const myState = Object.assign([], myself);
  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself

  const onChangeSoftSkillRating = (event, id) => {
    let filteredSoftSkill = myState[0].softSkills.filter((item) => {
      return item.id == id;
    });
    filteredSoftSkill[0].score = parseFloat (event.target.value);
    setMyself(myState);
  };

  const softSkillInputs = myState[0].softSkills.map((softSkill) => {
    return (
      <Grid container key={softSkill.id} spacing={1}>
<Grid item xs={4} align="left">
<Typography variant="caption" >
{softSkill.skill}
        </Typography>
</Grid>
<Grid item xs={8} align="right">
    <Rating name={softSkill.skill} defaultValue={2.5} precision={0.5} value={softSkill.score} size="small" color="red"
      onChange={(event) => {onChangeSoftSkillRating(event, softSkill.id)}}
    />
    </Grid>
    </Grid>
    )
  })


  return (

  <React.Fragment>
    {softSkillInputs}</React.Fragment>
  )
}

export default SoftSkillRating;
