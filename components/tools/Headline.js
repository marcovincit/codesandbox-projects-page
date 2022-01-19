import { useState, useEffect, useRef } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { HeadlineSection } from "./HeadlineSection";
import { HeadlineSubSection } from "./HeadlineSubSection";
import { Heading, Body } from "../typography";
import { Lock } from "../icons/Lock";

export const Headline = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [position, setPosition] = useState("relative");

  // lock icon

  const scrollSpring = useSpring(scrollY, {
    duration: 200,
    // bounce: 10,
  });

  const lockProgress = useTransform(
    scrollSpring,
    [
      containerTop - containerHeight / 2,
      containerTop - containerHeight / 2 + 20,
    ],
    ["20px", "0px"]
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
    <HeadlineSection
      as={motion.div}
      ref={container}
      style={{
        "--lock-progress": lockProgress,
      }}
    >
      <HeadlineSubSection>
        <Lock />

        <Heading size={2} as="h1">
          No lock-in.
          <br />
          Use the tools
          <br />
          you love.
        </Heading>

        <Body size={1} as="p">
          With your CodeSandbox, you can code from any device,
          <br />
          using VSCode, play.js, or your browser.
        </Body>
      </HeadlineSubSection>
    </HeadlineSection>
  );
};
