import { styled } from "styles/stitches.config";

export const Image = styled("img", {
  width: "auto",
  height: "66.8vh",
  maxHeight: "72rem",

  pointerEvents: "none",
  zIndex: 0,
  position: "relative",

  opacity: "var(--image-state)",
  transform: "translateY(calc(var(--image-state)* -2%))",

  transition: "opacity 150ms ease, transform 300ms ease",

  "@large": {
    height: "75vh",
  },

  "@medium": {
    height: "58.4vh",
  },

  "@small": {
    height: "58.2vh",
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
