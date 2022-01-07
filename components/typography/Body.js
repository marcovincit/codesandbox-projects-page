import { styled } from "styles/stitches.config";

export const Body = styled("span", {
  color: "$support",
  fontFamily: "Inter",
  fontSize: "1.8rem",
  fontWeight: 400,
  lineHeight: "140%",
  letterSpacing: "-0.0125em",
  margin: 0,

  "@small": {
    fontSize: "1.6rem",
  },

  variants: {
    size: {
      // body1
      1: {
        fontSize: "1.8rem",
        "@small": {
          fontSize: "1.6rem",
        },
      },

      // body2
      2: {
        fontSize: "1.6rem",
      },

      // body3
      3: {
        fontSize: "1.4rem",
      },
    },
  },
});
