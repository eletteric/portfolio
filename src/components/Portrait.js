import React from "react";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";

const Portrait = (props) => {
  const setStrokeDashArrayInPercent = (strokeDashArray) => {
    const negativePercent = strokeDashArray - 100;
    const DashArrayInPercent = (Math.abs(negativePercent) / 100) * 471;

    return DashArrayInPercent;
  };

  const percent = props.intValue;
  const designPercent = props.designValue;
  const portraitUrl = props.portraitUrl;
  const codingPercent = props.codingValue;

  const designStroke = useSpring({
    value: setStrokeDashArrayInPercent(percent),
    from: { value: 471 },
    delay: 50,
    config: { duration: 1000 },
  });

  const propsStroke = useSpring({
    value: setStrokeDashArrayInPercent(designPercent),
    from: { value: 471 },
    delay: 400,
    config: { duration: 1000 },
  });

  const codingStroke = useSpring({
    value: setStrokeDashArrayInPercent(codingPercent),
    delay: 250,
    from: { value: 471 },
    config: { duration: 1250 },
  });

  
    
  const designNumber = useSpring({
    number: Math.abs(50),
    from: { number: 0 },
    config: { duration: 2000 },
  });
  const codingNumber = useSpring({
    number: Math.abs(30),
    from: { number: 0 },
    config: { duration: 2000 },
  });
  const otherNumber = useSpring({
    number: Math.abs(20),
    from: { number: 0 },
    config: { duration: 2000 },
  });

  
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
      </svg><br/><br/><br/>
      <Container style={{display:'flex', alignItems:'center', justifyContent:'center', whiteSpace:'wrap'}}>
      <div style={{width:'100px'}}>
        <p>
      <animated.span style={{display:'inline-block', fontSize:'1.5em'}}>
      {designNumber.number.interpolate(val => Math.floor(val))}
      </animated.span> %</p>
      <p style={{fontSize:'0.8em', borderLeft:'15px solid rgb(0,255,255)', width:'auto', margin:'5px auto', display: 'inline-block', paddingLeft:'5px'}}>Design</p>
      </div>
      <div style={{width:'100px'}}>
        <p>
      <animated.span style={{display:'inline-block', fontSize:'1.5em'}}>
      {codingNumber.number.interpolate(val => Math.floor(val))}
      </animated.span> %</p>
      <p style={{fontSize:'0.8em', borderLeft:'15px solid rgb(255,0,255)', width:'auto', margin:'5px auto', display: 'inline-block', paddingLeft:'5px'}}>Coding</p>
      </div>
      <div style={{width:'100px'}}>
        <p>
      <animated.span style={{display:'inline-block', fontSize:'1.5em'}}>
      {otherNumber.number.interpolate(val => Math.floor(val))}
      </animated.span> %</p>
      <p style={{fontSize:'0.8em', borderLeft:'15px solid rgb(134,135,137)', width:'auto', margin:'5px auto', display: 'inline-block', paddingLeft:'5px'}}>Other</p>
      </div>

      </Container>
    </div>
  );
};

export default Portrait;