import { styled } from "styles/stitches.config";

export const SubSection = styled("div", {
  minHeight: "100vh",
  display: "flex",
  gap: "16rem",
  flexBasis: 0,
  padding: "13.5rem 0",

  "@medium": {
    minHeight: "auto",
    flexDirection: "column!important",
    gap: "8.5rem",
    padding: "8.5rem 9.5rem",
  },

  "@small": {
    padding: "6.7rem 4.5rem",
  },

  variants: {
    left: {
      true: {
        flexDirection: "row-reverse",
      },
    },
    hideMobile: {
      true: {
        "@medium": {
          display: "none",
        },
      },
    },
  },
});
