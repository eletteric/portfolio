import React, { useContext, useState, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const SkillSliders = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  const myState = Object.assign([], myself);
  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself

  const skillList = myState[0].skills.map((skillItem) => {
    return (
                  <React.Fragment key={skillItem.id}>
        <Typography id="input-slider1" gutterBottom>
          {skillItem.skill}
        </Typography>
          <Slider
            value={typeof skillItem.score === "number" ? skillItem.score : 0}
            onChange={(event, newValue)=>{handleSliderChange(skillItem.id, newValue)}}
            aria-labelledby="input-slider1"
          />
          <Input
            style={{ width: "42px" }}
            value={skillItem.score}
            margin="dense"
            onChange={(event)=>{handleInputChange(event, skillItem.id)}}
            onBlur={()=>{handleBlur(skillItem.id)}}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider1",
            }}
          />
        </React.Fragment>
    );
  });

 const handleSliderChange = (id, newValue) => {
       let filteredItem =  myState[0].skills.filter(skillItem => {
            return skillItem.id == id;
        })
filteredItem[0].score=newValue;
    setMyself(myState);
  };


  const handleInputChange =(event, id) => {
      let filteredItem =  myState[0].skills.filter(skillItem => {
            return skillItem.id == id;
        })
filteredItem[0].score= event.target.value === "" ? "" : Number(event.target.value);
    setMyself(myState);
  };

  const handleBlur = (id) => {
             let filteredItem =  myState[0].skills.filter(skillItem => {
            return skillItem.id == id;
        })
        let currentScore = filteredItem[0].score;
    if (currentScore < 0) {
      currentScore = 0;
      setMyself(myState);
    } else if (currentScore > 100) {
      currentScore = 100;
      setMyself(myState);
    }
  };

  return (
    <React.Fragment>
        {skillList}
    </React.Fragment>
  );
};

export default SkillSliders;
