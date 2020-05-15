import React from "react";
import { useSpring, animated } from "react-spring";

const Home = (props) => {

    const setStrokeDashArrayInPercent = (strokeDashArray) => {

        const negativePercent= strokeDashArray-100;
        const DashArrayInPercent = ( Math.abs(negativePercent) / 100) * 156;

        return DashArrayInPercent;
      };

  const propsStroke = useSpring({
    value: setStrokeDashArrayInPercent(95),
    from: { value: 156 },
    config: { duration: 2000 },
  });
  const propsNumber = useSpring({
    number: 100,
    from: { number: 0 },
    config: { duration: 2000 },
  });


  return (
    <div>
      <animated.span
        style={{
          position: "absolute",
          width: "100%",
          height: "100px",
          textAlign: "center",
          margin: "0px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {propsNumber.number.interpolate((val) => Math.floor(val))}
      </animated.span>
      <animated.svg
        style={{ width: "100px", height: "100px" }}
        viewBox="0 0 51 51"
        strokeWidth="2.5"
        fill="white"
        stroke="rgb(45, 55, 71)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="156"
        strokeDashoffset={propsStroke.value?propsStroke.value:156}
      >
        <circle
          transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)"
          cx="25.5"
          cy="25.5"
          r="24.5"
        ></circle>
      </animated.svg>
    </div>
  );
};

export default Home;
