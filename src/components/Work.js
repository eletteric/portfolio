import React, { useContext, useState, useEffect, Component } from "react";
import "../styles.css";
import { WorkContext } from "../contexts/WorkContext";
import { Grid } from "mauerwerk";
import Container from "@material-ui/core/Container";

const Work = () => {
  const { works, addWork, setWorks } = useContext(WorkContext);

  return (
    <div className="absoluteWrapper">
      <Container style={{padding:'95px 50px'}}>
      <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={works}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={(d) => d.name}
        // Can be a fixed value or an individual data accessor
        heights={(d) => d.height}
        // Number of columns
        columns={3}
      >
        {(works, maximized, toggle) => (
          <div
            className="cell"
            style={{ backgroundImage: works.css }}
            onClick={toggle}
          >
            {maximized && (
              <div className="details">
                <div className="circle" style={{ background: works.css }} />
                <h1>{works.name}</h1>
                <p>{works.description}</p>
              </div>
            )}
            {!maximized && <div className="default">{works.name}</div>}
          </div>
        )}
      </Grid>
      </Container>
    </div>
  );
};

export default Work;