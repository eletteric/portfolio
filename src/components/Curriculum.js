import React, { useContext, useState, useEffect, Component } from "react";
import "../styles.css";
import { WorkContext } from "../contexts/WorkContext";
import { Grid } from "mauerwerk";
import Container from "@material-ui/core/Container";
import Timeline from "./Timeline";

const Curriculum = () => {

  return (
    <div className="absoluteWrapper">
<h1 style={{ marginTop: "85px" }}>Curriculum</h1>
<p>Lorem Ipsum</p>
<Container>
<Timeline/>
</Container>
</div>
  )
}

export default Curriculum;