import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { CurriculumContext } from "../contexts/CurriculumContext";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { db } from "../services/firebase";

const AddMilestone = (props) => {
  const { milestones, setMilestones } = useContext(CurriculumContext);

  const [newMilestone, setNewMilestone] = useState({
    category: "Professional experience",
    description: "",
    function: "",
    organisation: "",
    period: "",
    id: "wgsdg",
    createdAt: new Date()
  });

  const onPeriodChange = (event) => {
    setNewMilestone({ ...newMilestone, period: event.target.value });
  };
  const onOrganisationChange = (event) => {
    setNewMilestone({ ...newMilestone, organisation: event.target.value });
  };
  const onFunctionChange = (event) => {
    setNewMilestone({ ...newMilestone, function: event.target.value });
  };
  const onDescriptionChange = (event) => {
    setNewMilestone({ ...newMilestone, description: event.target.value });
  };
  const onCategoryChange = (event) => {
    setNewMilestone({ ...newMilestone, category: event.target.value });
  };
  const onAddMilestone = (event) => {
    db.collection("milestones").add(newMilestone);
    const fetchData = async () => {
        const data = await db.collection("milestones").orderBy('createdAt', 'desc').get();
        setMilestones(data.docs.map(doc => ({...doc.data(), id: doc.id}) ));
      };
      fetchData();
  };

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item xs={4} align="left">
          <Grid container spacing={1}>
            <Grid item xs={12} align="center">
              <TextField
                id="period"
                required
                size="small"
                label="Period"
                margin="none"
                value={newMilestone.period}
                onChange={(event) => {
                  onPeriodChange(event);
                }}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField
                id="organisation"
                required
                size="small"
                label="Organisation"
                margin="none"
                value={newMilestone.organisation}
                onChange={(event) => {
                  onOrganisationChange(event);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} align="left">
          <Grid container spacing={2}>
            <Grid item xs={12} align="center">
              <TextField
                id="function"
                required
                label="Function"
                margin="none"
                fullWidth
                value={newMilestone.function}
                onChange={(event) => {
                  onFunctionChange(event);
                }}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                fullWidth
                rows={3}
                defaultValue="please describe this milestone"
                onChange={(event) => {
                  onDescriptionChange(event);
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
                  aria-label="Categories"
                  name="categories"
                  value={newMilestone.category}
                  onChange={(event) => {
                    onCategoryChange(event);
                  }}
                  style={{ fontSize: "1em" }}
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
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(event) => {
                  onAddMilestone(event);
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddMilestone;
