import { styled, lightTheme } from "styles/stitches.config";
import { Heading, Body } from "../typography";
import { CTA } from "../cta";

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "9rem 3rem",
});

const SubSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "3rem",
});

export function Hero() {
  return (
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
  );
}
