import { styled } from "styles/stitches.config";

import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./lottie.json";

export const Stage = styled("div", {
  with: "100%",
  height: "100%",

  position: "fixed",
  top: 0,
  left: 0,

  "&>svg": {
    width: "auto!important",
    height: "100%!important",
    fill: "red",
  },
});

export const Product = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData,
    });

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
