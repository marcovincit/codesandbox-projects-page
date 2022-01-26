import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Heading } from "components/typography";
import {
  Container,
  Section,
  Image,
  ImageContainer,
  ImageBaseLayer,
  Content,
  ContentContainer,
  Sticky,
  StickyImage,
} from "./styles";

export const Devtools = () => {
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // sticky x
  const x = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 8,
      containerTop + (containerHeight / 8) * 2,
      containerTop + (containerHeight / 8) * 3,
      containerTop + (containerHeight / 8) * 4,
      containerTop + (containerHeight / 8) * 5,
    ],
    ["50%", "30%", "30%", "0%", "0%"]
  );

  // sticky y
  const y = useTransform(
    scrollY,
    [containerTop, containerTop + containerHeight / 8],
    ["5%", "0%"]
  );

  // shadowOpacity
  const shadowOpacity = useTransform(
    scrollY,
    [containerTop - 1, containerTop],
    [0, 1]
  );

  // base opacity
  const opacity = useTransform(
    scrollY,
    [
      containerTop + containerHeight / 8,
      containerTop + (containerHeight / 8) * 2,
      containerTop + (containerHeight / 8) * 3,
      containerTop + (containerHeight / 8) * 4,
      containerTop + (containerHeight / 8) * 5,
      containerTop + (containerHeight / 8) * 7,
      containerTop + (containerHeight / 8) * 8,
    ],
    [1, 0.7, 0.7, 0.3, 0.3, 0.3, 0]
  );

  // CONTENT 1
  // content 1 opacity
  const contentOpacity1 = useTransform(
    scrollY,
    [
      containerTop + (containerHeight / 8) * 1.75,
      containerTop + (containerHeight / 8) * 2,
    ],
    [1, 0]
  );
  // content 1 y
  const contentY1 = useTransform(
    scrollY,
    [
      containerTop - containerHeight / 8,
      containerTop + (containerHeight / 8) * 1.5,
      containerTop + (containerHeight / 8) * 2,
    ],
    ["20%", "0%", "-10%"]
  );

  // CONTENT 2
  // content 2 opacity
  const contentOpacity2 = useTransform(
    scrollY,
    [
      containerTop + (containerHeight / 8) * 2,
      containerTop + (containerHeight / 8) * 2.25,
      containerTop + (containerHeight / 8) * 3.75,
      containerTop + (containerHeight / 8) * 4,
    ],
    [0, 1, 1, 0]
  );

  // content 2 y
  const contentY2 = useTransform(
    scrollY,
    [
      containerTop + (containerHeight / 8) * 2,
      containerTop + (containerHeight / 8) * 3.5,
      containerTop + (containerHeight / 8) * 4,
    ],
    ["10%", "0%", "-10%"]
  );

  // CONTENT 3
  // content 3 opacity
  const contentOpacity3 = useTransform(
    scrollY,
    [
      containerTop + (containerHeight / 8) * 4,
      containerTop + (containerHeight / 8) * 4.25,
      containerTop + (containerHeight / 8) * 6.5,
      containerTop + (containerHeight / 8) * 7.5,
    ],
    [0, 1, 1, 0]
  );

  // content 3 Y
  const contentY3 = useTransform(
    scrollY,
    [
      containerTop + (containerHeight / 8) * 4,
      containerTop + (containerHeight / 8) * 6,
    ],
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
    <Container ref={container}>
      {/* sticky */}
      <Sticky as={motion.div} style={{ "--shadow-opacity": shadowOpacity }}>
        <StickyImage
          as={motion.div}
          style={{
            x,
            y,
          }}
        >
          <ImageBaseLayer
            as={motion.div}
            style={{
              opacity,
            }}
          >
            <Image
              alt="CodeSandbox Projects - Interface Base"
              src="/images/product/base.svg"
            />
            <Image
              alt="CodeSandbox Projects - Interface Config"
              src="/images/product/config.svg"
              layer
            />
            <Image
              alt="CodeSandbox Projects - Interface Branch"
              src="/images/product/new-branch.svg"
              layer
              left
            />
          </ImageBaseLayer>
          <Image
            alt="CodeSandbox Projects - Command Pallet"
            as={motion.img}
            css={{
              willChange: "opacity",
            }}
            style={{ opacity: contentOpacity2 }}
            src="/images/product/command-pallete.svg"
            layer
          />
          <Image
            alt="CodeSandbox Projects - Interface Devtools"
            as={motion.img}
            css={{
              willChange: "opacity",
            }}
            style={{
              opacity: contentOpacity3,
            }}
            src="/images/product/devtools.svg"
            layer
          />
        </StickyImage>
      </Sticky>

      {/* content */}
      <Content>
        {/* Preconfigured environments */}
        <Section>
          <ImageContainer>
            <Image
              alt="CodeSandbox Projects - Interface Base"
              src="/images/product/base.svg"
            />
            <Image
              alt="CodeSandbox Projects - Interface Config"
              src="/images/product/config.svg"
              layer
            />
            <Image
              alt="CodeSandbox Projects - Interface Branch"
              src="/images/product/new-branch.svg"
              layer
              left
            />
          </ImageContainer>

          <ContentContainer
            as={motion.div}
            style={{ opacity: contentOpacity1, y: contentY1 }}
          >
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Preconfigured environments
            </Heading>
            <Heading as="p" size={4}>
              We detect your environment so you don't need to fiddle with
              configuration files.
            </Heading>
          </ContentContainer>
        </Section>

        {/* Command Palette */}
        <Section position="center">
          <ImageContainer>
            <ImageBaseLayer>
              <Image
                alt="CodeSandbox Projects - Interface Base"
                src="/images/product/base.svg"
              />
              <Image
                alt="CodeSandbox Projects - Interface Config"
                src="/images/product/config.svg"
                layer
                center
              />
              <Image
                alt="CodeSandbox Projects - Interface Branch"
                src="/images/product/new-branch.svg"
                layer
                left
              />
            </ImageBaseLayer>
            <Image
              alt="CodeSandbox Projects - Interface Command Pallet"
              src="/images/product/command-pallete.svg"
              layer
              center
            />
          </ImageContainer>

          <ContentContainer
            as={motion.div}
            style={{ opacity: contentOpacity2, y: contentY2 }}
          >
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Command Palette
            </Heading>
            <Heading as="p" size={4}>
              Access and complete any <br /> action in seconds with the <br />{" "}
              command pallet.
            </Heading>
          </ContentContainer>
        </Section>

        {/* Devtools */}
        <Section position="left">
          <ImageContainer>
            <ImageBaseLayer>
              <Image
                alt="CodeSandbox Projects - Interface Base"
                src="/images/product/base.svg"
              />
              <Image
                alt="CodeSandbox Projects - Interface Config"
                src="/images/product/config.svg"
                layer
                left
              />
              <Image
                alt="CodeSandbox Projects - Interface Branch"
                src="/images/product/new-branch.svg"
                layer
                left
              />
            </ImageBaseLayer>
            <Image
              alt="CodeSandbox Projects - Interface Devtools"
              src="/images/product/devtools.svg"
              layer
              left
            />
          </ImageContainer>

          <ContentContainer
            as={motion.div}
            style={{ opacity: contentOpacity3, y: contentY3 }}
          >
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Devtools
            </Heading>
            <Heading as="p" size={4}>
              We've bundled useful <br /> tools to help you get your <br /> work
              done faster and <br /> more efficiently.
            </Heading>
          </ContentContainer>
        </Section>
      </Content>
    </Container>
  );
};
