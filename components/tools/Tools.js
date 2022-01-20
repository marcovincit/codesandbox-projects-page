import { lightTheme } from "styles/stitches.config";
import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
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

export function Tools() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const containerOffset = useRef(null);
  const [containerOffsetTop, setContainerOffsetTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // section y
  const y = useTransform(
    scrollY,
    [containerOffsetTop - containerHeight / 1.5, containerOffsetTop + 100],
    ["20%", "0%"]
  );

  // iPhone
  const iPhoneX = useTransform(
    scrollY,
    [
      containerOffsetTop + 100,
      containerOffsetTop + containerHeight,
      containerOffsetTop + containerHeight,
      containerOffsetTop + containerHeight * 2.8,
    ],
    ["0vw", "-100vw", "-100vw", "0vw"]
  );

  // iPad
  const iPadX = useTransform(
    scrollY,
    [
      containerOffsetTop + 100,
      containerOffsetTop + containerHeight,
      containerOffsetTop + containerHeight * 2.8,
    ],
    ["0%", "-120%", "0%"]
  );

  // VSCode
  const VSCodeX = useTransform(
    scrollY,
    [
      containerOffsetTop,
      containerOffsetTop + containerHeight,
      containerOffsetTop + containerHeight + 500,
      containerOffsetTop + containerHeight * 2.8,
    ],
    ["0%", "0%", "0%", "150%"]
  );

  // useEffect
  useEffect(() => {
    if (!container.current) return;
    if (!containerOffset.current) return;
    const onResize = () => {
      setContainerOffsetTop(containerOffset.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  // return
  return (
    <Section className={lightTheme}>
      <Headline />

      <div ref={containerOffset} />

      <SubSection
        as={motion.div}
        ref={container}
        hideMobile
        css={{
          pointerEvents: "none",
          position: "sticky",
          top: 0,
          willChange: "transform",
        }}
        style={{
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
              willChange: "transform",
            }}
            src="/images/iPad.jpg"
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
          css={{
            willChange: "transform",
          }}
          style={{
            x: VSCodeX,
          }}
        >
          <Image src="/images/VSCode.jpg" />
        </MockupSection>
      </SubSection>

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
            src="/images/iPad.jpg"
          />
          <Phone src="/images/iPhone.png" />
        </MockupSection>
      </SubSection>
    </Section>
  );
}
