import React, { useContext, useState, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const LanguageSliders = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  const myState = Object.assign([], myself);
  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself




  const onChangeLanguageName = (event, id) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.id == id;
    });
    filteredItem[0].language = event.target.value;
    setMyself(myState);
  };


  const languageList = myState[0].languages.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <Grid container spacing={0}>
        <Grid item xs={12} align="left">
        <TextField
        id="{item.id}"
                  required
                  fullWidth
                  size="small"
                  margin="normal"
                  value={item.language}
                  onChange={(event) => {
                    onChangeLanguageName(event, item.id);
                  }}
                    />
        </Grid>
        <Grid item xs={12} align="left" style={{marginBottom:'-10px'}}>
        <Typography variant="caption" >
          spoken
        </Typography>
        </Grid>
        <Grid item xs={9}>
        <Slider
          value={typeof item.spoken === "number" ? item.spoken : 0}
          onChange={(event, newValue) => {
            handleSliderChange(item.language, newValue);
          }}
          aria-labelledby="input-slider1"
        /></Grid>
                <Grid item xs={3} align="right">
        <Input
          style={{ width: "48px" }}
          value={item.spoken}
          margin="dense"
          onChange={(event) => {
            handleInputChange(event, item.language);
          }}
          onBlur={() => {
            handleBlur(item.language);
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
        <Grid item xs={12} align="left" style={{marginBottom:'-10px'}}> 
        <Typography variant="caption" >
          written
        </Typography>
        </Grid>
        <Grid item xs={9}>
        <Slider
          value={typeof item.written === "number" ? item.written : 0}
          onChange={(event, newValue) => {
            handleSliderChangeWritten(item.language, newValue);
          }}
          aria-labelledby="input-slider1"
        />
        </Grid>
        <Grid item xs={3} align="right">
        <Input
          style={{ width: "48px" }}
          value={item.written}
          margin="dense"
          onChange={(event) => {
            handleInputChangeWritten(event, item.language);
          }}
          onBlur={() => {
            handleBlurWritten(item.language);
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
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
    });
    filteredItem[0].spoken = newValue;
    setMyself(myState);
  };

  const handleInputChange = (event, id) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
    });
    filteredItem[0].spoken =
      event.target.value === "" ? "" : Number(event.target.value);
    setMyself(myState);
  };

  const handleBlur = (id) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
    });
    let currentScore = filteredItem[0].spoken;
    if (currentScore < 0) {
      currentScore = 0;
      setMyself(myState);
    } else if (currentScore > 100) {
      currentScore = 100;
      setMyself(myState);
    }
  };

  const handleSliderChangeWritten = (id, newValue) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
    });
    filteredItem[0].written = newValue;
    setMyself(myState);
  };

  const handleInputChangeWritten = (event, id) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
    });
    filteredItem[0].written =
      event.target.value === "" ? "" : Number(event.target.value);
    setMyself(myState);
  };

  const handleBlurWritten = (id) => {
    let filteredItem = myState[0].languages.filter((item) => {
      return item.language == id;
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

  return <React.Fragment>{languageList}</React.Fragment>;
};

export default LanguageSliders;
