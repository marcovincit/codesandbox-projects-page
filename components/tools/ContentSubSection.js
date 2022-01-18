import { styled } from "styles/stitches.config";

export const ContentSubSection = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "9rem 8rem 9rem 32rem",

  "@large": {
    padding: "6.7rem 6rem 6.7rem 24rem",
  },

  "@medium": {
    padding: "0!important",
  },

  variants: {
    left: {
      true: {
        padding: "9rem 32rem 9rem 8rem",

        "@large": {
          padding: "6.7rem 24rem 6.7rem 6rem",
        },
      },
    },
  },
});
