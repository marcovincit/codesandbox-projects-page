import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  height: "37.5vw",
  width: "auto",

  "@large": {
    height: "75vh",
  },

  "@medium": {
    height: "59.8rem",
    position: "relative",
  },

  "@small": {
    height: "47.3rem",
  },
});
