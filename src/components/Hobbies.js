import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import WordCloud from "react-d3-cloud";
import randomColor from "randomcolor";
import ReactWordcloud from "react-wordcloud";
import Container from "@material-ui/core/Container";

var wordData = [
  { text: "MTB", value: 5000 },
  { text: "Snowboarding", value: 1000 },
  { text: "Electronical engineering", value: 2000 },
  { text: "3D-printing", value: 6000 },
  { text: "Drawing", value: 2000 },
  { text: "Movies", value: 1500 },
  { text: "Chess", value: 1000 },
  { text: "Science", value: 3000 }
];

const options = {
  colors: ["#ff00ff", "#00ffff", "#808080", "#d3d3d3", "#ff00ff", "#00ffff"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [12, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 2,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

function Hobbies() {
  return (
    <Container maxWidth="md" style={{height: 320, width: "100%", margin: '0px auto'}}>
        <ReactWordcloud options={options} words={wordData} />
    </Container>
  );
}

export default Hobbies;
