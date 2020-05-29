import React, { useContext, useState, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { CurriculumContext } from "../contexts/CurriculumContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddMilestone from "./AddMilestone";

import { db, auth } from "../services/firebase";


const MilestoneAdmin = (props) => {


  const { milestones, setMilestones } = useContext(CurriculumContext);


  const myState = Object.assign([], milestones);
  // myself is an array of 1 object (UserContext State), declare the array myState and assign the array myself


  const onUpdate = (id) => {

    setMilestones(myState);
    let filteredItem = myState.filter((item) => {
      return item.id == id;
    });

    db.collection('milestones').doc(id).set({...filteredItem[0]});
    setMilestones(myState);

    }

  const onDelete = (id) => {

    let filteredItem = myState.filter((item) => {
      return item.id == id;
    });
    var index = myState.indexOf(filteredItem[0]);
    if(index !== -1)
    {
      myState.splice(index,1);
    }
    setMilestones(myState);

    db.collection('milestones').doc(id).delete();
    }

    const onChangePeriod = (event, id) => {
      let filteredItem = myState.filter((item) => {
        return item.id == id;
      });
      filteredItem[0].period = event.target.value;
      setMilestones(myState);
    };

    const onChangeOrganisation = (event, id) => {
      let filteredItem = myState.filter((item) => {
        return item.id == id;
      });
      filteredItem[0].organisation = event.target.value;
      setMilestones(myState);
    };
    const onChangeFunction = (event, id) => {
      let filteredItem = myState.filter((item) => {
        return item.id == id;
      });
      filteredItem[0].function = event.target.value;
      setMilestones(myState);
    };
    const onChangeDescription = (event, id) => {
      let filteredItem = myState.filter((item) => {
        return item.id == id;
      });
      filteredItem[0].description = event.target.value;
      setMilestones(myState);
    };

    const onChangeCategory = (event, id) => {
      let filteredItem = myState.filter((item) => {
        return item.id == id;
      });
      filteredItem[0].category = event.target.value;
      setMilestones(myState);
    };
    
    return (
      <React.Fragment>
<AddMilestone/>
     {milestones.map((milestone) => (

      <React.Fragment key={milestone.id}>
        <Grid container spacing={5}>
          <Grid item xs={4} align="left">
            <Grid container spacing={1}>
              <Grid item xs={12} align="center">
                <TextField
                  id="{milestone.period}"
                  required
                  size="small"
                  label="Period"
                  margin="none"
                  value={milestone.period}
                  onChange={(event) => {
                    onChangePeriod(event, milestone.id);
                  }}
                />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField
                  id="{milestone.organisation}"
                  required
                  size="small"
                  label="Organisation"
                  margin="none"
                  value={milestone.organisation}
                  onChange={(event) => {
                    onChangeOrganisation(event, milestone.id);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} align="left">
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <TextField
                  id="{milestone.function}"
                  required
                  label="Function"
                  margin="none"
                  fullWidth
                  value={milestone.function}
                  onChange={(event) => {
                    onChangeFunction(event, milestone.id);
                  }}
                />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField
                  id="outlined-multiline-static"
                  label="description"
                  multiline
                  fullWidth
                  value={milestone.description}
                  rows={3}
                  onChange={(event) => {
                    onChangeDescription(event, milestone.id);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} align="left">
            <Grid container spacing={2}>
              <Grid item xs={12} align="left">
                <FormControl component="fieldset">
                  <FormLabel component="legend" style={{ fontSize: "0.8em" }}>
                    Category
                  </FormLabel>
                  <RadioGroup
                    aria-label="categories"
                    name="categories"
                    value={milestone.category}
                    onChange={(event) => {
                      onChangeCategory(event, milestone.id);
                    }}                    style={{ fontSize: "1em" }}
                  >
                    <FormControlLabel
                      value="Education and internship"
                      control={<Radio color="primary" size="small" />}
                      label="Education and internship"
                      style={{ marginBottom: "-10px" }}
                    />
                    <FormControlLabel
                      value="Professional experience"
                      control={<Radio color="primary" size="small" />}
                      label="Professional experience"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} align="center" align="left">
                <Button variant="contained" color="primary" size="small" onClick={() => {
                    onUpdate(milestone.id);
                  }}>
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    onDelete(milestone.id);
                  }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>))}
      </React.Fragment>
      
    )
      

}

export default MilestoneAdmin;