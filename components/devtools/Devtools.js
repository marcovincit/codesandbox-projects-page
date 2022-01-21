import { styled } from "styles/stitches.config";
import { Heading } from "../typography";
import { Section } from "./Section";

export const ContentSection = styled("div", {
  width: "50%",
  display: "flex",
  alignItems: "center",

  "@medium": {
    width: "100%",
  },
});

export const ContentSubSection = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "9rem 8rem 9rem 32rem",

  "@large": {
    padding: "6.7rem 6rem 6.7rem 24rem",
  },

  "@medium": {
    padding: "0!important",
  },

  variants: {
    left: {
      true: {
        padding: "9rem 8rem 9rem 32rem",

        "@large": {
          padding: "6.7rem 6rem 6.7rem 24rem",
        },
      },
    },
  },
});

export const ImageSection = styled("div", {
  width: "50%",
  display: "none",
  alignItems: "center",
  overflow: "hidden",
  pointerEvents: "none",
  position: "relative",

  "@medium": {
    width: "100%",
    overflow: "initial",
  },

  variants: {
    center: {
      true: {
        display: "flex",
        justifyContent: "center",
      },
    },

    left: {
      true: {
        display: "flex",
        justifyContent: "flex-end",
      },
    },
  },
});

const Image = styled("img", {
  pointerEvents: "none",

  // height: "37.5vw",

  "@large": {
    height: "75vh",
  },

  "@medium": {
    height: "59.8rem",
  },

  "@small": {
    height: "47.3rem",
  },

  variants: {
    layer: {
      true: {
        position: "absolute",
        top: 0,
        left: 0,
      },
    },

    center: {
      true: {
        left: "50%",
        transform: "translateX(-50%)",
      },
    },

    left: {
      true: {
        left: "initial",
        right: 0,
      },
    },
  },
});

export const Devtools = () => {
  return (
    <>
      <Section>
        <ImageSection hideDesktop>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer />
        </ImageSection>
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Preconfigured environments
            </Heading>
            <Heading as="p" size={4}>
              We detect your environment <br /> so you don't need to fiddle with{" "}
              <br /> configuration files.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>

      <Section>
        <ImageSection center hideDesktop>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer center />
          <Image src="/images/product/command-pallete.svg" layer center />
        </ImageSection>
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Command Palette
            </Heading>
            <Heading as="p" size={4}>
              Access and complete any <br /> action in seconds with the <br />{" "}
              command pallet.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>

      <Section>
        <ImageSection left hideDesktop>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer left />
          <Image src="/images/product/devtools.svg" layer left />
        </ImageSection>
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Devtools
            </Heading>
            <Heading as="p" size={4}>
              We've bundled useful <br /> tools to help you get your <br /> work
              done faster and <br /> more efficiently.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>
    </>
  );
};
