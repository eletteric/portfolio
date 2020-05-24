import React, { useContext, useState, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const SkillSliders = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  const myState = Object.assign([], myself);
  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself

  const onChangeSkillName = (event, id) => {
    let filteredItem = myState[0].skills.filter((item) => {
      return item.id == id;
    });
    filteredItem[0].skill = event.target.value;
    setMyself(myState);
  };




  const skillList = myState[0].skills.map((skillItem) => {
    return (
      <React.Fragment key={skillItem.id}>
        <Grid container spacing={0}>
        <Grid item xs={12}>
        <TextField
        margin="none"
        id="{skillItem.id}"
                  required fullWidth
                  size="small"
                  margin="normal"
                  value={skillItem.skill}
                  onChange={(event) => {
                    onChangeSkillName(event, skillItem.id);
                  }}
                    />
        </Grid>
        <Grid item xs={9}>
        <Slider
          value={typeof skillItem.score === "number" ? skillItem.score : 0}
          onChange={(event, newValue) => {
            handleSliderChange(skillItem.id, newValue);
          }}
          aria-labelledby="input-slider1"
        />
        </Grid>
        <Grid item xs={3} align="right">
        <Input
          style={{ width: "48px" }}
          value={skillItem.score}
          margin="dense"
          onChange={(event) => {
            handleInputChange(event, skillItem.id);
          }}
          onBlur={() => {
            handleBlur(skillItem.id);
          }}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider1",
          }}
        />
        </Grid>
        </Grid>
      </React.Fragment>
    );
  });

  const handleSliderChange = (id, newValue) => {
    let filteredItem = myState[0].skills.filter((skillItem) => {
      return skillItem.id == id;
    });
    filteredItem[0].score = newValue;
    setMyself(myState);
  };

  const handleInputChange = (event, id) => {
    let filteredItem = myState[0].skills.filter((skillItem) => {
      return skillItem.id == id;
    });
    filteredItem[0].score =
      event.target.value === "" ? "" : Number(event.target.value);
    setMyself(myState);
  };

  const handleBlur = (id) => {
    let filteredItem = myState[0].skills.filter((skillItem) => {
      return skillItem.id == id;
    });
    let currentScore = filteredItem[0].score;
    if (currentScore < 0) {
      currentScore = 0;
      setMyself(myState);
    } else if (currentScore > 100) {
      currentScore = 100;
      setMyself(myState);
    }
  };

  return <React.Fragment>{skillList}</React.Fragment>;
};

export default SkillSliders;
