import { styled, lightTheme } from "styles/stitches.config";

export const Svg = styled("svg", {
  width: "15rem",
  height: "15rem",

  "@small": {
    width: "10rem",
    height: "10rem",
  },
});

export function Lock() {
  return (
    <Svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 50.75V32C50 18.1929 61.1929 7 75 7C88.8071 7 100 18.1929 100 32V50.75V73"
        stroke="#171618"
        strokeWidth="8"
        strokeLinecap="round"
        style={{
          transform: "translateY(var(--lockY))",
        }}
      />
      <path
        d="M109.75 143.5H40.25C35.2794 143.5 31.25 139.471 31.25 134.5V83.75C31.25 78.7794 35.2794 74.75 40.25 74.75H109.75C114.721 74.75 118.75 78.7794 118.75 83.75V134.5C118.75 139.471 114.721 143.5 109.75 143.5Z"
        stroke="#171618"
        strokeWidth="8"
        strokeLinecap="round"
        fill="var(--colors-background)"
      />
    </Svg>
  );
}
