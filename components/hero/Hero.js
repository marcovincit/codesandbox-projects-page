import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Heading, Body } from "components/typography";
import { CTA, Arrow } from "components/cta";
import { Container, Content } from "./styles";
import { Logo } from "./Logo";

export function Hero() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // title scale
  const scale = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [1, 0.9]
  );

  // title scale
  const scaleBody = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [1, 1.05]
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
    <Container ref={container}>
      <Content>
        <Logo />

        <Heading
          as="h1"
          css={{
            fontSize: 1,
            width: 0,
            height: 0,
            display: "none",
          }}
        >
          CodeSandbox Projects Beta
        </Heading>

        <Heading
          size={2}
          as="h2"
          as={motion.h1}
          css={{ willChange: "transform" }}
          style={{ scale }}
        >
          Development
          <br />
          reimagined.
        </Heading>

        <Body
          size={1}
          as={motion.p}
          css={{ maxWidth: "50rem", "@small": { maxWidth: "32rem" } }}
          style={{ scale: scaleBody }}
        >
          Experience the future of web development and build projects anywhere
          and anytime with your team.
        </Body>
        <CTA as="a" href="#" target="_blank">
          Early access <Arrow />
        </CTA>
      </Content>
    </Container>
  );
}
