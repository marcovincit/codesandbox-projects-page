import { styled } from "styles/stitches.config";

export const BranchSection = styled("div", {
  minHeight: "100vh",
  padding: "0 8rem",

  display: "flex",
  gap: "8rem",
  flexBasis: 0,
  alignItems: "stretch",
  justifyContent: "center",

  position: "sticky",
  top: 0,

  "@large": {
    gap: "6rem",
    padding: "0 6rem",
  },

  "@medium": {
    position: "initial",
    flexDirection: "column",
    gap: "11rem",
    padding: "0 9.6rem",
    opacity: "1!important",
  },

  "@small": {
    padding: "0 3.2rem",
    gap: "12.6rem",
  },
});
