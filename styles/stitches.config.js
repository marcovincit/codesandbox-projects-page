import { createStitches, createTheme } from "@stitches/react";

export const { getCssText, globalCss, styled, css } = createStitches({
  media: {
    small: "(max-width: 734px)",
    medium: "(max-width: 1068px)",
    large: "(max-width: 1441px)",
    xlarge: "(max-width: 1921px)",
  },
  theme: {
    colors: {
      primary: "#DCFF50",
      primary90: "#CEF144",
      secondary: "#7B61FF",
      blue: "#00B2FF",
      gray: "#DBDBDE",
      surface: "#151515",

      background: "#090909",
      title: "#F5F5F7",
      support: "rgba(255, 255, 255, 0.48)",
    },
  },
});

export const lightTheme = createTheme({
  colors: {
    primary: "#7B61FF",
    primary90: "#E6DEFF",
    secondary: "#DCFF50",

    background: "#FFFFFF",
    title: "#171618",
    support: "#454546",
  },
});
