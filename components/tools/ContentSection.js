import { styled } from "styles/stitches.config";

export const ContentSection = styled("div", {
  display: "flex",
  alignItems: "center",

  minHeight: "100vh",
  padding: "27rem 32rem",

  "@large": {
    padding: "13.5rem 24rem",
  },

  "@medium": {
    padding: "12.8rem 9.5rem",
    alignItems: "flex-start",
  },

  "@small": {
    padding: "6.8rem 6.2rem",
  },
});
