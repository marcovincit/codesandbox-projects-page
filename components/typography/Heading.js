import { styled } from "styles/stitches.config";

export const Heading = styled("span", {
  color: "$title",
  fontFamily: "TWK Everett",
  fontSize: "9.6rem",
  fontWeight: 500,
  lineHeight: "100%",
  letterSpacing: "-0.05em",
  margin: 0,

  "@large": {
    fontSize: "7.2rem",
  },
  "@small": {
    fontSize: "4.8rem",
  },

  variants: {
    size: {
      // heading1
      1: {
        fontSize: "14.4rem",
        letterSpacing: "-0.075em",
        "@large": {
          fontSize: "9.6rem",
          letterSpacing: "-0.05em",
        },
        "@small": {
          fontSize: "6.4rem",
        },
      },

      // heading2
      2: {
        fontSize: "9.6rem",
        "@large": {
          fontSize: "7.2rem",
        },
        "@small": {
          fontSize: "4.8rem",
        },
      },

      // heading3
      3: {
        fontSize: "6.4rem",
        "@large": {
          fontSize: "4.8rem",
        },
        "@small": {
          fontSize: "3.6rem",
          lineHeight: "100%",
          letterSpacing: "-0.025em",
        },
      },

      // heading4
      4: {
        fontSize: "3.6rem",
        lineHeight: "100%",
        letterSpacing: "-0.025em",
        "@large": {
          fontSize: "2.4rem",
        },
      },

      // heading5
      5: {
        fontSize: "2.4rem",
        lineHeight: "120%",
        letterSpacing: "-0.025em",
        "@large": {
          fontSize: "1.8rem",
        },
      },

      // heading6
      6: { fontSize: "1.8rem", lineHeight: "120%", letterSpacing: "-0.025em" },
    },
  },
});
