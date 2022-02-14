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
  FakeSection,
} from "./styles";
import { AppStore } from "./AppStore";
import { easeInOutQuad } from "utils/easing";

export const Tools = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // keyframe
  const keyframe = (value) => {
    return containerTop + (containerHeight / 32) * value;
  };

  // progress
  const progress = useTransform(
    scrollY,
    [keyframe(-3), keyframe(-2)],
    [300, 0]
  );
  const progress2 = useTransform(
    scrollY,
    [keyframe(-2), keyframe(-1)],
    [420, 560]
  );

  // lock icon
  const lockProgress = useTransform(
    scrollY,
    [keyframe(-1), keyframe(-1) + 1],
    ["20px", "0px"]
  );

  // iPhone
  const iPhoneX = useTransform(
    scrollY,
    [keyframe(4), keyframe(8), keyframe(15), keyframe(20), keyframe(28)],
    ["0vw", "-48vw", "-48vw", "-2vw", "0vw"],
    { ease: easeInOutQuad }
  );

  // iPad
  const iPadX = useTransform(
    scrollY,
    [keyframe(4), keyframe(8), keyframe(15), keyframe(20), keyframe(28)],
    ["0vw", "-60vw", "-60vw", "-4vw", "0vw"],
    { ease: easeInOutQuad }
  );

  // VSCode
  const VSCodeX = useTransform(
    scrollY,
    [keyframe(4), keyframe(15), keyframe(20)],
    ["2vw", "0vw", "47vw"],
    { ease: easeInOutQuad }
  );

  // content 1
  const contentOpacity1 = useTransform(
    scrollY,
    [keyframe(8), keyframe(9), keyframe(10), keyframe(11)],
    [0, 1, 1, 0]
  );
  const contentY1 = useTransform(
    scrollY,
    [keyframe(7), keyframe(12)],
    ["-25%", "-75%"]
  );

  // content 2
  const contentOpacity2 = useTransform(
    scrollY,
    [keyframe(11), keyframe(12), keyframe(15), keyframe(16)],
    [0, 1, 1, 0]
  );
  const contentY2 = useTransform(
    scrollY,
    [keyframe(11), keyframe(16)],
    ["-25%", "-75%"]
  );

  // content 3
  const contentOpacity3 = useTransform(
    scrollY,
    [keyframe(20), keyframe(21), keyframe(23), keyframe(24)],
    [0, 1, 1, 0]
  );
  const contentY3 = useTransform(
    scrollY,
    [keyframe(20), keyframe(24)],
    ["-25%", "-75%"]
  );

  // content 4
  const contentOpacity4 = useTransform(
    scrollY,
    [keyframe(24), keyframe(25)],
    [0, 1]
  );
  const contentY4 = useTransform(
    scrollY,
    [keyframe(24), keyframe(28)],
    ["-25%", "-75%"]
  );

  // useEffect
  useEffect(() => {
    if (!container.current) return;
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
      as={motion.section}
      className={lightTheme}
      ref={container}
      style={{
        "--lock-progress": lockProgress,
        "--progress": progress,
        "--progress2": progress2,
      }}
    >
      <Headline />

      <SubSection
        as={motion.div}
        hideMobile
        css={{
          pointerEvents: "none",
        }}
      >
        <MockupSection left>
          <Image
            width={944}
            height={723}
            alt="CodeSandbox for iOS - iPad"
            as={motion.img}
            css={{
              marginRight: "4rem",
              willChange: "transform",
            }}
            style={{
              x: iPadX,
            }}
            src="/images/screenshots/tools/iPad.jpg"
          />
          <Phone
            width={312}
            height={630}
            alt="CodeSandbox for iOS - iPhone"
            as={motion.img}
            css={{
              willChange: "transform",
            }}
            style={{
              x: iPhoneX,
            }}
            src="/images/screenshots/tools/iPhone.png"
          />
        </MockupSection>

        <MockupSection>
          <Image
            width={1440}
            height={810}
            as={motion.img}
            css={{
              willChange: "transform",
            }}
            style={{
              x: VSCodeX,
            }}
            alt="CodeSandbox Extension for VSCode."
            src="/images/screenshots/tools/VSCode.jpg"
          />
        </MockupSection>
      </SubSection>

      <SubSection>
        <ContentSection>
          <ContentSubSection>
            <Heading
              size={4}
              as={motion.h4}
              css={{
                willChange: "opacity, transform",
                position: "absolute",
                top: "50%",

                "@medium": {
                  opacity: "1!important",
                  transform: "initial!important",
                  position: "initial",
                  top: "initial",
                },
              }}
              style={{ opacity: contentOpacity1, y: contentY1 }}
            >
              Bringing Codesandbox
              <br />
              to your favorite IDE.
            </Heading>

            <Heading
              size={4}
              as={motion.h5}
              css={{
                color: "$blue",
                willChange: "opacity, transform",
                position: "absolute",
                top: "50%",

                "@medium": {
                  opacity: "1!important",
                  transform: "initial!important",
                  position: "initial",
                  top: "initial",
                },
              }}
              style={{ opacity: contentOpacity2, y: contentY2 }}
            >
              {" "}
              Meet the new
              <br />
              CodeSandbox Extension
              <br />
              for VSCode.
            </Heading>
          </ContentSubSection>
        </ContentSection>
        <MockupSection hideDesktop>
          <Image
            width={1440}
            height={810}
            alt="CodeSandbox Extension for VSCode."
            src="/images/screenshots/tools/VSCode.jpg"
          />
        </MockupSection>
      </SubSection>

      <FakeSection />

      <SubSection left>
        <ContentSection>
          <ContentSubSection left>
            <Heading
              size={4}
              as={motion.h4}
              css={{
                willChange: "opacity, transform",
                position: "absolute",
                top: "50%",

                "@medium": {
                  position: "initial",
                  top: "initial",
                  opacity: "1!important",
                  transform: "initial!important",
                },
              }}
              style={{ opacity: contentOpacity3, y: contentY3 }}
            >
              Code from your
              <br />
              iPad or iPhone.
            </Heading>
            <Heading
              size={4}
              as={motion.h5}
              css={{
                color: "$primary",
                willChange: "opacity, transform",
                position: "absolute",
                top: "50%",

                "@medium": {
                  position: "initial",
                  top: "initial",
                  opacity: "1!important",
                  transform: "initial!important",
                },
              }}
              style={{ opacity: contentOpacity4, y: contentY4 }}
            >
              Coming soon the <br /> new CodeSandbox <br />
              for iOS.
              {/* Meet the new
              <br />
              CodeSandbox for iOS.
              <br />
              <AppStore /> */}
            </Heading>
          </ContentSubSection>
        </ContentSection>
        <MockupSection left hideDesktop>
          <Image
            width={944}
            height={723}
            alt="CodeSandbox for iOS - iPad"
            css={{
              marginLeft: "4rem",
            }}
            src="/images/screenshots/tools/iPad.jpg"
          />
          <Phone
            width={312}
            height={630}
            alt="CodeSandbox for iOS - iPhone"
            src="/images/screenshots/tools/iPhone.png"
          />
        </MockupSection>
      </SubSection>

      <FakeSection />
    </Section>
  );
};
