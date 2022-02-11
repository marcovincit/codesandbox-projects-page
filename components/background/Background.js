import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useWindowSize } from "hooks/useWindowSize";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Background = ({ active }) => {
  const { scrollY } = useViewportScroll();
  const windowSize = useWindowSize();
  const [cursor, setCursor] = useState({ x: 300, y: 500 });

  // opacity
  const opacity = useTransform(scrollY, [0, windowSize.height], [1, 0]);

  // useEffect
  useEffect(() => {
    // if (!windowSize) return;
    const onMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Container
      as={motion.div}
      style={{
        opacity,
        "--is-active": active ? 0.8 : 0.4,
        "--cursor-x": cursor.x / windowSize.width,
        "--cursor-y": cursor.y / windowSize.height,
      }}
    ></Container>
  );
};
