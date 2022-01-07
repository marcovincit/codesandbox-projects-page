import { styled } from "styles/stitches.config";

import { Body } from "../typography";
import { Arrow } from "../icons/Arrow";

// Arrow.toString = () => ".right-arrow";

export const CTA = styled(Body, {
  color: "$primary",
  fontWeight: 500,

  [`& ${Arrow}`]: {
    display: "inline-block",
    marginLeft: "5px",
    width: "16px",
  },
});
