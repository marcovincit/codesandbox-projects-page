import { styled } from "styles/stitches.config";
import { motion } from "framer-motion";

export const Phone = styled("img", {
  width: "31.2rem",
  height: "auto",

  position: "absolute",
  right: 0,
  bottom: 0,

  "@large": {
    width: "23.3rem",
  },

  "@medium": {
    right: "auto",
    left: 0,
  },

  "@small": {
    width: "18.3rem",
  },
});
