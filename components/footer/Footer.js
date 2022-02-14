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
        <Body
          size={3}
          as="a"
          title="Go to Github"
          rel="noreferrer noopener"
          href="https://github.com/codesandbox/codesandbox-client"
          target="_blank"
        >
          <GitHub />
        </Body>
        <Body
          size={3}
          as="a"
          title="Go to Twitter"
          rel="noreferrer noopener"
          href="https://twitter.com/codesandbox"
          target="_blank"
        >
          <Twitter />
        </Body>
        <Body
          size={3}
          as="a"
          title="Join our Discord Server"
          rel="noreferrer noopener"
          href="https://discord.com/invite/5BpufEP7MH"
          target="_blank"
        >
          <Discord />
        </Body>
      </Menu>
    </Container>
  );
};
