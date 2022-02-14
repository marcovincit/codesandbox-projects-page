import { styled } from "styles/stitches.config";

export const Logo = styled("h1", {
  display: "block",
  width: "33.6rem",
  height: "2.8rem",
  margin: 0,
  padding: 0,
  backgroundImage: `url("/images/logo.svg")`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",

  ">span": {
    position: "absolute",
    clip: "rect(1px, 1px, 1px, 1px)",
    clipPath: "inset(0px 0px 99.9% 99.9%)",
    overflow: "hidden",
    height: 1,
    width: 1,
    padding: 0,
    border: 0,
    top: "50%",
  },

  "@medium": {
    width: "15.3rem",
    backgroundImage: `url("/images/logo-small.svg")`,
  },
});
