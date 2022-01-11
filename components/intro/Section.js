import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: "27rem 24rem",

  "@large": {
    padding: "18rem",
  },

  "@medium": {
    padding: "12.8rem 9.5rem",
  },

  "@small": {
    padding: "6.8rem 6.2rem",
  },
});
