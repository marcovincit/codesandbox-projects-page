import { styled } from "styles/stitches.config";

export const SubSection = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "3rem",
  willChange: "transform, opacity",

  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%,-50%)",
});
