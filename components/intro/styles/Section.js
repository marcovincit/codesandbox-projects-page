import { styled } from "styles/stitches.config";

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  padding: "24rem",

  "@large": {
    padding: "18rem",
  },

  "@medium": {
    padding: "8.5rem 9.6rem",
    justifyContent: "flex-start",
  },

  "@small": {
    padding: "6.2rem 3.2rem",
  },

  variants: {
    side: {
      left: {
        paddingLeft: "128rem",
        justifyContent: "flex-end",

        "@large": {
          paddingLeft: "96rem",
        },

        "@medium": {
          padding: "8.5rem 9.6rem",
        },

        "@small": {
          padding: "6.2rem 3.2rem",
        },
      },
    },
  },
});
