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
import { Interactions } from "./Interactions";

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

  //  SCENE 1

  // scene1Display
  const scene1Display = useTransform(
    scrollY,
    [keyframe(4.5), keyframe(4.5) + 1],
    [1, 0]
  );

  // scene1Opacity
  const scene1Opacity = useTransform(
    scrollY,
    [keyframe(3), keyframe(4) + 1],
    [1, 0]
  );

  // scene1Scale
  const scene1Scale = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3), keyframe(4.5), keyframe(5)],
    [1, 2.5, 2.5, 2.5, 0.75],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  //   scene1X
  const scene1X = useTransform(
    scrollY,
    [keyframe(0), keyframe(0.8), keyframe(4.5), keyframe(5)],
    ["0%", "-50%", "-80%", "-10%"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  //  scene1Y
  const scene1Y = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(3), keyframe(4.5), keyframe(5)],
    ["60rem", "70rem", "70rem", "70rem", "30.4rem"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // SCENE 2

  // scene2Opacity
  const scene2Opacity = useTransform(
    scrollY,
    [
      keyframe(4),
      keyframe(4.5),
      keyframe(9.7),
      keyframe(9.7) + 1,
      keyframe(12.5),
      keyframe(13),
    ],
    [0, 1, 1, 0.5, 1, 0]
  );

  // scene2Scale
  const scene2Scale = useTransform(
    scrollY,
    [keyframe(4.5), keyframe(5), keyframe(10), keyframe(11)],
    [3.25, 1, 1, 0.52],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  //   scene2X
  const scene2X = useTransform(
    scrollY,
    [
      keyframe(0.8),
      keyframe(4.5),
      keyframe(5),
      keyframe(6),
      keyframe(7),
      keyframe(8),
      keyframe(9),
      keyframe(9) + 1,
      keyframe(10),
      keyframe(11),
    ],
    [
      "calc(180% + 0rem)",
      "calc(117.3% + 0rem)",
      "calc(50% - 0rem)",
      "calc(55% - 0rem)",
      "calc(-50% - 0rem)",
      "calc(-55% - 0rem)",
      "calc(0% - 0rem)",
      "calc(0% - 0rem)",
      "calc(0% - 0rem)",
      "calc(-50% - 4rem)",
    ],
    {
      ease: [
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
        easeInOutCubic,
      ],
    }
  );

  //  scene2Y
  const scene2Y = useTransform(
    scrollY,
    [keyframe(3), keyframe(4.5), keyframe(5), keyframe(10), keyframe(11)],
    [
      "calc(70rem - 143.2%)",
      "calc(70rem - 143.2%)",
      "calc(0rem - 0%)",
      "calc(0rem - 0%)",
      "calc(-2rem - 0%)",
    ],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  // scene2Origin
  const scene2Origin = useTransform(
    scrollY,
    [keyframe(10), keyframe(10) + 1],
    ["50% 50%", "100% 50%"]
  );

  // SCENE 3

  // scene3Opacity
  const scene3Opacity = useTransform(
    scrollY,
    [keyframe(9.7), keyframe(9.7) + 1],
    [0, 1]
  );

  // scene3Scale
  const scene3Scale = useTransform(
    scrollY,
    [keyframe(10), keyframe(11)],
    [1, 0.52],
    {
      ease: [easeInOutCubic],
    }
  );

  //   scene3X
  const scene3X = useTransform(
    scrollY,
    [keyframe(10), keyframe(11)],
    ["calc(0% + 0rem)", "calc(50% + 4rem)"],
    {
      ease: [easeInOutCubic],
    }
  );

  //  scene3Y
  const scene3Y = useTransform(
    scrollY,
    [keyframe(10), keyframe(11)],
    ["0rem", "-2rem"],
    {
      ease: [easeInOutCubic],
    }
  );

  const scene3StageY = useTransform(
    scrollY,
    [keyframe(14), keyframe(15)],
    ["0%", "-100%"],
    {
      ease: [linear],
    }
  );

  // scene3Origin
  const scene3Origin = useTransform(
    scrollY,
    [keyframe(10), keyframe(10) + 1],
    ["50% 50%", "0% 50%"]
  );

  // NEW BRANCH

  // newBranchOpacity
  const newBranchOpacity = useTransform(
    scrollY,
    [keyframe(11.5), keyframe(11.5) + 1],
    [0, 1]
  );

  return (
    <section>
      {/* SCENE 1 */}
      <Stage
        as={motion.div}
        css={{
          zIndex: 200,
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
            z: 0,
          }}
        >
          <Image
            as={motion.img}
            style={{
              willChange: "transform, opacity",
              opacity: scene1Opacity,
            }}
            css={
              {
                // transform: "translateZ(0)",
                // "backface-visibility": "hidden",
                // "-webkit-font-smoothing": "subpixel-antialiased",
                // "image-rendering": "-webkit-optimize-contrast",
              }
            }
            src="images/screenshots/product/default.svg"
          />

          <Interactions hideEditorUsers />
        </motion.div>
      </Stage>

      {/* SCENE 2 */}
      <Stage
        css={{
          zIndex: 100,
        }}
      >
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
          <Interactions />
        </motion.div>
      </Stage>

      {/* LOADING / NEW BRANCH */}

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
