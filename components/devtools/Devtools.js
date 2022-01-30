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

  // keyframe
  const keyframe = (value) => {
    return containerTop + (containerHeight / 16) * value;
  };

  // sticky
  const x = useTransform(scrollY, [keyframe(0), keyframe(10)], ["50%", "0%"]);
  const y = useTransform(scrollY, [keyframe(12), keyframe(16)], ["0%", "0%"]);
  const scale = useTransform(scrollY, [keyframe(11), keyframe(16)], [1, 1.1]);

  const opacity = useTransform(
    scrollY,
    [keyframe(4), keyframe(5), keyframe(11), keyframe(12)],
    [1, 0.1, 0.1, 1]
  );

  // Preconfigured environments

  const contentOpacity1 = useTransform(
    scrollY,
    [keyframe(0), keyframe(2), keyframe(3), keyframe(4)],
    [0, 1, 1, 0]
  );
  const contentY1 = useTransform(
    scrollY,
    [keyframe(0), keyframe(4)],
    ["10%", "-10%"]
  );

  // Command Palette
  const content2ImageValue = useTransform(
    scrollY,
    [keyframe(4), keyframe(4) + 1, keyframe(8) - 1, keyframe(8)],
    [0, 1, 1, 0]
  );
  const contentOpacity2 = useTransform(
    scrollY,
    [keyframe(4), keyframe(5), keyframe(7), keyframe(8)],
    [0, 1, 1, 0]
  );
  const contentY2 = useTransform(
    scrollY,
    [keyframe(4), keyframe(8)],
    ["10%", "-10%"]
  );

  // Devtools
  const content3ImageValue = useTransform(
    scrollY,
    [keyframe(8), keyframe(8) + 1, keyframe(11) - 1, keyframe(11)],
    [0, 1, 1, 0]
  );
  const contentOpacity3 = useTransform(
    scrollY,
    [keyframe(8), keyframe(9), keyframe(10), keyframe(11)],
    [0, 1, 1, 0]
  );
  const contentY3 = useTransform(
    scrollY,
    [keyframe(8), keyframe(11)],
    ["10%", "-10%"]
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
      <Sticky>
        <StickyImage
          as={motion.div}
          style={{
            x,
            y,
            scale,
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
            style={{ "--image-state": content2ImageValue }}
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
              "--image-state": content3ImageValue,
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
              We detect your environment <br /> so you don't need to fiddle{" "}
              <br /> with configuration files.
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
