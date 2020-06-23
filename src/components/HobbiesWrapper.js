import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import WordCloud from "react-d3-cloud";
import randomColor from "randomcolor";
import ReactWordcloud from "react-wordcloud";
import Container from "@material-ui/core/Container";
import Hobbies from "./Hobbies";


function HobbiesWrapper() {
const [show, setShow] = useState(false);

useEffect(() => {
    setShow(true)
  }, []); 

  return (
    show && <Hobbies/>
  );
}

export default HobbiesWrapper;
