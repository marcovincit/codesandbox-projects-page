import { useEffect, useRef, useState } from "react";
import { styled } from "styles/stitches.config";

export const Canvas = styled("canvas", {
  maxWidth: "100vw",
  maxHeight: "100vh",

  // pointerEvents: "none",

  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
});

export const Product = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // maxFrames
    const maxFrames = 147;

    // canvas
    const canvas = canvasRef.current;

    // size
    canvas.width = 1158;
    canvas.height = 770;

    // context
    const context = canvas.getContext("2d");

    // img
    const img = new Image();

    img.src =
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg";

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const maxScrollTop = 1080 * 3;
      const scrollFraction = scrollY / maxScrollTop;
      const frameIndex = Math.min(
        maxFrames - 1,
        Math.ceil(scrollFraction * maxFrames)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    // const preloadImages = () => {
    //   for (let i = 1; i < maxFrames; i++) {
    //     const img = new Image();
    //     img.src = currentImage(i);
    //   }
    // };

    // preloadImages();
  }, []);

  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
    </>
  );
};
