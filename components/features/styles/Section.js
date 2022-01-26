import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  display: "flex",
  alignItems: "center",
  willChange: "transform, opacity",
  minHeight: "100vh",
  padding: "27rem 32rem",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",

  "@large": {
    padding: "13.5rem 24rem",
  },

  "@medium": {
    padding: "12.8rem 9.5rem",
    alignItems: "flex-end",
  },

  "@small": {
    padding: "6.2rem 3.2rem",
  },
});
