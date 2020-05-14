import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import Canvas from "./Canvas";
import { findByLabelText } from "@testing-library/react";
import IntroText from "./IntroText";

const Home = (props) => {

const[sitetitle, setSiteTitle]=useState('SiteTitle');

  return (
    <div className="absoluteWrapper" >
      <IntroText/>
      <Canvas />
    </div>
  );
};

export default Home;
//style={{display:'flex', justifyItems:'center', alignItems:'center', textAlign:'center'}}