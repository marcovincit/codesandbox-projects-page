import { styled } from "styles/stitches.config";

export const Stage = styled("div", {
  width: "100vw",
  height: "100vh",

  pointerEvents: "none",

  position: "fixed",
  top: 0,
  left: 0,

  zIndex: 9999,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  lineHeight: 0,

  "@medium": {
    display: "none",
  },
});
