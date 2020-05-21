import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { useTransition, animated } from "react-spring";
import Canvas from "./Canvas";
import { findByLabelText } from "@testing-library/react";
import IntroText from "./IntroText";
import { UserContext } from "../contexts/UserContext";

const Home = (props) => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <div className="absoluteWrapper">
      <IntroText />
      <Canvas />
    </div>
  );
};

export default Home;