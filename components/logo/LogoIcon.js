import { styled } from "styles/stitches.config";

export const SVG = styled("svg", {
  width: "9.2rem",
  height: "9.2rem",
  fill: "none",

  "@large": { width: "7rem", height: "7rem" },
});

export const LogoIcon = (props) => (
  <SVG viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      style={{
        willChange: "stroke-dasharray",
        strokeLinecap: "square",
        strokeDasharray: 340,
        strokeDashoffset: "var(--progress)",
      }}
      opacity="0.8"
      x="5"
      y="5"
      width="82"
      height="82"
      stroke="white"
      stroke-width="10"
    />
  </SVG>
);
