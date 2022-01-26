import { Heading, Body } from "components/typography";
import { CTA, Arrow } from "components/cta";
import { Container, Content } from "./styles";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <Container>
      <Content>
        <Logo />
        <Heading size={2} as="h1">
          Development
          <br />
          reimagined.
        </Heading>

        <Body
          size={1}
          as="p"
          css={{ maxWidth: "50rem", "@small": { maxWidth: "32rem" } }}
        >
          Experience the future of web development and build projects anywhere
          and anytime with your team.
        </Body>
        <CTA as="a" href="#" target="_blank">
          Early access <Arrow />
        </CTA>
      </Content>
    </Container>
  );
}
