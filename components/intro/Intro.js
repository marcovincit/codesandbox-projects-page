import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Heading } from "components/typography";
import {
  Section,
  BranchSection,
  BranchSectionItem,
  BranchImageContainer,
  BranchLabel,
  ContentContainer,
  MainSection,
  Image,
  ImageContainer,
  FakeSection,
} from "./styles";

import { BranchIcon } from "./icons";

export function Intro() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // keyframe
  const keyframe = (value) => {
    return containerTop + (containerHeight / 52) * value;
  };

  // content 1
  const contentOpacity1 = useTransform(
    scrollY,
    [keyframe(12), keyframe(13), keyframe(15), keyframe(16)],
    [0, 1, 1, 0]
  );
  const contentY1 = useTransform(
    scrollY,
    [keyframe(12), keyframe(16)],
    ["5%", "-5%"]
  );

  // content 2
  const contentOpacity2 = useTransform(
    scrollY,
    [keyframe(20), keyframe(21), keyframe(23), keyframe(24)],
    [0, 1, 1, 0]
  );
  const contentY2 = useTransform(
    scrollY,
    [keyframe(20), keyframe(24)],
    ["5%", "-5%"]
  );

  // branch

  const branchOpacity = useTransform(
    scrollY,
    [keyframe(36), keyframe(37)],
    [0, 1]
  );

  const branchOriginalOpacity = useTransform(
    scrollY,
    [keyframe(42), keyframe(44)],
    [1, 0]
  );

  // content 3
  const contentOpacity3 = useTransform(
    scrollY,
    [keyframe(44), keyframe(45)],
    [0, 1]
  );
  const contentY3 = useTransform(
    scrollY,
    [keyframe(44), keyframe(48)],
    ["10%", "0%"]
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
    <MainSection ref={container}>
      <FakeSection css={{ height: "300vh" }} />

      {/* Not only share code. */}
      <Section position="right" style={{ paddingTop: 0 }}>
        <ImageContainer>
          <Image
            alt="CodeSandbox Projects"
            src="/images/screenshots/product/default.svg"
          />
        </ImageContainer>

        <ContentContainer
          as={motion.div}
          style={{
            opacity: contentOpacity1,
            y: contentY1,
          }}
        >
          <Heading as="h3" size={3}>
            Not only
            <br />
            share code.
          </Heading>
          <Heading as="p" size={3} css={{ color: "$primary" }}>
            Share the <br /> context.
          </Heading>
        </ContentContainer>
      </Section>

      <FakeSection />

      {/* Sometimes it's not about code. */}
      <Section position="left">
        <ImageContainer>
          <Image
            alt="CodeSandbox Projects  - Preview"
            src="/images/screenshots/product/default.svg"
          />
        </ImageContainer>

        <ContentContainer
          as={motion.div}
          style={{
            opacity: contentOpacity2,
            y: contentY2,
          }}
        >
          <Heading as="h4" size={4}>
            Sometimes it's
            <br />
            not about code.
          </Heading>
          <Heading as="p" size={4} css={{ color: "$primary" }}>
            Get everybody on <br /> the same page.
          </Heading>
        </ContentContainer>
      </Section>

      <FakeSection css={{ height: "300vh" }} />

      {/*  BranchSection */}
      <BranchSection as={motion.div} style={{ opacity: branchOpacity }}>
        <BranchSectionItem
          as={motion.div}
          style={{
            opacity: branchOriginalOpacity,
          }}
        >
          <BranchImageContainer>
            <Image
              responsive
              alt="CodeSandbox Projects - Original Branch"
              src="/images/screenshots/product/default.svg"
            />
          </BranchImageContainer>

          <BranchLabel>
            <BranchIcon />
            <Heading size={5}>Feature branch</Heading>
            <div>
              <img src="/images/screenshots/avatars/avatar1.svg" />
              <img src="/images/screenshots/avatars/avatar2.svg" />
              <img src="/images/screenshots/avatars/avatar3.svg" />
            </div>
          </BranchLabel>
        </BranchSectionItem>
        <BranchSectionItem>
          <BranchImageContainer>
            <Image
              responsive
              alt="CodeSandbox Projects - Original Branch"
              src="/images/screenshots/product/default.svg"
            />
            <Image
              layer
              responsive
              alt="CodeSandbox Projects - Original Branch"
              src="/images/screenshots/product/new-branch.svg"
            />
          </BranchImageContainer>
          <BranchLabel>
            <BranchIcon />
            <Heading size={5}>Marco's branch</Heading>
            <img src="/images/screenshots/avatars/avatar1.svg" />
          </BranchLabel>
        </BranchSectionItem>
      </BranchSection>

      <FakeSection />

      {/* Prebuilt containers */}
      <Section>
        <ContentContainer
          as={motion.div}
          style={{
            opacity: contentOpacity3,
            y: contentY3,
          }}
        >
          <Heading as="h5" size={4} css={{ color: "$primary" }}>
            Prebuilt containers
          </Heading>
          <Heading
            as="p"
            size={4}
            css={{
              maxWidth: "37rem",
              "@large": { maxWidth: "25rem" },
              "@small": { maxWidth: "25rem" },
            }}
          >
            Spin up a new branch for any sized project in seconds.
          </Heading>
        </ContentContainer>
      </Section>

      <FakeSection />
    </MainSection>
  );
}
