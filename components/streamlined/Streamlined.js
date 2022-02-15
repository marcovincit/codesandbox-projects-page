import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Section, SubSection, Text, Square, Title } from "./styles";
import { useWindowSize, useWindowLoad } from "hooks";

export const Streamlined = () => {
  const { scrollY } = useViewportScroll();

  const windowIsLoaded = useWindowLoad();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // marquee section

  const marqueeSectionOpacity = useTransform(
    scrollY,
    [
      containerTop - containerHeight / 6,
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

  const marqueeTextX = useTransform(scrollY, marqueeRange, ["100%", "-100%"]);

  // square
  const marqueeSquareScale = useTransform(scrollY, marqueeRange, [1, 0.7]);

  // title section
  const titleSectionOpacity = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + containerHeight / 2.5 + 1,
      containerTop + containerHeight / 2.5 + 300,
      containerTop + (containerHeight / 4) * 3.2,
    ],
    [0, 1, 1, 0]
  );

  // title

  const titleScale = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 2.5,
      containerTop + (containerHeight / 4) * 3.2,
    ],
    [1, 0.8]
  );

  // useEffect

  useEffect(() => {
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
    <Section
      ref={container}
      style={{
        opacity: windowIsLoaded ? "1" : "0",
      }}
    >
      <SubSection style={{ opacity: marqueeSectionOpacity }}>
        <Square
          type="right"
          style={{
            scale: marqueeSquareScale,
            zIndex: 4,
          }}
        />

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

        <Square
          type="mask"
          style={{
            scale: marqueeSquareScale,
            zIndex: 2,
          }}
        />

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
};
