import { styled, lightTheme } from "styles/stitches.config";
import { Display, Heading } from "components/typography";

import { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Section = styled("section", {
  overflow: "hidden",
  position: "relative",

  //   clip: "rect(0, auto, auto, 0)",
  //   clipPath: "inset(0 0 0 0)",
});
const SubSection = styled(motion.div, {
  minHeight: "100vh",
});

const Mask = styled(motion.div, {
  top: 0,
  left: "calc(50% + 38rem)",
  width: "100%",
  height: "100%",
  background: "$background",

  position: "fixed",
});

const Square = styled(motion.div, {
  position: "fixed",
  top: "calc(50% - 40rem)",
  left: "calc(50% - 40rem)",
  width: "80rem",
  height: "80rem",
  background: "transparent",
  border: "solid 4rem $secondary",

  "@large": {
    top: "calc(50% - 30rem)",
    left: "calc(50% - 30rem)",
    width: "60rem",
    height: "60rem",
    border: "solid 3rem $secondary",
  },

  variants: {
    right: {
      true: {
        border: "none",
        borderRight: "solid 4rem $secondary",
      },
    },
  },
});

const Text = styled(Display, {
  color: "$title",
  whiteSpace: "nowrap",

  position: "fixed",
  top: "calc(50% - 2rem)",
  left: "0%",

  variants: {
    outline: {
      true: {
        WebkitTextStroke: "1px $colors-title",
        color: "transparent",
        background: "transparent",
      },
    },
  },
});

export function Streamlined() {
  const { scrollY } = useViewportScroll();

  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const marqueeRange = [
    containerTop - 300,
    containerTop + containerHeight / 2.5,
  ];

  const scale = useTransform(scrollY, marqueeRange, [1, 0.8]);
  const x = useTransform(scrollY, marqueeRange, ["100%", "-100%"]);
  const maskX = useTransform(scrollY, marqueeRange, ["0%", "-4%"]);

  // opacity
  const opacity = useTransform(
    scrollY,
    [
      containerTop - 300,
      containerTop,
      containerTop + containerHeight / 2.5,
      containerTop + containerHeight / 2.5 + 1,
    ],
    ["0", "1", "1", "0"]
  );

  const opacityTitle = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + containerHeight / 2.5 + 1,
      containerTop + containerHeight / 2.5 + 300,
      containerTop + (containerHeight / 4) * 3,
    ],
    ["0", "1", "1", "0"]
  );

  const scaleTitle = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + (containerHeight / 4) * 3,
    ],
    [1, 0.8]
  );

  useLayoutEffect(() => {
    if (!container.current) return;
    const onResize = () => {
      setContainerTop(container.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  return (
    <Section ref={container}>
      <SubSection style={{ opacity }}>
        <Text
          outline="true"
          as={motion.span}
          style={{
            x,
            y: "-50%",
            zIndex: 3,
          }}
        >
          Streamlined experience.
        </Text>

        <Mask style={{ x: maskX, zIndex: 2 }} />

        <Text
          as={motion.span}
          style={{
            x,
            y: "-50%",
            zIndex: 1,
          }}
        >
          Streamlined experience.
        </Text>

        <Square
          right
          style={{
            scale,
            zIndex: 4,
          }}
        />

        <Square
          style={{
            scale,
            zIndex: 0,
          }}
        />
      </SubSection>
      <SubSection>
        <Heading
          as={motion.h2}
          style={{
            opacity: opacityTitle,
            scale: scaleTitle,
            x: "-50%",
            y: "-50%",
          }}
          css={{
            textAlign: "center",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Streamlined <br /> experience.
        </Heading>
      </SubSection>
    </Section>
  );
}
