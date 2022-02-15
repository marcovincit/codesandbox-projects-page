import { styled } from "styles/stitches.config";

export const Container = styled("div", {
  pointerEvents: "none",

  "&:after": {
    content: "",
    display: "block",

    width: "100%",
    height: "100%",

    position: "fixed",
    top: "0vh",
    left: 0,

    zIndex: 0,

    opacity: "var(--is-active)",

    willChange: "background,opacity",
    transition: "opacity 600ms",

    background:
      "radial-gradient(circle farthest-side at calc(var(--cursor-x) * 100%) calc(var(--cursor-y) * 100%), var(--colors-secondary) 0%, transparent 100%)",

    "@medium": {
      background:
        "radial-gradient(circle farthest-side at 300% 500%), var(--colors-secondary) 0%, transparent 100%)",
    },
  },
});
