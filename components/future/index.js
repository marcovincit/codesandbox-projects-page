import { styled, lightTheme } from "styles/stitches.config";

import { Section, SubSection } from "../section";

import { Heading, Body } from "../typography";
import { CTA } from "../cta";

import Lock from "../icons/Lock";

export default function Hero() {
  return (
    <>
      <Section>
        <SubSection>
          <Heading size={2} as="h1">
            Development
            <br />
            reimagined.
          </Heading>

          <Body size={1} as="p">
            Experience the future of web development and build <br /> projects
            anywhere and anytime with your team.
          </Body>
          <CTA>Early access</CTA>
        </SubSection>
      </Section>

      <Section className={lightTheme} css={{ background: "$background" }}>
        <SubSection>
          <Lock />

          <Heading size={2} as="h1">
            No lock-in.
            <br />
            Use the tools
            <br />
            you love.
          </Heading>

          <Body size={1} as="p">
            With your CodeSandbox, you can code from any device,
            <br />
            using VSCode, play.js, or your browser.
          </Body>
        </SubSection>
      </Section>

      <Section>
        <SubSection>
          <Heading size={2} as="h1">
            Get ready for
            <br />
            the future.
          </Heading>

          <Body size={1} as="p">
            Experience the future of web development first and build projects
            <br /> anywhere and anytime with your team.
          </Body>
          <CTA>Early access</CTA>
        </SubSection>
      </Section>
    </>
  );
}
