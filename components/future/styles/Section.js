import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",
  willChange: "transform, opacity",
  position: "relative",
  zIndex: 0,
});
