import { styled } from "styles/stitches.config";
import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import { easeInOutCubic, easeInCubic, easeOutCubic } from "utils/easing";

export const Stage = styled("div", {
  width: "100vw",
  height: "100vh",

  //   pointerEvents: "none",

  position: "fixed",
  top: "50%",
  left: "50%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  transform: "translate(-50%, -50%)",
});

export const Product = () => {
  const { scrollY } = useViewportScroll();

  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;

  // keyframe
  const keyframe = (value) => {
    return windowHeight * value;
  };

  // scale
  const scale = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3), keyframe(4)],
    [1, 2, 2, 1],
    {
      ease: [easeOutCubic, easeInOutCubic, easeInCubic],
    }
  );

  //   x
  const x = useTransform(
    scrollY,
    [
      keyframe(0),
      keyframe(1),
      keyframe(3),
      keyframe(4),
      keyframe(5),
      keyframe(6),
      keyframe(7),
    ],
    ["0%", "-20%", "-30%", "50%", "55%", "-50%", "-55%"],
    {
      ease: [
        easeOutCubic,
        easeInOutCubic,
        easeInCubic,
        easeOutCubic,
        easeInCubic,
        easeOutCubic,
      ],
    }
  );

  //   y
  const y = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3), keyframe(4)],
    ["100%", "50%", "50%", "0%"],
    {
      ease: [easeOutCubic, easeInOutCubic, easeInCubic],
    }
  );

  useEffect(() => {}, []);

  return (
    <Stage>
      <motion.div style={{ willChange: "transform", scale, x, y }}>
        {/* <Screenshot /> */}
        <img
          style={{ width: "auto", height: "75vh" }}
          src="images/screenshots/product/default.svg"
        />
      </motion.div>
    </Stage>
  );
};
