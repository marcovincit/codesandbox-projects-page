import { styled } from "styles/stitches.config";

import { Heading } from "components/typography";

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  padding: "24rem",

  "@large": {
    padding: "18rem",
  },

  "@medium": {
    padding: "8.5rem 9.6rem",
    justifyContent: "flex-start",
  },

  "@small": {
    padding: "6.8rem 4.6rem",
  },

  variants: {
    side: {
      left: {
        paddingLeft: "128rem",
        justifyContent: "flex-end",

        "@large": {
          paddingLeft: "96rem",
        },

        "@medium": {
          padding: "8.5rem 9.6rem",
        },

        "@small": {
          padding: "6.8rem 4.6rem",
        },
      },
    },
  },
});

export function Intro() {
  return (
    <>
      <Section css={{ padding: 0, alignItems: "center" }}>
        <img style={{ maxWidth: "161.8rem" }} src="/images/projects.png" />
      </Section>
      <Section>
        <Heading as="h3" size={3}>
          Not only share
          <br />
          environment.
        </Heading>
        <Heading as="h4" size={3} css={{ color: "$primary" }}>
          Share the <br /> context.
        </Heading>
      </Section>
      <Section side="left">
        <Heading as="h3" size={4}>
          Sometimes it's
          <br />
          not about code.
        </Heading>
        <Heading as="h4" size={4} css={{ color: "$primary" }}>
          Get everybody on <br />
          the same page.
        </Heading>
      </Section>
      <Section>
        <Heading as="h4" size={4} css={{ color: "$primary" }}>
          Prebuilt containers
        </Heading>
        <Heading as="h3" size={4} css={{ maxWidth: "50rem" }}>
          Spin up a new branch for any sized project in seconds.
        </Heading>
      </Section>
    </>
  );
}
