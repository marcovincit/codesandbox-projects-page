import { styled } from "styles/stitches.config";
import { Body } from "../typography";

export const Arrow = () => {
  return (
    <svg
      className="right-arrow"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 1.58496L6.17929 6.01425C6.21834 6.0533 6.21834 6.11662 6.17929 6.15567L1.75 10.585"
        stroke="#DCFF50"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CTA = styled(Body, {
  color: "$primary!important",
  fontWeight: 500,
  display: "flex",
  alignItems: "baseline",
  gap: "1rem",

  transition: "transform 1s",

  svg: {
    transition: "transform 1s",
  },

  path: {
    transition: "stroke .6s",
  },

  "&:hover": {
    transform: "scale(.98)",

    svg: {
      transform: "translateX(50%)",
    },

    path: {
      stroke: "$primary",
    },
  },
});
