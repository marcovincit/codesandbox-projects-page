import { styled } from "styles/stitches.config";

import { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "./lottie.json";

import { useWindowSize } from "hooks/useWindowSize";

export const Stage = styled("div", {
  with: "100vw",
  height: "100vh",

  pointerEvents: "none",

  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  "&>svg": {
    width: "auto!important",
    height: "100%!important",
    fill: "red",
  },
});

export const Product = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const animDuration = 1080 * 8;
    const anim = lottie.loadAnimation(
      {
        container: lottieRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,

        animationData,
      },
      []
    );

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }

    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <Stage ref={lottieRef}></Stage>;
};
