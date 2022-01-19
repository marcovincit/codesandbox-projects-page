import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { lightTheme } from "styles/stitches.config";

import { Section } from "./Section";
import { Image } from "./Image";
import { Headline } from "./Headline";
import { ContentSection } from "./ContentSection";
import { SubSection } from "./SubSection";
import { ContentSubSection } from "./ContentSubSection";
import { MockupSection } from "./MockupSection";
import { Heading, Body } from "../typography";
import { AppStore } from "components/icons/AppStore";
import { Phone } from "./Phone";

import { FakeSection } from "./FakeSection";

export function Tools() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [position, setPosition] = useState("relative");

  // y
  const y = useTransform(
    scrollY,
    [
      containerTop - containerHeight,
      containerTop,
      containerTop + containerHeight * 3,
      containerTop + containerHeight * 4,
    ],
    ["100%", "0%", "0%", "-100%"]
  );

  const iPhoneX = useTransform(
    scrollY,
    [
      containerTop + 100,
      containerTop + containerHeight,
      containerTop + containerHeight,
      containerTop + containerHeight * 2.8,
    ],
    ["0vw", "-100vw", "-100vw", "0vw"]
  );

  const iPadX = useTransform(
    scrollY,
    [
      containerTop + 100,
      containerTop + containerHeight,

      containerTop + containerHeight * 2.8,
    ],
    ["0%", "-120%", "0%"]
  );

  const VSCodeX = useTransform(
    scrollY,
    [
      containerTop,
      containerTop + containerHeight,
      containerTop + containerHeight + 200,

      containerTop + containerHeight * 2.8,
    ],
    ["0%", "0%", "0%", "150%"]
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

  useEffect(() => {
    scrollY.current > containerTop - containerHeight
      ? setPosition("fixed")
      : setPosition("relative");
  }, [scrollY.current]);

  // return
  return (
    <Section className={lightTheme}>
      <Headline />

      <FakeSection ref={container} hideMobile>
        <SubSection
          as={motion.div}
          css={{
            pointerEvents: "none",
          }}
          style={{
            position,
            y,
          }}
        >
          <MockupSection left>
            <Image
              as={motion.img}
              style={{
                x: iPadX,
              }}
              css={{
                marginRight: "4rem",
              }}
              src="/images/iPad.png"
            />
            <Phone
              as={motion.img}
              style={{
                x: iPhoneX,
              }}
              src="/images/iPhone.png"
            />
          </MockupSection>

          <MockupSection
            as={motion.div}
            style={{
              x: VSCodeX,
            }}
          >
            <Image src="/images/VSCode.jpg" />
          </MockupSection>
        </SubSection>
      </FakeSection>

      <SubSection
        css={{
          marginBottom: "100vh",
          "@medium": {
            marginBottom: "0",
          },
        }}
      >
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$blue" }}>
              Meet the new
              <br />
              CodeSandbox Extension
              <br />
              for VSCode.
            </Heading>
            <Heading as="p" size={4}>
              We are redefining
              <br />
              collaborative code.
            </Heading>
          </ContentSubSection>
        </ContentSection>
        <MockupSection hideDesktop>
          <Image src="/images/VSCode.jpg" />
        </MockupSection>
      </SubSection>

      <SubSection left>
        <ContentSection>
          <ContentSubSection left>
            <Heading as="h3" size={4}>
              Code from your
              <br />
              iPad or iPhone.
            </Heading>
            <Heading as="p" size={4} css={{ color: "$secondary" }}>
              Contribute on the
              <br />
              go with Play.js
            </Heading>
            <AppStore />
          </ContentSubSection>
        </ContentSection>
        <MockupSection left hideDesktop>
          <Image
            css={{
              marginLeft: "4rem",
            }}
            src="/images/iPad.png"
          />
          <Phone src="/images/iPhone.png" />
        </MockupSection>
      </SubSection>
    </Section>
  );
}
