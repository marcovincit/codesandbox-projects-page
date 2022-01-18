import { styled } from "styles/stitches.config";
import { motion } from "framer-motion";

export const SubSection = styled(motion.div, {
  minHeight: "100vh",
  willChange: "opacity",
});
