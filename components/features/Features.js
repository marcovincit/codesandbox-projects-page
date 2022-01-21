import { data } from "./data";
import { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Heading, Body } from "../typography";
import { Section } from "./Section";
import { Grid } from "./Grid";
import { Item } from "./Item";
import { IconContainer } from "./IconContainer";
import { Content } from "./Content";

import { useWindowSize } from "hooks/useWindowSize";

export const Features = () => {
  const windowSize = useWindowSize();
  const { scrollY } = useViewportScroll();

  // container
  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // opacity
  const opacity = useTransform(
    scrollY,
    [
      containerTop + containerHeight - windowSize.height,
      containerTop + containerHeight,
    ],
    [1, 0]
  );

  // fixed
  const y = useTransform(
    scrollY,
    [
      containerTop + containerHeight - windowSize.height,
      containerTop + containerHeight,
    ],
    ["0%", "30%"]
  );

  // useEffect

  useEffect(() => {
    if (!container.current) return;
    const onResize = () => {
      setContainerTop(container.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  // return

  return (
    <Section ref={container}>
      <Grid as={motion.div} style={{ opacity, y }}>
        {data.map(({ icon, title, body }, key) => {
          return (
            <Item key={key}>
              <IconContainer>{icon}</IconContainer>
              <Content>
                <Heading as="h4" size={5}>
                  {title}
                </Heading>
                <Body as="p" size={2}>
                  {body}
                </Body>
              </Content>
            </Item>
          );
        })}
      </Grid>
    </Section>
  );
};
