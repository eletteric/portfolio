import React from "react";
import { useSpring, animated } from "react-spring";

const Portrait = (props) => {
  const setStrokeDashArrayInPercent = (strokeDashArray) => {
    const negativePercent = strokeDashArray - 100;
    const DashArrayInPercent = (Math.abs(negativePercent) / 100) * 471;

    return DashArrayInPercent;
  };

  const percent = props.intValue;
  const designPercent = props.designValue;
  const portraitUrl = props.portraitUrl;

  const designStroke = useSpring({
    value: setStrokeDashArrayInPercent(percent),
    from: { value: 471 },
    config: { duration: 2000 },
  });

  const propsStroke = useSpring({
    value: setStrokeDashArrayInPercent(designPercent),
    from: { value: 471 },
    config: { duration: 3000, timeOut: 1000 },
  });

  {
    /*
  const propsNumber = useSpring({
    number: Math.abs(percent),
    from: { number: 0 },
    config: { duration: 3000 },
  });
*/
  }
  return (
    <div>
      <svg style={{ width: "200px", height: "200px" }} viewBox="0 0 160 160">
        <defs>
          <pattern
            id="image"
            x="0%"
            y="0%"
            height="100%"
            width="100%"
            viewBox="0 0 160 160"
          >
            <image
              x="0%"
              y="0%"
              width="150"
              height="150"
              xlinkHref={portraitUrl}
              transform="rotate(-90) translate(-150,5)"
            ></image>
          </pattern>
        </defs>

        <animated.circle
          strokeWidth="5.5"
          stroke="rgb(0, 255, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          strokeDasharray="471"
          strokeDashoffset={propsStroke.value ? propsStroke.value : 471}
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="75"
          fill="url(#image)"
        />
        <animated.circle
          strokeWidth="10.5"
          stroke="rgb(255, 0, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          strokeDasharray="471"
          strokeDashoffset={designStroke.value ? designStroke.value : 471}
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="75"
          fill="transparent"
        />
        <animated.circle
          strokeWidth="5.5"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="70"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Portrait;
