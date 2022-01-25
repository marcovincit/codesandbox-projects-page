import { styled } from "styles/stitches.config";

export const ImageContainer = styled("div", {
  display: "none",
  alignItems: "center",
  overflow: "hidden",
  pointerEvents: "none",
  position: "relative",

  "@medium": {
    overflow: "initial",
    display: "flex",
  },
});
