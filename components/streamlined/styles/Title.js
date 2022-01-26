import { styled } from "styles/stitches.config";
import { Heading } from "components/typography";

export const Title = styled(Heading, {
  textAlign: "center",
  position: "fixed",
  top: "50%",
  left: "50%",
  willChange: "transform",
});
