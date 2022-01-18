import { styled, lightTheme } from "styles/stitches.config";

export const HeadlineSection = styled("section", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "6.7rem 3rem",

  "@medium": {
    minHeight: "auto",
  },
});
