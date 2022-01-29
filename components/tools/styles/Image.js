import { styled } from "styles/stitches.config";
import { motion } from "framer-motion";

export const Image = styled("img", {
  width: "auto",
  height: "66.8vh",
  maxHeight: "72rem",

  "@large": {
    height: "75vh",
  },

  "@medium": {
    height: "58.4vh",
    position: "relative",
  },

  "@small": {
    height: "58.2vh",
  },
});
