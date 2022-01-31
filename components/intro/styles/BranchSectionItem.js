import { styled } from "styles/stitches.config";

export const BranchSectionItem = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "4.2rem",

  padding: "4.5rem 0",

  "@large": {
    padding: "3.4rem 0",
  },

  "@medium": {
    gap: "2.6rem",
    padding: "0",
  },

  "@small": {
    padding: "0",
  },

  "::selection": {
    backgroundColor: "inherit",
  },
});
