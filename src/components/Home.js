import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import Canvas from "./Canvas";
import IntroText from "./IntroText";

const Home = (props) => {


  return (
    <div>
      <Canvas />
    </div>
  );
};

export default Home;
