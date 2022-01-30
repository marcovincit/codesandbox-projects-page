import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Heading } from "components/typography";
import {
  Section,
  BranchSection,
  BranchSectionItem,
  BranchLabel,
  ContentContainer,
  MainSection,
  Image,
  ImageContainer,
  FakeSection,
} from "./styles";
import { Product } from "./Product";

import { BranchIcon } from "./icons";

export function Intro() {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // keyframe
  const keyframe = (value) => {
    return containerTop + (containerHeight / 44) * value;
  };

  // content 1
  const contentOpacity1 = useTransform(
    scrollY,
    [keyframe(8), keyframe(9), keyframe(11), keyframe(12)],
    [0, 1, 1, 0]
  );
  const contentY1 = useTransform(
    scrollY,
    [keyframe(8), keyframe(12)],
    ["5%", "-5%"]
  );

  // content 2
  const contentOpacity2 = useTransform(
    scrollY,
    [keyframe(16), keyframe(17), keyframe(19), keyframe(20)],
    [0, 1, 1, 0]
  );
  const contentY2 = useTransform(
    scrollY,
    [keyframe(16), keyframe(20)],
    ["5%", "-5%"]
  );

  // branch
  const branchY = useTransform(
    scrollY,
    [keyframe(32), keyframe(36)],
    ["0%", "-100%"]
  );

  const branchOpacity = useTransform(
    scrollY,
    [keyframe(28), keyframe(29)],
    [0, 1]
  );

  // content 3
  const contentOpacity3 = useTransform(
    scrollY,
    [keyframe(36), keyframe(37)],
    [0, 1]
  );
  const contentY3 = useTransform(
    scrollY,
    [keyframe(36), keyframe(40)],
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
      <Section css={{ height: "200vh", "@medium": { display: "none" } }}>
        <Product />
      </Section>

      {/* Not only share code. */}
      <Section position="right" style={{ paddingTop: 0 }}>
        <ImageContainer>
          <Image
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/base.svg"
          />
          <Image
            layer
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/original-branch.svg"
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
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/base.svg"
          />
          <Image
            layer
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/original-branch.svg"
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

      <FakeSection css={{ background: "red" }} />
      <FakeSection css={{ background: "red" }} />

      {/*  BranchSection */}
      <BranchSection as={motion.div} style={{ opacity: branchOpacity }}>
        <BranchSectionItem
          as={motion.div}
          style={{
            y: branchY,
          }}
        >
          <Image
            responsive
            css={{ opacity: 0, "@medium": { opacity: 1 } }}
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/base.svg"
          />
          <Image
            layer
            css={{ opacity: 0, "@medium": { opacity: 1 } }}
            responsive
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/original-branch.svg"
          />

          <BranchLabel>
            <BranchIcon />
            <Heading size={5}>Feature branch</Heading>
            <div>
              <img src="/images/product/avatar1.svg" />
              <img src="/images/product/avatar2.svg" />
              <img src="/images/product/avatar3.svg" />
            </div>
          </BranchLabel>
        </BranchSectionItem>
        <BranchSectionItem>
          <Image
            responsive
            css={{ opacity: 0, "@medium": { opacity: 1 } }}
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/base.svg"
          />
          <Image
            layer
            css={{ opacity: 0, "@medium": { opacity: 1 } }}
            responsive
            alt="CodeSandbox Projects - Interface Command Pallet"
            src="/images/product/new-branch.svg"
          />
          <BranchLabel>
            <BranchIcon />
            <Heading size={5}>Marco's branch</Heading>
            <img src="/images/product/avatar1.svg" />
          </BranchLabel>
        </BranchSectionItem>
      </BranchSection>

      <FakeSection css={{ background: "red" }} />

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

      <FakeSection css={{ background: "red" }} />
    </MainSection>
  );
}
