import React, { useState, useCallback, useContext, useRef } from "react";
import { WorkContext } from "../contexts/WorkContext";
import Carousel, { Modal, ModalGateway } from "react-images";
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
const [viewerIsOpen, setViewerIsOpen] = useState(true);
 
  return (
    <div style={{paddingTop:'50px'}} className="absoluteWrapper">
<animated.div style={aniProps}>
      {transitions.map(({ item, key, props }, index) => (
<animated.div key={key} style={{ ...props, display: "inline-block" }} >
<img alt={item.caption} src={item.source} height="150px" width="auto"
css={{
      cursor: 'pointer',
                  }}/>
    </animated.div>))}
    </animated.div>

    {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal allowFullscreen={false} onClose={closeLightbox}
          styles={{
            blanket: base => ({
              ...base,
              backgroundColor: 'rgba(255,255,255,0.85)',
            }),
            dialog: base => ({
              ...base,
              maxWidth: 640,
            }),
          }}>
            <Carousel 
              views={works.map(x => ({
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
      </ModalGateway> */}


      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={setViewerIsOpen(false)}>
            <Carousel
              views={works.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default Projects;