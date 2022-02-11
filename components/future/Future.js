import { useState, useEffect, useRef } from "react";
import {
  motion,
  useSpring,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { Section, SubSection } from "./styles";
import { Heading, Body } from "components/typography";
import { CTA, Arrow } from "components/cta";
import { LogoIcon } from "components/logo";

import { easeInOutCubic, easeOutCubic } from "utils/easing";

export const Future = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // opacity
  const opacity = useTransform(
    scrollY,
    [containerTop - containerHeight, containerTop],
    [0, 1]
  );

  // y
  const y = useTransform(
    scrollY,
    [containerTop - containerHeight, containerTop],
    ["10%", "-50%"]
  );

  // logo progress
  const progress = useTransform(
    scrollY,
    [containerTop - containerHeight / 2, containerTop],
    [340, 0],
    { ease: easeOutCubic }
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

  return (
    <Section ref={container}>
      <SubSection
        as={motion.div}
        style={{
          opacity,
          x: "-50%",
          y,
          "--progress": progress,
        }}
      >
        <LogoIcon />
        <Heading size={2} as="h1">
          Get ready for
          <br />
          the future.
        </Heading>
        <Body
          size={1}
          as="p"
          css={{ maxWidth: "50rem", "@small": { maxWidth: "32rem" } }}
        >
          Experience the future of web development first and build projects
          anywhere and anytime with your team.
        </Body>
        <CTA as="a" href="#" target="_blank">
          Early access <Arrow />
        </CTA>
      </SubSection>
    </Section>
  );
};
