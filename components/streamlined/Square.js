import { styled } from "styles/stitches.config";
import { motion } from "framer-motion";

export const Square = styled(motion.div, {
  position: "fixed",
  top: "calc(50% - 40rem)",
  left: "calc(50% - 40rem)",
  width: "80rem",
  height: "80rem",
  background: "transparent",
  border: "solid 4rem $secondary",

  "@large": {
    top: "calc(50% - 30rem)",
    left: "calc(50% - 30rem)",
    width: "60rem",
    height: "60rem",
    border: "solid 3rem $secondary",
  },

  "@medium": {
    top: "calc(50% - 25rem)",
    left: "calc(50% - 25rem)",
    width: "50rem",
    height: "50rem",
  },

  "@small": {
    top: "calc(50% - 15rem)",
    left: "calc(50% - 15rem)",
    width: "30rem",
    height: "30rem",
    border: "solid 2rem $secondary",
  },

  variants: {
    right: {
      true: {
        border: "none",
        borderRight: "solid 4rem $secondary",

        "@large": {
          borderRight: "solid 3rem $secondary",
        },

        "@small": {
          borderRight: "solid 2rem $secondary",
        },
      },
    },
  },
});
