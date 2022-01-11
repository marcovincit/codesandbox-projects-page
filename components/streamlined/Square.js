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

  variants: {
    right: {
      true: {
        border: "none",
        borderRight: "solid 4rem $secondary",
      },
    },
  },
});
