import { styled } from "styles/stitches.config";

export const Phone = styled("img", {
  width: "auto",
  height: "58.3vh",
  maxHeight: "63rem",

  position: "absolute",
  right: 0,
  bottom: 0,

  "@large": {
    width: "auto",
    height: "47.2rem",
  },

  "@medium": {
    width: "auto",
    height: "51vh",
    right: "auto",
    left: 0,
  },

  "@small": {
    width: "auto",
    height: "50.8vh",
  },
});
