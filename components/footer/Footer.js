import { styled } from "styles/stitches.config";
import { Heading, Body } from "../typography";

import { Twitter } from "../icons/Twitter";
import { GitHub } from "../icons/GitHub";
import { Discord } from "../icons/Discord";

const Section = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "3.8rem 24rem",

  "@large": {
    padding: "3rem 18rem",
  },
  "@medium": {
    padding: "3.7rem 9.6rem",
  },
  "@small": {
    padding: "3rem",
    gap: "3rem",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Menu = styled("nav", {
  display: "flex",
  gap: "2rem",
});

export function Footer() {
  return (
    <Section>
      <Body size={3} css={{ color: "$title" }}>
        Copyright © 2022 CodeSandbox BV.
      </Body>
      <Menu>
        <Body size={3}>
          <GitHub />
        </Body>
        <Body size={3}>
          <Twitter />
        </Body>
        <Body size={3}>
          <Discord />
        </Body>
      </Menu>
    </Section>
  );
}
