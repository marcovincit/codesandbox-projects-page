import { content } from "./content";

import { Heading, Body } from "../typography";
import { Section } from "./Section";
import { Item } from "./Item";
import { IconContainer } from "./IconContainer";
import { SectionContent } from "./SectionContent";

export function Features() {
  return (
    <Section>
      {content.map(({ icon, title, body }, key) => {
        return (
          <Item key={key}>
            <IconContainer>{icon}</IconContainer>
            <SectionContent>
              <Heading as="h4" size={5}>
                {title}
              </Heading>
              <Body as="p" size={2}>
                {body}
              </Body>
            </SectionContent>
          </Item>
        );
      })}
    </Section>
  );
}
