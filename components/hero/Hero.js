import { Heading, Body } from "components/typography";
import { CTA, Arrow } from "components/cta";
import { Container, Content } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <Heading size={2} as="h1">
          Development
          <br />
          reimagined.
        </Heading>

        <Body size={1} as="p">
          Experience the future of web development and build <br /> projects
          anywhere and anytime with your team.
        </Body>
        <CTA as="a" href="#" target="_blank">
          Early access <Arrow />
        </CTA>
      </Content>
    </Container>
  );
}
