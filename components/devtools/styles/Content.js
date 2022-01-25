import { styled } from "styles/stitches.config";

export const Content = styled("div", {
  width: "100%",
  height: "400vh",
  position: "relative",
  top: 0,
  zIndex: 100,

  marginTop: "-100vh",

  "@medium": {
    width: "100%",
    height: "auto",
    marginTop: 0,
  },
});
