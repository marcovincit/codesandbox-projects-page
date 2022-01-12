import { styled } from "styles/stitches.config";
import { motion } from "framer-motion";

export const Mask = styled(motion.div, {
  top: 0,
  left: "calc(50% + 28rem)",
  width: "100%",
  height: "100%",
  background: "$background",

  position: "fixed",

  "@medium": {
    left: "calc(50% + 23rem)",
  },

  "@small": {
    left: "calc(50% + 13.5rem)",
  },
});
