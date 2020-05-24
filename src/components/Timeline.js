import React, { useContext, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";
import { UserContext } from "../contexts/UserContext";
import { db, auth } from "../services/firebase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Timeline = (props) => {

  const [viewBoxPosition, setViewBoxPosition] = useState(0);
  const [newPosition, setNewPosition] = useState(100);

  /*const [clicked, setClicked] = useState(false)*/

  const moveRight = () => {

    let animator = document.getElementById("frameAnimation");
    animator.beginElement();
    setNewPosition(newPosition+200);
    setViewBoxPosition(newPosition);
    if (newPosition >= 1200) {
        setNewPosition(0);
      }
  };


  const moveLeft = () => {
    let animator = document.getElementById("frameAnimation");
    animator.beginElement();
    setNewPosition(newPosition-200);
    setViewBoxPosition(newPosition);
    if (newPosition <= 0) {
      setNewPosition(1200);
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <svg
          version={1}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "50vh", display: 'block' }}
          viewBox={viewBoxPosition + " -120 240 240"}
        >
          <animate
            attributeName="viewBox"
            id="frameAnimation"
            to={newPosition + " -120 240 240"}
            dur="0.5s"
            fill="freeze"
            repeatCount="1"
            restart="always"
          />
            <rect width="10" height="10" style={{fill:'none',strokeWidth:'3',stroke:'magenta'}} x="0" y="0"/>
          <g fill="none" stroke="grey" strokeWidth="4">
            <path strokeDasharray="1,5" d="M0 0 l1400 0" />
          </g>
        </svg>
      </Grid>
      <Grid item xs={12}>
        <IconButton aria-label="delete" onClick={moveLeft}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={moveRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default Timeline;
