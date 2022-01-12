import { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Section } from "./Section";
import { SubSection } from "./SubSection";
import { Heading, Body } from "components/typography";
import { CTA } from "components/cta";

export function Future() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // opacity
  const opacity = useTransform(
    scrollY,
    [containerTop - containerHeight / 2, containerTop],
    [0, 1]
  );

  // y
  const y = useTransform(
    scrollY,
    [containerTop - containerHeight, containerTop],
    [-containerHeight + 200, 0]
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

  return (
    <Section
      as={motion.section}
      ref={container}
      style={{
        opacity,
        y,
      }}
    >
      <SubSection>
        <Heading size={2} as="h1">
          Get ready for
          <br />
          the future.
        </Heading>
        <Body size={1} as="p">
          Experience the future of web development first and build projects
          <br /> anywhere and anytime with your team.
        </Body>
        <CTA>Early access</CTA>
      </SubSection>
    </Section>
  );
}
