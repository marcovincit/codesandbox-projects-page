import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Heading, Body } from "components/typography";
import { CTA, Arrow } from "components/cta";
import { Background } from "components";
import { Section, Container, Content } from "./styles";
import { Logo } from "./Logo";
import { easeInOutCubic } from "utils/easing";

export function Hero() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [backgroundIsActive, setBackgroundIsActive] = useState(0);

  //  scale
  const scale = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [1, 0.75],
    { ease: easeInOutCubic }
  );
  //  scale
  const scale2 = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [1, 0.75],
    { ease: easeInOutCubic }
  );
  //  scale
  const scale3 = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight],
    [1, 0.75],
    { ease: easeInOutCubic }
  );

  //  opacity
  const opacity = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight / 2],
    [1, 0]
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
    <Section ref={container}>
      <Background active={backgroundIsActive} />
      <Container as={motion.div} style={{ scale, opacity }}>
        <Content>
          <Logo>
            <span>
              CodeSandbox Projects - The best online IDE editor alternative to
              code.
            </span>
          </Logo>

          <Heading
            size={2}
            as={motion.h2}
            css={{
              willChange: "transform",
              "@medium": { transform: "initial!important" },
            }}
            style={{ scale: scale2 }}
          >
            Development
            <br />
            reimagined.
          </Heading>

          <Body
            size={1}
            as={motion.p}
            css={{
              maxWidth: "50rem",
              willChange: "transform",
              "@medium": { transform: "initial!important" },
              "@small": { maxWidth: "32rem" },
            }}
            style={{ scale: scale3 }}
          >
            Experience the future of web development and build projects anywhere
            and anytime with your team.
          </Body>
          <CTA
            as="a"
            href="#"
            target="_blank"
            onMouseEnter={() => setBackgroundIsActive(1)}
            onMouseLeave={() => setBackgroundIsActive(0)}
          >
            Early access <Arrow />
          </CTA>
        </Content>
      </Container>
    </Section>
  );
}
