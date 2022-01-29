import { Lock } from "./icons/Lock";
import { Heading, Body } from "components/typography";
import { HeadlineSection, HeadlineSubSection } from "./styles";

export const Headline = () => {
  return (
    <HeadlineSection>
      <HeadlineSubSection>
        <Lock />

        <div>
          <Heading size={2} as="h2">
            No lock-in.
          </Heading>
          <Heading
            size={2}
            as="h3"
            css={{
              color: "$support-text",
            }}
          >
            Use the tools
            <br />
            you love.
          </Heading>
        </div>

        <Body
          size={1}
          as="p"
          css={{
            maxWidth: "50rem",
            "@small": {
              maxWidth: "28rem",
            },
          }}
        >
          With your CodeSandbox, you can code from any device, using VSCode,
          play.js, or your browser.
        </Body>
      </HeadlineSubSection>
    </HeadlineSection>
  );
};
