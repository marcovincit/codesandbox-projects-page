import { styled } from "styles/stitches.config";

export const Container = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3rem",

  top: "-100%",

  "@large": {
    padding: "3rem",
  },
  "@medium": {
    padding: "3rem",
  },
  "@small": {
    padding: "3rem",
    gap: "3rem",
    flexDirection: "column",
    alignItems: "center",
  },
});
