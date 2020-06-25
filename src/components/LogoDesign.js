import React, { useState, useCallback, useContext, useRef } from "react";
import { WorkContext } from "../contexts/WorkContext";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

/* @jsx glam */
import glam from 'glam'

function LogoDesign() {

  const { works, addWork, setWorks } = useContext(WorkContext);

  const filter = 'logo design';
  const logodesigns = works.filter((item) => {
      return (item.categories.indexOf(filter) >= 0);
  });

  const springRef = useRef()
  const aniProps = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { opacity: 0, size: '20%',},
    to: { opacity: 1, size: '100%',},
    delay: 200
  })

  const transRef = useRef()
  const transitions = useTransition(logodesigns, item => item.title, {
    ref: transRef,
    unique: true,
    trail: 1000 / works.length,
    config:{duration: 200},
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain([springRef,transRef]);

const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
const [selectedIndexLogo, setSelectedIndexLogo] = useState(0);
 
const toggleLightbox = (index) => {
  setLightboxIsOpen(true);
  setSelectedIndexLogo(index);
}

const onImageChange = index => {
  console.log(index);
  setSelectedIndexLogo(index)
};

const titleAniProps1 = useSpring({
  opacity: 1,
  from: { opacity: 0 },
  delay:200
})

  return (
    <Container>
         <animated.h5 style={titleAniProps1}>Logo Design</animated.h5>
<animated.div style={aniProps}>
      {transitions.map(({ item, key, props }, index) => (
<animated.div key={key} style={{ ...props, display: "inline-block", margin: "10px" }} >
<Paper elevation={3} square>
<img alt={item.caption} src={item.source.thumbnail} height="90px" width="auto" onClick={()=>toggleLightbox(index)}
css={{
      cursor: 'pointer', display:'block', margin:0
                  }}/></Paper>
    </animated.div>))}
    </animated.div>

    <ModalGateway>
        {lightboxIsOpen ? (
          <Modal allowFullscreen={false} onClose={() => setLightboxIsOpen(false)}
          styles={{
            blanket: base => ({
              ...base,
              backgroundColor: 'rgba(255,255,255,0.85)',
            }),
            dialog: base => ({
              ...base,
              maxWidth: 840,
            }),
          }}>
            <Carousel 
              currentIndex={selectedIndexLogo}
              trackProps={{ onViewChange: index => onImageChange(index) }}
              views={logodesigns.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
                          styles={{
              navigationPrev: base => ({
                ...base,
                color: '#666',
              }),
              navigationNext: base => ({
                ...base,
                color: '#666',
              }),
              footer: base => ({
                ...base,
                background: 'none !important',
                color: '#666',
                padding: 0,
                paddingTop: 20,
                position: 'static',

                '& a': {
                  color: 'black',
                },
              }),
              header: base => ({
                ...base,
                background: 'none !important',
                padding: 0,
                paddingBottom: 10,
                position: 'static',
              }),
              headerClose: base => ({
                ...base,
                color: '#666',

                ':hover': { color: '#DE350B' },
              }),
              view: base => ({
                ...base,
                maxHeight: 480,
                overflow: 'hidden',
              }),
            }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}
export default LogoDesign;