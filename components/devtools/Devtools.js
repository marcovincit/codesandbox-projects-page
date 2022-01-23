import { Heading } from "../typography";
import { Section } from "./Section";
import { ContentSection } from "./ContentSection";
import { ContentSubSection } from "./ContentSubSection";
import { ImageSection } from "./ImageSection";
import { Image } from "./Image";

import { ImageBaseContainer } from "./ImageBaseContainer";

import { styled } from "styles/stitches.config";

export const MainSection = styled("div", {
    position:"relative",
    display: "flex",
    alignItems: 'flex-start'
  

  });


export const Stiky = styled("div", {

  
  width:'50%',
    position: "sticky",
    top: '0%',
    overflow: "hidden",
    minHeight: '100vh',


    display:'flex',
    alignItems: 'center',

    pointerEvents: "none",




    "@medium":{
      display: "none"
    }
  

  });

export const StikyImage = styled("div", {
    position: "relative"

  });

  
export const Content = styled("div", {
  width:'50%', 

  "@medium": {
    width: "100%"
  }

  });

export const Devtools = () => {
  return (
    <MainSection>

     

<Content style={{

}}>
      <Section>
        <ImageSection>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer />
        </ImageSection>

        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Preconfigured environments
            </Heading>
            <Heading as="p" size={4}>
              We detect your environment <br /> so you don't need to fiddle with{" "}
              <br /> configuration files.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>

      <Section>
        <ImageSection center>
        <ImageBaseContainer>
          <Image src="/images/product/base.svg" />
        
          <Image src="/images/product/config.svg" layer center /></ImageBaseContainer>
          <Image src="/images/product/command-pallete.svg" layer center />
        </ImageSection>
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Command Palette
            </Heading>
            <Heading as="p" size={4}>
              Access and complete any <br /> action in seconds with the <br />{" "}
              command pallet.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>

      <Section>
        <ImageSection left>
        <ImageBaseContainer>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer left />
          <Image src="/images/product/new-branch.svg" layer left />
          </ImageBaseContainer>
          <Image src="/images/product/devtools.svg" layer left />
        </ImageSection>
        <ContentSection>
          <ContentSubSection>
            <Heading as="h3" size={4} css={{ color: "$primary" }}>
              Devtools
            </Heading>
            <Heading as="p" size={4}>
              We've bundled useful <br /> tools to help you get your <br /> work
              done faster and <br /> more efficiently.
            </Heading>
          </ContentSubSection>
        </ContentSection>
      </Section>



      </Content>



      <Stiky>
        <StikyImage>
          <Image src="/images/product/base.svg" />
          <Image src="/images/product/config.svg" layer />
        </StikyImage>
      </Stiky>

    </MainSection>
  );
};
