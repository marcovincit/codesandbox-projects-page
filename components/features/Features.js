import { styled } from "styles/stitches.config";

import { Heading, Body } from "../typography";
import Prebuilds from "../icons/Prebuilds";

const Section = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10rem 16rem",
  padding: "27rem 32rem",

  "@large": {
    padding: "13.5rem 24rem",
    gap: "10rem 12rem",
  },

  "@medium": {
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "12.8rem 9.5rem",
    gap: "11.8rem 13rem",
  },

  "@small": {
    gridTemplateColumns: "repeat(1, 1fr)",
    padding: "6.8rem 6.2rem",
  },
});

const Item = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
});

const IconContainer = styled("div", {
  width: "7.8rem",
  height: "7.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2rem",
  background: "$surface",
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export function Features() {
  return (
    <Section>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
      <Item>
        <IconContainer>
          <Prebuilds />
        </IconContainer>
        <Content>
          <Heading as="h4" size={5}>
            Prebuilds
          </Heading>
          <Body as="p" size={2}>
            CodeSandbox continuously prebuilds your branches. This means no more
            waiting for dependencies to be downloaded and builds to finish.
          </Body>
        </Content>
      </Item>
    </Section>
  );
}
