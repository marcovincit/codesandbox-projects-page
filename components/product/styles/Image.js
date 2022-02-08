import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  width: "auto",
  height: "75vh",
  maxHeight: "48vw",
  // top: "42.2vw",
  // left: "50%",
  // position: "fixed",
  // transform: "translateX(-50%)",

  pointerEvents: "none",
  zIndex: 0,
  position: "relative",

  variants: {
    layer: {
      true: {
        position: "absolute",
        top: 0,
        left: 0,
      },
    },
  },
});
