import { lightTheme } from "styles/stitches.config";

import { Section } from "./Section";
import { Image } from "./Image";
import { Headline } from "./Headline";
import { ContentSection } from "./ContentSection";
import { SubSection } from "./SubSection";
import { ContentSubSection } from "./ContentSubSection";
import { MockupSection } from "./MockupSection";
import { Heading, Body } from "../typography";
import { AppStore } from "components/icons/AppStore";

export function Tools() {
  return (
    <>
      <Section className={lightTheme}>
        <Headline />

        <SubSection hideMobile>
          <MockupSection left>
            <Image src="/images/iPad.png" />
          </MockupSection>
          <MockupSection>
            <Image src="/images/VSCode.jpg" />
          </MockupSection>
        </SubSection>

        <SubSection>
          <ContentSection>
            <ContentSubSection>
              <Heading as="h3" size={4} css={{ color: "$blue" }}>
                Meet the new
                <br />
                CodeSandbox Extension
                <br />
                for VSCode.
              </Heading>
              <Heading as="p" size={4}>
                We are redefining
                <br />
                collaborative code.
              </Heading>
            </ContentSubSection>
          </ContentSection>
          <MockupSection hideDesktop>
            <Image src="/images/VSCode.jpg" />
          </MockupSection>
        </SubSection>

        <SubSection left>
          <ContentSection>
            <ContentSubSection left>
              <Heading as="h3" size={4}>
                Code from your
                <br />
                iPad or iPhone.
              </Heading>
              <Heading as="p" size={4} css={{ color: "$secondary" }}>
                Contribute on the
                <br />
                go with Play.js
              </Heading>
            </ContentSubSection>
          </ContentSection>
          <MockupSection left hideDesktop>
            <Image src="/images/iPad.png" />
          </MockupSection>
        </SubSection>
      </Section>
    </>
  );
}
