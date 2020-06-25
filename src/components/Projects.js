import React, { useState, useCallback, useContext, useRef } from "react";
import { WorkContext } from "../contexts/WorkContext";
import Carousel, { Modal, ModalGateway } from "react-images";
import Grid from "@material-ui/core/Grid";

import WebDesign from './WebDesign'
import LogoDesign from './LogoDesign'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
/* @jsx glam */
import glam from 'glam'

function Projects() {

  const { works, addWork, setWorks } = useContext(WorkContext);
  
  const springRef = useRef()
  const aniProps = useSpring({
    ref: springRef,
    delay: 1,
    config: config.stiff,
    from: { opacity: 0, size: '20%',},
    to: { opacity: 1, size: '100%',}
  })

  const transRef = useRef()
  const transitions = useTransition(works, item => item.title, {
    ref: transRef,
    unique: true,
    trail: 1000 / works.length,
    delay: 1,
    config:{duration: 200},
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain([springRef,transRef]);

const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
const [selectedIndex, setSelectedIndex] = useState(0);
 
const toggleLightbox = (index) => {
  setLightboxIsOpen(true);
  setSelectedIndex(index);
}

  return (
    <div style={{paddingTop:'50px'}} className="absoluteWrapper">
           <Grid container spacing={3}>
        <Grid item xs={12}>
      <WebDesign />
      </Grid>
      <Grid item xs={12}>
      <LogoDesign/>
      </Grid>
      </Grid>
    </div>
  );
}
export default Projects;