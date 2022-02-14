import { styled } from "styles/stitches.config";

export const Sticky = styled("div", {
  width: "100%",
  position: "-webkit-sticky",
  position: "sticky",
  top: 0,
  left: 0,
  minHeight: "100vh",
  zIndex: 0,
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  pointerEvents: "none",

  "@medium": {
    display: "none",
  },
});
