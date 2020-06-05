import React, { useContext, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";

const LanguageGraph = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  const languageOne = myself[0].languages[0].language;
  const languageTwo = myself[0].languages[1].language;
  const languageThree = myself[0].languages[2].language;

  const languageOneScore = useSpring({
    value: myself[0].languages[0].spoken,
    from: { value: 0 },
    delay: 250,
    config: { duration: 500 },
  });
  const languageTwoScore = useSpring({
    value: myself[0].languages[1].spoken,
    from: { value: 0 },
    delay: 300,
    config: { duration: 500 },
  });
  const languageThreeScore = useSpring({
    value: myself[0].languages[2].spoken,
    from: { value: 0 },
    delay: 350,
    config: { duration: 500 },
  });

  const writtenOneScore = useSpring({
    value: myself[0].languages[0].written,
    from: { value: 0 },
    delay: 300,
    config: { duration: 500 },
  });
  const writtenTwoScore = useSpring({
    value: myself[0].languages[1].written,
    from: { value: 0 },
    delay: 400,
    config: { duration: 500 },
  });
  const writtenThreeScore = useSpring({
    value: myself[0].languages[2].written,
    from: { value: 0 },
    delay: 500,
    config: { duration: 500 },
  });

  return (
    <React.Fragment>
      {/*<Typography align="left">Languages</Typography>*/}
      <svg
        version="1.1"
        width="100%"
        height="180px"
        viewBox="-50 0 140 55"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* vertical lines */}
        <line x1="0" y1="0" x2="0" y2="55" stroke="grey" strokeWidth="0.5" />
        <line x1="10" y1="0" x2="10" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="20" y1="0" x2="20" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="30" y1="0" x2="30" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="40" y1="0" x2="40" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="50" y1="0" x2="50" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="60" y1="0" x2="60" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="70" y1="0" x2="70" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="80" y1="0" x2="80" y2="55" stroke="grey" strokeWidth="0.2" />
        <line x1="90" y1="0" x2="90" y2="55" stroke="grey" strokeWidth="0.2" />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="55"
          stroke="grey"
          strokeWidth="0.2"
        />

        <text
          x="-8"
          y="15"
          fontSize="6"
          writingMode="lr"
          textAnchor="end"
          fill=" grey"
        >
          {languageOne}
        </text>
        <animated.line
          x1="0"
          y1="10"
          x2={languageOneScore.value ? languageOneScore.value : 0}
          y2="10"
          stroke="cyan"
          strokeWidth="2"
        />
        <animated.line
          x1="0"
          y1="15"
          x2={writtenOneScore.value ? writtenOneScore.value : 0}
          y2="15"
          stroke="grey"
          strokeWidth="2"
        />

        <text
          x="-8"
          y="30"
          fontSize="6"
          writingMode="lr"
          textAnchor="end"
          fill="grey"
        >
          {languageTwo}
        </text>
        <animated.line
          x1="0"
          y1="25"
          x2={languageTwoScore.value ? languageTwoScore.value : 0}
          y2="25"
          stroke="cyan"
          strokeWidth="2"
        />
        <animated.line
          x1="0"
          y1="30"
          x2={writtenTwoScore.value ? writtenTwoScore.value : 0}
          y2="30"
          stroke="grey"
          strokeWidth="2"
        />

        <text
          x="-8"
          y="45"
          fontSize="6"
          writingMode="lr"
          textAnchor="end"
          fill=" grey"
        >
          {languageThree}
        </text>
        <animated.line
          x1="0"
          y1="40"
          x2={languageThreeScore.value ? languageThreeScore.value : 0}
          y2="40"
          stroke="cyan"
          strokeWidth="2"
        />
        <animated.line
          x1="0"
          y1="45"
          x2={writtenThreeScore.value ? writtenThreeScore.value : 0}
          y2="45"
          stroke="grey"
          strokeWidth="2"
        />
      </svg>
    </React.Fragment>
  );
};

export default LanguageGraph;