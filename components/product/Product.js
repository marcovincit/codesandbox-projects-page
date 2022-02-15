import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useWindowSize, useWindowLoad } from "hooks";
import { linear, easeInOutCubic, easeOutCubic } from "utils/easing";
import { Stage, Image } from "./styles";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";

export const Product = () => {
  const { scrollY } = useViewportScroll();

  const windowSize = useWindowSize();
  const windowIsLoaded = useWindowLoad();

  // keyframe
  const keyframe = (value) => {
    return windowSize.height * value;
  };

  //  SCENE 1

  // scene1Display
  const scene1Display = useTransform(
    scrollY,
    [keyframe(2.5), keyframe(2.5) + 1],
    [1, 0]
  );

  // scene1Opacity
  const scene1Opacity = useTransform(
    scrollY,
    [keyframe(2), keyframe(3)],
    ["1", "0"]
  );

  // scene1Scale
  const scene1Scale = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(4), keyframe(5)],
    [1, 2.5, 2.5, 0.75],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeOutCubic],
    }
  );

  //   scene1X
  const scene1X = useTransform(
    scrollY,
    [keyframe(0), keyframe(0.8), keyframe(2.8), keyframe(4), keyframe(5)],
    ["0%", "-50%", "-60%", "-80%", "-10.07%"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeOutCubic, easeOutCubic],
    }
  );

  //  scene1Y

  const scene1YLarge = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(2.8), keyframe(4), keyframe(5)],
    ["60rem", "60rem", "60rem", "calc(60rem  + 0vh)", "calc(10rem  +  43.1%)"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic, easeOutCubic],
    }
  );

  const scene1YxLarge = useTransform(
    scrollY,
    [keyframe(0), keyframe(1), keyframe(2.8), keyframe(4), keyframe(5)],
    ["60rem", "60rem", "60rem", "calc(60rem + 0%)", "calc(0rem + 43.1%)"],
    {
      ease: [easeInOutCubic, easeInOutCubic, easeInOutCubic, easeOutCubic],
    }
  );

  // SCENE 2

  // scene2Opacity
  const scene2Opacity = useTransform(
    scrollY,
    [
      keyframe(3),
      keyframe(4.5),
      keyframe(9.7),
      keyframe(9.7) + 1,
      keyframe(12.5),
      keyframe(13),
    ],
    ["0", "1", "1", "0.5", "1", "0"]
  );

  // scene2Scale
  const scene2Scale = useTransform(
    scrollY,
    [keyframe(4), keyframe(5), keyframe(10), keyframe(11)],
    [3.25, 1, 1, 0.52],
    {
      ease: [easeOutCubic, easeInOutCubic, easeInOutCubic],
    }
  );

  //   scene2X
  const scene2X = useTransform(
    scrollY,
    [
      keyframe(4),
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
      "117.3%",
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
        easeOutCubic,
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
    [keyframe(3), keyframe(5), keyframe(10), keyframe(11)],
    [
      "calc(70rem - 40%)",

      "calc(0rem - 0%)",
      "calc(0rem - 0%)",
      "calc(-2rem - 0%)",
    ],
    {
      ease: [easeOutCubic, easeInOutCubic, easeInOutCubic],
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
    ["0", "1"]
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
    ["0", "1"]
  );

  // showContent
  const [showContent, setShowContent] = useState(0);

  return (
    <div
      id="product-presentation"
      style={{
        opacity: windowIsLoaded ? "1" : "0",
      }}
    >
      {/* SCENE 1 */}
      <Stage
        as={motion.div}
        css={{
          zIndex: 200,
          "@large": {
            transform: "translateY(-10rem)",
          },
        }}
      >
        <motion.div
          style={{
            willChange: "transform, opacity",
            scale: scene1Scale,
            y: windowSize.width > 1440 ? scene1YxLarge : scene1YLarge,
            x: scene1X,
            z: 0,
          }}
        >
          <Image
            width={1440}
            height={810}
            as={motion.img}
            alt="CodeSandbox Projects - Default"
            style={{
              opacity: scene1Opacity,
            }}
            css={{
              willChange: "transform, opacity",
              // transform: "translateZ(0)",
              // "backface-visibility": "hidden",
              // "-webkit-font-smoothing": "subpixel-antialiased",
              // "image-rendering": "-webkit-optimize-contrast",
            }}
            src="images/screenshots/product/default.svg"
          />

          <Scene1 />
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
          <Image
            width={1440}
            height={810}
            alt="CodeSandbox Projects - Default"
            src="images/screenshots/product/default.svg"
          />
          <Scene2 />
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
          <Image
            width={1440}
            height={810}
            alt="CodeSandbox Projects - Loading"
            src="images/screenshots/product/loading.svg"
          />
          <motion.div
            style={{
              willChange: "opacity",
              opacity: newBranchOpacity,
              transition: "opacity 300ms",
            }}
          >
            <Image
              width={1440}
              height={810}
              alt="CodeSandbox Projects - Default"
              src="images/screenshots/product/default.svg"
              layer
            />
            <Image
              width={1440}
              height={810}
              alt="CodeSandbox Projects - New Branch"
              src="images/screenshots/product/new-branch.svg"
              layer
            />
          </motion.div>
        </motion.div>
      </Stage>
    </div>
  );
};
