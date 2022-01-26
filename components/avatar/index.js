import { styled } from "styles/stitches.config";

export const Avatar = styled("img", {
  width: "3rem",
  height: "3rem",
  borderRadius: 9999,
  border: "solid $primary 2px",

  position: "fixed",
  top: "0",
  right: "0",
  zIndex: 9999,

  transform: "translateY(-20%)",

  margin: "3.8rem 4rem",

  "@large": {
    margin: "2.8rem 3rem",
  },
  "@medium": {
    margin: "3.6rem 3.2rem",
  },
  "@small": {
    margin: "2.8rem 1.5rem",
  },
});
