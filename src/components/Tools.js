import React from "react";
import { useSpring, animated } from "react-spring";

const Tools = (props) => {
  const setStrokeDashArrayInPercent = (strokeDashArray) => {
    const negativePercent = strokeDashArray - 100;
    const DashArrayInPercent = (Math.abs(negativePercent) / 100) * 156;

    return DashArrayInPercent;
  };

  const percent = 80;

  const propsStroke = useSpring({
    value: setStrokeDashArrayInPercent(percent),
    from: { value: 156 },
    config: { duration: 500 },
  });
  const propsNumber = useSpring({
    number: Math.abs(percent),
    from: { number: 0 },
    config: { duration: 500 },
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
          fontSize: "1.2em",

          justifyContent: "center",
        }}
      >
        {propsNumber.number.interpolate((val) => Math.floor(val))}
      </animated.span>
      <span
        className="percentage"
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
        <p
          style={{ paddingLeft: "35px", lineHeight: "20px", fontSize: "0.8em" }}
        >
          %
        </p>
      </span>
      <animated.svg
        style={{ width: "100px", height: "100px" }}
        viewBox="-5 -5 60 60"
        strokeWidth="4.5"
        fill="white"
        stroke="rgb(255, 0, 255)"
        strokeLinecap="square"
        strokeLinejoin="square"
        strokeDasharray="156"
        strokeDashoffset={propsStroke.value ? propsStroke.value : 156}
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

export default Tools;
