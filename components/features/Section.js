import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10rem 16rem",
  padding: "27rem 32rem",

  "@large": {
    padding: "13.5rem 24rem",
    gap: "10rem 12rem",
  },

  "@medium": {
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "12.8rem 9.5rem",
    gap: "11.8rem 13rem",
  },

  "@small": {
    gridTemplateColumns: "repeat(1, 1fr)",
    padding: "6.8rem 6.2rem",
  },
});
