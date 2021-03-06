import React, { useContext, useState, useEffect, Component } from "react";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";
import { UserContext } from "../contexts/UserContext";
import { db, auth } from "../services/firebase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CurriculumContext } from "../contexts/CurriculumContext";


const Timeline = () => {
  const { milestones, setMilestones } = useContext(CurriculumContext);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <ArrowBackIosIcon
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      fontSize="large"
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <ArrowForwardIosIcon
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      fontSize="large"
    />
  );

  const fadeInProps = useSpring({opacity: 1, from: {opacity: 0}})

  const settings = {
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,

    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const milestoneList = milestones.map((milestone) => {

      if(milestone.category === 'Professional experience'){

        return (


      <svg
        version={1}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block", outline: '0' }}
        viewBox="0 -120 240 240"
        key={milestone.id}
      >
        <g fill="none" stroke="grey" strokeWidth="4">
          <path strokeDasharray="1,5" d="M0 0 l1400 0" />
        </g>
        <rect
          width="10"
          height="10"
          style={{ fill: "white", strokeWidth: "3", stroke: "magenta" }}
          x="13"
          y="0"
          transform="rotate(-45 13 0)"
        />
          <text x="40" y="-90" className="period">{milestone.period}</text>
          <text x="40" y="-70" className="function">{milestone.function}</text>
          <text x="40" y="-55" className="organisation">{milestone.organisation}</text>

       <polyline fill="none" stroke="#CCCCCC" strokeWidth="1.5" points="19.836,-14 19.836,-25.338 38.374,-43.876 133.317,-43.876 "/>
       <circle
          cx="19.836"
          cy="-15"
          r="3"
          stroke="white"
          strokeWidth="1"
          fill="grey"
        />
      </svg>
    
    )}
    else {
      return (

<svg
        version={1}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block", outline: '0' }}
        viewBox="0 -120 240 240"
        key={milestone.id}
      >
        <g fill="none" stroke="grey" strokeWidth="4">
          <path strokeDasharray="1,5" d="M0 0 l1400 0" />
        </g>
        <rect
          width="10"
          height="10"
          style={{ fill: "white", strokeWidth: "3", stroke: "cyan" }}
          x="13"
          y="0"
          transform="rotate(-45 13 0)"
        />
          <text x="40" y="70" className="period">{milestone.period}</text>
          <text x="40" y="90" className="function">{milestone.function}</text>
          <text x="40" y="105" className="organisation">{milestone.organisation}</text>

          <polyline fill="none" stroke="#CCCCCC" strokeWidth="1.5" points="19.836,18.669 19.836,31.007 39.831,51.003 
	134.774,51.003 "/>
  <circle
          cx="19.836"
          cy="15"
          r="3"
          stroke="white"
          strokeWidth="1"
          fill="grey"
        />
      </svg>

      )
    };

  });

  return (
    <animated.div style={fadeInProps}>
      <Slider {...settings}>{milestoneList}</Slider>
    </animated.div>
  );
};
export default Timeline;
