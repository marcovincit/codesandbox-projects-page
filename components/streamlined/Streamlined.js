import { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Section } from "./Section";
import { SubSection } from "./SubSection";
import { Mask } from "./Mask";
import { Text } from "./Text";
import { Square } from "./Square";
import { Title } from "./Title";

export function Streamlined() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // marquee section

  const marqueeSectionOpacity = useTransform(
    scrollY,
    [
      containerTop - containerHeight / 4,
      containerTop,
      containerTop + containerHeight / 2.5,
      containerTop + containerHeight / 2.5 + 1,
    ],
    [0, 1, 1, 0]
  );

  // marquee
  const marqueeRange = [
    containerTop - containerHeight / 4,
    containerTop + containerHeight / 2.5,
  ];

  const marqueeSquareScale = useTransform(scrollY, marqueeRange, [1, 0.7]);
  const marqueeTextX = useTransform(scrollY, marqueeRange, ["100%", "-100%"]);
  const marqueeMaskX = useTransform(scrollY, marqueeRange, ["0%", "-4%"]);

  // title section
  const titleSectionOpacity = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + containerHeight / 2.5 + 1,
      containerTop + containerHeight / 2.5 + 300,
      containerTop + (containerHeight / 4) * 3,
    ],
    [0, 1, 1, 0]
  );

  // title

  const titleScale = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + (containerHeight / 4) * 3,
    ],
    [1, 0.8]
  );

  // useLayoutEffect

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

  // return

  return (
    <Section ref={container}>
      <SubSection style={{ opacity: marqueeSectionOpacity }}>
        <Text
          outline
          as={motion.span}
          style={{
            x: marqueeTextX,
            y: "-50%",
            zIndex: 3,
          }}
        >
          Streamlined experience.
        </Text>

        <Mask style={{ x: marqueeMaskX, zIndex: 2 }} />

        <Text
          as={motion.span}
          style={{
            x: marqueeTextX,
            y: "-50%",
            zIndex: 1,
          }}
        >
          Streamlined experience.
        </Text>

        <Square
          right
          style={{
            scale: marqueeSquareScale,
            zIndex: 4,
          }}
        />

        <Square
          style={{
            scale: marqueeSquareScale,
            zIndex: 0,
          }}
        />
      </SubSection>
      <SubSection
        style={{
          opacity: titleSectionOpacity,
        }}
      >
        <Title
          as={motion.h2}
          style={{
            scale: titleScale,
            x: "-50%",
            y: "-50%",
          }}
        >
          Streamlined <br /> experience.
        </Title>
      </SubSection>
    </Section>
  );
}
