import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  width: "auto",
  height: "75vh",
  maxHeight: "48vw",

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
