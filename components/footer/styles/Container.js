import { styled } from "styles/stitches.config";

export const Container = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3.8rem 24rem",

  top: "-100%",

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
