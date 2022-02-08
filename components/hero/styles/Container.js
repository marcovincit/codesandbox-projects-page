import { styled } from "styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "18rem 3rem",

  width: "100%",
  height: "100%",

  position: "fixed",
  top: 0,
  left: 0,

  "@large": {
    padding: "13.5rem 3rem",
  },

  "@medium": {
    position: "relative",
    height: "auto",
    padding: "17rem 3rem ",
  },

  "@small": {
    padding: "13.5rem 3rem 10rem",
  },
});
