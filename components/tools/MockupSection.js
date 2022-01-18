import { styled } from "styles/stitches.config";

export const MockupSection = styled("div", {
  width: "50%",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  "@medium": {
    width: "100%",
    overflow: "initial",
  },

  display: "flex",

  variants: {
    left: {
      true: {
        justifyContent: "flex-end",
      },
    },

    hideDesktop: {
      true: {
        display: "none",
        "@medium": {
          display: "initial",
        },
      },
    },
  },
});
