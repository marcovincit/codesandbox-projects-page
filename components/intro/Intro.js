import { styled } from "styles/stitches.config";
import { Heading } from "components/typography";
import { Section } from "./Section";

export function Intro() {
  return (
    <>
      <Section css={{ padding: 0, alignItems: "center" }}>
        <img
          style={{ width: "100%", maxWidth: "161.8rem" }}
          src="/images/projects.png"
        />
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
