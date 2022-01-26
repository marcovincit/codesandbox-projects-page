import { Twitter, GitHub, Discord } from "./icons";
import { Body } from "../typography";
import { Container, Menu } from "./styles";

export const Footer = () => {
  return (
    <Container>
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
    </Container>
  );
};
