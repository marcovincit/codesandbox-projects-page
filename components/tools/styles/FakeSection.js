import { styled } from "styles/stitches.config";

export const FakeSection = styled("div", {
  width: "100%",
  height: "200vh",

  "@medium": {
    display: "none",
  },
});
