import { HeadlineSection } from "./HeadlineSection";
import { HeadlineSubSection } from "./HeadlineSubSection";
import { Heading, Body } from "../typography";
import Lock from "../icons/Lock";

export const Headline = () => {
  return (
    <HeadlineSection>
      <HeadlineSubSection>
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
      </HeadlineSubSection>
    </HeadlineSection>
  );
};
