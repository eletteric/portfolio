import React, { useState, useCallback, useContext, useRef } from "react";
import { WorkContext } from "../contexts/WorkContext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Carousel, { Modal, ModalGateway } from "react-images";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
/* @jsx glam */
import glam from "glam";

function Other() {
  const { works, addWork, setWorks } = useContext(WorkContext);

  const filter = "other";
  const other = works.filter((item) => {
    return item.categories.indexOf(filter) >= 0;
  });

  /* const webdesigns = works.filter(design => {design.index === 2});*/
  console.log(other);
  const springRef = useRef();
  const aniProps = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { opacity: 0, size: "20%" },
    to: { opacity: 1, size: "100%" },
  });

  const transRef = useRef();
  const transitions = useTransition(other, (item) => item.title, {
    ref: transRef,
    unique: true,
    trail: 800 / works.length,
    config: { duration: 200 },
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  useChain([springRef, transRef]);

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedIndexOther, setSelectedIndexOther] = useState(0);

  const onImageChange = (index) => {
    console.log(index);
    setSelectedIndexOther(index);
  };

  return (
    <Container maxWidth="md" style={{padding: "0px", paddingTop: "20px"}}>
      <animated.div style={aniProps}>
        {transitions.map(({ item, key, props }, index) => (
          <animated.div
            key={key}
            style={{ ...props, display: "inline-block", margin: "10px 7px 0px 7px" }}
          >
            <Paper elevation={3} style={{padding:"0px", margin:"0px"}} square>
              <img
                css={{
                  cursor: "pointer",
                  display: "block",
                  margin: 0,
                }}
                alt={item.caption}
                src={item.source.thumbnail}
                height="75px"
                width="auto"
                onClick={() => {
                  setSelectedIndexOther(index);
                  setLightboxIsOpen(true);
                }}
              />
            </Paper>
          </animated.div>
        ))}
      </animated.div>

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal
            allowFullscreen={false}
            onClose={() => {
              setLightboxIsOpen(false);
              console.log(selectedIndexOther);
            }}
            styles={{
              blanket: (base) => ({
                ...base,
                backgroundColor: "rgba(255,255,255,0.85)",
              }),
              dialog: (base) => ({
                ...base,
                maxWidth: 840,
              }),
            }}
          >
            <Carousel
              currentIndex={selectedIndexOther}
              trackProps={{ onViewChange: (index) => onImageChange(index) }}
              views={other.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
              styles={{
                navigationPrev: (base) => ({
                  ...base,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                  ":active": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                }),
                navigationNext: (base) => ({
                  ...base,
                  color: "#fff",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  ":hover": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                  ":active": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                }),
                footer: (base) => ({
                  ...base,
                  background: "none !important",
                  color: "#666",
                  padding: 0,
                  paddingTop: 20,
                  position: "static",

                  "& a": {
                    color: "black",
                  },
                }),
                header: (base) => ({
                  ...base,
                  background: "none !important",
                  padding: 0,
                  paddingBottom: 10,
                  position: "static",
                }),
                headerClose: (base) => ({
                  ...base,
                  color: "#666",

                  ":hover": { color: "#DE350B" },
                }),
                view: (base) => ({
                  ...base,
                  maxHeight: 480,
                  overflow: "hidden",
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}
export default Other;
