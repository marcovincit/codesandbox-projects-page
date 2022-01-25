import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  pointerEvents: "none",
  zIndex: 0,
  position: "relative",
  height: "37.5vw",

  "@large": {
    height: "75vh",
  },

  "@medium": {
    height: "59.8rem",
  },

  "@small": {
    height: "47.3rem",
  },

  variants: {
    layer: {
      true: {
        position: "absolute",
        top: 0,
        left: 0,
      },
    },

    center: {
      true: {
        left: "50%",
        transform: "translateX(-50%)",
      },
    },

    left: {
      true: {
        left: "initial",
        right: 0,
      },
    },
  },
});
