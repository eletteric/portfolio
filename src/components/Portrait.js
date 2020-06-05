import React, { useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";
import { UserContext } from "../contexts/UserContext";
import { db, auth } from "../services/firebase";
import Typography from "@material-ui/core/Typography";

const Portrait = (props) => {
  const {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    profileImageUrl,
    myself,
    setMyself,
  } = useContext(UserContext);

  const skillOne = myself[0].skills[0].score;
  const skillTwo = myself[0].skills[1].score;
  const skillThree = myself[0].skills[2].score;
  // percentage

  const totalAmount = skillOne + skillTwo + skillThree;

  function percentageOfPercentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  const uno = percentageOfPercentage(skillOne, totalAmount);
  const dos = percentageOfPercentage(skillTwo, totalAmount);
  const tres = percentageOfPercentage(skillThree, totalAmount);
  // percentage to percentage total amount

  const calcPercentage = (per) => {
    return (471 / 100) * per;
  };

  const un = calcPercentage(uno);
  const deux = calcPercentage(dos);
  const trois = calcPercentage(tres);

  const one = un;
  const two = deux + un;
  const three = trois + deux + un;

  const een = Math.abs(one - 471);
  const twee = Math.abs(two - 471);
  const drie = Math.abs(three - 471);

  console.log(un, deux, trois);

  const designStroke = useSpring({
    value: een,
    from: { value: 471 },
    delay: 50,
    config: { duration: 1000 },
  });

  const propsStroke = useSpring({
    value: twee,
    from: { value: 471 },
    delay: 400,
    config: { duration: 1000 },
  });

  const codingStroke = useSpring({
    value: drie,
    delay: 250,
    from: { value: 471 },
    config: { duration: 1250 },
  });

  const designNumber = useSpring({
    number: myself[0].skills[0].score,
    from: { number: 0 },
    config: { duration: 2000 },
  });
  const codingNumber = useSpring({
    number: myself[0].skills[1].score,
    from: { number: 0 },
    config: { duration: 2000 },
  });
  const otherNumber = useSpring({
    number: myself[0].skills[2].score,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  const picturePath = myself[0].picture.path;

  return (
    <React.Fragment>
      <svg style={{ width: "250px", height: "250px" }} viewBox="0 0 160 160">
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
              xlinkHref={picturePath}
              transform="rotate(-90) translate(-150,5)"
            ></image>
          </pattern>
        </defs>
        <animated.circle
          strokeWidth="3"
          stroke="rgb(134, 136, 138)"
          strokeLinecap="square"
          strokeLinejoin="square"
          strokeDasharray="471"
          strokeDashoffset={codingStroke.value ? codingStroke.value : 471}
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="70"
          fill="white"
        />
        <animated.circle
          strokeWidth="6.5"
          stroke="rgb(0, 255, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          strokeDasharray="471"
          strokeDashoffset={propsStroke.value ? propsStroke.value : 471}
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="70"
          fill="url(#image)"
        />
        <animated.circle
          strokeWidth="14"
          stroke="rgb(255, 0, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          strokeDasharray="471"
          strokeDashoffset={designStroke.value ? designStroke.value : 471}
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="70"
          fill="transparent"
        />
        <animated.circle
          strokeWidth="7.5"
          stroke="rgb(255, 255, 255)"
          strokeLinecap="square"
          strokeLinejoin="square"
          transform="rotate(-270.000000)"
          cx="80"
          cy="-80"
          r="66"
          fill="transparent"
        />
      </svg>
      <br />
      <Typography variant="caption">
        {myself[0].name.first} {myself[0].name.last}
      </Typography>
      <br />
      <br />
      <br />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "wrap",
        }}
      >
        <div style={{ width: "100px" }}>
          <div>
            <animated.span
              style={{ display: "inline-block", fontSize: "1.5em" }}
            >
              {designNumber.number.interpolate((val) => Math.floor(val))}
            </animated.span>{" "}
            %
          </div>
          <div
            style={{
              fontSize: "0.8em",
              borderLeft: "15px solid rgb(255,0,255)",

              width: "auto",
              margin: "5px auto",
              display: "inline-block",
              paddingLeft: "5px",
            }}
          >
            {myself[0].skills[0].skill}
          </div>
        </div>
        <div style={{ width: "100px" }}>
          <div>
            <animated.span
              style={{ display: "inline-block", fontSize: "1.5em" }}
            >
              {codingNumber.number.interpolate((val) => Math.floor(val))}
            </animated.span>{" "}
            %
          </div>
          <div
            style={{
              fontSize: "0.8em",
              borderLeft: "15px solid rgb(0,255,255)",
              width: "auto",
              margin: "5px auto",
              display: "inline-block",
              paddingLeft: "5px",
            }}
          >
                        {myself[0].skills[1].skill}
          </div>
        </div>
        <div style={{ width: "100px" }}>
          <div>
            <animated.span
              style={{ display: "inline-block", fontSize: "1.5em" }}
            >
              {otherNumber.number.interpolate((val) => Math.floor(val))}
            </animated.span>{" "}
            %
          </div>
          <div
            style={{
              fontSize: "0.8em",
              borderLeft: "15px solid rgb(134,135,137)",
              width: "auto",
              margin: "5px auto",
              display: "inline-block",
              paddingLeft: "5px",
            }}
          >
                        {myself[0].skills[2].skill}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Portrait;