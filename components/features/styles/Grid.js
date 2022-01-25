import { styled } from "styles/stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10rem 16rem",

  "@large": {
    gap: "10rem 12rem",
  },

  "@medium": {
    gridTemplateColumns: "repeat(2, 1fr)",

    gap: "11.8rem 13rem",
  },

  "@small": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
