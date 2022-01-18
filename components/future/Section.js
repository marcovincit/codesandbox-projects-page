import { styled, lightTheme } from "styles/stitches.config";

export const Section = styled("section", {
  minHeight: "calc(100vh - 10rem)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",
  willChange: "transform",
});
