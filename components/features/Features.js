import { Heading } from "../typography";
import { Section } from "./Section";

import { SectionGrid } from "./SectionGrid";

import { styled } from "styles/stitches.config";

const Content = styled("div", {
  maxWidth: "50rem",
  "@large": {
    maxWidth: "34rem",
  },
});

export const Features = () => {
  return (
    <>
      <Section>
        <Content>
          <Heading as="h3" size={4} css={{ color: "$primary" }}>
            Preconfigured environments
          </Heading>
          <Heading as="p" size={4}>
            You don't need to fiddle with configuration files, we detect your
            environment.
          </Heading>
        </Content>
      </Section>
      <Section>
        <Content>
          <Heading as="h3" size={4} css={{ color: "$primary" }}>
            Command Palette
          </Heading>
          <Heading as="p" size={4}>
            Access and complete any action in seconds with the command pallet.
          </Heading>
        </Content>
      </Section>
      <Section>
        <Content>
          <Heading as="h3" size={4} css={{ color: "$primary" }}>
            Devtools
          </Heading>
          <Heading as="p" size={4}>
            We've bundled useful tools to help you get your work done faster and
            more efficiently.
          </Heading>
        </Content>
      </Section>
      <SectionGrid />
    </>
  );
};
