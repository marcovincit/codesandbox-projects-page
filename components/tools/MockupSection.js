import { styled } from "styles/stitches.config";

export const MockupSection = styled("div", {
  width: "50%",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  willChange: "transform",
  pointerEvents: "none",
  position: "relative",

  "@medium": {
    width: "100%",
    overflow: "initial",
  },

  display: "flex",

  variants: {
    hideDesktop: {
      true: {
        display: "none",
        "@medium": {
          display: "initial",
        },
      },
    },

    left: {
      true: {
        display: "flex",
        justifyContent: "flex-end",
      },
    },
  },
});
