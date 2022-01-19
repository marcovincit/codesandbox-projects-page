import { styled } from "styles/stitches.config";

export const FakeSection = styled("div", {
  minHeight: "100vh",

  variants: {
    hideMobile: {
      true: {
        "@medium": {
          display: "none",
        },
      },
    },
  },
});
