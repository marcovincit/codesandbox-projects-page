import { styled } from "styles/stitches.config";

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@small": {
    maxWidth: "32rem",
  },
});
