import { styled } from "styles/stitches.config";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "3.8rem 4rem",

  mixBlendMode: "difference",

  position: "sticky",
  top: 0,
  zIndex: 9999,

  "@large": {
    padding: "2.8rem 3rem",
  },
  "@medium": {
    padding: "3.6rem 3.2rem",
  },
  "@small": {
    padding: "2.8rem 1.5rem",
  },
});
