import React, { useContext, useRef } from "react";
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { render } from 'react-dom'

import { UserContext } from "../contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import AddSharpIcon from "@material-ui/icons/AddSharp";

const StyledRating = withStyles({
  iconFilled: {
    color: "magenta",
  },
  iconHover: {
    color: "magenta",
  },
})(Rating);






const SoftSkills = () => {
  const { myself, setMyself } = useContext(UserContext);


  const springRef = useRef()
  const aniProps = useSpring({
    ref: springRef,
    delay: 20,
    config:{duration: 250},
    from: { opacity: 0},
    to: { opacity: 1}
  })


  const transRef = useRef()
  const transitions = useTransition(myself[0].softSkills, item => item.skill, {
    ref: transRef,
    unique: true,
    trail: 400 / myself[0].softSkills.length,
    delay: 200,
    config:{duration: 800},
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0}
  })


  useChain([springRef,transRef]);




  return (      
        <animated.div style={aniProps}>
      {transitions.map(({ item, key, props }) => (
<animated.div key={key} style={props}>
  
  <Grid container spacing={0}>
  
  <Grid item xs={6}>
      <Typography
        variant="body2"
        style={{ lineHeight: "1.5em", color: "grey" }}
        component="legend"
        align="right"
      >
        {item.skill}
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Box
        component="fieldset"
        mb={0}
        p={0}
        borderColor="transparent"
        style={{ textAlign: "left" }}
      >
        <StyledRating
        readOnly  
          name="customized-color"
          defaultValue={2}
          value={item.score}
          getLabelText={(value) =>
            `${value} Star${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<AddSharpIcon style={{ height: "20px" }} />}
        />
      </Box>
    </Grid>
    </Grid>

    </animated.div>))}
    </animated.div>
  );
};

export default SoftSkills;