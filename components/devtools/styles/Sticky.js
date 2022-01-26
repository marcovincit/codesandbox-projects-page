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

  // "&:after": {
  //   content: "",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,

  //   opacity: "var(--shadow-opacity)",

  //   width: "50%",
  //   height: "100%",

  //   background: "linear-gradient(90deg, rgba(9,9,9,1) 20%, rgba(9,9,9,0) 100%)",

  //   "@medium": {
  //     display: "none",
  //   },
  // },

  "@medium": {
    display: "none",
  },
});
