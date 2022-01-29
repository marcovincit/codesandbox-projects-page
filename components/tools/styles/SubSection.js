import { styled } from "styles/stitches.config";

export const SubSection = styled("div", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  gap: "16rem",
  flexBasis: 0,
  top: 0,
  width: "100%",
  overflow: "hidden",

  position: "sticky",

  "@medium": {
    height: "auto",
    flexDirection: "column-reverse!important",
    gap: "8.5rem",
    padding: "8.5rem 9.5rem",
    position: "initial",
  },

  "@small": {
    padding: "10.2rem 3.2rem",
    gap: "6.8rem",
  },

  variants: {
    left: {
      true: {
        flexDirection: "row-reverse",
      },
    },
    hideMobile: {
      true: {
        pointerEvents: "none",
        "@medium": {
          display: "none",
        },
      },
    },
  },
});
