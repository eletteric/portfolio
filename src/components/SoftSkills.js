import React, { useContext, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";
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

const SoftSkills = (props) => {
  const { myself, setMyself } = useContext(UserContext);

  return (
    <React.Fragment>
      <Typography component="legend" align="left">
        Soft skills
      </Typography>

      <Grid container spacing={1}>
        {" "}
        <Grid item xs={6}>
          <Typography
            variant="body2"
            style={{ lineHeight: "1.5em", color: "grey" }}
            component="legend"
            align="right"
          >
            Trustworthy
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
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<AddSharpIcon style={{ height: "20px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            style={{ lineHeight: "1.5em", color: "grey" }}
            component="legend"
            align="right"
          >
            Responsible
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
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<AddSharpIcon style={{ height: "20px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            style={{ lineHeight: "1.5em", color: "grey" }}
            component="legend"
            align="right"
          >
            Team Player
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
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<AddSharpIcon style={{ height: "20px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            style={{ lineHeight: "1.5em", color: "grey", fontSize: "1em" }}
            component="legend"
            align="right"
          >
            Flexibility
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
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<AddSharpIcon style={{ height: "20px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            style={{ lineHeight: "1.5em", color: "grey" }}
            component="legend"
            align="right"
          >
            Leadership
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
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<AddSharpIcon style={{ height: "20px" }} />}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SoftSkills;