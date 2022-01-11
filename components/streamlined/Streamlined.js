import { styled, lightTheme } from "styles/stitches.config";
import { Display } from "components/typography";

import { useState, useLayoutEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Section = styled("section", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Square = styled("rect", {
  x: "50%",
  y: "50%",
  width: 600,
  height: 600,
  fill: "transparent",
  stroke: "$primary",
  strokeWidth: 30,
  transform: "translate(-300px, -300px)",
});

export function Streamlined() {
  const { scrollY } = useViewportScroll();

  const container = useRef(null);
  const [containerTop, setContainerTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const scrollRangeY = [
    containerTop - containerHeight,
    containerTop + containerHeight,
  ];
  const progressRangeY = [1.5, 0.5];
  const scale = useTransform(scrollY, scrollRangeY, progressRangeY);
  const x = useTransform(scrollY, scrollRangeY, ["100%", "-100%"]);

  useLayoutEffect(() => {
    if (!container.current) return;
    const onResize = () => {
      setContainerTop(container.current.offsetTop);
      setContainerHeight(container.current.offsetHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [container]);

  return (
    <Section ref={container}>
      <svg width="100%" viewBox="0 0 1920 1080">
        <Square
          as={motion.rect}
          style={{
            x: -300,
            y: -300,
            scale,
          }}
        />
        {/* 
        <Display as={motion.text} x={-200} y={650} css={{ fill: "$title" }}>
          Streamlined experience
        </Display> */}

        <clipPath id="myClip">
          <text x={-200} y={650} style={{ fontSize: "300" }}>
            Streamlined experience
          </text>
        </clipPath>

        <rect x="0" y="0" width="1000" height="1080" id="mask" />

        <use clip-path="url(#myClip)" href="#mask" fill="red" />
      </svg>
    </Section>
  );
}
