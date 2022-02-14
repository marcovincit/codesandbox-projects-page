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
  AvatarsContainer,
} from "./styles";

import { BranchIcon, Avatar1, Avatar2, Avatar3, Avatar4 } from "./icons";

export const Intro = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // keyframe
  const keyframe = (value) => {
    return containerTop + (containerHeight / 56) * value;
  };

  // content 1
  const contentOpacity1 = useTransform(
    scrollY,
    [keyframe(16), keyframe(17), keyframe(19), keyframe(20)],
    [0, 1, 1, 0]
  );
  const contentY1 = useTransform(
    scrollY,
    [keyframe(16), keyframe(20)],
    ["5%", "-5%"]
  );

  // content 2
  const contentOpacity2 = useTransform(
    scrollY,
    [keyframe(24), keyframe(25), keyframe(27), keyframe(28)],
    [0, 1, 1, 0]
  );
  const contentY2 = useTransform(
    scrollY,
    [keyframe(24), keyframe(28)],
    ["5%", "-5%"]
  );

  // branch

  const branchOpacity = useTransform(
    scrollY,
    [keyframe(40), keyframe(41)],
    [0, 1]
  );

  const branchOriginalOpacity = useTransform(
    scrollY,
    [keyframe(46), keyframe(48)],
    [1, 0]
  );

  // content 3
  const contentOpacity3 = useTransform(
    scrollY,
    [keyframe(48), keyframe(49)],
    [0, 1]
  );
  const contentY3 = useTransform(
    scrollY,
    [keyframe(48), keyframe(52)],
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
      <FakeSection css={{ height: "400vh" }} />

      {/* Not only share code. */}
      <Section position="right" style={{ paddingTop: 0 }}>
        <ImageContainer>
          <Image
            alt="CodeSandbox Projects"
            src="/images/screenshots/product/default.svg"
          />
          <Image
            layer
            alt="CodeSandbox Projects"
            src="/images/screenshots/product/users.svg"
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
          <Image
            layer
            alt="CodeSandbox Projects"
            src="/images/screenshots/product/users.svg"
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
            Sometimes it&apos;s
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
            <Image
              layer
              responsive
              alt="CodeSandbox Projects - Original Branch"
              src="/images/screenshots/product/users.svg"
            />
          </BranchImageContainer>

          <BranchLabel>
            <BranchIcon />
            <Heading size={5}>Feature branch</Heading>
            <AvatarsContainer>
              <Avatar1 />
              <Avatar2 />
              <Avatar3 />
            </AvatarsContainer>
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
            <Heading size={5}>Marco&apos;s branch</Heading>
            <Avatar4 />
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
};
