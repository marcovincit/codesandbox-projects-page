import { styled } from "styles/stitches.config";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "3.8rem 24rem",

  "@large": {
    padding: "3rem 18rem",
  },
  "@medium": {
    padding: "3.7rem 9.6rem",
  },
  "@small": {
    padding: "3rem",
    gap: "3rem",
    flexDirection: "column",
    alignItems: "center",
  },
});
