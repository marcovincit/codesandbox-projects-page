import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "@font-face": {
    fontFamily: "TWK Everett",
    fontWeight: 500,
    src: 'url("/fonts/TWKEverett-Medium-web.woff2") format("woff2"), url("/fonts/TWKEverett-Medium-web.woff") format("woff"),url("/fonts/TWKEverett-Medium-web.ttf") format("ttf")',
  },

  "html, body": {
    background: "$background",

    color: "$support",
    padding: 0,
    margin: 0,
    "font-family": "Inter, TWK Everett, Helvetica Neue, sans-serif",
    "-webkit-font-smoothing": "antialiased",
    overscrollBehavior: "none",
  },

  html: {
    fontSize: "calc(100vw / 1921 * 10)",
    "@large": {
      fontSize: "calc(100vw / 1440 * 10)",
    },
    "@medium": {
      fontSize: "10px",
    },
    "@small": {
      fontSize: "10px",
    },
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "*": {
    boxSizing: "border-box",
  },
});
