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

import { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export function Tools() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // opacity
  const x = useTransform(
    scrollY,
    [containerTop - containerHeight, containerTop + containerHeight],
    [1, 0]
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

  // return
  return (
    <>
      <Section className={lightTheme}>
        <Headline />

        <motion.div
          ref={container}
          style={{
            x,
          }}
        >
          <SubSection hideMobile>
            <MockupSection left>
              <Image src="/images/iPad.png" />
            </MockupSection>
            <MockupSection>
              <Image src="/images/VSCode.jpg" />
            </MockupSection>
          </SubSection>

          <SubSection>
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
              </ContentSubSection>
            </ContentSection>
            <MockupSection left hideDesktop>
              <Image src="/images/iPad.png" />
            </MockupSection>
          </SubSection>
        </motion.div>
      </Section>
    </>
  );
}
