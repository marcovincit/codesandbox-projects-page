import { styled } from "styles/stitches.config";

export const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "18rem 3rem",
  height: "100vh",

  "@large": {
    padding: "13.5rem 3rem",
  },

  "@medium": {
    height: "auto",
    padding: "17rem 3rem ",
  },

  "@small": {
    padding: "13.5rem 3rem 10rem",
  },
});
