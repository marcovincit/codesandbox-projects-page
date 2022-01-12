import { styled } from "styles/stitches.config";

export const ContentSubSection = styled("div", {
  display: "grid",
  flexDirection: "column",
  gap: "3rem",
  maxWidth: "50rem",

  "@large": {
    maxWidth: "34rem",
  },
});
