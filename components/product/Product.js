import { styled } from "styles/stitches.config";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize } from "hooks/useWindowSize";
import {
  linear,
  easeInOutCubic,
  easeInCubic,
  easeOutCubic,
} from "utils/easing";

import { Image } from "./styles";
import { Users } from "./Users";

export const Stage = styled("div", {
  width: "100vw",
  height: "100vh",

  pointerEvents: "none",

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: 9999,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  lineHeight: 0,

  "@medium": {
    display: "none",
  },
});

export const Product = () => {
  const { scrollY } = useViewportScroll();

  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;

  // keyframe
  const keyframe = (value) => {
    return windowHeight * value;
  };

  // scene1Opacity
  const scene1Opacity = useTransform(
    scrollY,
    [keyframe(3), keyframe(3) + 1],
    [1, 0]
  );

  // scene1Scale
  const scene1Scale = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3), keyframe(4)],
    [1, 2.5, 2.5, 1],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInCubic],
    }
  );

  //   scene1X
  const scene1X = useTransform(
    scrollY,
    [keyframe(0), keyframe(0.8), keyframe(3)],
    ["0%", "-40%", "-60%"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  //  scene1Y
  const scene1Y = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3)],
    ["60rem", "70rem", "70rem"],
    {
      ease: [easeInOutCubic, easeInOutCubic],
    }
  );

  // scene2Opacity
  const scene2Opacity = useTransform(
    scrollY,
    [
      keyframe(3),
      keyframe(3) + 1,
      keyframe(8.7),
      keyframe(8.7) + 1,
      keyframe(11.5),
      keyframe(12),
    ],
    [0, 1, 1, 0.5, 1, 0]
  );

  // scene2Scale
  const scene2Scale = useTransform(
    scrollY,
    [keyframe(3), keyframe(4), keyframe(9), keyframe(10)],
    // [2.8, 1, 1, 0.5834861],
    [2.8, 1, 1, 0.52],
    {
      ease: [easeInOutCubic, easeOutCubic, easeInOutCubic],
    }
  );

  //   scene2X
  const scene2X = useTransform(
    scrollY,
    [
      keyframe(3),
      keyframe(4),
      keyframe(5),
      keyframe(6),
      keyframe(7),
      keyframe(8),
      keyframe(9),
      keyframe(9) + 1,
      keyframe(10),
    ],
    [
      "124.75%",
      "50%",
      "55%",
      "-50%",
      "-55%",
      "0%",
      "0%",
      "calc(0% - 0rem)",
      "calc(-50% - 4rem)",
    ],
    {
      ease: [
        easeInOutCubic,
        easeInCubic,
        easeInCubic,
        easeOutCubic,
        easeInOutCubic,
        linear,
        linear,
        easeInOutCubic,
      ],
    }
  );

  //  scene2Y
  const scene2Y = useTransform(
    scrollY,
    [keyframe(3), keyframe(4), keyframe(9), keyframe(10)],
    ["-49rem", "0rem", "0rem", "-2rem"],
    {
      ease: [easeInOutCubic, linear, easeInOutCubic],
    }
  );

  // scene2Origin
  const scene2Origin = useTransform(
    scrollY,
    [keyframe(9), keyframe(9) + 1],
    ["50% 50%", "100% 50%"]
  );

  // scene3Opacity
  const scene3Opacity = useTransform(
    scrollY,
    [keyframe(8.7), keyframe(8.7) + 1],
    [0, 1]
  );

  // scene3Scale
  const scene3Scale = useTransform(
    scrollY,
    [keyframe(3), keyframe(4), keyframe(9), keyframe(10)],
    // [2.8, 1, 1, 0.5834861],
    [2.8, 1, 1, 0.52],
    {
      ease: [easeInCubic, easeOutCubic, easeInOutCubic],
    }
  );

  //   scene3X
  const scene3X = useTransform(
    scrollY,
    [
      keyframe(3),
      keyframe(4),
      keyframe(5),
      keyframe(6),
      keyframe(7),
      keyframe(8),
      keyframe(9),
      keyframe(9) + 1,
      keyframe(10),
    ],
    [
      "124.75%",
      "50%",
      "55%",
      "-50%",
      "-55%",
      "0%",
      "0%",
      "calc(0% + 0rem)",
      "calc(50% + 4rem)",
    ],
    {
      ease: [
        easeInCubic,
        easeOutCubic,
        easeInCubic,
        easeOutCubic,
        easeInOutCubic,
        linear,
        linear,
        easeInOutCubic,
      ],
    }
  );

  //  scene3Y
  const scene3Y = useTransform(
    scrollY,
    [keyframe(3), keyframe(4), keyframe(9), keyframe(10)],
    ["-49rem", "0rem", "0rem", "-2rem"],
    {
      ease: [easeInCubic, linear, easeInOutCubic],
    }
  );

  const scene3StageY = useTransform(
    scrollY,
    [keyframe(13), keyframe(14)],
    ["0%", "-100%"],
    {
      ease: [linear],
    }
  );

  // scene3Origin
  const scene3Origin = useTransform(
    scrollY,
    [keyframe(9), keyframe(9) + 1],
    ["50% 50%", "0% 50%"]
  );

  // newBranchOpacity
  const newBranchOpacity = useTransform(
    scrollY,
    [keyframe(10.5), keyframe(10.5) + 1],
    [0, 1]
  );

  return (
    <section>
      {/* product 1 */}
      <Stage
        css={{
          "@large": {
            marginTop: "-10rem",
          },
        }}
      >
        <motion.div
          style={{
            willChange: "transform, opacity",
            scale: scene1Scale,
            y: scene1Y,
            x: scene1X,
            opacity: scene1Opacity,
          }}
        >
          <Image src="images/screenshots/product/default.svg" />
          <Users />
        </motion.div>
      </Stage>

      <Stage>
        <motion.div
          style={{
            willChange: "transform, opacity",
            scale: scene2Scale,
            y: scene2Y,
            x: scene2X,
            opacity: scene2Opacity,
            transformOrigin: scene2Origin,
          }}
        >
          <Image src="images/screenshots/product/default.svg" />
          <Users />
        </motion.div>
      </Stage>

      {/* LOADING */}

      <Stage as={motion.div} style={{ y: scene3StageY }}>
        <motion.div
          style={{
            willChange: "transform, opacity",
            scale: scene3Scale,
            y: scene3Y,
            x: scene3X,
            opacity: scene3Opacity,
            transformOrigin: scene3Origin,
            transition: "opacity 300ms",
          }}
        >
          <Image src="images/screenshots/product/loading.svg" />
          <motion.div
            style={{
              willChange: "opacity",
              opacity: newBranchOpacity,
              transition: "opacity 300ms",
            }}
          >
            <Image src="images/screenshots/product/default.svg" layer />
            <Image src="images/screenshots/product/new-branch.svg" layer />
          </motion.div>
        </motion.div>
      </Stage>
    </section>
  );
};
