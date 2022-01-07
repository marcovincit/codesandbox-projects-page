import { createStitches, createTheme } from "@stitches/react";

export const { globalCss, styled, css } = createStitches({
  media: {
    small: "(max-width: 734px)",
    medium: "(max-width: 1068px)",
    large: "(max-width: 1441px)",
    xlarge: "(max-width: 1921px)",
  },
  theme: {
    colors: {
      primary: "#DCFF50",
      secondary: "#7B61FF",
      gray: "#DBDBDE",
      surface: "#151515",

      background: "#090909",
      title: "#F5F5F7",
      support: "#7F7F80",
    },
  },
});

export const lightTheme = createTheme({
  colors: {
    background: "#FFFFFF",
    title: "#171618",
    support: "#454546",
  },
});
