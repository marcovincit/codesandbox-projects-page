import { styled } from "styles/stitches.config";
import { Display } from "components/typography";

export const Text = styled(Display, {
  color: "$title",
  whiteSpace: "nowrap",

  position: "fixed",
  top: "calc(50% - 2rem)",
  left: "0%",

  variants: {
    outline: {
      true: {
        WebkitTextStroke: "1px $colors-title",
        color: "transparent",
        background: "transparent",
      },
    },
  },
});
