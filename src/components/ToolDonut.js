import React from "react";
import { useSpring, animated } from "react-spring";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const ToolDonut = (props) => {
  const setStrokeDashArrayInPercent = (strokeDashArray) => {
    const negativePercent = strokeDashArray - 100;
    const DashArrayInPercent = (Math.abs(negativePercent) / 100) * 105;

    return DashArrayInPercent;
  };

  const percent = props.percent;
  const toolPath = props.toolPath;
  const toolID = props.toolID;
  const categColor = props.categColor;
  const toolName = props.toolName;

  const resetAnimation = props.resetAnimation;


  const propsStroke = useSpring({
    value: setStrokeDashArrayInPercent(percent),
    from: { value: 105 },
    config: { duration: 500 },
    reset: {resetAnimation},
    reverse:false
  });
  const propsNumber = useSpring({
    number: Math.abs(percent),
    from: { number: 0 },
    config: { duration: 500 },
  });

  return (
    <div style={{ display: "inline-block", position: "relative", float:"left", marginBottom:"5px"  }}>
            <Tooltip 
            PopperProps={{
                popperOptions: {
                  modifiers: {
                    offset: {
                      enabled: true,
                      offset: '0px, -25px',
                    },
                  },
                },
              }}
            TransitionComponent={Zoom} title={toolName} disableFocusListener placement="top">
      <svg
        style={{ width: "80px", height: "80px" }}
        viewBox="-5 -5 50 50"
      >
                  <defs>
          <pattern
            id={toolID}
            x="0%"
            y="0%"
            height="100%"
            width="100%"
            viewBox="0 0 100 100"
          >
            <image
              x="0%"
              y="0%"
              width="70"
              height="70"
              xlinkHref={toolPath}
              transform="rotate(-90) translate(-85,15)"
            ></image>
          </pattern>
        </defs>
        <circle
            strokeWidth="0.5"
            fill="white"
            stroke="#BCBEC0"
            strokeLinecap="square"
            strokeLinejoin="square"
            cx="18"
            cy="18"
            r="17"
        ></circle>
        <animated.circle
            strokeWidth="2.5"
            stroke={categColor}
            strokeLinecap="square"
            strokeLinejoin="square"
            strokeDasharray="105"
            strokeDashoffset={propsStroke.value ? propsStroke.value : 105}
            fill={"url(#"+ toolID + ")"}
            transform="translate(18, 18) rotate(-270.000000) translate(-18, -18)"
            cx="18"
            cy="18"
            r="17"
        ></animated.circle>
 
      </svg>
      </Tooltip>
    </div>  
  );
};

export default ToolDonut;
