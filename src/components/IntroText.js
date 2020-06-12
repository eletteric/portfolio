import React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";

const IntroText = (props) => {
  const ref = useRef([]);
  const [textitems, set] = useState([]);
  const introTransitions = useTransition(textitems, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#0A0A0D",
    },
    enter: [
      { opacity: 1, height: 60, innerHeight: 60 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#343440" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#636573" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#343440" },
  });

  useEffect(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Designer", "Coder", "Creator"]), 250)
    );
    ref.current.push(setTimeout(() => set(["Designer", "Creator"]), 1000));
    ref.current.push(
      setTimeout(() => set(["Designer", "Creator", "Coder"]), 3000)
    );
    ref.current.push(setTimeout(() => set(["Designer", "Coder"]), 5500));
    ref.current.push(
      setTimeout(() => set(["Designer", "Creator", "Coder"]), 8500)
    );

    return () => ref.current.map(clearTimeout);
  }, []);

  return (
    <div style={{ marginTop: "30vh", zIndex: 10 }}>
      {introTransitions.map(
        ({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest}>
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        )
      )}
    </div>
  );
};

export default IntroText;