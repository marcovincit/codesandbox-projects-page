import { lightTheme } from "styles/stitches.config";
import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Headline } from "./Headline";
import { Heading } from "components/typography";
import {
  Section,
  Image,
  ContentSection,
  SubSection,
  ContentSubSection,
  MockupSection,
  Phone,
} from "./styles";
import { AppStore } from "./AppStore";

export function Tools() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerOffsetTop, setContainerOffsetTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // section y
  const y = useTransform(
    scrollY,
    [
      containerOffsetTop,
      containerOffsetTop + containerHeight / 6,
      containerOffsetTop + (containerHeight / 6) * 2,
    ],
    ["-10vh", "10vh", "0vh"]
  );

  // iPhone
  const iPhoneX = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 1.1,
      containerOffsetTop + (containerHeight / 6) * 2,
      containerOffsetTop + (containerHeight / 6) * 3.8,
      containerOffsetTop + (containerHeight / 6) * 6,
    ],
    ["0vw", "-100vw", "-2vw", "0vw"]
  );

  // iPad
  const iPadX = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 1.1,
      containerOffsetTop + (containerHeight / 6) * 2,
      containerOffsetTop + (containerHeight / 6) * 3.8,
      containerOffsetTop + (containerHeight / 6) * 6,
    ],
    ["0%", "-120%", "-2%", "0%"]
  );

  // VSCode
  const VSCodeX = useTransform(
    scrollY,
    [
      containerOffsetTop,
      containerOffsetTop + (containerHeight / 6) * 2,
      containerOffsetTop + (containerHeight / 6) * 2 + 500,
      containerOffsetTop + (containerHeight / 6) * 3.8,
    ],
    ["0%", "0%", "0%", "150%"]
  );

  // CONTENT 1
  // content 1 opacity
  const contentOpacity1 = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 1.75,
      containerOffsetTop + (containerHeight / 6) * 2,
      containerOffsetTop + (containerHeight / 6) * 2.5,
      containerOffsetTop + (containerHeight / 6) * 2.75,
    ],
    [0, 1, 1, 0]
  );
  // content 1 y
  const contentY1 = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 1.75,
      containerOffsetTop + (containerHeight / 6) * 2.75,
    ],
    ["5%", "-5%"]
  );

  // CONTENT 2
  // content 2 opacity
  const contentOpacity2 = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 3.25,
      containerOffsetTop + (containerHeight / 6) * 3.5,
    ],
    [0, 1]
  );
  // content 2 y
  const contentY2 = useTransform(
    scrollY,
    [
      containerOffsetTop + (containerHeight / 6) * 3.25,
      containerOffsetTop + (containerHeight / 6) * 5,
    ],
    ["5%", "0%"]
  );

  // useEffect
  useEffect(() => {
    if (!container.current) return;
    if (!container.current) return;
    const onResize = () => {
      setContainerOffsetTop(container.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  // return
  return (
    <Section className={lightTheme} ref={container}>
      <Headline />

      <SubSection
        as={motion.div}
        hideMobile
        css={{
          pointerEvents: "none",
          willChange: "transform",
        }}
        style={{
          y,
        }}
      >
        <MockupSection left>
          <Image
            alt="CodeSandbox for iOS - iPad"
            as={motion.img}
            css={{
              marginRight: "4rem",
              willChange: "transform",
            }}
            style={{
              x: iPadX,
            }}
            src="/images/iPad.jpg"
          />
          <Phone
            alt="CodeSandbox for iOS - iPhone"
            as={motion.img}
            css={{
              willChange: "transform",
            }}
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
          <Image
            alt="CodeSandbox Extension for VSCode."
            src="/images/VSCode.jpg"
          />
        </MockupSection>
      </SubSection>

      <SubSection
        as={motion.div}
        css={{
          marginTop: "-100vh",
          willChange: "opacity, transform",

          "@medium": {
            marginBottom: "0",
          },
        }}
        style={{ opacity: contentOpacity1, y: contentY1 }}
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
          <Image
            alt="CodeSandbox Extension for VSCode."
            src="/images/VSCode.jpg"
          />
        </MockupSection>
      </SubSection>

      <SubSection hideMobile />

      <SubSection
        as={motion.div}
        css={{ willChange: "opacity, transform" }}
        style={{ opacity: contentOpacity2, y: contentY2 }}
        left
      >
        <ContentSection>
          <ContentSubSection left>
            <Heading as="h3" size={4}>
              Code from your
              <br />
              iPad or iPhone.
            </Heading>
            <Heading as="p" size={4} css={{ color: "$primary" }}>
              Contribute on the
              <br />
              go with Play.js
            </Heading>

            <AppStore />
          </ContentSubSection>
        </ContentSection>
        <MockupSection left hideDesktop>
          <Image
            alt="CodeSandbox for iOS - iPad"
            css={{
              marginLeft: "4rem",
            }}
            src="/images/iPad.jpg"
          />
          <Phone alt="CodeSandbox for iOS - iPhone" src="/images/iPhone.png" />
        </MockupSection>
      </SubSection>

      <SubSection css={{ height: "200vh" }} hideMobile />
    </Section>
  );
}
