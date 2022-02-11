import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",

  position: "relative",
  zIndex: 0,

  clip: "rect(0, auto, auto, 0)",
  clipPath: "inset(0 0 0 0)",
});
