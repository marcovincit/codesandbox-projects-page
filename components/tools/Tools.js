import { lightTheme } from "styles/stitches.config";

import { Section } from "./Section";
import { Headline } from "./Headline";
import { ContentSection } from "./ContentSection";
import { ContentSubSection } from "./ContentSubSection";
import { Heading, Body } from "../typography";
import { AppStore } from "components/icons/AppStore";

export function Tools() {
  return (
    <>
      <Section className={lightTheme}>
        <Headline />
        <ContentSection>
          <ContentSubSection>
            <div>
              <Heading as="h3" size={4} css={{ color: "$blue" }}>
                We are redefining collaborative code.
              </Heading>
              <Heading as="p" size={4}>
                Meet the new <br /> CodeSandbox Extension <br /> for VSCode.
              </Heading>
            </div>
          </ContentSubSection>
        </ContentSection>
        <ContentSection>
          <ContentSubSection>
            <div>
              <Heading as="h3" size={4}>
                Code from your <br /> iPad or iPhone.
              </Heading>
              <Heading as="p" size={4} css={{ color: "$secondary" }}>
                Contribute on the <br /> go with Play.js
              </Heading>
            </div>
            <AppStore />
          </ContentSubSection>
        </ContentSection>
      </Section>
    </>
  );
}
